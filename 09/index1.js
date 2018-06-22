/**
 * 默认设置
 * [defaults description]
 * @type {Object}
 */
var defaults = {
	ele: {
		input: document.querySelector('#email-input'),
		emailSug: document.querySelector('.email-sug'),
		tips: []

	},
	inputValue: '',
	tipsTpl: {
		emali: 1,
		error: 2

	}
},


ele = defaults.ele,
tipsTpl = defaults.tipsTpl;


// 邮箱后缀List参考
var postfixList = ['@163.com', '@gmail.com', '@126.com', '@qq.com', '@263.net'];

var getInputValue = function(){
	ele.inputValue = ele.input.value;
	console.log(ele.inputValue)
};

/**
 * 监听输入框的值更改
 * [onchange description]
 * @return {[type]} [description]
 */
ele.input.oninput = function(e){
	getInputValue();
	tipsDom();
	show(1);
};

/**
 * 监听键盘事件
 * [onkeydown description]
 * @return {[type]} [description]
 */
ele.input.onkeydown = function(){};

/**
 * 输入框失焦事件
 * [onblur description]
 * @return {[type]} [description]
 */
ele.input.onblur = function(){
	show(2)
};

/**
 * 邮箱智能提示DOM生成
 * [textTips description]
 * @return {[type]} [description]
 */
var emailTips = function(){
	var elePostfixList = '';
	postfixList.forEach((item,i)=>{
		elePostfixList += '<li key="'+ (++i) +'">' + ele.inputValue + item + '</li>';
	});
	return elePostfixList;
};

/**
 * 错误提示语DOM生成
 * [errorTips description]
 * @return {[type]} [description]
 */
var errorTips = function(){
	var ele = '<li>输入框不能为空</li>';
	return ele;
};

/**
 * 将Email智能提示语错误提示DOM添加到提示语容器中
 * [tipsDom description]
 * @return {[type]} [description]
 */
var tipsDom = function(){
	getInputValue();
	ele.emailSug.innerHTML = errorTips() + emailTips();

	ele.tips = document.querySelectorAll('li');

	ele.tips.forEach(item => {
		item.style.display = 'none';
	})	
};

/**
 * 显示隐藏Email智能提示与错误提示
 * [showDom description]
 * @return {[type]} [description]
 */
var showHide = function(){
	tipsDom();

};

/**
 * 隐藏提示语 需要参数区别 Email与错误提示
 * [hide description]
 * @param  {[type]} type [1:Email，2：error]
 */
var hide = function(type){
	if (type = tipsTpl.emali) {
		ele.tips.forEach(item => {
			console.log(item)
		})
	}else{

	}
};

/**
 * 显示提示语 需要参数区别 Email与错误提示
 * [show description]
 * @param  {[type]} type [1:Email，2：error]
 */
var show = function(type){
	if (type = tipsTpl.emali) {
		ele.tips.forEach(item => {
			item.getAttribute('key') && (item.style.display = 'block');
		})
	}else{
		
	}
};

/**
 * 初始化事件
 * [init description]
 * @return {[type]} [description]
 */
var init = function(){
	getInputValue();
	showHide();
};

init();


