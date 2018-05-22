/**
	 * 变量集合
	 */
	var defaults,
			clickTpl,
			radioAValue = '',
			radioBValue = '',
			tipsText = '',
			isChecked = true,
			clickFun;
	/**
	 * [defaults description]
	 * @type {Object}
	 * 页面初始化默认对象，用于全局调用
	 */
	defaults = {
		/**
		 * [eles description]
		 * @type {Object}
		 * DOM元素节点集合
		 */
		eles: {
			radioAEle: document.querySelector('#radio-a'),
			radioBEle: document.querySelector('#radio-b'),
			aInputEle: document.querySelector('#num-a'),
			bInputEle: document.querySelector('#num-b'),
			resultEle: document.querySelector('#result'),
			btns: document.querySelectorAll('div')[1],
		},

		/**
		 * [funs description]
		 * @type {function}
		 * 方法集合
		 */
		funs: {
			btn1: function(){
				inputValue();
				tips('value');
			},
			btn2: function(){
				inputValue();
				tips('toFixed')
			},
			btn3: function(){
				inputValue();
				tips('math');
				
			},
			btn4: function(){
				inputValue();
				tips('ceil');
			},
			btn5: function(){
				inputValue();
				tips('floor');
			},
			btn6: function(){
				inputValue();
				tips('round');
			},
			btn7: function(){
				inputValue();
				tips('max');
			},
			btn8: function(){
				inputValue();
				tips('min');
			}
		}
	};

	/**
	 * [tips description]
	 * @param  {[type]} type [description]
	 * @return {[type]}      [description]
	 */
	var tips = function(type){
		var noCheckedText = '未选中输入框',
				noNumberText = '不是数字',
				noValue = '选中的输入框没有值',
				aChecked = defaults.eles.radioAEle.checked,
				bChecked = defaults.eles.radioBEle.checked,
				textpl = {},
				valueFunc,
				toFixedFunc,
				mathFunc,
				ceilFunc,
				floorFunc,
				roundFunc,
				maxFunc,
				minFunc;

		valueFunc = function(){
			if(isChecked){
				if(aChecked){
					tipsText = !radioAValue ? noValue : Number(radioAValue) 
									   ? radioAValue : noNumberText ;
				}else if(bChecked){
					tipsText = !radioBValue ? noValue : Number(radioBValue) 
										 ? radioBValue : noNumberText ;
				}
			}else{
				tipsText = noCheckedText;
			}
			
		};
		mathFunc = function(){
			if(isChecked){
				if(aChecked){
					tipsText = !radioAValue ? noValue : Number(radioAValue) 
								? Math.abs(radioAValue) : noNumberText;
				}else if(bChecked){
					tipsText = !radioBValue ? noValue : Number(radioBValue) 
									? Math.abs(radioBValue) : noNumberText;
				}
			}else{
				tipsText = noCheckedText;
			}
			
		};

		ceilFunc =function(){
			if(isChecked){
				if(aChecked){
					tipsText = !radioAValue ? noValue : Number(radioAValue) 
								? Math.ceil(radioAValue) : noNumberText;
				}else if(bChecked){
					tipsText = !radioBValue ? noValue : Number(radioBValue) 
									? Math.ceil(radioBValue) : noNumberText;
				}
			}else{
				tipsText = noCheckedText;
			}
			
		};

		floorFunc =function(){
			if(isChecked){
				if(aChecked){
					tipsText = !radioAValue ? noValue : Number(radioAValue) 
								? Math.floor(radioAValue) : noNumberText;
				}else if(bChecked){
					tipsText = !radioBValue ? noValue : Number(radioBValue) 
									? Math.floor(radioBValue) : noNumberText;
				}
			}else{
				tipsText = noCheckedText;
			}
			
		};

		roundFunc =function(){
			if(isChecked){
				if(aChecked){
						tipsText = !radioAValue ? noValue : Number(radioAValue) 
									? Math.round(radioAValue) : noNumberText;
				}else if(bChecked){
					tipsText = !radioBValue ? noValue : Number(radioBValue) 
									? Math.round(radioBValue) : noNumberText;
				}
			}else{
				tipsText = noCheckedText;
			}
			
		};

		maxFunc =function(){
			var isNum = false;

			if(radioAValue && radioBValue){
				isNum = (Number(radioAValue) || Number(radioAValue) ===0) && (Number(radioBValue) || Number(radioBValue) ===0);
				tipsText = isNum ? Math.max(radioAValue,radioBValue) : noNumberText;
			}else{
				tipsText = '输入框没有值';
			}
		};

		minFunc = function(){
			var isNum = false;

			if(radioAValue && radioBValue){
				isNum = (Number(radioAValue) || Number(radioAValue) ===0) && (Number(radioBValue) || Number(radioBValue) ===0);
				tipsText = isNum ? Math.min(radioAValue,radioBValue) : noNumberText;
			}else{
				tipsText = '输入框没有值';
			}
		};

		toFixedFunc = function(){
			if(radioAValue && radioBValue){
				var aNum = 0,
						bLength = 0;

				bLength = radioBValue.split('.').length > 1 ? radioBValue.split('.')[1].length : 0;
				aNum = radioAValue ? (radioAValue*1).toFixed(bLength) : 0;
			

				tipsText = Number(radioAValue) && Number(radioBValue) ? aNum : noNumberText;
			}else{
				tipsText = '输入框没有值';
			}
		};

		/**
		 * [textpl Object]
		 * 提示文字集合
		 */
		textpl = {
			'value': valueFunc,
			'math': mathFunc,
			'ceil': ceilFunc,
			'floor': floorFunc,
			'round': roundFunc,
			'max': maxFunc,
			'min': minFunc,
			'toFixed': toFixedFunc
		};

		textpl[type]();

		defaults.eles.resultEle.innerText = tipsText;
	};
	/**
	 * [inputValue function]
	 * 获取每个输入框的值
	 */
	var inputValue = function(){
		isChecked = defaults.eles.radioAEle.checked || defaults.eles.radioBEle.checked;
		radioAValue = defaults.eles.aInputEle.value;
		radioBValue = defaults.eles.bInputEle.value;
	};

	/**
	 * [clickTpl description]
	 * @type {Object}
	 * 点击按钮事件集合，类似于switch方法
	 */
	clickTpl = {
		1: defaults.funs.btn1,
		2: defaults.funs.btn2,
		3: defaults.funs.btn3,
		4: defaults.funs.btn4,
		5: defaults.funs.btn5,
		6: defaults.funs.btn6,
		7: defaults.funs.btn7,
		8: defaults.funs.btn8,
	};

	/**
	 * [clickFun description]
	 * @type {function}
	 * 按钮点击事件
	 */
	clickFun = function(){
		var btnId = '';
		defaults.eles.btns.onclick = function(e){
			btnId =e.target.getAttribute('data-id')
			clickTpl[btnId]();
		}
	};

	/**
	 * 初始化事件
	 */
	clickFun();