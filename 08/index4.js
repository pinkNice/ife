var d = new Date();
var weak = new Array(7);
weak[0] = "星期日";
weak[1] = "星期一";
weak[2] = "星期二";
weak[3] = "星期三";
weak[4] = "星期四";
weak[5] = "星期五";
weak[6] = "星期六";

function starTime(){
	var d = new Date();
	var hour = d.getHours(),
			minute = d.getMinutes(),
			second = d.getSeconds(),
			timeEle = document.querySelector('div');

		hour = checkTime(hour);
		minute = checkTime(minute);
		second = checkTime(second);
		function checkTime(i){
			if(i < 10) {
				i = '0' + i;
			}
			return i;
		}
		// console.log(second)
	timeEle.innerHTML = hour + ':' + minute + ':' + second;
	t = setTimeout(starTime,500);
}


document.write(weak[d.getDay()] + "<br />");
document.write(Date() + '<br/>');
document.write(d.getTime() + '<br/>');
document.write(d.toUTCString() + '<br/>');

starTime()

