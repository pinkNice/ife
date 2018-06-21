var tree = {
    "id": 0,
    "name": "root",
    "left": {
        "id": 1,
        "name": "Simon",
        "left": {
            "id": 3,
            "name": "Carl",
            "left": {
                "id": 7,
                "name": "Lee",
                "left": {
                    "id": 11,
                    "name": "Fate"
                }
            },
            "right": {
                "id": 8,
                "name": "Annie",
                "left": {
                    "id": 12,
                    "name": "Saber"
                }
            }
        },
        "right": {
            "id": 4,
            "name": "Tony",
            "left": {
                "id": 9,
                "name": "Candy"
            }
        }
    },
    "right": {
        "id": 2,
        "name": "right",
        "left": {
            "id": 5,
            "name": "Carl",
        },
        "right": {
            "id": 6,
            "name": "Carl",
            "right": {
                "id": 10,
                "name": "Kai"
            }        
        }
    }
};

// 假设id和name均不会重复，根据输入name找到对应的id
function findIdByName(name) {
    var keys = []
        value = [];

    //对象Object遍历
    function forE(v){
        for(var k in v){
            if(typeof v[k] === "object"){
                forE(v[k]);
            }else {
                keys.push(k);
                value.push(v[k]);
            }           
        }  
    }

    forE(tree);

    //遍历后的数组循环
    for(var i = 0; i < keys.length; i++){
        if(value[i] === name){
            document.write('id: '+ value[i-1] + ' name: ' + value[i] + '<br />');
        }
    }    
}
findIdByName("right");

// 假设id和name均不会重复，根据输入id找到对应的name
function findNameById(id) {
    var keys = []
        value = [];
    function forE(v){
        for(var k in v){
            if(typeof v[k] === "object"){
                forE(v[k]);
            }else {
                keys.push(k);
                value.push(v[k]);
            }           
        }  
    }

    forE(tree);

    //遍历后的数组循环
    for(var i = 0; i < keys.length; i++){
        if(value[i] === id){
            document.write('id: '+ value[i] + ' name: ' + value[i+1]);
        }
    }

    console.log(keys)
    console.log(tree)

}

findNameById(10);

// 把这个对象中所有的名字以“前序遍历”的方式全部输出到console中

var showQueue = [];
function getListWithDLR(node) {
    
    if(!(node == null)){
        arguments.callee(node.firstElementChild);
        showQueue.push(node);             //showQueue是要显示的节点的队列
        arguments.callee(node.lastElementChild);    
    }
    
}
getListWithDLR(tree);
console.log(showQueue)

// 把这个对象中所有的名字以“中序遍历”的方式全部输出到console中
function getListWithLDR() {

}

// 把这个对象中所有的名字以“后序遍历”的方式全部输出到console中
function getListWithLRD() {

}