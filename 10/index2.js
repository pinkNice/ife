let defaults = {
	theadData: ['商品','地区',
	'1月','2月','3月','4月','5月','6月','7月','8月','9月','10月','11月','12月'],
	selectVaule1: [],
	selectVaule2: [],
	dom: {
		checkBox1: document.querySelector('.checkBox1'),
		checkBox2: document.querySelector('.checkBox2'),
		thead: document.querySelector('.table-wrapper thead tr'),
		tbody: document.querySelector('.table-wrapper tbody'),
		tabWrapper: document.querySelector('.table-wrapper')
	}
},
newData = sourceData,
onchangeSelect,
changeData,
renderTheadDom,
renderTobdyDom,
renderTableDom,
init,
addEvent;
console.log(sourceData)


if(location.hash){
	if(location.hash.indexOf('region') > -1){
			defaults.selectVaule1.push(location.hash.split('#')[1].split('region')[1] || defaults.dom.checkBox1.value)
	}else {
		defaults.dom.selectVaule1.push(defaults.dom.checkBox1.value);
	}

	if(location.hash.indexOf('product') > -1){
		defaults.selectVaule2.push(location.hash.split('#')[2].split('product')[1] || defaults.dom.checkBox2.value);
	}else{
		defaults.selectVaule2.push(defaults.dom.checkBox2.value);
	}
}else{
	defaults.selectVaule1.push('');
	defaults.selectVaule2.push('');
}

/**
 * 修改数据
 * [changeData description]
 * @return {[type]} [description]
 */
changeData = function(){
	let { selectVaule1,dom,selectVaule2 } = defaults,
			{thead,tbody} = dom;
	let one = [];
	let two = [];
	let secndData = [];

	newData = [];
	sourceData.map(item => {
		selectVaule1.map(value=>{
			if(item.region === value){
				one.push(item)
			}else if(value ==='全部'){
				one = sourceData;
			}
		})
		
	});
	one.map(i=>{
		selectVaule2.map(value=>{
			if(i.product === value){
				secndData.push(i)
			}else if(value ==='全部'){
				secndData = one;
			}
		})
	});
	newData = secndData.length ? secndData : one;
	console.log(newData);
	tbody.innerHTML = '';
	renderTableDom()
};

/**
 * 获取单选值
 * [onchangeSelect description]
 * @return {[type]} [description]
 */
onchangeSelect = function(e,type){
	let one = '',two=''
	
	if(type){
		if(defaults.selectVaule2.indexOf(e.path[0].defaultValue) === -1 && defaults.selectVaule2.indexOf('全部') === -1){
			defaults.selectVaule2.push(e.path[0].defaultValue);
		}

		location.hash = '';
		defaults.selectVaule1.map((i,j)=>{
			if(i){
				if(j === defaults.selectVaule1.length -1){
					one +=i;
				}else{
					one +=i+',';
				}
				
			}
		})
		defaults.selectVaule2.map((i,j)=>{
			if(i){
				if(j === defaults.selectVaule2.length -1){
					two +=i;
				}else{
					two +=i+',';
				}
				
			}
		})
		location.hash='#region' + one + '#product' + two;
	}else{
		if(defaults.selectVaule1.indexOf(e.path[0].defaultValue) === -1){
			defaults.selectVaule1.push(e.path[0].defaultValue);
		}		
		defaults.selectVaule1.map((i,j)=>{
			if(i){
				if(j === defaults.selectVaule1.length -1){
					one +=i;
				}else{
					one +=i+',';
				}
				
			}
		})
		defaults.selectVaule2.map((i,j)=>{
			if(i){
				if(j === defaults.selectVaule2.length -1){
					two +=i;
				}else{
					two +=i+',';
				}
				
			}
		})
		location.hash = '';
		location.hash='#region' + one + '#product' + defaults.selectVaule2.map(i=> i);
	}
	changeData();
};

/**
 * 渲染table
 * [renderTableDom description]
 * @return {[type]} [description]
 */
renderTableDom = function(){
	renderTheadDom();
	renderTobdyDom();
	
};

renderTheadDom = function(){
	let { theadData,dom } = defaults,
			{thead} = dom,
			th = '';
	theadData.map(item => {
		th += '<th>'+ item +'</th>';
	});
	thead.innerHTML = th;
};

renderTobdyDom = function(){
	let {dom} = defaults,
			{tbody} = dom,
			tr = '',
			sale = [];
	newData.length && newData.map((item,i)=> {
		tr += '<tr>'+ td(item,i) +'</tr>';
	});

	function td(item,i){
		let b = '';
		for (j in item) {
			if(j === 'sale'){
				item[j].map(c=>{
					b +='<td>'+c+'</td>';	
				})
			}else {
				b +='<td>'+item[j]+'</td>';
			}
			
		}

		return b
	}

	tbody.innerHTML = tr;
};

/**
 * 初始化事件
 * [init description]
 * @return {[type]} [description]
 */
init = function(){
	changeData();
	renderTableDom();
	addEvent();
};

/**
 * 事件绑定
 * [addEvent description]
 */
addEvent = function(){
	defaults.dom.checkBox1.onchange = function(e){
		onchangeSelect(e,0);
	}
	defaults.dom.checkBox2.onchange = function(e){
		onchangeSelect(e,1);
	}
};

init();