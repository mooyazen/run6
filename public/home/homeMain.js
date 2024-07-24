function mainScene(self){
    const tween = createjs.Tween;
    /** 金币的初始化位置 */
    let coinsInitXY = [];
    /** 金币停放在卡片上的位置 */
    let coinsXY = [{x:550, y:400}, {x:715, y:400}, {x:887, y:400}, {x:1059, y:400}, {x:1227, y:400}, {x:1396, y:400}];
    /** 当前下注的号码 */
    let betNumber = 0;
    /** 最大玩家数 */
    let maxPlayer;

    //提供一个Fame中的全局方法，以便Frame外通过contentWindow调用
    window.sendMessage = (obj)=>{
        //console.log(obj)
        let action = obj.action;
        if(action == 'betFail'){
            betFail();
        }
        else if(action == 'startGame'){
            startGame();
        }
        else if(action == 'setUserInfo'){
            self['userInfo']['addrTf'].text = formatWalletAddr(obj.addr);
            self['userInfo']['arTf'].text = 'AR:'+obj.ar;
        }
        else if(action == 'setRoomInfo'){
            maxPlayer = obj.maxPlayer;
        }
        else if(action == 'setRacingInfo'){
            setBetList(obj.data)
            if(maxPlayer){
                setNumText(self['curPlayer'], obj.data.PlayerInfos.length+'/'+maxPlayer, 1);
            }
        }
        else if(action == 'alert'){
            if(obj.name == 'installArConnect'){
               let mc = createMC('AlertInstallArConnect');
               mc.cancelBtn.on('click', ()=>{self.removeChild(mc)});
               mc.installBtn.on('click', ()=>{
                window.open('https://chromewebstore.google.com/detail/arconnect/einnioafmpimabjcddiinlhmijaionap', '_blank');
               })
               self.addChild(mc);
            }else if(obj.name == 'baseTip'){
                showTip(obj.msg);
            }
        }
    }

    init();
    function init(){
        //通知父级，大厅页面初始化完成
        if(window.parent) window.parent.postMessage({action:'homeInitComplete'})
        enablecMc(self['submitBtn'], false);
        self['submitBtn'].on('click', ()=>{
            submitBet();
            window.parent.postMessage({action:'bet', amount:0.001, number:betNumber})
        })
        self['historyBtn'].on('click', ()=>{
            window.parent.postMessage({action:'startGame'})
        })
        self['userInfo']['cashIn'].on('click', ()=>{
            window.parent.postMessage({action:'cashIn'})
        })
        self['userInfo']['cashOut'].on('click', ()=>{
            window.parent.postMessage({action:'cashOut'})
        })

        for(let i=0; i<1; i++){
            let coins = self['coins'+i];
            coins.cursor = 'pointer'
            coinsInitXY.push({x:coins.x, y:coins.y});
            coins.addEventListener('dragEnd', e=>{
                let coins = e.target;
                for(let i=0; i<6; i++){
                    let card = self['card'+i];
                    let b = hitTestObj(coins, card)
                    if(b){
                        betNumber = (i+1);
                        coins.x = coinsXY[i].x;
                        coins.y = coinsXY[i].y;
                        coins.scaleX = 0.6;
                        coins.scaleY = 0.6;
                        enablecMc(self['submitBtn'], true);
                        return;
                    }
                }
                springback(coins);
            })
            dragMC(coins)
        }

        setNumText(self['curPlayer'], '0/0', 1);
        setNumText(self['winAmount']['tf'], '0.005');
        clearBetList();
    }

    /** 提交下注时屏蔽点击 */
    function submitBet(){
        enablecMc(self['submitBtn'], false);
        enablecMc(self['coins0'], false, false);
    }

    /** 下注失败后恢复可点击 */
    function betFail(){
        enablecMc(self['submitBtn'], true);
        enablecMc(self['coins0'], true);
    }

    /** 游戏开始时，恢复金币的位置 */
    function startGame(){
        let coins = self['coins0'];
        coins.x = coinsXY[0].x;
        coins.y = coinsXY[0].y;
        coins.scaleX = 1;
        coins.scaleY = 1;
    }

    /** 设置投注列表 */
    function setBetList(obj){
        let list = self['betList'];
        setNumText(list['round'], obj.Round);
        /** 每一张卡片上下注的数目 */
        let cardBet = [0, 0, 0, 0, 0, 0];
        let arr = obj.PlayerInfos;
        for(let i=0; i<12; i++){
            if(arr[i]){
                let betAmount = parseFloat(arr[i].BetAmountString)/1000000000000;
                list['item'+i].visible = true;
                list['item'+i]['noTf'].text = ''+(i+1);
                list['item'+i]['addrTf'].text = formatWalletAddr(arr[i].Player);
                list['item'+i]['betTf'].text = betAmount;
                let n = arr[i].HorseNumber-1;
                list['item'+i]['numMc'].gotoAndStop(n);
                cardBet[n] += betAmount
            }else{
                list['item'+i].visible = false;
            }
        }
        for(let i=0; i<cardBet.length; i++){
            self['card'+i].amountTf.text = cardBet[i];
        }
    }

    function clearBetList(){
        let list = self['betList'];
        setNumText(list['round'], '');
        for(let i=0; i<12; i++){
            list['item'+i].visible = false;
        }
    }

    /** 回弹金币到初始位置 */
    function springback(coins){
        enablecMc(self['submitBtn'], false);
        let n = parseInt(coins.name.charAt(5));
        let o = coinsInitXY[n];
        tween.get(coins).to({x:o.x, y:o.y, scaleX:1, scaleY:1}, 500, createjs.Ease.bounceOut);
    }

    /** 让一个MC可点或不可点 */
    function enablecMc(mc, b, isTransparent=true){
        mc.alpha = (!b && isTransparent) ? 0.3 : 1;
        mc.mouseEnabled = b;
        mc.mouseChildren = false;
    }

    /** 设置一个MC，使其变得可以手动。
     * @param mc 要拖动的影片剪辑实例。
     * @param isDragTop 拖动的实例是否放到最上层，默认值为：true*/
    function dragMC(mc, isDragTop) {
        if(!mc) return;
        if (isDragTop === void 0) { isDragTop = true; }
        var isMove = false;
        mc.gotoAndStop(0);
        mc.addEventListener("mousedown", downHandler);
        mc.addEventListener("pressmove", moveHandler);
        mc.addEventListener("pressup", upHandler);
        function downHandler(e) {
            isMove = false;
            mc.dragOldX = e.localX;
            mc.dragOldY = e.localY;
            if(isDragTop) mc.parent.addChild(mc);
        };
        function moveHandler(e) {
            mc.x += (e.localX - mc.dragOldX)*mc.scaleX;
            mc.y += (e.localY - mc.dragOldY)*mc.scaleY;
            mc.dragOldX = e.localX;
            mc.dragOldY = e.localY;
            if(isMove == false){
                isMove = true;
                mc.dispatchEvent(new createjs.Event("dragStart", false, false));
            }
            mc.dispatchEvent(new createjs.Event("drag", false, false));
        };
        function upHandler(e) {
            if(isMove == true){
                if(mc.currentLabel == "drag") mc.gotoAndStop(0);
                mc.dispatchEvent(new createjs.Event("dragEnd", false, false));
            }
        };
    }

    /** 停止一个MC的拖动。
     * @param mc 要停止拖动的影片剪辑实例。
     * @param isDragEndEvnet 是否处发结束拖动事件，默认值为：true */
    function stopDragMC(mc, isDragEndEvnet){
        if (isDragEndEvnet === void 0) { isDragEndEvnet = true; }
        mc.removeAllEventListeners("mousedown");
        mc.removeAllEventListeners("pressmove");
        mc.removeAllEventListeners("pressup");
        if(isDragEndEvnet) mc.dispatchEvent(new createjs.Event("dragEnd", false, false));
    }

    /** 判断一个点，是否跟一个对象碰撞，假如hitObj存在，则用hitObj的位置与宽高来判断。
     * item 要碰撞的对象。
     * sx 本地X坐标（e.localX）。
     * sy 本地y坐标（e.localY）。*/
    function hitTest(item, sx, sy){
        if(!item.nominalBounds) return;
        var rx = stage.scaleX;
        var ry = stage.scaleY;
        sx = sx*rx;
        sy = sy*ry;
        var w = item.nominalBounds.width;
        var h = item.nominalBounds.height;
        var p = item.parent.localToGlobal(item.x, item.y);
        if(item.hitObj){
            p.x = p.x+(item.hitObj.x-item.hitObj.regX)*rx-item.regX*rx;
            p.y = p.y+(item.hitObj.y-item.hitObj.regY)*ry-item.regY*ry;
            w = item.hitObj.nominalBounds.width;
            h = item.hitObj.nominalBounds.height;
        }else{
            p.x = p.x-item.regX*rx;
            p.y = p.y-item.regY*ry;
        }
        var r = new createjs.Rectangle(p.x, p.y, w*rx, h*ry);
        return r.contains(sx, sy);
    }

    /** 判断两个对象是否相碰，通过全局坐标来判断，假如hitObj存在，则用hitObj的位置与宽高来判断 */
    function hitTestObj(item0, item1) {
        var rx = stage.scaleX;
        var ry = stage.scaleY;
        var w0 = item0.nominalBounds.width;
        var h0 = item0.nominalBounds.height;
        var p0 = item0.parent.localToGlobal(item0.x, item0.y);
        var w1 = item1.nominalBounds.width;
        var h1 = item1.nominalBounds.height;
        var p1 = item1.parent.localToGlobal(item1.x, item1.y);
        if(item0.hitObj){
            p0.x = p0.x+(item0.hitObj.x-item0.hitObj.regX)*rx-item0.regX*rx;
            p0.y = p0.y+(item0.hitObj.y-item0.hitObj.regY)*ry-item0.regY*ry;
            w0 = item0.hitObj.nominalBounds.width;
            h0 = item0.hitObj.nominalBounds.height;
        }else{
            p0.x = p0.x-item0.regX*rx;
            p0.y = p0.y-item0.regY*ry;
        }
        if(item1.hitObj){
            p1.x = p1.x+(item1.hitObj.x-item1.hitObj.regX)*rx-item1.regX*rx;
            p1.y = p1.y+(item1.hitObj.y-item1.hitObj.regY)*ry-item1.regY*ry;
            w1 = item1.hitObj.nominalBounds.width;
            h1 = item1.hitObj.nominalBounds.height;
        }else{
            p1.x = p1.x-item1.regX*rx;
            p1.y = p1.y-item1.regY*ry;
        }
        var r0 = new createjs.Rectangle(p0.x, p0.y, w0*rx, h0*ry);
        var r1 = new createjs.Rectangle(p1.x, p1.y, w1*rx, h1*ry);
        return r0.intersects(r1);
    }

    /** 创建(new)一个库中的实例， 并作为MovieClip类型返回。 
     name 要获取的库中的定义。 */
    function createMC(name){
        if(name == undefined || name == null) return undefined;
        name = name.replace(/ /ig, "");
        if(name == "" || !lib[name]) return undefined;
        return new lib[name]();
    }

    /** 获取缩短的钱包地址 */
    function formatWalletAddr(str){
        if(!str) return ''
        return str.substring(0, 4)+'...'+str.substring(str.length-4)
    }

    /** 设置数字文本 */
    function setNumText(holder, str, color){
        holder.removeAllChildren();
        if(str == '') return;
        str = ''+str;
        let obj = {'0':33, '1':15, '2':33, '3':33, '4':31, '5':33, '6':32, '7':30, '8':33, '9':33, '.':9, '/':17};
        let len = 0;
        for(let i=0; i<str.length; i++){
            let s = str.charAt(i);
            let n = s;
            if(s == '.') n = '10';
            if(s == '/') n = '11';
            if(color == 1) n = n+'_0';
            let num = createMC('Num'+n);
            holder.addChild(num);
            num.x = len;
            len += obj[s]+1
        }
    }

    /** 显示提示框 */
    function showTip(msg, isEffect=true){
        // let str = '';
        // let num = 48
        // let n = Math.floor(msg.length/num);
        // for(let i=0; i<n; i++){
        //     console.log(n)
        //     str += msg.substring(i*num, (i+1)*num)+'\n';
        // }
        // str += msg.substring(i*num);
        let mc = createMC('AlertBaseTip');
        let panel = mc.panel;
        panel.contentTf.text = msg;
        mc.bg.on('click', ()=>{});
        panel.closeBtn.on('click', ()=>{self.removeChild(mc)});
        self.addChild(mc);
        panel.scaleX = panel.scaleY = 0.3;
        if(isEffect) tween.get(panel).to({scaleX:1, scaleY:1}, 600, createjs.Ease.bounceOut)
    }
}