parcelRequire=function(e,r,t,n){var i,o="function"==typeof parcelRequire&&parcelRequire,u="function"==typeof require&&require;function f(t,n){if(!r[t]){if(!e[t]){var i="function"==typeof parcelRequire&&parcelRequire;if(!n&&i)return i(t,!0);if(o)return o(t,!0);if(u&&"string"==typeof t)return u(t);var c=new Error("Cannot find module '"+t+"'");throw c.code="MODULE_NOT_FOUND",c}p.resolve=function(r){return e[t][1][r]||r},p.cache={};var l=r[t]=new f.Module(t);e[t][0].call(l.exports,p,l,l.exports,this)}return r[t].exports;function p(e){return f(p.resolve(e))}}f.isParcelRequire=!0,f.Module=function(e){this.id=e,this.bundle=f,this.exports={}},f.modules=e,f.cache=r,f.parent=o,f.register=function(r,t){e[r]=[function(e,r){r.exports=t},{}]};for(var c=0;c<t.length;c++)try{f(t[c])}catch(e){i||(i=e)}if(t.length){var l=f(t[t.length-1]);"object"==typeof exports&&"undefined"!=typeof module?module.exports=l:"function"==typeof define&&define.amd?define(function(){return l}):n&&(this[n]=l)}if(parcelRequire=f,i)throw i;return f}({"g5IB":[function(require,module,exports) {

var t,e,n=module.exports={};function r(){throw new Error("setTimeout has not been defined")}function o(){throw new Error("clearTimeout has not been defined")}function i(e){if(t===setTimeout)return setTimeout(e,0);if((t===r||!t)&&setTimeout)return t=setTimeout,setTimeout(e,0);try{return t(e,0)}catch(n){try{return t.call(null,e,0)}catch(n){return t.call(this,e,0)}}}function u(t){if(e===clearTimeout)return clearTimeout(t);if((e===o||!e)&&clearTimeout)return e=clearTimeout,clearTimeout(t);try{return e(t)}catch(n){try{return e.call(null,t)}catch(n){return e.call(this,t)}}}!function(){try{t="function"==typeof setTimeout?setTimeout:r}catch(n){t=r}try{e="function"==typeof clearTimeout?clearTimeout:o}catch(n){e=o}}();var c,s=[],l=!1,a=-1;function f(){l&&c&&(l=!1,c.length?s=c.concat(s):a=-1,s.length&&h())}function h(){if(!l){var t=i(f);l=!0;for(var e=s.length;e;){for(c=s,s=[];++a<e;)c&&c[a].run();a=-1,e=s.length}c=null,l=!1,u(t)}}function m(t,e){this.fun=t,this.array=e}function p(){}n.nextTick=function(t){var e=new Array(arguments.length-1);if(arguments.length>1)for(var n=1;n<arguments.length;n++)e[n-1]=arguments[n];s.push(new m(t,e)),1!==s.length||l||i(h)},m.prototype.run=function(){this.fun.apply(null,this.array)},n.title="browser",n.env={},n.argv=[],n.version="",n.versions={},n.on=p,n.addListener=p,n.once=p,n.off=p,n.removeListener=p,n.removeAllListeners=p,n.emit=p,n.prependListener=p,n.prependOnceListener=p,n.listeners=function(t){return[]},n.binding=function(t){throw new Error("process.binding is not supported")},n.cwd=function(){return"/"},n.chdir=function(t){throw new Error("process.chdir is not supported")},n.umask=function(){return 0};
},{}],"vWcT":[function(require,module,exports) {
var define;
var process = require("process");
var global = arguments[3];
},{"process":"g5IB"}],"X5Ct":[function(require,module,exports) {
module.exports="StartButton.83ebe7ae.png";
},{}],"hPhO":[function(require,module,exports) {
module.exports="Start.bb047003.png";
},{}],"VZ0G":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.default=void 0;var t=n(require("phaser")),e=n(require("../../public/images/StartButton.png")),r=n(require("../../public/images/Start.png"));function n(t){return t&&t.__esModule?t:{default:t}}function o(t){return(o="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}function i(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function u(t,e){for(var r=0;r<e.length;r++){var n=e[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,a(n.key),n)}}function c(t,e,r){return e&&u(t.prototype,e),r&&u(t,r),Object.defineProperty(t,"prototype",{writable:!1}),t}function a(t){var e=f(t,"string");return"symbol"==o(e)?e:e+""}function f(t,e){if("object"!=o(t)||!t)return t;var r=t[Symbol.toPrimitive];if(void 0!==r){var n=r.call(t,e||"default");if("object"!=o(n))return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===e?String:Number)(t)}function l(t,e,r){return e=b(e),s(t,y()?Reflect.construct(e,r||[],b(t).constructor):e.apply(t,r))}function s(t,e){if(e&&("object"===o(e)||"function"==typeof e))return e;if(void 0!==e)throw new TypeError("Derived constructors may only return object or undefined");return p(t)}function p(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}function y(){try{var t=!Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){}))}catch(t){}return(y=function(){return!!t})()}function b(t){return(b=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(t){return t.__proto__||Object.getPrototypeOf(t)})(t)}function d(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),Object.defineProperty(t,"prototype",{writable:!1}),e&&v(t,e)}function v(t,e){return(v=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(t,e){return t.__proto__=e,t})(t,e)}var h=exports.default=function(n){function o(){return i(this,o),l(this,o,["start-scene"])}return d(o,t.default.Scene),c(o,[{key:"init",value:function(t){this.startButton=void 0}},{key:"preload",value:function(){this.load.image("startBackground",r.default),this.load.image("startButton",e.default)}},{key:"create",value:function(){var t=this;this.add.image(200,320,"startBackground"),this.startButton=this.add.image(300,500,"startButton").setInteractive().setScale(.5),this.add.text(250,485,"Start",{fontSize:"32px",fill:"black"}),this.startButton.once("pointerup",function(){t.scene.start("collecting-fruits-scene")},this)}}])}();
},{"phaser":"vWcT","../../public/images/StartButton.png":"X5Ct","../../public/images/Start.png":"hPhO"}],"fR2S":[function(require,module,exports) {
module.exports="Background.9bf1a37c.png";
},{}],"WQn7":[function(require,module,exports) {
module.exports="End.0297a53e.png";
},{}],"swyk":[function(require,module,exports) {
module.exports="LeftButton.8d8ff3e2.png";
},{}],"GxBE":[function(require,module,exports) {
module.exports="RightButton.d18e7c7e.png";
},{}],"wV8a":[function(require,module,exports) {
module.exports="Player.25a14f35.png";
},{}],"Qb8v":[function(require,module,exports) {
module.exports="Avocado.670347e3.png";
},{}],"JjHO":[function(require,module,exports) {
module.exports="Orange.db834b7e.png";
},{}],"Qxh8":[function(require,module,exports) {
module.exports="Plum.ebda250b.png";
},{}],"X0Uj":[function(require,module,exports) {
module.exports="OrangeApple.71e14f89.png";
},{}],"C0Mr":[function(require,module,exports) {
module.exports="PurplePear.7b80cc9f.png";
},{}],"UDPi":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.default=void 0;var t=e(require("phaser"));function e(t){return t&&t.__esModule?t:{default:t}}function r(t){return(r="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}function o(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function n(t,e){for(var r=0;r<e.length;r++){var o=e[r];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(t,u(o.key),o)}}function i(t,e,r){return e&&n(t.prototype,e),r&&n(t,r),Object.defineProperty(t,"prototype",{writable:!1}),t}function u(t){var e=c(t,"string");return"symbol"==r(e)?e:e+""}function c(t,e){if("object"!=r(t)||!t)return t;var o=t[Symbol.toPrimitive];if(void 0!==o){var n=o.call(t,e||"default");if("object"!=r(n))return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===e?String:Number)(t)}function f(t,e,r){return e=p(e),a(t,l()?Reflect.construct(e,r||[],p(t).constructor):e.apply(t,r))}function a(t,e){if(e&&("object"===r(e)||"function"==typeof e))return e;if(void 0!==e)throw new TypeError("Derived constructors may only return object or undefined");return s(t)}function s(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}function l(){try{var t=!Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){}))}catch(t){}return(l=function(){return!!t})()}function p(t){return(p=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(t){return t.__proto__||Object.getPrototypeOf(t)})(t)}function y(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),Object.defineProperty(t,"prototype",{writable:!1}),e&&b(t,e)}function b(t,e){return(b=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(t,e){return t.__proto__=e,t})(t,e)}var d=exports.default=function(e){function r(t,e,n,i,u){var c;return o(this,r),(c=f(this,r,[t,e,n,i])).scene=t,c.speed=u.speed,c.rotationVal=u.rotation,c}return y(r,t.default.Physics.Arcade.Sprite),i(r,[{key:"spawn",value:function(t){this.setPosition(t,-10),this.setActive(!0),this.setVisible(!0)}},{key:"update",value:function(t){this.setVelocityY(this.speed),this.rotation+=this.rotationVal;this.scene.scale.height;this.y}}])}();
},{"phaser":"vWcT"}],"cSs4":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.default=void 0;var e=p(require("../../public/images/Background.png")),t=p(require("../../public/images/Start.png")),i=p(require("../../public/images/End.png")),r=p(require("../../public/images/LeftButton.png")),a=p(require("../../public/images/RightButton.png")),n=p(require("../../public/images/Player.png")),o=p(require("../../public/images/Avocado.png")),s=p(require("../../public/images/Orange.png")),l=p(require("../../public/images/Plum.png")),u=p(require("../../public/images/OrangeApple.png")),c=p(require("../../public/images/PurplePear.png")),h=p(require("../ui/FallingFruits"));function p(e){return e&&e.__esModule?e:{default:e}}function f(e){return(f="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function d(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function g(e,t){for(var i=0;i<t.length;i++){var r=t[i];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,y(r.key),r)}}function m(e,t,i){return t&&g(e.prototype,t),i&&g(e,i),Object.defineProperty(e,"prototype",{writable:!1}),e}function y(e){var t=b(e,"string");return"symbol"==f(t)?t:t+""}function b(e,t){if("object"!=f(e)||!e)return e;var i=e[Symbol.toPrimitive];if(void 0!==i){var r=i.call(e,t||"default");if("object"!=f(r))return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===t?String:Number)(e)}function v(e,t,i){return t=P(t),w(e,O()?Reflect.construct(t,i||[],P(e).constructor):t.apply(e,i))}function w(e,t){if(t&&("object"===f(t)||"function"==typeof t))return t;if(void 0!==t)throw new TypeError("Derived constructors may only return object or undefined");return k(e)}function k(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function O(){try{var e=!Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){}))}catch(e){}return(O=function(){return!!e})()}function P(e){return(P=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function S(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),t&&_(e,t)}function _(e,t){return(_=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(e,t){return e.__proto__=t,e})(e,t)}var B=exports.default=function(p){function f(){return d(this,f),v(this,f,["collecting-fruits-scene"])}return S(f,Phaser.Scene),m(f,[{key:"init",value:function(){this.player=void 0,this.leftButton=void 0,this.rightButton=void 0,this.avocado=void 0,this.oranges=void 0,this.plum=void 0,this.orangeApple=void 0,this.purplePear=void 0,this.nav_left=!1,this.nav_right=!1,this.gameHalfWidth=.5*this.scale.width,this.hameHalfHeight=.5*this.scale.height,this.scoreLabel=void 0,this.score=0,this.timerLabel=void 0,this.timer=60,this.speed=200}},{key:"preload",value:function(){this.load.image("background",e.default),this.load.image("start",t.default),this.load.image("end",i.default),this.load.image("leftButton",r.default),this.load.image("rightButton",a.default),this.load.image("avocado",o.default),this.load.image("oranges",s.default),this.load.image("plum",l.default),this.load.image("orangeApple",u.default),this.load.image("purplePear",c.default),this.load.spritesheet("player",n.default,{frameWidth:386/6,frameHeight:64})}},{key:"create",value:function(){this.add.image(210,320,"background").setScale(.5,.5),this.player=this.physics.add.sprite(250,150,"player").setBounce(.2).setOffset(0,70).setCollideWorldBounds(!0),this.scoreLabel=this.add.text(10,10,"Score",{fontSize:"16px",fill:"black",backgroundColor:"white"}),this.createButtons(),this.createAnimation(),this.oranges=this.physics.add.group({classType:h.default,maxSize:10,runChildUpdate:!0}),this.physics.add.overlap(this.player,this.oranges,this.collectOranges,null,this),this.time.addEvent({delay:Phaser.Math.Between(1e3,5e3),callback:this.spawnOranges,callbackScope:this,loop:!0}),this.timerLabel=this.add.text(500,10,"Time :",{fill:"white",backgroundColor:"black"}).setDepth(1),this.gameStart()}},{key:"update",value:function(e){this.movePlayer(this.player,e),this.scoreLabel.setText("Score : "+this.score),(this.startGame=!0)&&this.timerLabel.setText("Timer :"+this.timer)}},{key:"createAnimation",value:function(){this.anims.create({key:"player-left",frames:this.anims.generateFrameNumbers("player",{start:5,end:9}),frameRate:12}),this.anims.create({key:"player-right",frames:this.anims.generateFrameNumbers("player",{start:5,end:9}),frameRate:12})}},{key:"createButtons",value:function(){var e=this;this.input.addPointer(3);var t=this.add.image(225,600,"leftButton").setInteractive().setDepth(.5).setAlpha(.8).setScale(.3,.3),i=this.add.image(t.x+t.displayWidth+15,600,"rightButton").setInteractive().setDepth(.5).setAlpha(.8).setScale(.3,.3);t.on("pointerdown",function(){e.nav_left=!0},this),t.on("pointerup",function(){e.nav_left=!1},this),i.on("pointerdown",function(){e.nav_right=!0},this),i.on("pointerup",function(){e.nav_right=!1},this)}},{key:"movePlayer",value:function(e,t){this.nav_left?(e.setVelocityX(-1*this.speed),e.anims.play("player-left",!0),e.setFlipX(!1)):this.nav_right?(e.setVelocityX(this.speed),e.anims.play("player-right",!0),e.setFlipX(!0)):e.setVelocityX(0)}},{key:"spawnOranges",value:function(){var e=this.oranges.get(0,0,"oranges",{speed:300,rotation:.01}).setScale(.4),t=Phaser.Math.Between(50,350);console.log(e),e&&(console.log("spawn"),e.spawn(t))}},{key:"collectOranges",value:function(e,t){t.destroy(),this.score+=10,this.scoreLabel.setText("Score : "+this.score)}},{key:"gameStart",value:function(){this.countdown=this.time.addEvent({delay:1e3,callback:this.gameOver,callbackScope:this,loop:!0})}},{key:"gameOver",value:function(){this.timer--,this.timer<0&&this.scene.start("over-scene",{score:this.score})}}])}();
},{"../../public/images/Background.png":"fR2S","../../public/images/Start.png":"hPhO","../../public/images/End.png":"WQn7","../../public/images/LeftButton.png":"swyk","../../public/images/RightButton.png":"GxBE","../../public/images/Player.png":"wV8a","../../public/images/Avocado.png":"Qb8v","../../public/images/Orange.png":"JjHO","../../public/images/Plum.png":"Qxh8","../../public/images/OrangeApple.png":"X0Uj","../../public/images/PurplePear.png":"C0Mr","../ui/FallingFruits":"UDPi"}],"rot1":[function(require,module,exports) {
module.exports="EndButton.b7173895.png";
},{}],"ITNR":[function(require,module,exports) {
module.exports="Over.23cf0be2.png";
},{}],"h7Bj":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.default=void 0;var t=o(require("phaser")),e=o(require("../../public/images/EndButton.png")),r=o(require("../../public/images/End.png")),n=o(require("../../public/images/Over.png"));function o(t){return t&&t.__esModule?t:{default:t}}function i(t){return(i="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}function u(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function c(t,e){for(var r=0;r<e.length;r++){var n=e[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,l(n.key),n)}}function a(t,e,r){return e&&c(t.prototype,e),r&&c(t,r),Object.defineProperty(t,"prototype",{writable:!1}),t}function l(t){var e=f(t,"string");return"symbol"==i(e)?e:e+""}function f(t,e){if("object"!=i(t)||!t)return t;var r=t[Symbol.toPrimitive];if(void 0!==r){var n=r.call(t,e||"default");if("object"!=i(n))return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===e?String:Number)(t)}function s(t,e,r){return e=b(e),p(t,d()?Reflect.construct(e,r||[],b(t).constructor):e.apply(t,r))}function p(t,e){if(e&&("object"===i(e)||"function"==typeof e))return e;if(void 0!==e)throw new TypeError("Derived constructors may only return object or undefined");return y(t)}function y(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}function d(){try{var t=!Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){}))}catch(t){}return(d=function(){return!!t})()}function b(t){return(b=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(t){return t.__proto__||Object.getPrototypeOf(t)})(t)}function v(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),Object.defineProperty(t,"prototype",{writable:!1}),e&&h(t,e)}function h(t,e){return(h=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(t,e){return t.__proto__=e,t})(t,e)}var m=exports.default=function(o){function i(){return u(this,i),s(this,i,["over-scene"])}return v(i,t.default.Scene),a(i,[{key:"init",value:function(t){this.replayButton=void 0,this.score=t.score}},{key:"preload",value:function(){this.load.image("replayBackground",r.default),this.load.image("replayButton",e.default),this.load.image("gameOverSign",n.default)}},{key:"create",value:function(){var t=this;this.add.image(200,320,"replayBackground"),this.add.image(300,200,"gameOverSign"),this.add.text(220,300,"Score: "+this.score,{fontSize:"32px",fill:"black",backgroundColor:"white"}),this.replayButton=this.add.image(300,500,"replayButton").setInteractive().setScale(.5),this.add.text(230,485,"Restart",{fontSize:"32px",fill:"black"}),this.replayButton.once("pointerup",function(){t.scene.start("collecting-fruits-scene")},this)}}])}();
},{"phaser":"vWcT","../../public/images/EndButton.png":"rot1","../../public/images/End.png":"WQn7","../../public/images/Over.png":"ITNR"}],"HJDO":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.default=void 0;var e=u(require("phaser")),t=u(require("./scenes/StartScene")),a=u(require("./scenes/CollectingFruitsScene")),r=u(require("./scenes/GameOverScene"));function u(e){return e&&e.__esModule?e:{default:e}}var d={type:e.default.AUTO,parent:"app",width:600,height:640,physics:{default:"arcade",arcade:{gravity:{y:2e3}}},scene:[t.default,a.default,r.default],scale:{mode:e.default.Scale.FIT,autoCenter:e.default.Scale.CENTER_BOTH}},l=exports.default=new e.default.Game(d);
},{"phaser":"vWcT","./scenes/StartScene":"VZ0G","./scenes/CollectingFruitsScene":"cSs4","./scenes/GameOverScene":"h7Bj"}]},{},["HJDO"], null)
//# sourceMappingURL=main.23925e43.js.map