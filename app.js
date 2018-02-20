//MÉTODOS DE ARRAY

/*1 ) Crea tu propia función forEach que funcione igual a Array.forEach. Algo asi:
function miForEach(arreglo, callback){
		// cpompleta aqui
	}

    miForEach([1,2,3], function(){})*/

function myforEach(array,callback){
    for(var i = 0; i<array.length; i++){
        callback(array[i]);
    }
}

myforEach([1,2,3],function(number){
    console.log(number);
});


/*2 ) Crea tu propia función map que funcione igual a Array.map. Algo asi:
function miMap(arreglo, callback){

    }*/
var newArray =[];   
function myMap(array,callback){
    for(var i = 0; i<array.length; i++){
         newArray.push(array[i]);
    }
    callback(newArray)
}

myMap(['a','b','c','d','e'],function(mapped){
    console.log(mapped);
});

/*3 ) Crea tu propia función filter que funcione igual a Array.filter. Algo asi:
function miFilter(arreglo, filter){

    }*/
    
var loveArray = [];
function myFilter(array,callback){
    for(var i = 0; i<array.length; i++){
        if(array[i]==='love'){
            loveArray.push(array[i]);
        }
        
    }callback(loveArray);
}

myFilter(['love','hate','hate','love','love','love'],function(justLove){
    console.log(justLove)
});

/*4 ) Crea tu propia función reduce que funcione igual a Array.reduce. Algo asi:
function miReduce(arreglo, reduce){

    }*/
var sum = 0;
function myReduce(array,callback){
    for(var i = 0; i<array.length; i++){
        sum += array[i];
    }
    callback(sum);
}
 myReduce([5,10,15,20],function(cipher){
     console.log(cipher)
 });

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

function mySort(array,callback)
	{
		for(var i=1;i<array.length;i++)
		{
			for(var j=0;j<(array.length-i);j++)
			{
				if(array[j]>array[j+1])//compara las cifra  izquierda con la derecha de a lado(+1)
				{
					k=array[j+1];//si es mayor la asigna a la variable k
                    array[j+1]=array[j];//el indice que ocupaba j+1 lo asigna  al valor que se encuentra en j
					array[j]=k; //el indice que ocupaba j va a asignarsele el valor de la variable k
				}
			}
		}
		callback(array);
    }
    
    mySort([3,65,2,8],function(sorted){
        console.log(sorted);
    });