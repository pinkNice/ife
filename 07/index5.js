//创建对象

var person1 = new Object();
person1.firstName = "fen ";
person1.lastName = "Hong Bao ";
person1.age = 50;
person1.eyeColor = " blue";

document.write(person1.firstName + person1.lastName + person1.age + person1.eyeColor + '<br/>');

//字面量
var person2 = {};
person2 = {
	firstName: "fen ",
	lastName: "Hong Bao ",
	age: 50,
	eyeColor: " blue"
};

document.write(person2.firstName + person2.lastName + person2.age + person2.eyeColor + '<br/>');
 
// 创建对象构造器
function person3(firstName,lastName,age,eyeColor){
	this.firstName = firstName;
	this.lastName = lastName;
	this.age = age;
	this.eyeColor = eyeColor;
}

//创建新的对象实列
var myFather = new person3("fen ","Hong Bao ",26," blue");
console.log(myFather.constructor.name)
document.write(myFather.firstName + myFather.lastName + myFather.age + myFather.eyeColor + '<br/>');

//构造函数之中创建方法事件
 function person4(firstName,lastName,age,eyeColor){
 	this.firstName = firstName;
 	this.lastName = lastName;
 	this.age = age;
 	this.eyeColor = eyeColor
 	this.changeName = changeName;

 	function changeName(name){
 		this.lastName = name;
 	}
 }

 var meMyther = new person4("fen ","Hong Bao ",26," blue");
 meMyther.changeName("pinkNice");
 document.write(meMyther.lastName);

 var person5 = {
 	firstName: '1',
 	lastName: '2',
 	age: 3,
 	eyeColor: 'blue'
 };
var text=''
 for(i in person5){
 	text += person5[i]; 
 }
 console.log(text)