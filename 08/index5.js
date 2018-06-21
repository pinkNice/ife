var wek = {
	0: '星期日',
	1: '星期一',
	2: '星期二',
	3: '星期三',
	4: '星期四',
	5: '星期五',
	6: '星期六'
};

var ele = {
	ele1: document.querySelector('.time1'),
};
function starTime(){
	var d = new Date(),
			year = d.getFullYear(),
			month = d.getMonth(),
			day = d.getDate(),
			wekday = wek[d.getDay()],
			hours = d.getHours(),
			minutes = d.getMinutes(),
			second = d.getSeconds(),
			timeTpl = hours > 12 ? 'PM' :'AM';

	//为个位数时更改为10位数变为字符串
	function checkTime(i){
		if(i < 10) {
			i = '0' + i;
		}
		 return i;
	}

	year = checkTime(year);
	month = checkTime(month);
	day = checkTime(day);

	ele.ele1.innerHTML = year + ' - ' + month + ' - ' + day + ' ' + wekday + ' ' + hours + ':' + minutes + ':' + second + ' ' + timeTpl;
	t = setTimeout(starTime,500);
}
starTime()

