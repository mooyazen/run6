(function (cjs, an) {

var p; // shortcut to reference prototypes
var lib={};var ss={};var img={};
lib.ssMetadata = [
		{name:"index_atlas_", frames: [[0,0,1920,960],[1922,439,100,100],[1922,118,100,115],[1370,1213,350,111],[471,1222,350,111],[0,1162,240,240],[1922,235,100,100],[1922,337,100,100],[1922,0,100,116],[1606,962,233,249],[1370,962,234,248],[617,962,253,258],[242,1162,227,249],[1134,962,234,275],[872,962,260,249],[1722,1213,313,116],[0,962,615,198]]}
];


// symbols:



(lib.bgPic = function() {
	this.spriteSheet = ss["index_atlas_"];
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.cashIn = function() {
	this.spriteSheet = ss["index_atlas_"];
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.cashOut = function() {
	this.spriteSheet = ss["index_atlas_"];
	this.gotoAndStop(2);
}).prototype = p = new cjs.Sprite();



(lib.ConfirmBtn0 = function() {
	this.spriteSheet = ss["index_atlas_"];
	this.gotoAndStop(3);
}).prototype = p = new cjs.Sprite();



(lib.ConfirmBtn1 = function() {
	this.spriteSheet = ss["index_atlas_"];
	this.gotoAndStop(4);
}).prototype = p = new cjs.Sprite();



(lib.GoldCoins1 = function() {
	this.spriteSheet = ss["index_atlas_"];
	this.gotoAndStop(5);
}).prototype = p = new cjs.Sprite();



(lib.historyBtn = function() {
	this.spriteSheet = ss["index_atlas_"];
	this.gotoAndStop(6);
}).prototype = p = new cjs.Sprite();



(lib.logoTop = function() {
	this.spriteSheet = ss["index_atlas_"];
	this.gotoAndStop(7);
}).prototype = p = new cjs.Sprite();



(lib.MutilGoldCoins = function() {
	this.spriteSheet = ss["index_atlas_"];
	this.gotoAndStop(8);
}).prototype = p = new cjs.Sprite();



(lib.oniu1 = function() {
	this.spriteSheet = ss["index_atlas_"];
	this.gotoAndStop(9);
}).prototype = p = new cjs.Sprite();



(lib.oniu2 = function() {
	this.spriteSheet = ss["index_atlas_"];
	this.gotoAndStop(10);
}).prototype = p = new cjs.Sprite();



(lib.oniu3 = function() {
	this.spriteSheet = ss["index_atlas_"];
	this.gotoAndStop(11);
}).prototype = p = new cjs.Sprite();



(lib.oniu4 = function() {
	this.spriteSheet = ss["index_atlas_"];
	this.gotoAndStop(12);
}).prototype = p = new cjs.Sprite();



(lib.oniu5 = function() {
	this.spriteSheet = ss["index_atlas_"];
	this.gotoAndStop(13);
}).prototype = p = new cjs.Sprite();



(lib.oniu6 = function() {
	this.spriteSheet = ss["index_atlas_"];
	this.gotoAndStop(14);
}).prototype = p = new cjs.Sprite();



(lib.run6Logo = function() {
	this.spriteSheet = ss["index_atlas_"];
	this.gotoAndStop(15);
}).prototype = p = new cjs.Sprite();



(lib.snailLogo = function() {
	this.spriteSheet = ss["index_atlas_"];
	this.gotoAndStop(16);
}).prototype = p = new cjs.Sprite();
// helper functions:

function mc_symbol_clone() {
	var clone = this._cloneProps(new this.constructor(this.mode, this.startPosition, this.loop));
	clone.gotoAndStop(this.currentFrame);
	clone.paused = this.paused;
	clone.framerate = this.framerate;
	return clone;
}

function getMCSymbolPrototype(symbol, nominalBounds, frameBounds) {
	var prototype = cjs.extend(symbol, cjs.MovieClip);
	prototype.clone = mc_symbol_clone;
	prototype.nominalBounds = nominalBounds;
	prototype.frameBounds = frameBounds;
	return prototype;
	}


(lib.Snail5 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层_1
	this.amountTf = new cjs.Text("0.005", "22px 'Microsoft YaHei'", "#F8E00C");
	this.amountTf.name = "amountTf";
	this.amountTf.textAlign = "right";
	this.amountTf.lineHeight = 31;
	this.amountTf.lineWidth = 61;
	this.amountTf.parent = this;
	this.amountTf.setTransform(141,11);

	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AhtB4QgMgBgHgIQgHgIACgMIAdjSIDuAAIgFAoIieAAIgHAsICfAAIgWCbgAg0BQIBPAAIAKhMIhOAAg");
	this.shape.setTransform(15.5,15.1);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#F8E00C").s().p("AiWCWQg9g+gBhYQABhXA9g/QA/g9BXgBQBYABA+A9QA/A/AABXQAABYg/A+Qg+A/hYAAQhXAAg/g/g");
	this.shape_1.setTransform(15.3,15.3);

	this.instance = new lib.oniu6();
	this.instance.parent = this;
	this.instance.setTransform(21,50,0.456,0.456);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("rgba(255,255,255,0.698)").s().p("Ap3R7Qh5AAAAh5MAAAggDQAAh5B5AAITvAAQB5AAAAB5MAAAAgDQAAB5h5AAg");
	this.shape_2.setTransform(75.3,114.7);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_2},{t:this.instance},{t:this.shape_1},{t:this.shape},{t:this.amountTf}]}).wait(1));

	// 图层_2
	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("rgba(51,51,51,0.698)").s().p("AqARyQhLAAgdgvQAdARAtAAITwAAQB5AAAAh5MAAAggCQAAgugRgcQAvAcAABMMAAAAgCQAAB5h5AAg");
	this.shape_3.setTransform(79.2,118.5);

	this.timeline.addTween(cjs.Tween.get(this.shape_3).wait(1));

}).prototype = getMCSymbolPrototype(lib.Snail5, new cjs.Rectangle(-6,-6,159.7,238.4), null);


(lib.Snail4 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层_1
	this.amountTf = new cjs.Text("0.005", "22px 'Microsoft YaHei'", "#FF6600");
	this.amountTf.name = "amountTf";
	this.amountTf.textAlign = "right";
	this.amountTf.lineHeight = 31;
	this.amountTf.lineWidth = 61;
	this.amountTf.parent = this;
	this.amountTf.setTransform(141,11);

	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AiHB3IAHg4IAOAQICOAAIALhIIifAAIAQhvIgOgOID+AAIgFAmIieAAIgHAwICeAAIgRB7QgCAMgJAIQgKAIgMAAg");
	this.shape.setTransform(14.6,14.8);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FF6600").s().p("AiWCWQg9g+gBhYQABhXA9g/QA/g9BXgBQBYABA+A9QA/A/AABXQAABYg/A+Qg+A/hYAAQhXAAg/g/g");
	this.shape_1.setTransform(15.3,15.3);

	this.instance = new lib.oniu5();
	this.instance.parent = this;
	this.instance.setTransform(24,40,0.456,0.456);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("rgba(255,255,255,0.698)").s().p("Ap3R7Qh5AAAAh5MAAAggDQAAh5B5AAITvAAQB5AAAAB5MAAAAgDQAAB5h5AAg");
	this.shape_2.setTransform(75.3,114.7);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_2},{t:this.instance},{t:this.shape_1},{t:this.shape},{t:this.amountTf}]}).wait(1));

	// 图层_2
	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("rgba(51,51,51,0.698)").s().p("AqARyQhLAAgdgvQAdARAtAAITwAAQB5AAAAh5MAAAggCQAAgugRgcQAvAcAABMMAAAAgCQAAB5h5AAg");
	this.shape_3.setTransform(79.2,118.5);

	this.timeline.addTween(cjs.Tween.get(this.shape_3).wait(1));

}).prototype = getMCSymbolPrototype(lib.Snail4, new cjs.Rectangle(-6,-6,159.7,238.4), null);


(lib.Snail3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层_1
	this.amountTf = new cjs.Text("0.005", "22px 'Microsoft YaHei'", "#CC33CC");
	this.amountTf.name = "amountTf";
	this.amountTf.textAlign = "right";
	this.amountTf.lineHeight = 31;
	this.amountTf.lineWidth = 61;
	this.amountTf.parent = this;
	this.amountTf.setTransform(141,11);

	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AAGB3IAHgwIiOAAIAFgnIAriNIgJgJIBaAAIgrCWIA9AAIATiHIgNgPIBfAAIgVCWIAgAAIgFAnIghAAIgGAwg");
	this.shape.setTransform(14,15.5);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#CC33CC").s().p("AiWCWQg9g+gBhYQABhXA9g/QA/g9BXgBQBYABA+A9QA/A/AABXQAABYg/A+Qg+A/hYAAQhXAAg/g/g");
	this.shape_1.setTransform(15.3,15.3);

	this.instance = new lib.oniu4();
	this.instance.parent = this;
	this.instance.setTransform(26,50,0.456,0.456);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("rgba(255,255,255,0.698)").s().p("Ap3R7Qh5AAAAh5MAAAggDQAAh5B5AAITvAAQB5AAAAB5MAAAAgDQAAB5h5AAg");
	this.shape_2.setTransform(75.3,114.7);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_2},{t:this.instance},{t:this.shape_1},{t:this.shape},{t:this.amountTf}]}).wait(1));

	// 图层_2
	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("rgba(51,51,51,0.698)").s().p("AqARyQhLAAgdgvQAdARAtAAITwAAQB5AAAAh5MAAAggCQAAgugRgcQAvAcAABMMAAAAgCQAAB5h5AAg");
	this.shape_3.setTransform(79.2,118.5);

	this.timeline.addTween(cjs.Tween.get(this.shape_3).wait(1));

}).prototype = getMCSymbolPrototype(lib.Snail3, new cjs.Rectangle(-6,-6,159.7,238.4), null);


(lib.Snail2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层_1
	this.amountTf = new cjs.Text("0.005", "22px 'Microsoft YaHei'", "#3333CC");
	this.amountTf.name = "amountTf";
	this.amountTf.textAlign = "right";
	this.amountTf.lineHeight = 31;
	this.amountTf.lineWidth = 61;
	this.amountTf.parent = this;
	this.amountTf.setTransform(141,11);

	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AiIB3IAGgnICeAAIAKhAIiPAAIAGgoICOAAIAIg3IieAAIAFgnIDvAAIgeDRQgCAMgJAIQgKAIgMAAg");
	this.shape.setTransform(15.7,15.2);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#3333CC").s().p("AiWCWQg9g+gBhYQABhXA9g/QA/g9BXgBQBYABA+A9QA/A/AABXQAABYg/A+Qg+A/hYAAQhXAAg/g/g");
	this.shape_1.setTransform(15.3,15.3);

	this.instance = new lib.oniu3();
	this.instance.parent = this;
	this.instance.setTransform(23,50,0.456,0.456);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("rgba(255,255,255,0.698)").s().p("Ap3R7Qh5AAAAh5MAAAggDQAAh5B5AAITvAAQB5AAAAB5MAAAAgDQAAB5h5AAg");
	this.shape_2.setTransform(75.3,114.7);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_2},{t:this.instance},{t:this.shape_1},{t:this.shape},{t:this.amountTf}]}).wait(1));

	// 图层_2
	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("rgba(51,51,51,0.698)").s().p("AqARyQhLAAgdgvQAdARAtAAITwAAQB5AAAAh5MAAAggCQAAgugRgcQAvAcAABMMAAAAgCQAAB5h5AAg");
	this.shape_3.setTransform(79.2,118.5);

	this.timeline.addTween(cjs.Tween.get(this.shape_3).wait(1));

}).prototype = getMCSymbolPrototype(lib.Snail2, new cjs.Rectangle(-6,-6,159.7,238.4), null);


(lib.Snail1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层_1
	this.amountTf = new cjs.Text("0.005", "22px 'Microsoft YaHei'", "#0099CC");
	this.amountTf.name = "amountTf";
	this.amountTf.textAlign = "right";
	this.amountTf.lineHeight = 31;
	this.amountTf.lineWidth = 61;
	this.amountTf.parent = this;
	this.amountTf.setTransform(141,11);

	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AhtB4QgMAAgHgJQgHgIACgMIAPhqICeAAIAJhAIhPAAIgEAgIhQAAIAKhIIDuAAIgUCPIimAAIgIA4ICXAAIASgQIgIA4g");
	this.shape.setTransform(15.9,15.2);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#0099CC").s().p("AiWCWQg9g+gBhYQABhXA9g/QA/g9BXgBQBYABA+A9QA/A/AABXQAABYg/A+Qg+A/hYAAQhXAAg/g/g");
	this.shape_1.setTransform(15.3,15.3);

	this.instance = new lib.oniu2();
	this.instance.parent = this;
	this.instance.setTransform(26,50,0.456,0.456);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("rgba(255,255,255,0.698)").s().p("Ap3R7Qh5AAAAh5MAAAggDQAAh5B5AAITvAAQB5AAAAB5MAAAAgDQAAB5h5AAg");
	this.shape_2.setTransform(75.3,114.7);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_2},{t:this.instance},{t:this.shape_1},{t:this.shape},{t:this.amountTf}]}).wait(1));

	// 图层_2
	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("rgba(51,51,51,0.698)").s().p("AqARyQhLAAgdgvQAdARAtAAITwAAQB5AAAAh5MAAAggCQAAgugRgcQAvAcAABMMAAAAgCQAAB5h5AAg");
	this.shape_3.setTransform(79.2,118.5);

	this.timeline.addTween(cjs.Tween.get(this.shape_3).wait(1));

}).prototype = getMCSymbolPrototype(lib.Snail1, new cjs.Rectangle(-6,-6,159.7,238.4), null);


(lib.Snail0 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("Ag0B6IAai8IghAFIAHgsIBwgQIgiDzg");
	this.shape.setTransform(15.1,15.4);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#009900").s().p("AiWCWQg9g+gBhYQABhXA9g/QA/g9BXgBQBYABA+A9QA/A/AABXQAABYg/A+Qg+A/hYAAQhXAAg/g/g");
	this.shape_1.setTransform(15.3,15.3);

	this.amountTf = new cjs.Text("0.005", "22px 'Microsoft YaHei'", "#009900");
	this.amountTf.name = "amountTf";
	this.amountTf.textAlign = "right";
	this.amountTf.lineHeight = 31;
	this.amountTf.lineWidth = 61;
	this.amountTf.parent = this;
	this.amountTf.setTransform(141,11);

	this.instance = new lib.oniu1();
	this.instance.parent = this;
	this.instance.setTransform(26,50,0.456,0.456);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("rgba(255,255,255,0.698)").s().p("Ap3R7Qh5AAAAh5MAAAggDQAAh5B5AAITvAAQB5AAAAB5MAAAAgDQAAB5h5AAg");
	this.shape_2.setTransform(75.3,114.7);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_2},{t:this.instance},{t:this.amountTf},{t:this.shape_1},{t:this.shape}]}).wait(1));

	// 图层_2
	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("rgba(51,51,51,0.698)").s().p("AqARyQhLAAgdgvQAdARAtAAITwAAQB5AAAAh5MAAAggCQAAgugRgcQAvAcAABMMAAAAgCQAAB5h5AAg");
	this.shape_3.setTransform(79.2,118.5);

	this.timeline.addTween(cjs.Tween.get(this.shape_3).wait(1));

}).prototype = getMCSymbolPrototype(lib.Snail0, new cjs.Rectangle(-6,-6,159.7,238.4), null);


(lib.Num11_0 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFF00").s().p("AhKCcIBRk3IBEAAIhSE3g");
	this.shape.setTransform(7.5,15.6);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Num11_0, new cjs.Rectangle(0,0,14.9,31.2), null);


(lib.Num11 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AhKCcIBRk3IBEAAIhSE3g");
	this.shape.setTransform(7.5,15.6);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Num11, new cjs.Rectangle(0,0,14.9,31.2), null);


(lib.Num10_0 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFF00").s().p("AgpAdIAIg5IBLAAIgIA5g");
	this.shape.setTransform(4.2,24.9);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Num10_0, new cjs.Rectangle(0,22,8.4,5.7), null);


(lib.Num10 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AgpAdIAIg5IBLAAIgIA5g");
	this.shape.setTransform(4.2,24.9);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Num10, new cjs.Rectangle(0,22,8.4,5.7), null);


(lib.Num9_0 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFF00").s().p("AiiCOIAIgvIC8AAIAIg5Ii8AAIAYizIEcAAIgjD5QgCAPgLAJQgLAKgOAAgAgtgJIBeAAIAMhVIheAAg");
	this.shape.setTransform(16.3,14.2);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Num9_0, new cjs.Rectangle(0,0,32.5,28.5), null);


(lib.Num9 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AiiCOIAIgvIC8AAIAIg5Ii8AAIAYizIEcAAIgjD5QgCAPgLAJQgLAKgOAAgAgtgJIBeAAIAMhVIheAAg");
	this.shape.setTransform(16.3,14.2);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Num9, new cjs.Rectangle(0,0,32.5,28.5), null);


(lib.Num8_0 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFF00").s().p("AiiCPIAkj6QACgOALgLQALgKAOAAID6AAIgjD7QgCAOgLAKQgMAJgOABgAg8BfIBeAAIALhMIheAAgAgrgbIBfAAIAJhDIheAAg");
	this.shape.setTransform(16.3,14.3);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Num8_0, new cjs.Rectangle(0,0,32.5,28.5), null);


(lib.Num8 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AiiCPIAkj6QACgOALgLQALgKAOAAID6AAIgjD7QgCAOgLAKQgMAJgOABgAg8BfIBeAAIALhMIheAAgAgrgbIBfAAIAJhDIheAAg");
	this.shape.setTransform(16.3,14.3);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Num8, new cjs.Rectangle(0,0,32.5,28.5), null);


(lib.Num7_0 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFF00").s().p("AhcCPICHjtIi8AAIAHgwIEcAAIgHAwIiKDtg");
	this.shape.setTransform(14.6,14.3);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Num7_0, new cjs.Rectangle(0,0,29.2,28.5), null);


(lib.Num7 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AhcCPICHjtIi8AAIAHgwIEcAAIgHAwIiKDtg");
	this.shape.setTransform(14.6,14.3);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Num7, new cjs.Rectangle(0,0,29.2,28.5), null);


(lib.Num6_0 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFF00").s().p("AiBCOQgPAAgIgKQgJgJACgPIAkj5IEbAAIgGAvIi9AAIgHA0IC8AAIgZC4gAg+BfIBeAAIANhaIheAAg");
	this.shape.setTransform(16,14.2);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Num6_0, new cjs.Rectangle(0,0,32.1,28.5), null);


(lib.Num6 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AiBCOQgPAAgIgKQgJgJACgPIAkj5IEbAAIgGAvIi9AAIgHA0IC8AAIgZC4gAg+BfIBeAAIANhaIheAAg");
	this.shape.setTransform(16,14.2);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Num6, new cjs.Rectangle(0,0,32.1,28.5), null);


(lib.Num5_0 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFF00").s().p("AihCOIAJhDIAQATICqAAIAMhVIi9AAIATiFIgQgRIEuAAIgGAuIi9AAIgIA5IC9AAIgVCSQgCAOgLAKQgLAKgPAAg");
	this.shape.setTransform(16.2,14.2);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Num5_0, new cjs.Rectangle(0,0,32.5,28.4), null);


(lib.Num5 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AihCOIAJhDIAQATICqAAIAMhVIi9AAIATiFIgQgRIEuAAIgGAuIi9AAIgIA5IC9AAIgVCSQgCAOgLAKQgLAKgPAAg");
	this.shape.setTransform(16.2,14.2);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Num5, new cjs.Rectangle(0,0,32.5,28.4), null);


(lib.Num4_0 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFF00").s().p("AAICOIAHg5IipAAIAGgvIAzinIgLgMIBsAAIgzCzIBJAAIAXihIgQgSIByAAIgaCzIAmAAIgHAvIgmAAIgIA5g");
	this.shape.setTransform(15.5,14.2);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Num4_0, new cjs.Rectangle(0,0,31,28.5), null);


(lib.Num4 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AAICOIAHg5IipAAIAGgvIAzinIgLgMIBsAAIgzCzIBJAAIAXihIgQgSIByAAIgaCzIAmAAIgHAvIgmAAIgIA5g");
	this.shape.setTransform(15.5,14.2);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Num4, new cjs.Rectangle(0,0,31,28.5), null);


(lib.Num3_0 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFF00").s().p("AiiCOIAIgvIC8AAIALhMIiqAAIAHgvICqAAIAJhCIi9AAIAGgvIEcAAIgjD5QgCAPgLAJQgMAKgNAAg");
	this.shape.setTransform(16.3,14.2);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Num3_0, new cjs.Rectangle(0,0,32.5,28.5), null);


(lib.Num3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AiiCOIAIgvIC8AAIALhMIiqAAIAHgvICqAAIAJhCIi9AAIAGgvIEcAAIgjD5QgCAPgLAJQgMAKgNAAg");
	this.shape.setTransform(16.3,14.2);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Num3, new cjs.Rectangle(0,0,32.5,28.5), null);


(lib.Num2_0 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFF00").s().p("AiBCPQgPgBgIgJQgJgKACgOIASh/IC9AAIALhMIhfAAIgEAmIhfAAIAMhWIEbAAIgYCrIjGAAIgJBCICzAAIAWgTIgKBDg");
	this.shape.setTransform(16,14.3);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Num2_0, new cjs.Rectangle(0,0,32.1,28.5), null);


(lib.Num2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AiBCPQgPgBgIgJQgJgKACgOIASh/IC9AAIALhMIhfAAIgEAmIhfAAIAMhWIEbAAIgYCrIjGAAIgJBCICzAAIAWgTIgKBDg");
	this.shape.setTransform(16,14.3);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Num2, new cjs.Rectangle(0,0,32.1,28.5), null);


(lib.Num1_0 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFF00").s().p("Ag/CRIAfjfIgnAFIAIg0ICHgTIgpEhg");
	this.shape.setTransform(7.2,14.5);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Num1_0, new cjs.Rectangle(0,0,14.3,29), null);


(lib.Num1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("Ag/CRIAfjfIgnAFIAIg0ICHgTIgpEhg");
	this.shape.setTransform(7.2,14.5);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Num1, new cjs.Rectangle(0,0,14.3,29), null);


(lib.Num0_0 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFF00").s().p("AihCOIAjj5QACgPALgJQALgKAPAAID5AAIgjD5QgCAPgLAJQgLAKgPAAgAg8BfIBeAAIAbi9IheAAg");
	this.shape.setTransform(16.2,14.2);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Num0_0, new cjs.Rectangle(0,0,32.5,28.5), null);


(lib.Num0 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AihCOIAjj5QACgPALgJQALgKAPAAID5AAIgjD5QgCAPgLAJQgLAKgPAAgAg8BfIBeAAIAbi9IheAAg");
	this.shape.setTransform(16.2,14.2);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Num0, new cjs.Rectangle(0,0,32.5,28.5), null);


(lib.EmptyNum = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(255,255,255,0.008)").s().p("AnRDIIAAmPIOjAAIAAGPg");
	this.shape.setTransform(46.6,20);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.EmptyNum, new cjs.Rectangle(0,0,93.3,40), null);


(lib.HistoryBtn = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层_1
	this.instance = new lib.historyBtn();
	this.instance.parent = this;
	this.instance.setTransform(0,0,0.6,0.6);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,60,60);


(lib.ConfirmBtn = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层_3
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("Ag8CZQgRAAgLgMQgLgLAFgRIAXibIguAAIAGg5IAvAAIAEgjIgLgSIB+AAIgIA1IBHAAIgMA5IhCAAIgUCJIA5AAIgLA6g");
	this.shape.setTransform(258.9,54.1);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AhQCqIAjjsIgRgQICDAAIgjD8gAgohkIAHhFIByAAIgMBFg");
	this.shape_1.setTransform(237.2,52.4);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("ABLB+IAcjCIguAAIgdDCIhaAAIAdjCIgtAAIgeDCIhoAAIAjjrIgMgRIGSAAIgiD8g");
	this.shape_2.setTransform(206.1,56.8);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AimC7IAzlkIgLgRIB+AAIgQB5IC3AAIgdDUQgFARgMAMQgMALgRAAgAgqCCIBDAAIAViJIhEAAg");
	this.shape_3.setTransform(166.3,50.7);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AARB+IAEgWIi7AWIAjjrIgSgRICFAAIgbCzIBHgHIAYibIgSgRICFAAIgjD8g");
	this.shape_4.setTransform(131.1,56.8);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AibB+IAMhQIARAXICVAAIAGgpIisAAIAYiaIETAAIgMBLIhkAAIACgRIhEAAIgGAoICnAAIgNBzQgEAQgPAMQgPALgRAAg");
	this.shape_5.setTransform(97,56.8);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#6F5000").s().p("Ag8CZQgRAAgLgMQgLgLAFgRIAXibIguAAIAGg5IAvAAIAEgjIgLgSIB+AAIgIA1IBHAAIgMA5IhCAAIgUCJIA5AAIgLA6g");
	this.shape_6.setTransform(260.9,56.1);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#6F5000").s().p("AhQCqIAjjsIgRgQICDAAIgjD8gAgohkIAHhFIByAAIgMBFg");
	this.shape_7.setTransform(239.2,54.4);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#6F5000").s().p("ABLB+IAdjCIguAAIgeDCIhaAAIAdjCIgtAAIgfDCIhnAAIAjjrIgMgRIGSAAIgjD8g");
	this.shape_8.setTransform(208.1,58.8);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#6F5000").s().p("AimC7IAzlkIgLgRIB+AAIgQB5IC3AAIgdDUQgFARgMAMQgMALgRAAgAgqCCIBDAAIAViJIhEAAg");
	this.shape_9.setTransform(168.3,52.7);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#6F5000").s().p("AARB+IAEgWIi7AWIAjjrIgSgRICFAAIgbCzIBHgHIAYibIgSgRICFAAIgjD8g");
	this.shape_10.setTransform(133.1,58.8);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#6F5000").s().p("AibB+IAMhQIARAXICVAAIAGgpIisAAIAXiaIEUAAIgMBLIhkAAIACgRIhEAAIgGAoICnAAIgMBzQgEAQgQAMQgOALgSAAg");
	this.shape_11.setTransform(99,58.8);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(2));

	// 图层_1
	this.instance = new lib.ConfirmBtn0();
	this.instance.parent = this;

	this.instance_1 = new lib.ConfirmBtn1();
	this.instance_1.parent = this;

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,350,111);


(lib.Coins0 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层_2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FF9900").s().p("AAZBVIg5hAIgJBAIg5AAIAUidIgJgMIC6AAIgLBVIgCAIIgFAHQgEADgEABQgEABgEAAIgmAAIA9BAgAgdgGIA+AAIAGgxIg+AAg");
	this.shape.setTransform(60.1,34.7);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FF9900").s().p("AAwBVIgGguIhHAAIgUAuIgxAAIBCigIgJgJIB1AAIAXCpgAgSAKIA5AAIgJhBIgUAAg");
	this.shape_1.setTransform(37.6,34.7);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#422800").s().p("AAZBVIg5g/IgJA/Ig5AAIAUieIgJgLIC6AAIgLBVIgCAIIgFAHQgEADgEABQgEACgEAAIgmAAIA9A/gAgdgGIA+AAIAGgxIg+AAg");
	this.shape_2.setTransform(62.1,36.7);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#422800").s().p("AAwBVIgGguIhHAAIgUAuIgxAAIBCigIgJgJIB1AAIAXCpgAgSAKIA5AAIgJhBIgUAAg");
	this.shape_3.setTransform(39.6,36.7);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FF9900").s().p("AgfBJIAQhvIgUACIAEgaIBDgJIgVCQg");
	this.shape_4.setTransform(80.9,60.3);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FF9900").s().p("AhQBHIASh8QABgHAFgGQAGgEAHAAIB8AAIgRB8QgBAHgGAFQgFAFgIAAgAgdAwIAuAAIAOhfIgvAAg");
	this.shape_5.setTransform(66.8,60.4);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FF9900").s().p("AhQBHIASh8QABgHAFgGQAGgEAHAAIB8AAIgRB8QgBAHgGAFQgFAFgIAAgAgdAwIAuAAIAOhfIgvAAg");
	this.shape_6.setTransform(48.3,60.4);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FF9900").s().p("AgUAOIAEgbIAlAAIgEAbg");
	this.shape_7.setTransform(36,66.1);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FF9900").s().p("AhQBHIASh8QABgHAFgGQAGgEAHAAIB8AAIgRB8QgBAHgGAFQgFAFgIAAgAgdAwIAuAAIAOhfIgvAAg");
	this.shape_8.setTransform(23.6,60.4);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#422800").s().p("AgfBIIAQhuIgUACIAEgaIBDgKIgVCQg");
	this.shape_9.setTransform(82.9,62.3);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#422800").s().p("AhQBHIASh8QABgHAFgGQAGgEAHAAIB8AAIgRB8QgBAHgGAFQgFAFgIAAgAgdAvIAuAAIAOheIgvAAg");
	this.shape_10.setTransform(68.8,62.4);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#422800").s().p("AhQBHIASh8QABgHAFgGQAGgEAHAAIB8AAIgRB8QgBAHgGAFQgFAFgIAAgAgdAvIAuAAIAOheIgvAAg");
	this.shape_11.setTransform(50.3,62.4);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#422800").s().p("AgUAOIAEgbIAlAAIgEAbg");
	this.shape_12.setTransform(38,68.1);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#422800").s().p("AhQBHIASh8QABgHAFgGQAGgEAHAAIB8AAIgRB8QgBAHgGAFQgFAFgIAAgAgdAvIAuAAIAOheIgvAAg");
	this.shape_13.setTransform(25.6,62.4);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	// 图层_1
	this.instance = new lib.GoldCoins1();
	this.instance.parent = this;
	this.instance.setTransform(0,0,0.417,0.417);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Coins0, new cjs.Rectangle(0,0,100,100), null);


(lib.snailNumber = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(6));

	// content
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("Ag0B6IAai8IghAFIAHgsIBwgQIgiDzg");
	this.shape.setTransform(15.1,15.4);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#009900").s().p("AiWCWQg9g+gBhYQABhXA9g/QA/g9BXgBQBYABA+A9QA/A/AABXQAABYg/A+Qg+A/hYAAQhXAAg/g/g");
	this.shape_1.setTransform(15.3,15.3);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AhtB4QgMAAgHgJQgHgIACgMIAPhqICeAAIAJhAIhPAAIgEAgIhQAAIAKhIIDuAAIgUCPIimAAIgIA4ICXAAIASgQIgIA4g");
	this.shape_2.setTransform(15.9,15.2);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#0099CC").s().p("AiWCWQg9g+gBhYQABhXA9g/QA/g9BXgBQBYABA+A9QA/A/AABXQAABYg/A+Qg+A/hYAAQhXAAg/g/g");
	this.shape_3.setTransform(15.3,15.3);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AiIB3IAGgnICeAAIAKhAIiPAAIAGgoICOAAIAIg3IieAAIAFgnIDvAAIgeDRQgCAMgJAIQgKAIgMAAg");
	this.shape_4.setTransform(15.7,15.2);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#3333CC").s().p("AiWCWQg9g+gBhYQABhXA9g/QA/g9BXgBQBYABA+A9QA/A/AABXQAABYg/A+Qg+A/hYAAQhXAAg/g/g");
	this.shape_5.setTransform(15.3,15.3);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AAGB3IAHgwIiOAAIAFgnIAriNIgJgJIBaAAIgrCWIA9AAIATiHIgNgPIBfAAIgVCWIAgAAIgFAnIghAAIgGAwg");
	this.shape_6.setTransform(14,15.5);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#CC33CC").s().p("AiWCWQg9g+gBhYQABhXA9g/QA/g9BXgBQBYABA+A9QA/A/AABXQAABYg/A+Qg+A/hYAAQhXAAg/g/g");
	this.shape_7.setTransform(15.3,15.3);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("AiHB3IAHg4IAOAQICOAAIALhIIifAAIAQhvIgOgOID+AAIgFAmIieAAIgHAwICeAAIgRB7QgCAMgJAIQgKAIgMAAg");
	this.shape_8.setTransform(14.6,14.8);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FF6600").s().p("AiWCWQg9g+gBhYQABhXA9g/QA/g9BXgBQBYABA+A9QA/A/AABXQAABYg/A+Qg+A/hYAAQhXAAg/g/g");
	this.shape_9.setTransform(15.3,15.3);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FFFFFF").s().p("AhtB4QgMgBgHgIQgHgIACgMIAdjSIDuAAIgFAoIieAAIgHAsICfAAIgWCbgAg0BQIBPAAIAKhMIhOAAg");
	this.shape_10.setTransform(15.5,15.1);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#F8E00C").s().p("AiWCWQg9g+gBhYQABhXA9g/QA/g9BXgBQBYABA+A9QA/A/AABXQAABYg/A+Qg+A/hYAAQhXAAg/g/g");
	this.shape_11.setTransform(15.3,15.3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).to({state:[{t:this.shape_3},{t:this.shape_2}]},1).to({state:[{t:this.shape_5},{t:this.shape_4}]},1).to({state:[{t:this.shape_7},{t:this.shape_6}]},1).to({state:[{t:this.shape_9},{t:this.shape_8}]},1).to({state:[{t:this.shape_11},{t:this.shape_10}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-6,-6,42.5,42.5);


(lib.AlertInstallBtn = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层_3
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AgNB4IAAjvIAbAAIAADvg");
	this.shape.setTransform(115.2,28);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AgNB4IAAjvIAbAAIAADvg");
	this.shape_1.setTransform(107.2,28);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AgyBIQgOgMAAgXQAAgsA2gHIAvgHQAAgoghAAQgcAAgYAUIAAgcQAYgPAfAAQA6AAAAA9IAABoIgcAAIAAgZIgBAAQgRAdggAAQgXAAgOgNgAAAAFQgUADgIAHQgHAHAAAOQAAALAIAHQAIAIAOAAQARgBANgNQAMgNAAgUIAAgPg");
	this.shape_2.setTransform(94.5,31.9);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AgUA7IAAhdIgcAAIAAgYIAcAAIAAgnIAcgJIAAAwIApAAIAAAYIgpAAIAABXQAAAQAGAHQAFAHANAAQAJAAAIgFIAAAYQgKAFgQAAQgrAAAAgwg");
	this.shape_3.setTransform(80.9,29.7);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("Ag2BLIAAgdQAWAQAZAAQAhAAAAgXQAAgIgIgGQgHgHgVgIQgbgKgIgKQgJgLAAgPQAAgWATgNQASgNAaAAQAUAAASAHIAAAcQgSgMgXAAQgNAAgJAHQgIAFAAAKQAAAKAGAFQAGAGAVAIQAbAKAJAKQAKALAAAQQAAAWgSANQgTANgcAAQgZAAgTgKg");
	this.shape_4.setTransform(68.6,31.9);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AAoBTIAAhbQAAgyglAAQgRAAgMAOQgNAOAAAWIAABbIgdAAIAAihIAdAAIAAAbIABAAQASgfAiAAQAbAAAOARQANASAAAgIAABig");
	this.shape_5.setTransform(52.4,31.7);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AgOB2IAAihIAcAAIAAChgAgMhXQgFgFAAgIQAAgHAFgFQAFgGAHAAQAIAAAFAGQAFAFAAAHQAAAIgFAFQgFAFgIAAQgHAAgFgFg");
	this.shape_6.setTransform(39,28.2);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFF00").s().p("AgNB4IAAjvIAbAAIAADvg");
	this.shape_7.setTransform(115.2,28);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFF00").s().p("AgNB4IAAjvIAbAAIAADvg");
	this.shape_8.setTransform(107.2,28);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFF00").s().p("AgyBIQgOgMAAgXQAAgsA2gHIAvgHQAAgoghAAQgcAAgYAUIAAgcQAYgPAfAAQA6AAAAA9IAABoIgcAAIAAgZIgBAAQgRAdggAAQgXAAgOgNgAAAAFQgUADgIAHQgHAHAAAOQAAALAIAHQAIAIAOAAQARgBANgNQAMgNAAgUIAAgPg");
	this.shape_9.setTransform(94.5,31.9);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FFFF00").s().p("AgUA7IAAhdIgcAAIAAgYIAcAAIAAgnIAcgJIAAAwIApAAIAAAYIgpAAIAABXQAAAQAGAHQAFAHANAAQAJAAAIgFIAAAYQgKAFgQAAQgrAAAAgwg");
	this.shape_10.setTransform(80.9,29.7);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FFFF00").s().p("Ag2BLIAAgdQAWAQAZAAQAhAAAAgXQAAgIgIgGQgHgHgVgIQgbgKgIgKQgJgLAAgPQAAgWATgNQASgNAaAAQAUAAASAHIAAAcQgSgMgXAAQgNAAgJAHQgIAFAAAKQAAAKAGAFQAGAGAVAIQAbAKAJAKQAKALAAAQQAAAWgSANQgTANgcAAQgZAAgTgKg");
	this.shape_11.setTransform(68.6,31.9);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#FFFF00").s().p("AAoBTIAAhbQAAgyglAAQgRAAgMAOQgNAOAAAWIAABbIgdAAIAAihIAdAAIAAAbIABAAQASgfAiAAQAbAAAOARQANASAAAgIAABig");
	this.shape_12.setTransform(52.4,31.7);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#FFFF00").s().p("AgOB2IAAihIAcAAIAAChgAgMhXQgFgFAAgIQAAgHAFgFQAFgGAHAAQAIAAAFAGQAFAFAAAHQAAAIgFAFQgFAFgIAAQgHAAgFgFg");
	this.shape_13.setTransform(39,28.2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).to({state:[{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7}]},1).wait(1));

	// 图层_2
	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f().s("#FFFFFF").ss(2,1,1).p("ApXkhISvAAQCWAAAACWIAAEXQAACWiWAAIyvAAQiWAAAAiWIAAkXQAAiWCWAAg");
	this.shape_14.setTransform(75,29);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#0066FF").s().p("ApXEiQiWAAAAiWIAAkXQAAiWCWAAISvAAQCWAAAACWIAAEXQAACWiWAAg");
	this.shape_15.setTransform(75,29);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f().s("#FFFF00").ss(2,1,1).p("ApXkhISvAAQCWAAAACWIAAEXQAACWiWAAIyvAAQiWAAAAiWIAAkXQAAiWCWAAg");
	this.shape_16.setTransform(75,29);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_15},{t:this.shape_14}]}).to({state:[{t:this.shape_15},{t:this.shape_16}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-1,-1,152,60);


(lib.AlertCloseBtn = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层_3
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AAeB4IhFhOIAAAAIAABOIgdAAIAAjvIAdAAIAACXIAAAAIBBhJIAlAAIhIBNIBOBUg");
	this.shape.setTransform(84.5,28);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("Ag6A+QgWgXABglQAAgnAVgYQAXgXAlAAQAlAAAVAWQAVAXAAAnQAAAlgXAYQgWAYgkAAQgkAAgWgXgAgkgsQgOARgBAcQAAAcAPAQQAOAQAXAAQAZAAAMgPQANgQAAgeQAAgdgNgPQgMgQgZAAQgXAAgOAQg");
	this.shape_1.setTransform(65.6,31.9);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFF00").s().p("AAeB4IhFhOIAAAAIAABOIgdAAIAAjvIAdAAIAACXIAAAAIBBhJIAlAAIhIBNIBOBUg");
	this.shape_2.setTransform(84.5,28);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFF00").s().p("Ag6A+QgWgXABglQAAgnAVgYQAXgXAlAAQAlAAAVAWQAVAXAAAnQAAAlgXAYQgWAYgkAAQgkAAgWgXgAgkgsQgOARgBAcQAAAcAPAQQAOAQAXAAQAZAAAMgPQANgQAAgeQAAgdgNgPQgMgQgZAAQgXAAgOAQg");
	this.shape_3.setTransform(65.6,31.9);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).to({state:[{t:this.shape_3},{t:this.shape_2}]},1).wait(1));

	// 图层_2
	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f().s("#FFFFFF").ss(2,1,1).p("ApXkhISvAAQCWAAAACWIAAEXQAACWiWAAIyvAAQiWAAAAiWIAAkXQAAiWCWAAg");
	this.shape_4.setTransform(75,29);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#0066FF").s().p("ApXEiQiWAAAAiWIAAkXQAAiWCWAAISvAAQCWAAAACWIAAEXQAACWiWAAg");
	this.shape_5.setTransform(75,29);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f().s("#FFFF00").ss(2,1,1).p("ApXkhISvAAQCWAAAACWIAAEXQAACWiWAAIyvAAQiWAAAAiWIAAkXQAAiWCWAAg");
	this.shape_6.setTransform(75,29);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_5},{t:this.shape_4}]}).to({state:[{t:this.shape_5},{t:this.shape_6}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-1,-1,152,60);


(lib.AlertCancelBtn = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层_2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AgNB4IAAjvIAbAAIAADvg");
	this.shape.setTransform(116.2,27);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AgzA/QgTgXAAgnQAAglAVgYQAWgYAfAAQAgAAARAVQASAUAAAlIAAAOIhwAAQABAZANAOQAOAPAXAAQAbAAAXgSIAAAaQgWAPgjAAQgiAAgUgWgAgZgwQgNANgDAUIBUAAQAAgWgLgMQgKgMgTABQgQAAgMAMg");
	this.shape_1.setTransform(103.8,30.9);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AgnA/QgVgYAAgjQAAgnAXgZQAXgYAlAAQAXAAAPAIIAAAcQgRgMgVAAQgXAAgQARQgPARAAAbQAAAdAOAQQAPAPAYAAQAVAAASgOIAAAbQgSALgbAAQgiAAgVgWg");
	this.shape_2.setTransform(87.8,30.9);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AAoBTIAAhbQAAgyglAAQgRAAgMAOQgMAOAAAWIAABbIgeAAIAAihIAeAAIAAAbIAAAAQASgfAiAAQAbAAANARQAPASAAAgIAABig");
	this.shape_3.setTransform(71.1,30.7);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AgyBIQgOgMAAgXQAAgsA2gHIAvgHQAAgnghAAQgcgBgYAUIAAgcQAYgPAfAAQA6AAAAA9IAABoIgcAAIAAgZIgBAAQgRAdggAAQgXAAgOgNgAAAAFQgUACgIAIQgHAHAAAOQAAALAIAHQAIAIAOAAQARAAANgOQAMgNAAgUIAAgPg");
	this.shape_4.setTransform(52.9,30.9);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AgnA/QgVgYAAgjQAAgnAXgZQAXgYAlAAQAXAAAPAIIAAAcQgRgMgVAAQgXAAgQARQgPARAAAbQAAAdAOAQQAPAPAYAAQAVAAASgOIAAAbQgSALgbAAQgiAAgVgWg");
	this.shape_5.setTransform(37.6,30.9);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFF00").s().p("AgNB4IAAjvIAbAAIAADvg");
	this.shape_6.setTransform(116.2,27);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFF00").s().p("AgzA/QgTgXAAgnQAAglAVgYQAWgYAfAAQAgAAARAVQASAUAAAlIAAAOIhwAAQABAZANAOQAOAPAXAAQAbAAAXgSIAAAaQgWAPgjAAQgiAAgUgWgAgZgwQgNANgDAUIBUAAQAAgWgLgMQgKgMgTABQgQAAgMAMg");
	this.shape_7.setTransform(103.8,30.9);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFF00").s().p("AgnA/QgVgYAAgjQAAgnAXgZQAXgYAlAAQAXAAAPAIIAAAcQgRgMgVAAQgXAAgQARQgPARAAAbQAAAdAOAQQAPAPAYAAQAVAAASgOIAAAbQgSALgbAAQgiAAgVgWg");
	this.shape_8.setTransform(87.8,30.9);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFF00").s().p("AAoBTIAAhbQAAgyglAAQgRAAgMAOQgMAOAAAWIAABbIgeAAIAAihIAeAAIAAAbIAAAAQASgfAiAAQAbAAANARQAPASAAAgIAABig");
	this.shape_9.setTransform(71.1,30.7);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FFFF00").s().p("AgyBIQgOgMAAgXQAAgsA2gHIAvgHQAAgnghAAQgcgBgYAUIAAgcQAYgPAfAAQA6AAAAA9IAABoIgcAAIAAgZIgBAAQgRAdggAAQgXAAgOgNgAAAAFQgUACgIAIQgHAHAAAOQAAALAIAHQAIAIAOAAQARAAANgOQAMgNAAgUIAAgPg");
	this.shape_10.setTransform(52.9,30.9);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FFFF00").s().p("AgnA/QgVgYAAgjQAAgnAXgZQAXgYAlAAQAXAAAPAIIAAAcQgRgMgVAAQgXAAgQARQgPARAAAbQAAAdAOAQQAPAPAYAAQAVAAASgOIAAAbQgSALgbAAQgiAAgVgWg");
	this.shape_11.setTransform(37.6,30.9);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).to({state:[{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6}]},1).wait(1));

	// 图层_1
	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f().s("#FFFFFF").ss(2,1,1).p("ApXkhISvAAQCWAAAACWIAAEXQAACWiWAAIyvAAQiWAAAAiWIAAkXQAAiWCWAAg");
	this.shape_12.setTransform(75,29);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#0066FF").s().p("ApXEiQiWAAAAiWIAAkXQAAiWCWAAISvAAQCWAAAACWIAAEXQAACWiWAAg");
	this.shape_13.setTransform(75,29);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f().s("#FFFF00").ss(2,1,1).p("ApXkhISvAAQCWAAAACWIAAEXQAACWiWAAIyvAAQiWAAAAiWIAAkXQAAiWCWAAg");
	this.shape_14.setTransform(75,29);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_13},{t:this.shape_12}]}).to({state:[{t:this.shape_13},{t:this.shape_14}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-1,-1,152,60);


(lib.AlertBg = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(6,69,159,0.2)").s().p("Eh3/A8AMAAAh3/MDv/AAAMAAAB3/g");
	this.shape.setTransform(768,384);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.AlertBg, new cjs.Rectangle(0,0,1536,768), null);


(lib.cashOutBtn = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层_2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AgNAnIAAg9IgSAAIAAgQIASAAIAAgaIASgGIAAAgIAbAAIAAAQIgbAAIAAA6QAAAKAEAFQAEAEAIAAQAGAAAFgDIAAAQQgGADgLAAQgcAAAAggg");
	this.shape.setTransform(52.5,-16.2);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AgtAJIAAg/IATAAIAAA9QAAAgAZAAQAMAAAIgJQAHgJAAgOIAAg9IAUAAIAABrIgUAAIAAgRIAAAAQgLATgVAAQgnAAAAgug");
	this.shape_1.setTransform(42.6,-14.6);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AgmAqQgPgQAAgZQAAgaAPgPQAPgPAZAAQAYgBAOAQQAOAOAAAaQAAAZgPAQQgPAPgYAAQgYAAgOgOgAgYgcQgJALAAARQAAATAJALQAJALAPAAQARgBAIgJQAJgMAAgTQAAgTgJgKQgIgKgRAAQgPAAgJALg");
	this.shape_2.setTransform(30.2,-14.7);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AgcAHIAAgNIA5AAIAAANg");
	this.shape_3.setTransform(19.6,-15.3);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AAbBQIAAg+QAAgggZABQgLAAgIAJQgJAJAAAOIAAA9IgTAAIAAifIATAAIAABGIABAAQAMgVAWABQAlAAAAArIAABCg");
	this.shape_4.setTransform(9.2,-17.3);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AgjAyIAAgTQAOAKAQAAQAWAAAAgPQAAgGgFgEQgFgEgNgFQgSgHgGgHQgGgHABgKQAAgOAMgJQAMgIAQAAQAOAAAMAEIAAASQgMgHgPAAQgJAAgFAEQgGAEAAAGQAAAHAEADQAFAEAMAGQATAGAGAHQAGAHABALQgBAOgMAJQgMAJgSgBQgRABgMgHg");
	this.shape_5.setTransform(-1.6,-14.7);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AghAwQgJgIAAgPQAAgdAkgFIAegEQAAgbgVAAQgTAAgQANIAAgTQAQgKAUABQAngBAAApIAABFIgTAAIAAgRIAAAAQgLAUgVgBQgQABgJgJgAAAADQgNACgFAFQgFAEAAAKQAAAHAFAFQAGAFAIAAQAMAAAIgJQAJgIgBgOIAAgKg");
	this.shape_6.setTransform(-12.1,-14.7);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AgaAqQgOgPAAgZQAAgZAPgQQAPgQAaAAQAOAAALAEIAAAUQgMgIgNAAQgQAAgKALQgLALABASQAAASAJALQAKALAQAAQAOgBAMgIIAAARQgNAIgRgBQgXAAgOgOg");
	this.shape_7.setTransform(-22.3,-14.7);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#F7C325").s().p("Ag5BaIksAAQgpAAgegeQgdgcAAgpIAAhGQAAgqAdgdQAegdApAAILLAAQApAAAdAdQAeAdAAAqIAABGQAAApgeAcQgdAegpAAIkWAAQggA2g5AkQASg5hCghg");
	this.shape_8.setTransform(14.7,-11.4);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]},1).to({state:[]},1).wait(2));

	// 图层_1
	this.instance = new lib.cashOut();
	this.instance.parent = this;
	this.instance.setTransform(0,0,0.3,0.3);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(4));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,30,34.6);


(lib.cashInBtn = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层_2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AAbA3IAAg8QAAghgZAAQgLAAgIAJQgJAJAAAPIAAA8IgTAAIAAhrIATAAIAAASIABAAQAMgUAWAAQASAAAJALQAKALAAAWIAABBg");
	this.shape.setTransform(42.1,-14.8);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AgJBPIAAhrIASAAIAABrgAgIg5QgDgEAAgFQAAgFAEgEQADgDAEAAQAFAAAEADQADADAAAGQAAAFgDAEQgEACgFAAQgEAAgEgCg");
	this.shape_1.setTransform(33.3,-17.2);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AgcAHIAAgNIA5AAIAAANg");
	this.shape_2.setTransform(26.4,-15.3);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AAbBQIAAg+QAAgggZABQgLAAgIAJQgJAJAAAOIAAA9IgTAAIAAifIATAAIAABGIABAAQAMgVAWABQAlAAAAArIAABCg");
	this.shape_3.setTransform(15.9,-17.3);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AgjAyIAAgTQAOAKAQAAQAWAAAAgPQAAgGgFgEQgFgEgNgFQgSgHgGgHQgGgHABgKQAAgOAMgJQAMgIAQAAQAOAAAMAEIAAASQgMgHgPAAQgJAAgFAEQgGAEAAAGQAAAHAEADQAFAEAMAGQATAGAGAHQAGAHABALQgBAOgMAJQgMAJgSgBQgRABgMgHg");
	this.shape_4.setTransform(5.2,-14.7);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AghAwQgJgIAAgPQAAgdAkgFIAegEQAAgbgVAAQgTAAgQANIAAgTQAQgKAUABQAngBAAApIAABFIgTAAIAAgRIAAAAQgLAUgVgBQgQABgJgJgAAAADQgNACgFAFQgFAEAAAKQAAAHAFAFQAGAFAIAAQAMAAAIgJQAJgIgBgOIAAgKg");
	this.shape_5.setTransform(-5.4,-14.7);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AgaAqQgOgPAAgZQAAgZAPgQQAPgQAaAAQAOAAALAEIAAAUQgMgIgNAAQgQAAgKALQgLALABASQAAASAJALQAKALAQAAQAOgBAMgIIAAARQgNAIgRgBQgXAAgOgOg");
	this.shape_6.setTransform(-15.6,-14.7);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#F7C325").s().p("Ag5BaIksAAQgpAAgegeQgdgcAAgpIAAhGQAAgqAdgdQAegdApAAILLAAQApAAAdAdQAeAdAAAqIAABGQAAApgeAcQgdAegpAAIkWAAQggA2g5AkQASg5hCghg");
	this.shape_7.setTransform(14.7,-11.4);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]},1).to({state:[]},1).wait(2));

	// 图层_1
	this.instance = new lib.cashIn();
	this.instance.parent = this;
	this.instance.setTransform(0,0,0.35,0.35);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(4));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,35,35);


(lib.BetTotalAmount = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层_2
	this.tf = new lib.EmptyNum();
	this.tf.name = "tf";
	this.tf.parent = this;
	this.tf.setTransform(71.6,65,1,1,0,0,0,46.6,20);

	this.timeline.addTween(cjs.Tween.get(this.tf).wait(1));

	// 图层_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AgdBMQgJAAgFgFQgGgGADgJIALhNIgXAAIADgcIAXAAIADgSIgGgIIA/AAIgFAaIAkAAIgGAcIghAAIgKBFIAdAAIgGAcg");
	this.shape.setTransform(173.1,22.6);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AAJA/IAOhhIghAAIgPBhIg5AAIARh1IgJgIICdAAIgRB9g");
	this.shape_1.setTransform(158.5,23.9);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AAIA/IACgLIhcALIARh1IgJgIIBCAAIgMBZIAjgEIALhNIgJgIIBCAAIgRB9g");
	this.shape_2.setTransform(141.4,23.9);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("Ag+A/QgJAAgEgFQgFgGAAgJIAPhpICAAAQAJAAAEAHQAFAHAAAJIgPBmgAgWAjIAhAAIAMhFIgiAAg");
	this.shape_3.setTransform(124.5,23.9);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AAmA/IAOhhIgXAAIgPBhIgtAAIAPhhIgXAAIgOBhIg0AAIARh1IgGgIIDIAAIgQB9g");
	this.shape_4.setTransform(105.4,23.9);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("Ag9A/QgJAAgEgFQgEgGAAgJIAIg2IBWAAIAEgXIgdAAIgDAMIg6AAIAJgoICMAAIgRBvIALAOgAgVAjIAcAAIADgSIgcAAg");
	this.shape_5.setTransform(86.6,23.9);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AAIA/IAPhhIgiAAIgOBhIg6AAIASh1IgJgIICeAAIgSB9g");
	this.shape_6.setTransform(53.9,23.9);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AgnBVIARh1IgJgJIBCAAIgSB+gAgTgyIADgiIA4AAIgFAig");
	this.shape_7.setTransform(41.1,21.7);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("AABA/IgHg/IgaA/IguAAIgJh1IgFgIIAwAAIAGA+IAXg+IAhAAIAHA+IAWg+IAuAAIguB9g");
	this.shape_8.setTransform(28,23.9);

	this.instance = new lib.MutilGoldCoins();
	this.instance.parent = this;
	this.instance.setTransform(242.4,10,0.603,0.603,0,0,180);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.BetTotalAmount, new cjs.Rectangle(16,0,226.4,85), null);


(lib.BettingListItem = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层_1
	this.numMc = new lib.snailNumber();
	this.numMc.name = "numMc";
	this.numMc.parent = this;
	this.numMc.setTransform(352.7,16,0.588,0.588,0,0,0,15.4,15.2);

	this.noTf = new cjs.Text("1", "20px 'Microsoft YaHei'", "#2A6EFF");
	this.noTf.name = "noTf";
	this.noTf.lineHeight = 28;
	this.noTf.lineWidth = 37;
	this.noTf.parent = this;
	this.noTf.setTransform(2,8);

	this.betTf = new cjs.Text("0.001", "20px 'Microsoft YaHei'", "#2A6EFF");
	this.betTf.name = "betTf";
	this.betTf.lineHeight = 28;
	this.betTf.lineWidth = 64;
	this.betTf.parent = this;
	this.betTf.setTransform(223,8);

	this.addrTf = new cjs.Text("nsD4...iEww", "20px 'Microsoft YaHei'", "#2A6EFF");
	this.addrTf.name = "addrTf";
	this.addrTf.lineHeight = 28;
	this.addrTf.lineWidth = 129;
	this.addrTf.parent = this;
	this.addrTf.setTransform(64,8);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.addrTf},{t:this.betTf},{t:this.noTf},{t:this.numMc}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.BettingListItem, new cjs.Rectangle(0,3.5,365.1,32.9), null);


(lib.BettingList = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层_3
	this.round = new lib.EmptyNum();
	this.round.name = "round";
	this.round.parent = this;
	this.round.setTransform(156.8,31,0.75,0.75,0,0,0,46.6,20);

	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AgeA/IAGgiIAsAAIgFAigAgTgcIAFgiIAtAAIgGAig");
	this.shape.setTransform(113.8,29.9);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AhEBdQgJABgEgGQgFgGAAgIIAPhqIBbAAIAIg9IA7AAIgaC6gAgdBBIAkAAIAKhFIgjAAg");
	this.shape_1.setTransform(100,26.9);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AAIA/IAPhhIgiAAIgOBhIg6AAIASh1IgJgIICeAAIgSB9g");
	this.shape_2.setTransform(80.6,29.9);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AAIA/IACgLIhdALIASh1IgJgIIBCAAIgMBZIAjgEIALhNIgJgIIBDAAIgSB9g");
	this.shape_3.setTransform(61.5,29.9);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("Ag+A/QgJAAgEgFQgFgGAAgJIAPhpICAAAQAJAAAEAHQAFAHAAAJIgPBmgAgWAjIAhAAIAMhFIgiAAg");
	this.shape_4.setTransform(42.6,29.9);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AhQA/IARh1IgGgIIA6AAIgFAoIAngoIA6AAIhhBVIgGAog");
	this.shape_5.setTransform(25.7,29.9);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#E37E02").s().p("AgZAxIAAhgIARAAIAAAUIAAAAQAIgWARABQAGAAADABIAAARQgEgCgIAAQgKgBgFAKQgHAJAAAPIAAAwg");
	this.shape_6.setTransform(406.8,116.1);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#E37E02").s().p("AgeAmQgMgOAAgXQAAgWANgOQANgPASAAQATAAALAMQALAMAAAWIAAAIIhDAAQAAAQAIAJQAIAIAOAAQAQAAAOgKIAAAOQgNAKgVAAQgUAAgMgNgAgPgdQgHAIgCANIAyAAQAAgOgHgHQgGgHgLAAQgJAAgIAHg");
	this.shape_7.setTransform(397.6,116.2);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#E37E02").s().p("AgbA5IAAAAIAAAOIgRAAIAAiPIARAAIAAA/IAAAAQAMgTAVAAQASAAALANQAKANAAAVQAAAZgMAPQgMAOgUAAQgSAAgKgQgAgTgEQgIAIAAAOIAAANQAAAMAHAIQAIAIAMAAQAMAAAIgLQAIgKAAgTQAAgPgHgIQgIgKgMAAQgMAAgIAKg");
	this.shape_8.setTransform(387,114);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#E37E02").s().p("AA0AyIAAg3QAAgQgEgHQgGgHgLAAQgJAAgHAJQgHAJAAAMIAAA3IgQAAIAAg5QAAgcgVAAQgKAAgHAJQgGAIAAANIAAA3IgRAAIAAhgIARAAIAAAPIABAAQAKgSAUAAQAJAAAIAGQAHAFACAJQALgUAWAAQAgAAAAAoIAAA7g");
	this.shape_9.setTransform(372.6,116.1);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#E37E02").s().p("AgoAIIAAg5IARAAIAAA3QAAAdAXAAQAKAAAHgIQAHgIAAgNIAAg3IARAAIAABgIgRAAIAAgPIgBAAQgJASgTAAQgjAAAAgqg");
	this.shape_10.setTransform(358.4,116.3);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#E37E02").s().p("AAYAyIAAg3QAAgegWAAQgLAAgGAJQgIAIAAANIAAA3IgRAAIAAhgIARAAIAAAQIAAAAQALgTAVAAQAQAAAHALQAJAKAAATIAAA7g");
	this.shape_11.setTransform(347.5,116.1);

	this.item11 = new lib.BettingListItem();
	this.item11.name = "item11";
	this.item11.parent = this;
	this.item11.setTransform(220.5,622.5,1,1,0,0,0,198,16.5);

	this.item10 = new lib.BettingListItem();
	this.item10.name = "item10";
	this.item10.parent = this;
	this.item10.setTransform(220.5,579.5,1,1,0,0,0,198,16.5);

	this.item9 = new lib.BettingListItem();
	this.item9.name = "item9";
	this.item9.parent = this;
	this.item9.setTransform(220.5,537,1,1,0,0,0,198,16.5);

	this.item8 = new lib.BettingListItem();
	this.item8.name = "item8";
	this.item8.parent = this;
	this.item8.setTransform(220.5,494.5,1,1,0,0,0,198,16.5);

	this.item7 = new lib.BettingListItem();
	this.item7.name = "item7";
	this.item7.parent = this;
	this.item7.setTransform(220.5,452,1,1,0,0,0,198,16.5);

	this.item6 = new lib.BettingListItem();
	this.item6.name = "item6";
	this.item6.parent = this;
	this.item6.setTransform(220.5,409.5,1,1,0,0,0,198,16.5);

	this.item5 = new lib.BettingListItem();
	this.item5.name = "item5";
	this.item5.parent = this;
	this.item5.setTransform(220.5,367,1,1,0,0,0,198,16.5);

	this.item4 = new lib.BettingListItem();
	this.item4.name = "item4";
	this.item4.parent = this;
	this.item4.setTransform(220.5,324.5,1,1,0,0,0,198,16.5);

	this.item3 = new lib.BettingListItem();
	this.item3.name = "item3";
	this.item3.parent = this;
	this.item3.setTransform(220.5,282,1,1,0,0,0,198,16.5);

	this.item2 = new lib.BettingListItem();
	this.item2.name = "item2";
	this.item2.parent = this;
	this.item2.setTransform(220.5,239.5,1,1,0,0,0,198,16.5);

	this.item1 = new lib.BettingListItem();
	this.item1.name = "item1";
	this.item1.parent = this;
	this.item1.setTransform(220.5,197,1,1,0,0,0,198,16.5);

	this.item0 = new lib.BettingListItem();
	this.item0.name = "item0";
	this.item0.parent = this;
	this.item0.setTransform(220.5,154.5,1,1,0,0,0,198,16.5);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#E37E02").s().p("AgHAIQgDgDAAgFQAAgEADgDQADgDAEAAQAFAAADADQADAEAAADQAAAFgDADQgDADgFAAQgEAAgDgDg");
	this.shape_12.setTransform(41.9,120.1);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#E37E02").s().p("AgiAlQgNgNAAgXQAAgXANgOQAOgOAWAAQAVAAANANQAMAOAAAXQAAAWgNAPQgNAOgWAAQgVAAgNgOgAgVgaQgJAKAAARQAAAQAJAKQAIAKANAAQAPAAAIgKQAIgKAAgRQAAgRgIgJQgIgKgPAAQgNAAgIAKg");
	this.shape_13.setTransform(34,116.2);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#E37E02").s().p("AAYAyIAAg3QAAgegWAAQgLAAgGAJQgIAIAAANIAAA3IgRAAIAAhgIARAAIAAAQIABAAQALgTATAAQARAAAIALQAIAKAAATIAAA7g");
	this.shape_14.setTransform(22.9,116.1);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#E37E02").s().p("AgLAjIAAg3IgRAAIAAgOIARAAIAAgYIAQgFIAAAdIAYAAIAAAOIgYAAIAAA0QAAAJADAFQADAEAIAAQAFAAAFgDIAAAOQgFADgKAAQgaAAABgdg");
	this.shape_15.setTransform(286.5,114.9);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#E37E02").s().p("AgeAmQgMgOAAgXQAAgWANgOQANgPASAAQATAAALAMQALAMAAAWIAAAIIhDAAQAAAQAIAJQAIAIAOAAQAQAAAOgKIAAAOQgNAKgVAAQgUAAgMgNgAgPgdQgHAIgCANIAyAAQAAgOgHgHQgGgHgLAAQgJAAgIAHg");
	this.shape_16.setTransform(278.1,116.2);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#E37E02").s().p("AgbA5IAAAAIAAAOIgRAAIAAiPIARAAIAAA/IAAAAQAMgTAVAAQASAAALANQAKANAAAVQAAAZgMAPQgMAOgUAAQgSAAgKgQgAgTgEQgIAIAAAOIAAANQAAAMAHAIQAIAIAMAAQAMAAAIgLQAIgKAAgTQAAgPgHgIQgIgKgMAAQgMAAgIAKg");
	this.shape_17.setTransform(267.5,114);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#E37E02").s().p("AggAtIAAgRQANAJAPAAQATAAAAgOQAAgFgEgEQgEgDgNgFQgQgGgFgGQgFgGAAgKQAAgMALgIQALgIAPAAQANAAAKAEIAAARQgLgHgOAAQgHAAgFAEQgFADAAAGQAAAGAEADQADAEAMAFQAQAFAGAGQAGAGAAAKQAAANgLAIQgLAIgQAAQgQAAgLgGg");
	this.shape_18.setTransform(202.1,116.2);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#E37E02").s().p("AggAtIAAgRQANAJAPAAQATAAAAgOQAAgFgEgEQgEgDgNgFQgQgGgFgGQgFgGAAgKQAAgMALgIQALgIAPAAQANAAAKAEIAAARQgLgHgOAAQgHAAgFAEQgFADAAAGQAAAGAEADQADAEAMAFQAQAFAGAGQAGAGAAAKQAAANgLAIQgLAIgQAAQgQAAgLgGg");
	this.shape_19.setTransform(193.7,116.2);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#E37E02").s().p("AgeAmQgMgOAAgXQAAgWANgOQANgPASAAQATAAALAMQALAMAAAWIAAAIIhDAAQAAAQAIAJQAIAIAOAAQAQAAAOgKIAAAOQgNAKgVAAQgUAAgMgNgAgPgdQgHAIgCANIAyAAQAAgOgHgHQgGgHgLAAQgJAAgIAHg");
	this.shape_20.setTransform(184.4,116.2);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#E37E02").s().p("AgZAxIAAhgIARAAIAAAUIAAAAQAIgWARABQAGAAADABIAAARQgFgCgHAAQgKgBgFAKQgHAJAAAPIAAAwg");
	this.shape_21.setTransform(176.6,116.1);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#E37E02").s().p("AgiA8QgLgNABgXQgBgYAMgNQANgPAUAAQATAAAJAQIAAAAIAAg8IASAAIAACPIgSAAIAAgQIAAAAQgLASgWAAQgSAAgLgNgAgTgDQgIAJAAASQAAAQAIAJQAHAKAMAAQAMAAAIgJQAIgKAAgOIAAgNQAAgMgIgHQgHgIgMAAQgMAAgIALg");
	this.shape_22.setTransform(166.4,114);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#E37E02").s().p("AgiA8QgLgNABgXQgBgYAMgNQANgPAUAAQASAAAJAQIABAAIAAg8IARAAIAACPIgRAAIAAgQIgBAAQgKASgWAAQgSAAgLgNgAgTgDQgIAJAAASQAAAQAIAJQAHAKAMAAQAMAAAIgJQAIgKAAgOIAAgNQAAgMgIgHQgHgIgMAAQgMAAgIALg");
	this.shape_23.setTransform(154.9,114);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#E37E02").s().p("AgeArQgIgIAAgNQAAgaAggEIAcgFQAAgXgUAAQgQAAgPAMIAAgRQAPgJASAAQAjAAAAAlIAAA9IgRAAIAAgPIAAAAQgLASgSAAQgOAAgJgIgAAAADQgMACgEAEQgFAEAAAIQAAAHAFAEQAFAFAIAAQAKAAAIgIQAHgIAAgMIAAgJg");
	this.shape_24.setTransform(144.2,116.2);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#E37E02").s().p("AgMAjIAAg3IgQAAIAAgOIAQAAIAAgYIARgFIAAAdIAYAAIAAAOIgYAAIAAA0QAAAJADAFQADAEAIAAQAGAAAEgDIAAAOQgGADgJAAQgaAAAAgdg");
	this.shape_25.setTransform(130.7,114.9);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#E37E02").s().p("AgeAmQgMgOAAgXQAAgWANgOQANgPASAAQATAAALAMQALAMAAAWIAAAIIhDAAQAAAQAIAJQAIAIAOAAQAQAAAOgKIAAAOQgNAKgVAAQgUAAgMgNgAgPgdQgHAIgCANIAyAAQAAgOgHgHQgGgHgLAAQgJAAgIAHg");
	this.shape_26.setTransform(122.4,116.2);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#E37E02").s().p("AgIBIIAAiPIARAAIAACPg");
	this.shape_27.setTransform(114.8,113.9);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#E37E02").s().p("AgHBIIAAiPIAQAAIAACPg");
	this.shape_28.setTransform(110,113.9);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#E37E02").s().p("AgeArQgIgIAAgNQAAgaAggEIAcgFQAAgXgUAAQgQAAgPAMIAAgRQAPgJASAAQAjAAAAAlIAAA9IgRAAIAAgPIAAAAQgLASgSAAQgOAAgJgIgAAAADQgMACgEAEQgFAEAAAIQAAAHAFAEQAFAFAIAAQAKAAAIgIQAHgIAAgMIAAgJg");
	this.shape_29.setTransform(102.4,116.2);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#E37E02").s().p("AAWAwIgThDIgCgJIAAAAQAAADgCAGIgUBDIgSAAIgdhgIASAAIATBHIACAJIAAAAIACgJIAVhHIAPAAIAVBHIABAJIAAAAIACgJIAThHIARAAIgdBgg");
	this.shape_30.setTransform(90.6,116.2);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#E37E02").s().p("AgSA3IAAhXIgaAAIAAgWIAaAAIAAgkIAZgJIAAAtIAmAAIAAAWIgmAAIAABSQAAAPAGAGQAEAHANAAQAIAAAHgGIAAAXQgJAFgOAAQgoAAAAgtg");
	this.shape_31.setTransform(270.8,72.1);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#E37E02").s().p("AgyBGIAAgbQAUAPAXAAQAfAAAAgVQAAgJgHgFQgHgGgUgIQgZgJgIgKQgHgKAAgOQAAgUARgMQARgMAYAAQATAAARAHIAAAaQgRgLgVAAQgMAAgJAFQgHAGAAAJQAAAJAFAFQAGAFATAIQAZAJAJAKQAJAKAAAPQAAAUgRAMQgRAMgaAAQgYAAgRgJg");
	this.shape_32.setTransform(259.4,74.1);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#E37E02").s().p("AgMBvIAAiWIAZAAIAACWgAgLhRQgFgFAAgHQAAgHAFgFQAFgFAGAAQAHAAAGAFQAEAFAAAHQAAAHgEAFQgGAFgHAAQgGAAgFgFg");
	this.shape_33.setTransform(249,70.6);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#E37E02").s().p("AgMBwIAAjfIAZAAIAADfg");
	this.shape_34.setTransform(241.5,70.5);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#E37E02").s().p("Ag7BnIAAgaQAZAOAYAAQA2AAAAg6IAAgQIgBAAQgRAdghAAQgcgBgRgUQgSgUABghQAAgmASgXQATgXAfAAQAeAAAOAZIABAAIAAgVIAaAAIAACKQAABThQAAQgcAAgVgKgAgehKQgMARAAAbQAAAYALAPQAMAPATgBQATAAAMgOQANgNAAgWIAAgVQAAgSgMgMQgMgMgRAAQgVAAgMAPg");
	this.shape_35.setTransform(220.1,77.5);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("#E37E02").s().p("AAlBOIAAhWQAAgugiAAQgRAAgLANQgMANABAUIAABWIgbAAIAAiXIAbAAIAAAaIABAAQAQgdAgAAQAZAAANAPQANARAAAeIAABcg");
	this.shape_36.setTransform(203.2,74);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("#E37E02").s().p("AgNBvIAAiWIAaAAIAACWgAgLhRQgFgFAAgHQAAgHAFgFQAFgFAGAAQAHAAAFAFQAFAFAAAHQAAAHgFAFQgFAFgHAAQgHAAgEgFg");
	this.shape_37.setTransform(190.7,70.6);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f("#E37E02").s().p("AgSA3IAAhXIgaAAIAAgWIAaAAIAAgkIAZgJIAAAtIAmAAIAAAWIgmAAIAABSQAAAPAGAGQAFAHAMAAQAIAAAHgGIAAAXQgJAFgOAAQgoAAAAgtg");
	this.shape_38.setTransform(181.6,72.1);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f("#E37E02").s().p("AgSA3IAAhXIgaAAIAAgWIAaAAIAAgkIAZgJIAAAtIAmAAIAAAWIgmAAIAABSQAAAPAGAGQAFAHALAAQAJAAAHgGIAAAXQgIAFgPAAQgoAAAAgtg");
	this.shape_39.setTransform(171.2,72.1);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f("#E37E02").s().p("AgvA7QgSgVgBglQAAgiAVgWQATgXAdAAQAfAAAQATQAQATAAAiIAAANIhoAAQAAAYANANQANAOAVAAQAaAAAVgRIAAAYQgUAOghAAQggAAgSgUgAgYgtQgLAMgDAUIBOAAQgBgVgJgLQgKgLgRAAQgPAAgMALg");
	this.shape_40.setTransform(158.2,74.1);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f("#E37E02").s().p("AgqBZIgBAAIAAAVIgaAAIAAjfIAaAAIAABjIABAAQARgeAhAAQAdAAARAVQAQAUAAAhQAAAngSAWQgTAXgfAAQgdAAgPgZgAgegHQgNANAAAWIAAAUQAAASAMANQAMANASAAQAUAAAMgRQAMgQAAgdQAAgYgLgNQgLgOgTAAQgUAAgMAOg");
	this.shape_41.setTransform(141.7,70.7);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_41},{t:this.shape_40},{t:this.shape_39},{t:this.shape_38},{t:this.shape_37},{t:this.shape_36},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.item0},{t:this.item1},{t:this.item2},{t:this.item3},{t:this.item4},{t:this.item5},{t:this.item6},{t:this.item7},{t:this.item8},{t:this.item9},{t:this.item10},{t:this.item11},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape},{t:this.round}]}).wait(1));

	// 图层_2
	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f().s("#B4D3FF").ss(1,1,1).p("EghHgeHMBCPAAAEghHgXdMBCPAAAEghHgQ0MBCPAAAEghHgKKMBCPAAAEghHgDhMBCPAAAEghHADIMBCPAAAEghHAJyMBCPAAAEghHAQbMBCPAAAEghHAXEMBCPAAAEghHAduMBCPAAAEghHAkXMBCPAAAEghHArBMBCPAAAEghHgjqMBCPAAAEghHgrAMBCPAAA");
	this.shape_42.setTransform(212,324.3);

	this.timeline.addTween(cjs.Tween.get(this.shape_42).wait(1));

	// 图层_1
	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f("rgba(255,255,255,0.6)").s().p("EgcbAyjQh8AAhYhYQhYhYAAh8MAAAhbtQAAh8BYhYQBYhYB8AAMA43AAAQB8AABYBYQBYBYAAB8MAAABbtQAAB8hYBYQhYBYh8AAg");
	this.shape_43.setTransform(212,323.5);

	this.timeline.addTween(cjs.Tween.get(this.shape_43).wait(1));

}).prototype = getMCSymbolPrototype(lib.BettingList, new cjs.Rectangle(-1,0,426,647), null);


(lib.AlertInstallArConnect = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层_1
	this.installBtn = new lib.AlertInstallBtn();
	this.installBtn.name = "installBtn";
	this.installBtn.parent = this;
	this.installBtn.setTransform(896,449.9);
	new cjs.ButtonHelper(this.installBtn, 0, 1, 1);

	this.cancelBtn = new lib.AlertCancelBtn();
	this.cancelBtn.name = "cancelBtn";
	this.cancelBtn.parent = this;
	this.cancelBtn.setTransform(611.5,482.9,1,1,0,0,0,83.5,33);
	new cjs.ButtonHelper(this.cancelBtn, 0, 1, 1);

	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFF00").s().p("AgUBvQgGgFAAgIQAAgHAGgGQAFgFAIAAQAHAAAGAFQAFAGAAAHQAAAIgFAFQgGAGgGAAQgJAAgFgGgAgWAyQgEgKAAgNQAAgJAFgKQAEgJARgSQATgRAEgJQAEgJAAgHQAAgPgKgIQgKgIgOAAQgbAAgUAVIAAgeQAYgPAbAAQAaAAAQAOQAQANAAAYQAAALgFAMQgEALgVAUQgPANgGAIQgEAJAAAJQAAALAEALg");
	this.shape.setTransform(840.7,349.6);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFF00").s().p("AgTA7IAAhdIgcAAIAAgYIAcAAIAAgnIAbgJIAAAwIAoAAIAAAYIgoAAIAABXQAAAQAFAHQAGAHAMAAQAKAAAHgFIAAAYQgJAFgQAAQgqAAAAgwg");
	this.shape_1.setTransform(827.5,350.7);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFF00").s().p("AgOB2IAAihIAcAAIAAChgAgMhXQgFgFAAgHQAAgIAFgGQAFgEAHAAQAIAAAFAEQAFAGAAAIQAAAHgFAFQgFAFgIAAQgHAAgFgFg");
	this.shape_2.setTransform(818,349.2);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFF00").s().p("AgNB4IAAjvIAbAAIAADvg");
	this.shape_3.setTransform(801.1,349);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFF00").s().p("AgNB4IAAjvIAbAAIAADvg");
	this.shape_4.setTransform(793.1,349);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFF00").s().p("AgyBIQgOgNAAgVQAAgtA2gHIAvgHQAAgnghAAQgcAAgYATIAAgbQAYgQAfAAQA6AAAAA9IAABoIgcAAIAAgZIgBAAQgRAdggAAQgXAAgOgNgAAAAFQgUACgIAIQgHAHAAAOQAAALAIAHQAIAIAOgBQARAAANgMQAMgOAAgUIAAgPg");
	this.shape_5.setTransform(780.4,352.9);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFF00").s().p("AgTA7IAAhdIgcAAIAAgYIAcAAIAAgnIAbgJIAAAwIAoAAIAAAYIgoAAIAABXQAAAQAGAHQAFAHANAAQAJAAAHgFIAAAYQgJAFgQAAQgqAAAAgwg");
	this.shape_6.setTransform(766.9,350.7);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFF00").s().p("Ag2BLIAAgdQAWAPAZAAQAhABAAgWQAAgKgIgGQgHgGgVgIQgbgKgIgLQgJgKAAgQQAAgVATgNQASgNAaAAQAUAAASAHIAAAcQgSgLgXAAQgNAAgJAFQgIAHAAAJQAAAKAGAFQAGAGAVAIQAbAKAJAKQAKALAAAQQAAAWgSANQgTANgcAAQgZAAgTgKg");
	this.shape_7.setTransform(754.6,352.9);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFF00").s().p("AAoBTIAAhbQAAgygkAAQgTAAgMAOQgMAOAAAVIAABcIgcAAIAAihIAcAAIAAAbIABAAQASgfAiAAQAbAAANARQAOARABAhIAABig");
	this.shape_8.setTransform(738.4,352.7);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFF00").s().p("AgOB2IAAihIAcAAIAAChgAgMhXQgFgFAAgHQAAgIAFgGQAFgEAHAAQAIAAAFAEQAFAGAAAIQAAAHgFAFQgFAFgIAAQgHAAgFgFg");
	this.shape_9.setTransform(725,349.2);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FFFF00").s().p("Ag6A+QgWgXAAglQAAgoAXgWQAWgYAlAAQAlAAAVAXQAVAWgBAnQAAAlgVAYQgXAYgkAAQgkAAgWgXgAglgrQgOAQAAAcQAAAcAPAQQAOAQAWAAQAaAAAMgPQANgRAAgdQAAgcgNgQQgMgQgaAAQgXAAgOARg");
	this.shape_10.setTransform(702.6,352.9);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FFFF00").s().p("AgUA7IAAhdIgcAAIAAgYIAcAAIAAgnIAcgJIAAAwIAoAAIAAAYIgoAAIAABXQAAAQAFAHQAGAHAMAAQAKAAAHgFIAAAYQgJAFgQAAQgqAAgBgwg");
	this.shape_11.setTransform(687.4,350.7);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#FFFF00").s().p("AgTA7IAAhdIgcAAIAAgYIAcAAIAAgnIAbgJIAAAwIAoAAIAAAYIgoAAIAABXQAAAQAFAHQAGAHAMAAQAKAAAHgFIAAAYQgJAFgQAAQgqAAAAgwg");
	this.shape_12.setTransform(667.3,350.7);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#FFFF00").s().p("AAoBTIAAhbQAAgyglAAQgRAAgMAOQgNAOAAAVIAABcIgdAAIAAihIAdAAIAAAbIABAAQASgfAiAAQAbAAAOARQANARAAAhIAABig");
	this.shape_13.setTransform(652.7,352.7);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#FFFF00").s().p("AgyBIQgOgNAAgVQAAgtA2gHIAvgHQAAgnghAAQgcAAgYATIAAgbQAYgQAfAAQA6AAAAA9IAABoIgcAAIAAgZIgBAAQgRAdggAAQgXAAgOgNgAAAAFQgUACgIAIQgHAHAAAOQAAALAIAHQAIAIAOgBQARAAANgMQAMgOAAgUIAAgPg");
	this.shape_14.setTransform(634.6,352.9);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#FFFF00").s().p("AAlBRIgghxQgDgHAAgIIgBAAQAAAGgCAJIgjBxIgdAAIgxihIAeAAIAhB3QABAFABAKIABAAQABgIACgHIAjh3IAZAAIAiB4IADAOIABAAIACgOIAgh4IAcAAIgwChg");
	this.shape_15.setTransform(614.8,352.9);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#FFFF00").s().p("AhEAOIAAhgIAdAAIAABcQAAAxAlAAQASAAAMgNQALgOAAgWIAAhcIAdAAIAAChIgdAAIAAgZIAAAAQgRAdggAAQg5AAgBhFg");
	this.shape_16.setTransform(584.8,353.1);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#FFFF00").s().p("Ag6A+QgWgXAAglQAAgoAXgWQAWgYAlAAQAlAAAVAXQAVAWAAAnQgBAlgVAYQgXAYgkAAQgkAAgWgXgAgkgrQgPAQAAAcQAAAcAPAQQAOAQAWAAQAaAAAMgPQANgRAAgdQAAgcgNgQQgMgQgaAAQgXAAgNARg");
	this.shape_17.setTransform(566.2,352.9);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#FFFF00").s().p("AhHB1IAAgZQAIADAIAAQAUAAAJgXIANgeIhAigIAgAAIAqB4IADAOIABAAIADgNIAsh5IAeAAIhKC5QgTA0gmAAQgKAAgIgCg");
	this.shape_18.setTransform(548.7,356.7);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#FFFF00").s().p("Ag6A+QgWgXAAglQABgoAVgWQAXgYAlAAQAlAAAVAXQAVAWAAAnQAAAlgXAYQgWAYgkAAQglAAgVgXgAgkgrQgPAQAAAcQAAAcAPAQQAOAQAXAAQAZAAAMgPQANgRAAgdQAAgcgNgQQgMgQgZAAQgYAAgNARg");
	this.shape_19.setTransform(522.4,352.9);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#FFFF00").s().p("AhbBxIAAjhIBAAAQAzAAAiAdQAiAeAAAzQAAA0giAgQgiAfg1AAgAg+BXIAhAAQAqABAYgYQAZgYAAgpQAAgrgZgVQgZgWgoABIgiAAg");
	this.shape_20.setTransform(502.2,349.7);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#FFFFFF").s().p("AgWAnIAThNIAaAAIgYBNg");
	this.shape_21.setTransform(1061,296.6);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#FFFFFF").s().p("AgUA7IAAhdIgcAAIAAgYIAcAAIAAgnIAcgJIAAAwIAoAAIAAAYIgoAAIAABXQAAAQAFAHQAGAHAMAAQAKAAAHgFIAAAYQgJAFgQAAQgrAAAAgwg");
	this.shape_22.setTransform(1052.4,286);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#FFFFFF").s().p("AgzA/QgTgWAAgoQAAgkAVgZQAWgYAfAAQAgAAARAVQASAUAAAlIAAAOIhwAAQABAZANAOQAOAPAXAAQAbgBAXgRIAAAZQgWAQgjAAQgiAAgUgWgAgZgwQgNANgDAUIBUAAQAAgWgLgMQgKgMgTABQgQAAgMAMg");
	this.shape_23.setTransform(1038.5,288.2);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#FFFFFF").s().p("AhHB1IAAgZQAIADAIAAQAUAAAJgXIANgeIhAigIAgAAIAqB4IADAOIABAAIADgNIAsh5IAeAAIhKC5QgTA0gmAAQgKAAgIgCg");
	this.shape_24.setTransform(1022,292);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#FFFFFF").s().p("AgTA7IAAhdIgcAAIAAgYIAcAAIAAgnIAbgJIAAAwIAoAAIAAAYIgoAAIAABXQAAAQAGAHQAFAHANAAQAJAAAHgFIAAAYQgJAFgQAAQgqAAAAgwg");
	this.shape_25.setTransform(999.5,286);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#FFFFFF").s().p("AgnA/QgVgYAAgjQAAgnAXgZQAXgYAlAAQAXAAAPAIIAAAcQgRgMgVAAQgXAAgQARQgPARAAAcQAAAcAOAQQAPAPAYAAQAVAAASgOIAAAbQgSALgbAAQgiAAgVgWg");
	this.shape_26.setTransform(986.6,288.2);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#FFFFFF").s().p("AgzA/QgTgWAAgoQAAgkAVgZQAWgYAfAAQAgAAARAVQASAUAAAlIAAAOIhwAAQABAZANAOQAOAPAXAAQAbgBAXgRIAAAZQgWAQgjAAQgiAAgUgWgAgZgwQgNANgDAUIBUAAQAAgWgLgMQgKgMgTABQgQAAgMAMg");
	this.shape_27.setTransform(970.6,288.2);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#FFFFFF").s().p("AAoBTIAAhbQAAgyglAAQgRAAgMAOQgNAOAAAVIAABcIgdAAIAAihIAdAAIAAAbIABAAQASgfAiAAQAbAAAOARQANARAAAhIAABig");
	this.shape_28.setTransform(952.9,288);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#FFFFFF").s().p("AAoBTIAAhbQAAgygkAAQgTAAgMAOQgMAOABAVIAABcIgdAAIAAihIAdAAIAAAbIAAAAQASgfAiAAQAbAAANARQAOARABAhIAABig");
	this.shape_29.setTransform(934.4,288);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#FFFFFF").s().p("Ag6A+QgWgXAAglQAAgnAXgXQAWgYAlAAQAlAAAVAXQAVAWgBAnQAAAlgVAYQgXAYgkAAQgkAAgWgXgAgkgrQgPAQAAAcQAAAcAPAQQAOAQAWAAQAZAAANgPQANgRAAgdQAAgcgNgQQgNgQgZAAQgXAAgNARg");
	this.shape_30.setTransform(915.5,288.2);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#FFFFFF").s().p("Ag2BWQgegfAAgzQAAg2AhghQAhghAxAAQAhAAAVAJIAAAeQgYgNgeAAQgkAAgYAZQgYAZAAAqQAAApAWAYQAWAYAkAAQAhAAAZgPIAAAcQgZANgmAAQgwAAgcgfg");
	this.shape_31.setTransform(895.8,285);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#FFFFFF").s().p("AgqBSIAAihIAcAAIAAAiIABAAQAMglAeABQAJgBAGADIAAAdQgIgFgNAAQgQAAgKAQQgLAPAAAYIAABSg");
	this.shape_32.setTransform(881.3,288.1);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#FFFFFF").s().p("ABGBxIgXg+IheAAIgWA+IggAAIBWjhIAfAAIBWDhgAgEhDIghBdIBKAAIgihdIgDgRIAAAAQgCALgCAGg");
	this.shape_33.setTransform(863.9,285);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#FFFFFF").s().p("AgzA/QgTgWAAgoQAAgkAVgZQAWgYAfAAQAgAAARAVQASAUAAAlIAAAOIhwAAQABAZANAOQAOAPAXAAQAbgBAXgRIAAAZQgWAQgjAAQgiAAgUgWgAgZgwQgNANgDAUIBUAAQAAgWgLgMQgKgMgTABQgQAAgMAMg");
	this.shape_34.setTransform(836.1,288.2);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#FFFFFF").s().p("AAoB4IAAhdQAAgwglAAQgRAAgMAPQgNAMAAAWIAABcIgdAAIAAjvIAdAAIAABpIABAAQASgfAiAAQA2AAAABBIAABkg");
	this.shape_35.setTransform(818.4,284.3);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("#FFFFFF").s().p("AgTA7IAAhdIgcAAIAAgYIAcAAIAAgnIAbgJIAAAwIAoAAIAAAYIgoAAIAABXQAAAQAGAHQAFAHANAAQAJAAAHgFIAAAYQgJAFgQAAQgqAAAAgwg");
	this.shape_36.setTransform(803.3,286);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("#FFFFFF").s().p("Ag5BkQgSgWAAglQAAgoAVgYQAUgYAhAAQAgAAAPAaIABAAIAAhkIAdAAIAADvIgdAAIAAgbIgBAAQgSAfgkAAQgfAAgSgWgAgggGQgOAQAAAdQAAAcANAQQANAPAUAAQAVAAANgPQANgQAAgXIAAgXQAAgTgNgMQgNgNgSAAQgWAAgNARg");
	this.shape_37.setTransform(778.8,284.5);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f("#FFFFFF").s().p("AgzA/QgTgWAAgoQAAgkAVgZQAWgYAfAAQAgAAARAVQASAUAAAlIAAAOIhwAAQABAZANAOQAOAPAXAAQAbgBAXgRIAAAZQgWAQgjAAQgiAAgUgWgAgZgwQgNANgDAUIBUAAQAAgWgLgMQgKgMgTABQgQAAgMAMg");
	this.shape_38.setTransform(761.4,288.2);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f("#FFFFFF").s().p("AgNB4IAAjvIAbAAIAADvg");
	this.shape_39.setTransform(748.7,284.3);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f("#FFFFFF").s().p("AgNB4IAAjvIAbAAIAADvg");
	this.shape_40.setTransform(740.7,284.3);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f("#FFFFFF").s().p("AgyBIQgOgNAAgVQAAgtA2gHIAvgHQAAgnghAAQgcgBgYAUIAAgbQAYgQAfAAQA6AAAAA9IAABoIgcAAIAAgZIgBAAQgRAdggAAQgXAAgOgNgAAAAFQgUACgIAIQgHAHAAAOQAAALAIAHQAIAIAOAAQARAAANgOQAMgNAAgUIAAgPg");
	this.shape_41.setTransform(728,288.2);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f("#FFFFFF").s().p("AgTA7IAAhdIgdAAIAAgYIAdAAIAAgnIAbgJIAAAwIAoAAIAAAYIgoAAIAABXQAAAQAFAHQAGAHAMAAQAKAAAHgFIAAAYQgJAFgQAAQgqAAAAgwg");
	this.shape_42.setTransform(714.5,286);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f("#FFFFFF").s().p("Ag2BLIAAgdQAWAPAZABQAhAAAAgXQAAgJgIgGQgHgGgVgIQgbgKgIgLQgJgKAAgPQAAgWATgNQASgNAaAAQAUAAASAHIAAAcQgSgLgXAAQgNgBgJAHQgIAFAAAKQAAAKAGAFQAGAFAVAJQAbAKAJAKQAKALAAAQQAAAWgSANQgTANgcAAQgZAAgTgKg");
	this.shape_43.setTransform(702.2,288.2);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f("#FFFFFF").s().p("AAoBTIAAhbQAAgygkAAQgTAAgMAOQgMAOABAVIAABcIgdAAIAAihIAdAAIAAAbIAAAAQASgfAiAAQAbAAANARQAOARABAhIAABig");
	this.shape_44.setTransform(686,288);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.f("#FFFFFF").s().p("AgOB2IAAihIAcAAIAAChgAgMhXQgFgFAAgHQAAgIAFgGQAFgEAHAAQAIAAAFAEQAFAGAAAIQAAAHgFAFQgFAFgIAAQgHAAgFgFg");
	this.shape_45.setTransform(672.6,284.5);

	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.f("#FFFFFF").s().p("AgTA7IAAhdIgcAAIAAgYIAcAAIAAgnIAbgJIAAAwIApAAIAAAYIgpAAIAABXQAAAQAGAHQAFAHANAAQAJAAAIgFIAAAYQgKAFgQAAQgqAAAAgwg");
	this.shape_46.setTransform(654,286);

	this.shape_47 = new cjs.Shape();
	this.shape_47.graphics.f("#FFFFFF").s().p("AgJAjIgEhFIAcAAIgGBFg");
	this.shape_47.setTransform(644.7,277.1);

	this.shape_48 = new cjs.Shape();
	this.shape_48.graphics.f("#FFFFFF").s().p("AAoBTIAAhbQAAgygkAAQgTAAgMAOQgMAOAAAVIAABcIgcAAIAAihIAcAAIAAAbIABAAQASgfAiAAQAbAAANARQAOARAAAhIAABig");
	this.shape_48.setTransform(631.7,288);

	this.shape_49 = new cjs.Shape();
	this.shape_49.graphics.f("#FFFFFF").s().p("AgzA/QgTgWAAgoQAAgkAVgZQAWgYAfAAQAgAAARAVQASAUAAAlIAAAOIhwAAQABAZANAOQAOAPAXAAQAbgBAXgRIAAAZQgWAQgjAAQgiAAgUgWgAgZgwQgNANgDAUIBUAAQAAgWgLgMQgKgMgTABQgQAAgMAMg");
	this.shape_49.setTransform(613.9,288.2);

	this.shape_50 = new cjs.Shape();
	this.shape_50.graphics.f("#FFFFFF").s().p("AgPBRIg9ihIAgAAIAnBzQAFAOAAAJIABAAQABgNADgJIAqh0IAeAAIhAChg");
	this.shape_50.setTransform(597.5,288.2);

	this.shape_51 = new cjs.Shape();
	this.shape_51.graphics.f("#FFFFFF").s().p("AgyBIQgOgNAAgVQAAgtA2gHIAvgHQAAgnghAAQgcgBgYAUIAAgbQAYgQAfAAQA6AAAAA9IAABoIgcAAIAAgZIgBAAQgRAdggAAQgXAAgOgNgAAAAFQgUACgIAIQgHAHAAAOQAAALAIAHQAIAIAOAAQARAAANgOQAMgNAAgUIAAgPg");
	this.shape_51.setTransform(580.8,288.2);

	this.shape_52 = new cjs.Shape();
	this.shape_52.graphics.f("#FFFFFF").s().p("AAoB4IAAhdQAAgwglAAQgRAAgNAPQgLAMAAAWIAABcIgeAAIAAjvIAeAAIAABpIAAAAQATgfAhAAQA3AAAABBIAABkg");
	this.shape_52.setTransform(563.9,284.3);

	this.shape_53 = new cjs.Shape();
	this.shape_53.graphics.f("#FFFFFF").s().p("AhEAOIAAhgIAdAAIAABcQAAAxAmAAQASAAALgOQALgNAAgWIAAhcIAdAAIAAChIgdAAIAAgZIAAAAQgRAdggAAQg6AAAAhFg");
	this.shape_53.setTransform(536.3,288.4);

	this.shape_54 = new cjs.Shape();
	this.shape_54.graphics.f("#FFFFFF").s().p("Ag6A+QgVgXgBglQAAgnAXgXQAWgYAlAAQAlAAAVAXQAVAWgBAnQAAAlgVAYQgXAYgkAAQgkAAgWgXgAglgrQgOAQAAAcQAAAcAPAQQAOAQAWAAQAZAAANgPQANgRAAgdQAAgcgNgQQgNgQgZAAQgXAAgOARg");
	this.shape_54.setTransform(517.7,288.2);

	this.shape_55 = new cjs.Shape();
	this.shape_55.graphics.f("#FFFFFF").s().p("AgPBxIAAhTIhJiOIAiAAIAxBkIAFAOIAAAAQACgGAEgIIAzhkIAgAAIhLCOIAABTg");
	this.shape_55.setTransform(499.1,285);

	this.shape_56 = new cjs.Shape();
	this.shape_56.graphics.f().s("#FFFFFF").ss(5,1,1).p("Eg7Igc+MB2RAAAQCWAAAACWMAAAA1RQAACWiWAAMh2RAAAQiWAAAAiWMAAAg1RQAAiWCWAAg");
	this.shape_56.setTransform(785.5,371.5);

	this.shape_57 = new cjs.Shape();
	this.shape_57.graphics.f("#064BB0").s().p("Eg7IAc/QiWAAAAiWMAAAg1RQAAiWCWAAMB2RAAAQCWAAAACWMAAAA1RQAACWiWAAg");
	this.shape_57.setTransform(785.5,371.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_57},{t:this.shape_56},{t:this.shape_55},{t:this.shape_54},{t:this.shape_53},{t:this.shape_52},{t:this.shape_51},{t:this.shape_50},{t:this.shape_49},{t:this.shape_48},{t:this.shape_47},{t:this.shape_46},{t:this.shape_45},{t:this.shape_44},{t:this.shape_43},{t:this.shape_42},{t:this.shape_41},{t:this.shape_40},{t:this.shape_39},{t:this.shape_38},{t:this.shape_37},{t:this.shape_36},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape},{t:this.cancelBtn},{t:this.installBtn}]}).wait(1));

	// bg
	this.instance = new lib.AlertBg();
	this.instance.parent = this;
	this.instance.setTransform(768,384,1,1,0,0,0,768,384);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.AlertInstallArConnect, new cjs.Rectangle(0,0,1536,768), null);


(lib.AlertBaseTipMc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层_1
	this.closeBtn = new lib.AlertCloseBtn();
	this.closeBtn.name = "closeBtn";
	this.closeBtn.parent = this;
	this.closeBtn.setTransform(286,285.9,1,1,0,0,0,75,29);
	new cjs.ButtonHelper(this.closeBtn, 0, 1, 1);

	this.contentTf = new cjs.Text("", "30px 'Microsoft YaHei'", "#FFFFFF");
	this.contentTf.name = "contentTf";
	this.contentTf.lineHeight = 42;
	this.contentTf.lineWidth = 554;
	this.contentTf.parent = this;
	this.contentTf.setTransform(36,57.6);

	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#FFFFFF").ss(5,1,1).p("EguogaoMBdRAAAQCWAAAACWMAAAAwlQAACWiWAAMhdRAAAQiWAAAAiWMAAAgwlQAAiWCWAAg");
	this.shape.setTransform(313.5,170.5);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#064BB0").s().p("EguoAapQiWAAAAiWMAAAgwlQAAiWCWAAMBdRAAAQCWAAAACWMAAAAwlQAACWiWAAg");
	this.shape_1.setTransform(313.5,170.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape},{t:this.contentTf},{t:this.closeBtn}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.AlertBaseTipMc, new cjs.Rectangle(-2.5,-2.5,632,346), null);


(lib.AlertBaseTip = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层_1
	this.panel = new lib.AlertBaseTipMc();
	this.panel.name = "panel";
	this.panel.parent = this;
	this.panel.setTransform(792.4,367.5,1,1,0,0,0,313.4,170.5);

	this.timeline.addTween(cjs.Tween.get(this.panel).wait(1));

	// bg
	this.bg = new lib.AlertBg();
	this.bg.name = "bg";
	this.bg.parent = this;
	this.bg.setTransform(768,384,1,1,0,0,0,768,384);

	this.timeline.addTween(cjs.Tween.get(this.bg).wait(1));

}).prototype = getMCSymbolPrototype(lib.AlertBaseTip, new cjs.Rectangle(0,0,1536,768), null);


(lib.AccountInfo = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层_3
	this.instance = new lib.logoTop();
	this.instance.parent = this;
	this.instance.setTransform(0,0,0.65,0.65);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// 图层_1
	this.cashOut = new lib.cashOutBtn();
	this.cashOut.name = "cashOut";
	this.cashOut.parent = this;
	this.cashOut.setTransform(463,34.2,1,1,0,0,0,15,17.2);
	new cjs.ButtonHelper(this.cashOut, 0, 1, 2, false, new lib.cashOutBtn(), 3);

	this.cashIn = new lib.cashInBtn();
	this.cashIn.name = "cashIn";
	this.cashIn.parent = this;
	this.cashIn.setTransform(412.5,34.5,1,1,0,0,0,17.5,17.5);
	new cjs.ButtonHelper(this.cashIn, 0, 1, 2, false, new lib.cashInBtn(), 3);

	this.addrTf = new cjs.Text("guest", "25px 'Microsoft YaHei'", "#2A6EFF");
	this.addrTf.name = "addrTf";
	this.addrTf.lineHeight = 35;
	this.addrTf.lineWidth = 154;
	this.addrTf.parent = this;
	this.addrTf.setTransform(67,24);

	this.arTf = new cjs.Text("AR: 0", "25px 'Microsoft YaHei'", "#2A6EFF");
	this.arTf.name = "arTf";
	this.arTf.textAlign = "right";
	this.arTf.lineHeight = 35;
	this.arTf.lineWidth = 113;
	this.arTf.parent = this;
	this.arTf.setTransform(368,25);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.arTf},{t:this.addrTf},{t:this.cashIn},{t:this.cashOut}]}).wait(1));

	// 图层_4
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(255,255,255,0.8)").s().p("EgjEAEWQhzAAhShSQhRhRAAhzIAAAAQAAhyBRhSQBShRBzAAMBG0AAAIAAADQBXANBCBBQBSBSAAByIAAAAQAABzhSBRQhCBChXANIAAADg");
	this.shape.setTransform(253.3,33.8);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.AccountInfo, new cjs.Rectangle(0,-15.4,508.5,80.5), null);


(lib.exportNum = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层_1
	this.instance = new lib.AlertInstallArConnect();
	this.instance.parent = this;
	this.instance.setTransform(546.5,-344.1,1,1,0,0,0,766.8,382.8);

	this.instance_1 = new lib.Num11_0();
	this.instance_1.parent = this;
	this.instance_1.setTransform(810.1,17.4,1,1,0,0,0,7.5,15.6);

	this.instance_2 = new lib.Num10_0();
	this.instance_2.parent = this;
	this.instance_2.setTransform(791,17.4,1,1,0,0,0,4.2,20.9);

	this.instance_3 = new lib.Num9_0();
	this.instance_3.parent = this;
	this.instance_3.setTransform(765,17.4,1,1,0,0,0,16.2,14.2);

	this.instance_4 = new lib.Num8_0();
	this.instance_4.parent = this;
	this.instance_4.setTransform(729,17.3,1,1,0,0,0,16.2,14.2);

	this.instance_5 = new lib.Num7_0();
	this.instance_5.parent = this;
	this.instance_5.setTransform(693.1,17.3,1,1,0,0,0,14.6,14.2);

	this.instance_6 = new lib.Num6_0();
	this.instance_6.parent = this;
	this.instance_6.setTransform(656,17.4,1,1,0,0,0,16,14.2);

	this.instance_7 = new lib.Num5_0();
	this.instance_7.parent = this;
	this.instance_7.setTransform(620,17.4,1,1,0,0,0,16.2,14.2);

	this.instance_8 = new lib.Num4_0();
	this.instance_8.parent = this;
	this.instance_8.setTransform(581,17.4,1,1,0,0,0,15.5,14.2);

	this.instance_9 = new lib.Num3_0();
	this.instance_9.parent = this;
	this.instance_9.setTransform(542,17.4,1,1,0,0,0,16.2,14.2);

	this.instance_10 = new lib.Num2_0();
	this.instance_10.parent = this;
	this.instance_10.setTransform(506,17.3,1,1,0,0,0,16,14.2);

	this.instance_11 = new lib.Num1_0();
	this.instance_11.parent = this;
	this.instance_11.setTransform(473.1,17.4,1,1,0,0,0,7.2,14.5);

	this.instance_12 = new lib.Num0_0();
	this.instance_12.parent = this;
	this.instance_12.setTransform(439,17.4,1,1,0,0,0,16.2,14.2);

	this.instance_13 = new lib.Num11();
	this.instance_13.parent = this;
	this.instance_13.setTransform(397.1,15.8,1,1,0,0,0,7.5,15.6);

	this.instance_14 = new lib.Num10();
	this.instance_14.parent = this;
	this.instance_14.setTransform(374.1,25.6,1,1,0,0,0,4.2,20.9);

	this.instance_15 = new lib.Num9();
	this.instance_15.parent = this;
	this.instance_15.setTransform(349,14.4,1,1,0,0,0,16.2,14.2);

	this.instance_16 = new lib.Num8();
	this.instance_16.parent = this;
	this.instance_16.setTransform(312,14.4,1,1,0,0,0,16.2,14.2);

	this.instance_17 = new lib.Num7();
	this.instance_17.parent = this;
	this.instance_17.setTransform(279.4,14.4,1,1,0,0,0,14.6,14.2);

	this.instance_18 = new lib.Num6();
	this.instance_18.parent = this;
	this.instance_18.setTransform(240.8,14.4,1,1,0,0,0,16,14.2);

	this.instance_19 = new lib.Num5();
	this.instance_19.parent = this;
	this.instance_19.setTransform(203,14.4,1,1,0,0,0,16.2,14.2);

	this.instance_20 = new lib.Num4();
	this.instance_20.parent = this;
	this.instance_20.setTransform(162.3,14.4,1,1,0,0,0,15.5,14.2);

	this.instance_21 = new lib.Num3();
	this.instance_21.parent = this;
	this.instance_21.setTransform(124.1,14.3,1,1,0,0,0,16.2,14.2);

	this.instance_22 = new lib.Num2();
	this.instance_22.parent = this;
	this.instance_22.setTransform(87.7,14.2,1,1,0,0,0,16,14.2);

	this.instance_23 = new lib.Num1();
	this.instance_23.parent = this;
	this.instance_23.setTransform(51.9,14.7,1,1,0,0,0,7.2,14.5);

	this.instance_24 = new lib.Num0();
	this.instance_24.parent = this;
	this.instance_24.setTransform(16.2,14.2,1,1,0,0,0,16.2,14.2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_24},{t:this.instance_23},{t:this.instance_22},{t:this.instance_21},{t:this.instance_20},{t:this.instance_19},{t:this.instance_18},{t:this.instance_17},{t:this.instance_16},{t:this.instance_15},{t:this.instance_14},{t:this.instance_13},{t:this.instance_12},{t:this.instance_11},{t:this.instance_10},{t:this.instance_9},{t:this.instance_8},{t:this.instance_7},{t:this.instance_6},{t:this.instance_5},{t:this.instance_4},{t:this.instance_3},{t:this.instance_2},{t:this.instance_1},{t:this.instance}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.exportNum, new cjs.Rectangle(-220.3,-726.9,1536,768), null);


// stage content:
(lib.index = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		mainScene(this);
		setTimeout(()=>{
			this.removeChild(this.exports);
		}, 100)
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1));

	// export
	this.instance = new lib.AlertBaseTip();
	this.instance.parent = this;
	this.instance.setTransform(768,-393.9,1,1,0,0,0,768,384);

	this.exports = new lib.exportNum();
	this.exports.name = "exports";
	this.exports.parent = this;
	this.exports.setTransform(404.5,-51.5,1,1,0,0,0,182.6,-0.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.exports},{t:this.instance}]}).wait(1));

	// content
	this.historyBtn = new lib.HistoryBtn();
	this.historyBtn.name = "historyBtn";
	this.historyBtn.parent = this;
	this.historyBtn.setTransform(1492,42,1,1,0,0,0,30,30);
	new cjs.ButtonHelper(this.historyBtn, 0, 1, 1);

	this.curPlayer = new lib.EmptyNum();
	this.curPlayer.name = "curPlayer";
	this.curPlayer.parent = this;
	this.curPlayer.setTransform(1018.6,192.1,1,1,0,0,0,46.6,20);

	this.winAmount = new lib.BetTotalAmount();
	this.winAmount.name = "winAmount";
	this.winAmount.parent = this;
	this.winAmount.setTransform(1356.5,160.5,1,1,0,0,0,111.5,35.5);

	this.submitBtn = new lib.ConfirmBtn();
	this.submitBtn.name = "submitBtn";
	this.submitBtn.parent = this;
	this.submitBtn.setTransform(964,693.5,1,1,0,0,0,119,55.5);
	new cjs.ButtonHelper(this.submitBtn, 0, 1, 1);

	this.coins0 = new lib.Coins0();
	this.coins0.name = "coins0";
	this.coins0.parent = this;
	this.coins0.setTransform(951,503);

	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFF00").s().p("AgoBUIAHgtIA8AAIgHAtgAgagmIAHgtIA7AAIgGAtg");
	this.shape.setTransform(961.2,186.3);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFF00").s().p("AhnBVIAIg2IALAPIBjAAIAFgbIhzAAIAQhnIC3AAIgIAzIhCAAIABgMIgtAAIgEAbIBvAAIgIBMQgDALgLAIQgJAHgMABg");
	this.shape_1.setTransform(943.7,186.3);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFF00").s().p("AhrBVIAXidIgIgMIBNAAIgHA2IA1g2IBNAAIiCBzIgIA2g");
	this.shape_2.setTransform(921.6,186.3);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFF00").s().p("AhVBVQgMgBgFgHQgHgIAAgLIATiOIDHAAIgPBjIh6AAIgDAfIBqAAIATgPIgMA2gAgUgWIAtAAIAEgXIguAAg");
	this.shape_3.setTransform(896.7,186.3);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFF00").s().p("AhxB+IAggeIAeg5IguiZIgLgMIBUAAIAVBWIAkhOIgHgIIBXAAIiADtQgDAGgHAFQgIAFgIgBg");
	this.shape_4.setTransform(872,190.5);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFF00").s().p("AhRBVQgMgBgGgHQgFgIgBgLIAMhIIByAAIAGgfIgnAAIgEAPIhNAAIAMg2IC7AAIgYCWIAQATgAgbAuIAlAAIAEgXIgmAAg");
	this.shape_5.setTransform(847.9,186.3);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFF00").s().p("AgdB9QgMAAgGgIQgGgIAAgLIAfjSIgMgMIBYAAIgfDSIAbAng");
	this.shape_6.setTransform(828.7,182.3);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFF00").s().p("Ah1B+IAkjwIgLgMIDSAAIgTCOQgBAGgDAEQgEAFgEAEQgFAEgFACQgFACgEAAIhfAAIgNBTgAgWAIIAtAAIAOhfIgtAAg");
	this.shape_7.setTransform(808.4,190.5);

	this.betList = new lib.BettingList();
	this.betList.name = "betList";
	this.betList.parent = this;
	this.betList.setTransform(238,425.4,1,1,0,0,0,212,323.4);

	this.userInfo = new lib.AccountInfo();
	this.userInfo.name = "userInfo";
	this.userInfo.parent = this;
	this.userInfo.setTransform(155.5,47.5,1,1,0,0,0,130.5,27.5);

	this.card5 = new lib.Snail5();
	this.card5.name = "card5";
	this.card5.parent = this;
	this.card5.setTransform(1423.1,349.7,1,1,0,0,0,75.3,114.7);

	this.card4 = new lib.Snail4();
	this.card4.name = "card4";
	this.card4.parent = this;
	this.card4.setTransform(1253.6,349.7,1,1,0,0,0,75.3,114.7);

	this.card3 = new lib.Snail3();
	this.card3.name = "card3";
	this.card3.parent = this;
	this.card3.setTransform(1084.3,349.7,1,1,0,0,0,75.3,114.7);

	this.card2 = new lib.Snail2();
	this.card2.name = "card2";
	this.card2.parent = this;
	this.card2.setTransform(914.9,349.7,1,1,0,0,0,75.3,114.7);

	this.card1 = new lib.Snail1();
	this.card1.name = "card1";
	this.card1.parent = this;
	this.card1.setTransform(745.6,349.7,1,1,0,0,0,75.3,114.7);

	this.card0 = new lib.Snail0();
	this.card0.name = "card0";
	this.card0.parent = this;
	this.card0.setTransform(576.2,349.7,1,1,0,0,0,75.3,114.7);

	this.instance_1 = new lib.run6Logo();
	this.instance_1.parent = this;
	this.instance_1.setTransform(771,74,0.621,0.621);

	this.instance_2 = new lib.snailLogo();
	this.instance_2.parent = this;
	this.instance_2.setTransform(776.6,16.7,0.641,0.641);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_2},{t:this.instance_1},{t:this.card0},{t:this.card1},{t:this.card2},{t:this.card3},{t:this.card4},{t:this.card5},{t:this.userInfo},{t:this.betList},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape},{t:this.coins0},{t:this.submitBtn},{t:this.winAmount},{t:this.curPlayer},{t:this.historyBtn}]}).wait(1));

	// bg
	this.instance_3 = new lib.bgPic();
	this.instance_3.parent = this;
	this.instance_3.setTransform(0,0,0.8,0.8);

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(768,-394,1537.6,1546);
// library properties:
lib.properties = {
	id: '3313538AC132EC4FB851972F1359CA5E',
	width: 1536,
	height: 768,
	fps: 24,
	color: "#064BB0",
	opacity: 1.00,
	manifest: [
		{src:"images/index_atlas_.png?1721820824179", id:"index_atlas_"}
	],
	preloads: []
};



// bootstrap callback support:

(lib.Stage = function(canvas) {
	createjs.Stage.call(this, canvas);
}).prototype = p = new createjs.Stage();

p.setAutoPlay = function(autoPlay) {
	this.tickEnabled = autoPlay;
}
p.play = function() { this.tickEnabled = true; this.getChildAt(0).gotoAndPlay(this.getTimelinePosition()) }
p.stop = function(ms) { if(ms) this.seek(ms); this.tickEnabled = false; }
p.seek = function(ms) { this.tickEnabled = true; this.getChildAt(0).gotoAndStop(lib.properties.fps * ms / 1000); }
p.getDuration = function() { return this.getChildAt(0).totalFrames / lib.properties.fps * 1000; }

p.getTimelinePosition = function() { return this.getChildAt(0).currentFrame / lib.properties.fps * 1000; }

an.bootcompsLoaded = an.bootcompsLoaded || [];
if(!an.bootstrapListeners) {
	an.bootstrapListeners=[];
}

an.bootstrapCallback=function(fnCallback) {
	an.bootstrapListeners.push(fnCallback);
	if(an.bootcompsLoaded.length > 0) {
		for(var i=0; i<an.bootcompsLoaded.length; ++i) {
			fnCallback(an.bootcompsLoaded[i]);
		}
	}
};

an.compositions = an.compositions || {};
an.compositions['3313538AC132EC4FB851972F1359CA5E'] = {
	getStage: function() { return exportRoot.getStage(); },
	getLibrary: function() { return lib; },
	getSpriteSheet: function() { return ss; },
	getImages: function() { return img; }
};

an.compositionLoaded = function(id) {
	an.bootcompsLoaded.push(id);
	for(var j=0; j<an.bootstrapListeners.length; j++) {
		an.bootstrapListeners[j](id);
	}
}

an.getComposition = function(id) {
	return an.compositions[id];
}



})(createjs = createjs||{}, AdobeAn = AdobeAn||{});
var createjs, AdobeAn;