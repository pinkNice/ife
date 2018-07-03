let arry = [1,2,3,4,5];

let obj = {
	order1: 1,
	order2: 2,
	order3: 3,
	order4: 4,
	order5: 5,
	order6: 6

};

let square = function(n){
	return n * n;
}

/**
 * 将对象转换成数组
 * [setObj description]
 * @param {[type]} obj [description]
 */
let setObj = function(obj) {
	var baseArry = [];
	for(let i in obj) {
		baseArry.push(obj[i]);
	}
	return baseArry;
};

/**
 * [baseMap description]
 * @param  {[type]} arry [原始数据]
 * @param  {[type]} func [需要执行方法]
 * @return {[type]}      [description]
 */
let baseMap = function (arry,func) {
	var result = [];

	arry = (arry instanceof Array) ? arry : setObj(arry);

	if(typeof func === 'function'){
		arry.forEach(item => {
			result.push(func(item));
		});
		return result;
	}else {
		return result = arry;
	}
}

var newResult = baseMap(obj,square);
console.log(newResult);