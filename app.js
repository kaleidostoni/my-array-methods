//MÉTODOS DE ARRAY

/*1 ) Crea tu propia función forEach que funcione igual a Array.forEach. Algo asi:
function miForEach(arreglo, callback){
		// cpompleta aqui
	}

    miForEach([1,2,3], function(){})*/

function myforEach(array,callback){
    for(var i = 0; i<array.length; i++){
        console.log(array[i]);
    }
}

myforEach([1,2,3],function(){});


/*2 ) Crea tu propia función map que funcione igual a Array.map. Algo asi:
function miMap(arreglo, callback){

    }*/
var newArray =[];   
function myMap(array,callback){
    for(var i = 0; i<array.length; i++){
         newArray.push(array[i]);
    }
    console.log(newArray);
}

myMap(['a','b','c','d','e'],function(){});

/*3 ) Crea tu propia función filter que funcione igual a Array.filter. Algo asi:
function miFilter(arreglo, filter){

    }*/
    
var loveArray = [];
function myFilter(array,callback){
    for(var i = 0; i<array.length; i++){
        if(array[i]==='love'){
            loveArray.push(array[i]);
        }
        
    }console.log(loveArray);
}

myFilter(['love','hate','hate','love','love','love'],function(){});

/*4 ) Crea tu propia función reduce que funcione igual a Array.reduce. Algo asi:
function miReduce(arreglo, reduce){

    }*/
var sum = 0;
function myReduce(array,callback){
    for(var i = 0; i<array.length; i++){
        sum += array[i];
    }
    console.log(sum);
}
 myReduce([5,10,15,20],function(){});

 /*1 ) Crea tu propia función sort que funcione igual a Array.sort. Algo asi:
function miSort(arreglo, callback){

    }*/

/*
function mySort(array,callback){
    for(var i = 0; i<array.length; i++){
        if(array[0]< array[1]){
            console.log(1)
        }else{
            console.log(-1);
        }
    }
}

mySort(['naranja','Naranja'],function(){});*/
