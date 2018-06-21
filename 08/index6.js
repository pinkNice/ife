let defaults = {
	ele: {
		body: document.querySelector('body'),
		year: document.querySelector('#year-select'),
		month: document.querySelector('#month-select'),
		day: document.querySelector('#day-select'),
		hour: document.querySelector('#hour-select'),
		mintue: document.querySelector('#minite-select'),
		second: document.querySelector('#second-select'),
		result: document.querySelector('#result-wrapper')

	},
	value: {},
};

/**
 * 将返回星期数字转换为文字
 * [wekTpl description]
 * @type {Object}
 */
let wekTpl = {
	0: '星期日',
	1: '星期一',
	2: '星期二',
	3: '星期三',
	4: '星期四',
	5: '星期五',
	6: '星期六'
};

const textTips = "现在距离";

const textTips1 = "已经过去";

let select = '',
		hourSecond = '',
		diifDay = '',
		diifHour = '',
		diifMintue = '',
		diifSecond = '';

let starTime = function(){
	var endtime = new Date(defaults.value.year
			+'/'+defaults.value.month
			+'/'+defaults.value.day+','
			+defaults.value.hour+':'
			+ defaults.value.mintue +':'
			+defaults.value.second),
			d = new Date(),
			lefttime = parseInt((d.getTime()-endtime.getTime())/1000),
 			diifDay = parseInt(lefttime/(24*60*60)) < 10 ? '0' + parseInt(lefttime/(24*60*60)) : parseInt(lefttime/(24*60*60)),  
      diifHour =  parseInt(lefttime/(60*60)%24) < 10 ? '0' + parseInt(lefttime/(60*60)%24) : parseInt(lefttime/(60*60)%24),  
      diifMintue =  parseInt(lefttime/60%60) <10 ? '0' + parseInt(lefttime/60%60) : parseInt(lefttime/60%60),  
      diifSecond =  parseInt(lefttime%60) <10 ? '0' + parseInt(lefttime%60) : parseInt(lefttime%60),
      wekDay = wekTpl[endtime.getDay()];

	defaults.ele.result.innerHTML = textTips 
		+ defaults.value.year + '年' 
		+ defaults.value.month + '月' 
		+ defaults.value.day + '日' + wekDay + ' ' 
		+ defaults.value.hour + ':' 
		+ defaults.value.mintue + ':' 
		+ defaults.value.second + textTips1
		+ diifDay + '天'
		+ diifHour + '时'
		+ diifMintue + '分'
		+ diifSecond + '秒';
};

/**
 * 获取选项值
 * [getValue description]
 * @return {[type]} [description]
 */
let getValue = function(){
	let ele = defaults.ele;
	defaults.value = {
		year: ele.year[ele.year.selectedIndex].value,
		month: ele.month[ele.month.selectedIndex].value,
		day: ele.day[ele.day.selectedIndex].value,
		hour: ele.hour[ele.hour.selectedIndex].value < 10 ? '0' + ele.hour[ele.hour.selectedIndex].value :ele.hour[ele.hour.selectedIndex].value,
		mintue: ele.mintue[ele.mintue.selectedIndex].value < 10 ? '0' + ele.mintue[ele.mintue.selectedIndex].value : ele.mintue[ele.mintue.selectedIndex].value,
		second: ele.second[ele.second.selectedIndex].value < 10 ? '0' + ele.second[ele.second.selectedIndex].value : ele.second[ele.second.selectedIndex].value
	};
	starTime();

	let t = setTimeout(getValue,500)
};

/**
 * 修改result值
 * [checkResult description]
 * @return {[type]} [description]
 */
let checkResult = function(){
	getValue();
};

/**
 * 事件初始化
 * [init description]
 * @return {[type]} [description]
 */
let init = function(){
	let ele = defaults.ele;
	checkResult()
	ele.body.onclick = function(e){
		if(e.target.localName === 'select'){
			checkResult();
		}
	};
};

init();

