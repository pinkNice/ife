/**
 * 默认设置
 * [defaults description]
 * @type {Object}
 */
var defaults = {
	ele: {
		input: document.querySelector('#email-input'),
		emailSug: document.querySelector('.email-sug'),
		emty: '',
		submit: document.querySelector('.submit')

	},
	inputValue: '',
	tipsTpl: {
		emali: 1,
		error: 2

	},
	tpl: false
},

ele = defaults.ele,
tipsTpl = defaults.tipsTpl;


// 邮箱后缀List参考
var postfixList = ['163.com', 'gmail.com', '126.com', 'qq.com', '263.net'];

var getInputValue = function(){
	ele.inputValue = ele.input.value;
};


//失焦
ele.input.addEventListener('blur',function(){
	getInputValue();
	defaults.tpl = true;
	tipsDom();
});

//键盘事件
ele.input.addEventListener('keydown',function(){
	getInputValue();
	defaults.tpl = true;
	tipsDom();
})

//聚焦
ele.input.addEventListener('focus',function(){
	getInputValue();
	defaults.tpl = false;
	tipsDom();
});

//输入框
ele.input.addEventListener('input',function(){
	getInputValue();
	defaults.tpl = false;
	tipsDom();
});

/**
 * 邮箱智能提示DOM生成
 * [textTips description]
 * @return {[type]} [description]
 */
var emailTips = function(){
	var elePostfixList = '';
	var inputValue = (ele.inputValue.indexOf('@') !== -1 && 
									ele.inputValue.substring(0,ele.inputValue.indexOf('@'))) || ele.inputValue;

	postfixList.forEach((item,i)=>{
		elePostfixList += '<li class="emali" key="'+ (++i) +'">' + inputValue  + '@' +  item + '</li>';
	});
	return elePostfixList;
};

/**
 * 错误提示语DOM生成
 * [errorTips description]
 * @return {[type]} [description]
 */
var errorTips = function(){
	var ele = '<li class="emty">输入框不能为空</li>';
	return ele;
};

/**
 * 将Email智能提示语错误提示DOM添加到提示语容器中
 * [tipsDom description]
 * @return {[type]} [description]
 */
var tipsDom = function(){
	let emailTipsDom = '',
			errorDom = '',
			tips = [];
	getInputValue();
	if(defaults.tpl){
		emailTipsDom = emailTipsDom;
	}else {
		emailTipsDom = (ele.inputValue && ele.inputValue.indexOf('@') !== -1) && emailTips() || '';
	}
	ele.emailSug.innerHTML = (errorDom = (!ele.inputValue && errorTips()) || '') + emailTipsDom;
	defaults.tpl = false;
	tips = document.querySelectorAll('.emali');
	let tipsTpl = (ele.inputValue.indexOf('@')!== -1) && (ele.inputValue.substring(ele.inputValue.indexOf('@')+1));
	let displayTpl = {
		'2': 'block',
		'1': 'block',
		'q': 'block',
	};
	if(tips.length){
		
		tips.forEach(i=>{
			let text = i.innerText;
			text = text.substring(text.indexOf('@') + 1);
			if(tipsTpl){
				switch(true){
					case text[0]*1 ===2 && tipsTpl*1===2:
						i.style.display = 'block';
						break;
					case text.indexOf(tipsTpl[0]) !== -1:
					 	i.style.display = 'block';
						break;
					default:
						i.style.display = 'none';
				}
			}else {
				i.style.display = 'none';
			}
			
		})
	}
};

/**
 * 清楚输入框左右空格
 * [valueClearSpace description]
 * @return {[type]} [description]
 */
var valueClearSpace = function(){
	let value = ele.inputValue;

	//所有空格特殊字符
	var space = ' \n\r\t\f\x0b\xa0\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200a\u200b\u2028\u2029\u3000';

	//去除左边空格
	for (let i = 0; i < value.length; i++ ) {
		if(space.indexOf(value.charAt(i)) === -1){
			value = value.substring(i);
			break;
		}
	}

	//去除右边空格
	for (let j = value.length - 1; j >= 0; j--) {
		if(space.indexOf(value.charAt(j)) === -1){
			value = value.substring(0,j+1);
			break;
		}
	}
};

/**
 * 初始化事件
 * [init description]
 * @return {[type]} [description]
 */
var init = function(){
	getInputValue();
	tipsDom();

	//点击提交事件
	ele.submit.addEventListener('click',function(){
		valueClearSpace();
	})
};

init();


