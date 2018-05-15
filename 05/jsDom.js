// demo1

//获取节点
var demo1Ele = document.getElementById('demo1').childNodes[1];
var demo2Ele = document.getElementById('demo2').childNodes[1];
var demo3Ele = document.getElementById('demo3').childNodes[3];
var demo4Ele = document.getElementById('demo4').childNodes[1];
var demo5Ele = document;
var demo6Ele = document.getElementById('demo6').childNodes[1];
var demo7Ele = document.querySelector('.class');//方法返回文档中匹配指定 CSS 选择器的一个元素仅仅返回匹配指定选择器的第一个元素
console.log(demo7Ele) 
console.log(document.querySelectorAll('.class'));

//获取鼠标点击左中右方向
var demo1 = function(){

	var mousedown,
			textTpl;
	textTpl = {
		0: '您点击了鼠标左键！',
		1: '您点击了鼠标中键！',
		2: '您点击了鼠标右键！'
	};
	demo1Ele.onmousedown = function(event){
		event.stopPropagation();
		mousedown = event.button;
		alert(textTpl[mousedown]);
	};
};

//获取光标坐标
var demo2 = function(){
	
	var cliX,
			cliY;
	demo2Ele.onmousedown = function(event){
		event.stopPropagation();
		cliX = event.clientX;
		cliY = event.clientY;

		alert("X 坐标: " + cliX + ", Y 坐标: " + cliY);
	}
};

//获取键盘unicode
var demo3 = function(){
	
	demo3Ele.onkeyup = function(event){
		event.stopPropagation();
		alert(event.keyCode);
	};
};
//获取键盘相对屏幕坐标
var demo4 = function(){
	
	var screenX,
			screenY;
	demo4Ele.onmousedown = function(event){
		event.stopPropagation();
		screenX = event.screenX;
		screenY = event.screenY;
		alert("X=" + screenX + " Y=" + screenY);
	};
};

var demo5 = function(){
	demo5Ele.onmousedown = function(event){
		alert('元素节点为：'+event.target.tagName+'');
	};
};

var demo6 = function(){
	var alertText;
	demo6Ele.onmousedown = function(event){
		event.stopPropagation();
		alertText = event.shiftKey 
								? "The shift key was pressed!" 
								: "The shift key was NOT pressed!";
		alert(alertText);
	}
};

demo1();
demo2();
demo3();
demo4();
demo5();
demo6();