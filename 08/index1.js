function myFunction1(){
	let x = 5;
	return x;
}
let x = '';

let myVar = myFunction2();

console.log(myVar);

function myFunction2(a,b){
	return a*b;
}

document.write(myFunction2(1,8));

function myFunction3(a,b){
	if(a > b){
		return;
	}
	return x = a + b;
}

document.write(myFunction3(2,1));