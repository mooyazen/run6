<template>
  <div id='app'>
    <iframe id="homeFrame" src="home/index.html" frameborder="0"></iframe>
    <div id="gameHolder" v-show="isGameShow">
      <div id="gameFrameHolder">
        <div id="gameLoading" v-if="isGameLoadingShow"></div>
        <iframe id="gameFrame" src="" frameborder="0"></iframe>
      </div>
      <div id="gameCloseBtn" @click="closeGame()"></div>
    </div>
  </div>
</template>

<script>
import {
  result,
  results,
  message,
  spawn,
  monitor,
  unmonitor,
  dryrun,
  connect,
  createDataItemSigner
} from '@permaweb/aoconnect';

export default {
  name: 'App',
  components: { },
  data(){
    return {
      isGameLoadingShow:true,
      isGameShow: false,
      processId: 'u9J_qF48jJUN2io0qsmnQBYxbAZtBXhKSlKGYDy1oTY',//'2CdOZSUvPQvjFahMY8kqMt8knfmSt82GPY_Ifrk6WCg',
      walletAddr: '',
      hasWallet: true,
      connectAO: null,
      curRound:-1,
      curTime:-1,
      curPlayer:-1
    };
  },
  mounted(){
    //侦听大厅或游戏中发出的消息
    window.addEventListener('message', e=>{
      if(!e.data || !e.data.action) return;
      let action = e.data.action;
      if(action == 'homeInitComplete'){
        this.init();
      }
      else if(action == 'cashIn'){
      }
      else if(action == 'cashOut'){
        this.getLastRacingInfo();
      }
      else if(action == 'bet'){
        this.bet(e.data.amount, e.data.number);
      }
      else if(action == 'startGame'){
        this.startGame();
        this.sendMsgToHome({action:'startGame'})
      }
      else if(action == 'gameInitComplete'){
        this.isGameLoadingShow = false;
      }
      else if(action == 'gameOver'){
        console.log('gameOver');
      }
    })
    window.addEventListener('arweaveWalletLoaded', async ()=> {});
  },
  methods:{
    /** 初始化连接钱包，并把钱包地址传给大厅页 */
    async init(){
      try{
        await window.arweaveWallet.connect(['ACCESS_ADDRESS','ACCESS_ALL_ADDRESSES','SIGNATURE','SIGN_TRANSACTION']);
        this.walletAddr = await window.arweaveWallet.getActiveAddress();
      }catch(err){
        this.hasWallet = false;
        this.sendMsgToHome({action:'alert', name:'installArConnect'})
      }
      
      this.connectAOS();
      this.getGameConfig();
      if(this.hasWallet) this.getGameBalance();
      this.getRacingInfo();
    },

    /** 打开开奖界面 */
    startGame(round, numbers){
      if(!numbers || numbers.length == 0) numbers=[3, 5, 4, 1, 0, 2];
      this.isGameShow = true;
      this.isGameLoadingShow = true;
      let frame = document.getElementById('gameFrame');
      frame.src = 'game/index.html';
      setTimeout(()=>{
        frame.contentWindow.round = round;
        frame.contentWindow.resultNumber = numbers;
      }, 1000)
    },

    /** 连接AO */
    async connectAOS(){
      this.connectAO = connect({
        MU_URL: 'https://mu.ao-testnet.xyz',
        CU_URL: 'https://cu.ao-testnet.xyz',
        GATEWAY_URL: 'https://arweave.net',
      });
    },

    /** 根据消息ID，获取对应的消息内容。
     * message发送消息是异步的，会先返回一个msgId，在用msgId去获取内容 */
    async getResult(msgId){
      let resultsOut = await result({
        process: this.processId,
        message: msgId,
      });
      return resultsOut;
    },

    /** 下注 */
    async bet(amount, number){
      await message({
        process: this.processId,
        tags: [ {name:'Action', value:'Bet'}, {name:'HorseNumber', value:''+number}, {name:'Amount', value:''+amount*1000000000000}],
        signer: createDataItemSigner(window.arweaveWallet),
        data: '',
      }).then(async (msgId)=>{
        console.log('msgId = '+msgId);
        let result = await this.getResult(msgId);
        console.log(result.Error)
        if(result.Error){
          this.sendMsgToHome({action:'betFail'})
        }
      }).catch((err)=>{
        console.error(err)
      });
    },

    /** 获取比赛信息 */
    async getRacingInfo(){
      console.log('getRacingInfo')
      const { dryrun } = this.connectAO;
      let result = await dryrun({ 
        process: this.processId, 
        tags: [{name: 'Action', value: 'GetRacingInfo'}], 
      });
      let msg = JSON.parse(result.Messages[0].Data);
      if(msg.Code != 0) return;
      let obj = msg.Data;
      if(this.curRound != obj.Round){
        //假如轮数增加，表示开奖
        if(this.curRound != -1){
          this.curRound = obj.Round;
          this.curTime = obj.Timestamp;
          this.getLastRacingInfo();
        }else{
          this.curRound = obj.Round;
        }
      } 
      if(this.curPlayer != obj.PlayerInfos.length){
        this.curPlayer = obj.PlayerInfos.length;
        this.sendMsgToHome({action:'setRacingInfo', data:obj})
        console.log(obj)
      }
      setTimeout(this.getRacingInfo, 2000);
    },

    /** 获取上一期的比赛信息 */
    async getLastRacingInfo(){
      console.log(this.curRound-1)
      const { dryrun } = this.connectAO;
      let result = await dryrun({
        process: this.processId, 
        tags: [{name:'Action', value:'GetRacingInfo'}, {name:'Round', value:''+(this.curRound-1)}], 
      });
      let msg = JSON.parse(result.Messages[0].Data);
      if(msg.Code != 0) return;
      let obj = msg.Data;
      if(this.curTime - obj.RacingTimestamp < 30*1000){
        let arr = obj.HorseNumbers;
        for(let i=0; i<arr.length; i++){
          arr[i] = arr[i]-1;
        }
        console.log(obj.Round, arr)
        this.startGame(obj.Round, arr);
      }
      console.log(obj)
    },

    /** 获取游戏配置信息 */
    async getGameConfig(){
      const { dryrun } = this.connectAO;
      let result = await dryrun({ 
        process: this.processId, 
        tags: [{name: 'Action', value: 'GetRoomInfo'}], 
      });
      let obj = JSON.parse(result['Messages'][0]['Data']);
      this.curRound = obj.Data.Round;
      this.sendMsgToHome({action:'setRoomInfo',  maxPlayer:obj.Data.MaxPlayerCount});
    },

    /** 获取游戏帐户余额 */
    async getGameBalance(){
      const { dryrun } = this.connectAO;
      let result = await dryrun({ 
        process: this.processId, 
        tags: [
          {name: 'Action', value: 'GetWalletBalance'},
          {name: 'WalletAddress', value: this.walletAddr}
        ], 
      });
      let obj = JSON.parse(result['Messages'][0]['Data'])
      let n = parseFloat(obj['Data'])
      n = n/1000000000000;
      this.sendMsgToHome({action:'setUserInfo', addr:this.walletAddr, ar:n});
    },

    /** 发送消息到大厅页 */
    sendMsgToHome(msg){
      document.getElementById('homeFrame').contentWindow.sendMessage(msg)
    },

    /** 关闭游戏界面 */
    closeGame(){
      this.isGameShow = false;
      document.getElementById('gameFrame').src = 'about:blank';
    },
  }
}
</script>

<style>
body{
  margin: 0px;
  padding: 0px;
}
#app {
  width: 100vw;
  height: 100vh;
  background-color: #0745a7;
}
#homeFrame{
  position:fixed; 
  float: left; 
  left: 0px; 
  top: 0px;
  width: 100%;
  height: 100%;
}
#gameHolder{
  position:fixed; 
  left: 0px; 
  top: 0px;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: rgba(7,69,167, 0.8);
}
#gameFrameHolder{
  position: relative;
  width: 1024px;
  height: 616px;
  border: solid 10px rgba(255,255,255, 0.6);
  border-radius: 10px;
}
#gameLoading{
  position: absolute;
  float: left;
  left: 410px;
  top: 205px;
  width: 209px;
  height: 212px;
  background-image: url('@/assets/gameLoading.gif');
}
#gameFrame{
  width: 100%;
  height: 100%;
}
#gameCloseBtn{
  position: absolute;
  float:right;
  top: 10px;
  right: 10px;
  width: 60px;
  height: 60px;
  border-radius: 50px;
  background-image:url('@/assets/closeBtnPic.png');
  background-size: 60px 60px;
  cursor: pointer;
}
</style>
