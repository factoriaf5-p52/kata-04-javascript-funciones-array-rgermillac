/* Encuentra el máximo */

export function maxOfTwoNumbers(a, b){
    if(a>b){
        return a;
    } else if (a<b){
        return b;
    } else {
        return a;
    }
    }

export function findLongestWord(words){
 if(words.length == 0){
    return undefined;
 }
 let longestWord = "";
 
 for (let i = 0; i < words.length; i++){
    if (longestWord.length < words[i].length){
        longestWord= words[i];
    }
 }
return longestWord;
} 


export function sumArray(num){
let addition = 0;
for(let i=0; i<num.length;i++){
addition = num[i] + addition;
}
return addition;
}

export function averageNumbers(list){
if(!list.length) {
return undefined;
};
const additionlist = sumArray (list);
return additionlist/list.length;
}

export function averageWordLength(array){
if (!array.length) return undefined;
return array.join("").length/array.length    

}
export function uniquifyArray(words){

let newArray = []
words.forEach((elemento)=>{ 
    if(!newArray.includes(elemento))
    newArray.push(elemento);
    
    })

if(words.length){
    return newArray
} else {
    return undefined;
}

}


export function doesWordExist(array){
let words = [];

if (words.find(element => !element)){ 
    return false
} else {
    return true
}


}
export function howManyTimes(){

}
export function greatestProduct(){

}





