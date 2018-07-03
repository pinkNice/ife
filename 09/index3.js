let arry = [1,2,3,4,5,6,7,8,1,5,10,8,20,31,11,12,13,11,14,15,20,16,10,18,17,17,18,19,20,14,15,15],
		removeRepetition = [],
		repeatValue = [],
		num = 1,
		a = {};

arry.map(item => {
	if(removeRepetition.indexOf(item) === -1){
		removeRepetition.push(item);
	}else{
		repeatValue.push(item);
	}
});

repeatValue.map((item,i) => {
	console.log(item,i)
	a[i] = item;
});
console.log(a)
console.log(removeRepetition)
console.log(repeatValue);


let set = new Set([1,2,2,3,"3"]);
console.log([...set])
console.log(set.size)

const items = new Set([1, 2, 3, 4, 5]);
const array = Array.from(items);
console.log(array)

let g = new Set([1, 2, 3,2]);
let b = new Set([4, 3, 2]);

// 并集
let union = new Set([...g, ...b]);
// Set {1, 2, 3, 4}

// 交集
let intersect = new Set([...g].filter(x => b.has(x)));
// set {2, 3}

// 差集
let difference = new Set([...g].filter(x => !b.has(x)));
console.log(difference)
function _toConsumableArray(arr) { 
	if (Array.isArray(arr)) { 
		for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { 
			arr2[i] = arr[i]; 
		} 
		return arr2; 
	} else { 
			return Array.from(arr); 
	} 
}

//        带有绘制过程的动画
var i = 1;
var x = 1;
var y = 200;
var t;
function moveSin(){
  var my_canvas = document.getElementById( "MyCanvas" );
  var content = my_canvas.getContext( "2d" );
  content.beginPath();
  content.moveTo( x, y );
  i += 0.1;
  x = i * 10;
  y = Math.sin( i ) * 20 + 200;
  content.lineTo( x, y );
  content.stroke();
  content.closePath();
  if(x>=1000){
    window.clearInterval(t);
  }
}
       
document.body.onmousedown = function(){
  t = setInterval( moveSin, 10 );
};

document.body.onmouseup = function(){
  clearInterval(t);
}