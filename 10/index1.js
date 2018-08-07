let defaults = {
	theadData: ['商品','地区',
	'1月','2月','3月','4月','5月','6月','7月','8月','9月','10月','11月','12月'],
	selectVaule1: '',
	selectVaule2: '',
	dom: {
		select1: document.querySelector('.select-1'),
		select2: document.querySelector('.select-2'),
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


if(location.hash){
	if(location.hash.indexOf('region') > -1){
			defaults.selectVaule1 = location.hash.split('#')[1].split('region')[1] || defaults.dom.select1.value;
			defaults.dom.select1.value = defaults.selectVaule1;
	}else {
		defaults.dom.selectVaule1 = defaults.dom.select1.value;
	}

	if(location.hash.indexOf('product') > -1){
		defaults.selectVaule2 = location.hash.split('#')[2].split('product')[1] || defaults.dom.select2.value;
		defaults.dom.select2.value = defaults.selectVaule2;
	}else{
		defaults.selectVaule2 = defaults.dom.select2.value;
	}
}else{
	defaults.selectVaule1 = defaults.dom.select1.value;
	defaults.selectVaule2 = defaults.dom.select2.value;
}

/**
 * 修改数据
 * [changeData description]
 * @return {[type]} [description]
 */
changeData = function(){
	let { selectVaule1,dom,selectVaule2 } = defaults,
			{thead,tbody} = dom;
			let secndData = [];

	newData = [];
	sourceData.map((item => {
		if(item.region === selectVaule1){
			newData.push(item)
		}else if(selectVaule1 ==='全部'){
			newData = sourceData;
		}
	});
	newData.map(i=>{
			if(i.product === selectVaule2){
				secndData.push(i)
			}else if(selectVaule2 ==='全部'){
				secndData = newData;
			}
		});
	newData = secndData || newData;
	tbody.innerHTML = '';
	renderTableDom()
};

/**
 * 获取单选值
 * [onchangeSelect description]
 * @return {[type]} [description]
 */
onchangeSelect = function(e,type){
	
	if(type){
		defaults.selectVaule2 = e.path[0].value;
		location.hash='#region' + defaults.selectVaule1 + '#product' + defaults.selectVaule2;
	}else{
		defaults.selectVaule1 = e.path[0].value;
		location.hash='#region' + defaults.selectVaule1 + '#product' + defaults.selectVaule2;
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
	defaults.dom.select1.onchange = function(e){
		onchangeSelect(e,0);
	}
	defaults.dom.select2.onchange = function(e){
		onchangeSelect(e,1);
	}
};

init();