function sayHi(){
	if(arguments[0] === "bye"){
		return;
	}
	alert(arguments.length);
	return arguments[0];
}
document.write(sayHi("bye7",'',2))
