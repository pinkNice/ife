var defaults = {},
		resultTpl = {},
		aChecked = false,
		bChecked = false,
		tipsFunc,
		inputValue,
		inputAValue = '',
		inputBValue = '',
		numAValue = '',
		numBValue = '',
		btnClickFun;

defaults = {
	eles: {
		btns: document.querySelector('.btns'),
		result: document.querySelector('#result'),
		radioA: document.querySelector('#radio-a'),
		radioB: document.querySelector('#radio-b'),
		strA: document.querySelector('#str-a'),
		strB: document.querySelector('#str-b'),
		numA: document.querySelector('#num-a'),
		numB: document.querySelector('#num-b')
	},
	funcs: {
		btn1: function(){
			inputValue();
			tipsFunc('length');
		},
		btn2: function(){
			inputValue();
			tipsFunc('charAt');
		},
		btn3: function(){
			inputValue();
			tipsFunc('concat');
		},
		btn4: function(){
			inputValue();
			tipsFunc('indexOf');
		},
		btn5: function(){
			inputValue();
			tipsFunc('lastIndexOf');
		},
		btn6: function(){
			inputValue();
			tipsFunc('slice');
		},
		btn7: function(){
			inputValue();
			tipsFunc('rows');
		},
		btn8: function(){
			inputValue();
			tipsFunc('substr');
		},
		btn9: function(){
			inputValue();
			tipsFunc('toUpperCase');
		},
		btn10: function(){
			inputValue();
			tipsFunc('toLowerCase');
		},
		btn11: function(){
			inputValue();
			tipsFunc('replace');
		},
		btn12: function(){
			inputValue();
			tipsFunc('aReplace');
		}
	}
};

/**
 * 各个按钮点击事件对应的逻辑处理
 * [resultTpl description]
 * @type {Object}
 */
resultTpl = {
	1: defaults.funcs.btn1, 
	2: defaults.funcs.btn2,
	3: defaults.funcs.btn3,
	4: defaults.funcs.btn4,
	5: defaults.funcs.btn5,
	6: defaults.funcs.btn6,
	7: defaults.funcs.btn7,
	8: defaults.funcs.btn8,
	9: defaults.funcs.btn9,
	10: defaults.funcs.btn10,
	11: defaults.funcs.btn11,
	12: defaults.funcs.btn12
};

/**
 * 获取输入框的值
 * [inputValue description]
 * @return {[type]} [description]
 */
inputValue = function(){
	inputAValue = defaults.eles.strA.value;
	inputBValue = defaults.eles.strB.value;
	numAValue = defaults.eles.numA.value;
	numBValue = defaults.eles.numB.value;
};

tipsFunc = function(type){
	var text = '',
			notValue = '选中输入框没有值',
			lengthFunc,
			charAtFunc,
			concatFunc,
			indexOfFunc,
			lastIndexOfFunc,
			sliceFunc,
			rowsFunc,
			substrFunc,
			toUpperCaseFunc,
			toLowerCaseFunc,
			replaceFunc,
			aReplaceFunc,
			textTpl = {};
	aChecked = defaults.eles.radioA.checked;
	bChecked = defaults.eles.radioB.checked

	lengthFunc = function(){
		if(aChecked){
			text = inputAValue.length || notValue;
		}else {
			text = inputBValue.length || notValue;
		}
	};

	charAtFunc = function(){
		if(aChecked){
			text = inputAValue.length >=3 ? inputAValue.charAt(2) :notValue;
		}else {
			text = inputBValue.length >=3 ? inputBValue.charAt(2) : notValue;
		}
	};

	concatFunc = function(){
		text = inputAValue && inputBValue ? inputAValue.concat(inputBValue) : notValue;
	};

	indexOfFunc = function(){
		text = inputAValue && inputBValue 
					 ? inputAValue.indexOf(inputBValue) === -1 
					 ? '找不到想要的值' : inputAValue.indexOf(inputBValue)
					 : notValue;
	};

	lastIndexOfFunc = function(){
		text = inputAValue && inputBValue 
					 ? inputBValue.lastIndexOf(inputAValue) === -1
					 ? '找不到想要的值' : inputBValue.lastIndexOf(inputAValue)
					 : notValue
	};

	sliceFunc = function(){
		if(aChecked){
			text = inputAValue ? inputAValue.slice(numAValue,numBValue) : notValue;
		}else{
			text = inputBValue ? inputBValue.slice(numAValue,numBValue) : notValue;
		}
	};

	rowsFunc = function(){
		if(aChecked){
			text = defaults.eles.strA.rows || notValue;
		}else {
			text = defaults.eles.strB.rows || notValue;
		}
	};

	substrFunc = function(){
		if(aChecked){
			text = inputAValue ? inputAValue.substr(numAValue,numBValue) : notValue;
		}else{
			text = inputBValue ? inputBValue.substr(numAValue,numBValue) : notValue;
		}
	};

	toUpperCaseFunc = function(){
		if(aChecked){
			text = inputAValue ? inputAValue.toUpperCase() : notValue;
		}else{
			text = inputBValue ? inputBValue.toUpperCase() : notValue;
		}
	};

	toLowerCaseFunc = function(){
		if(aChecked){
			text = inputAValue ? inputAValue.toLowerCase() : notValue;
		}else{
			text = inputBValue ? inputBValue.toLowerCase() : notValue;
		}
	};

	replaceFunc = function(){
		if(aChecked){
			text = inputAValue ? inputAValue.replace(/\s/,'') : notValue;
		}else{
			text = inputBValue ? inputBValue.replace(/\s/,'') : notValue;
		}
	};

	aReplaceFunc = function(){
		var ex = '';
		if(aChecked){
			
			if(inputAValue){
				ex = inputBValue;
				text = '';
				defaults.eles.strB.value = inputBValue.replace(ex,inputAValue);
			}else{
				text = notValue;
			}
			
		}else {
			if(inputBValue){
				ex = inputAValue;
				text = '';
				defaults.eles.strA.value = inputAValue.replace(ex,inputBValue);
			}else{
				text = notValue;
			}
			
		}
	};

	textTpl = {
		length: lengthFunc,
		charAt: charAtFunc,
		concat: concatFunc,
		indexOf: indexOfFunc,
		lastIndexOf: lastIndexOfFunc,
		slice: sliceFunc,
		rows: rowsFunc,
		substr: substrFunc,
		toUpperCase: toUpperCaseFunc,
		toLowerCase: toLowerCaseFunc,
		replace: replaceFunc,
		aReplace: aReplaceFunc
	};

	textTpl[type]();
	defaults.eles.result.innerText = text;
};
btnClickFun = function(){
	defaults.eles.btns.onclick = function(e){
		resultTpl[e.target.getAttribute('data-id')]();
	}
};

btnClickFun();