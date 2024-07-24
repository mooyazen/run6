function mainScene(self){
    /** 开奖号码 */
    let numVec;
    let speedIndex;
    let timeArr;
    let disArr;
    let disIndexVec;
    let cnt;
    let resultMc;
    /** 路程的分段数：6 */
    let LEN = 6;
    /** 每一段的间隔时间：5秒 */
    let GAP_TIME = 5;
    /** 标志某一蜗牛是否过终点 */
    let flagVec;
    let endNum;
    let tween = createjs.Tween;
    let setIntervalId;

    self.visible = false;
    setTimeout(init, 100);

    /** 设置开奖结果号码 */
    function setResultNumber(){
        //window.resultNumber由启动游戏的外层代码设置
        if(window.resultNumber){
            numVec = window.resultNumber;
        }else{
            numVec = [0,1,2,3,4,5];
            numVec.sort(() => Math.random() - 0.5);
        }
    }

    function init() {
        if(window.parent) window.parent.postMessage({action:'gameInitComplete'})
        self.visible = true;
        resultMc = self["resultMc"];
        playLihua(false);
        stopBg(true);
        stopOniu(true);
        resultMc.visible = false;

        //播放声音
        //playSound('BgSound', -1);
        //启动声音
        playSound('StartSound');
        //启动喷烟;
        setTimeout(()=>{
            for(let i=0; i<6; i++){
                self["oniu"+i].gotoAndStop(4);
            }
        }, 250);
        //启动跑声音
        setTimeout(()=>{ playSound('WalkSound', -1); }, 2500);
        //倒计时
        setTimeout(self["downMc"].gotoAndPlay(self["downMc"].currentFrame), 1000);

        setTimeout(() => { initUI(); }, 4100);
    }

    function initUI() {
        setResultNumber();
        let obj = getArr(numVec);
        disArr = obj.disArr;
        timeArr = obj.timeArr;

        cnt = 0;
        endNum = 0;
        speedIndex = 0;
        disIndexVec = [0, 0, 0, 0, 0, 0];
        flagVec = [0, 0, 0, 0, 0, 0];
        initMoveDistance();
        stopBg(false);
        resultMc.visible = true;
        tween.get(self["saidao0"]).to({x:-330}, 600, createjs.Ease.linear)
    }

    function initMoveDistance(){
        let curDis;
        let time;
        for (let i=0; i<6; i++) {
            curDis = disArr[i][0];
            time = timeArr[i][0];
            let index = i;
            tween.get(self["oniu"+i]).to({x:100+curDis}, time*1000).call(()=>{completeHandler(index)});
            setSpeed(self["oniu"+i], curDis, time, i);
        }
        //不断的更新排名
        setIntervalId = setInterval(updateHandler, 30);
    }

    function setMoveDistance(n) {
        let curDis = disArr[n][disIndexVec[n]];
        let time = timeArr[n][disIndexVec[n]];
        tween.get(self["oniu"+n]).to({x:100+curDis}, time*1000).call(()=>{completeHandler(n)});
        setSpeed(self["oniu"+n], curDis, time, n);
    }

    function completeHandler(n) {
        disIndexVec[n]++;
        if (disIndexVec[n] < LEN) {
            setMoveDistance(n);
        }
        //假如所有的蜗牛都到了最后一段，就进入冲刺
        for (let i=0; i<6; i++) {
            if (disIndexVec[i] != 6)  return;
        }
        tween.get(self["lihua"]).to({x:620}, 600, createjs.Ease.linear)
        //冲刺阶段;
        sprint1();
    }

    /** 根据速度设置蜗牛对应的特效 */
    function setSpeed(oniu, dis, t, n) {
        let speed = dis / t;
        if (speed > 50) {
            if (oniu.currentFrame != 3) {
                oniu.light.gotoAndPlay("show");
                if (t > 4.5) {
                    playSound('Up1Sound');
                } else {
                    playSound('UpSound');
                }
            }
            oniu.gotoAndStop(2);
        } else if (speed > 0) {
            if (oniu.currentFrame == 3) {
                oniu.light.gotoAndPlay("hide");
            }
            oniu.gotoAndStop(1);
        } else {
            if (oniu.currentFrame == 3) {
                oniu.light.gotoAndPlay("hide");
            }
            oniu.gotoAndStop(0);
            
            //减速播放火花
            if(disIndexVec[n] > 0){
                playSound('DownSound');
                oniu.hh.gotoAndPlay(1);
            }
        }
        oniu.role.gotoAndPlay(oniu.role.currentFrame);
    }

    /** 更新赛跑中的排名 */
    function updateHandler() {
        let arr = [];
        for (let i=0; i<6; i++) {
            arr.push({index:i, value:self["oniu"+i].x});
        }
        arr.sort((a, b)=>{ return b.value - a.value; })
        for (let i=0; i<6; i++) {
            self["resultMc"]["n" + i].gotoAndStop(arr[i].index);
        }
    }

    /** 冲刺阶段1 */
    function sprint1() {
        let mc = self["oniu" + numVec[0]];
        if (mc.currentFrame != 2) {
            mc.gotoAndStop(2);
            mc.light.gotoAndPlay("show");
        }

        for (let i=0; i<6; i++) {
            mc = self["oniu" + numVec[i]];
            let n = (650 - mc.x)/1000;
            let time = (n+0.3)*1000;
            if(i==0){
                tween.get(mc).to({x:650}, time, createjs.Ease.linear).call(sprintCompleteHandler1)
            }else{
                tween.get(mc).to({x:650}, time, createjs.Ease.linear)
            }
        }
    }

    function sprintCompleteHandler1() {
        clearInterval(setIntervalId)
        createjs.Sound.stop();
        stopBg(true);
        let resultNumber = self["resultNumber"];
        resultNumber.setData(numVec);
        resultNumber.gotoAndPlay(resultNumber.currentFrame);
        for (let i=0; i<6; i++) {
            self["oniu" + i].role.stop();
            tween.removeTweens(self["oniu"+i])
        }
        setTimeout(sprint2, 2000);
    }

    /** 冲刺阶段2 */
    function sprint2() {
        tween.get(self["lihua"]).to({x:350}, 600, createjs.Ease.linear)
        let arr = [1400,1300,1200,1000,950,900];
        for (let i=0; i<6; i++) {
            if (i==0) {
                tween.get(self["oniu"+numVec[i]]).to({x:arr[i]}, 300, createjs.Ease.linear).call(sprintCompleteHandler2)
            } else {
                tween.get(self["oniu"+numVec[i]]).to({x:arr[i]}, 300, createjs.Ease.linear)
            }
        }
    }

    function sprintCompleteHandler2() {
        setTimeout(()=>{
            playSound('HappySound');
            playLihua(true);
        }, 900);
        stopOniu(true);
        finishGame();
    }

    function finishGame() {
        self["resultNumber"].gotoAndPlay(self["resultNumber"].currentFrame);
        for (let i=0; i<6; i++) {
            self["oniu" + i].gotoAndStop(5);
        }
        if(window.parent) window.parent.postMessage({action:'gameOver'})
    }

    /** 停止背景动画 */
    function stopBg(b) {
        for (let i=0; i<5; i++) {
            if (b == true) {
                self["bg" + i].stop();
            } else {
                self["bg" + i].gotoAndPlay(self["bg" + i].currentFrame);
            }
        }
        if (b == true) {
            self["bg" + 3].mc.stop();
        } else {
            self["bg" + 3].mc.gotoAndPlay(self["bg" + 3].mc.currentFrame);;
        }
    }

    /** 停止蜗牛动画 */
    function stopOniu(b, n=2) {
        for (let i=0; i<6; i++) {
            if (b == true) {
                self["oniu" + i].role.gotoAndStop(0);
                self["oniu" + i].gotoAndStop(3);
            } else {
                self["oniu" + i].gotoAndPlay(n-1);
                self["oniu" + i].role.gotoAndPlay(self["oniu" + i].currentFrame);
            }
        }
    }

    /** 是否显示礼花 */
    function playLihua(b) {
        if (b == true) {
            self["lihua"].fire.gotoAndPlay(self["lihua"].fire.currentFrame);
            self["lihua"].flower.gotoAndPlay(self["lihua"].flower.currentFrame);
            self["lihua"].fire.visible = true;
            self["lihua"].flower.visible = true;
        } else {
            self["lihua"].fire.gotoAndStop(0);
            self["lihua"].flower.gotoAndStop(0);
            self["lihua"].fire.visible = false;
            self["lihua"].flower.visible = false;
        }
    }

    /** 取得路程的分段数组 */
    function getArr(vec) {
        let obj = getRandomArr(vec);
        while (obj.objArr[0].value<380) {
            obj = getRandomArr(vec);
        }
        return obj;
    }

    function getRandomArr(vec){
        let aArr;
        let aaArr = [];
        let objArr = [];
        let n;
        let tArr;
        let ttArr = [];
        let t;
        let tt;
        for (let i=0; i<6; i++) {
            aArr = [];
            tArr = [];
            t = 0;
            tt = 0;
            for (let j=0; j<LEN; j++) {
                t = 3 + Math.random() * 3;
                tArr.push(t);
                tt +=  t;
                n = 400 - parseInt(Math.random() * 500);
                aArr.push(n);
            }
            for (let j=0; j<LEN; j++) {
                tArr[j] = (tArr[j]/tt)*(GAP_TIME*LEN);
            }
            objArr.push({index:i, value:n});
            aaArr.push(aArr);
            ttArr.push(tArr);
        }

        //对象的数组降序排序
        objArr.sort((a, b)=>{ return b.value - a.value; })
        //objArr = objArr.sortOn("value",Array.DESCENDING | Array.NUMERIC);

        let disArr = [null,null,null,null,null,null];
        let timeArr = [null,null,null,null,null,null];
        for (let i=0; i<6; i++) {
            disArr[vec[i]] = aaArr[objArr[i].index];
            timeArr[vec[i]] = ttArr[objArr[i].index];
        }
        return {objArr:objArr, disArr:disArr, timeArr:timeArr};
    }
}