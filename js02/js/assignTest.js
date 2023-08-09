"user strict"

/* 
    구조 분해 할당:
    배열이나 객체 속성을 해체해서 개별 변수에 담는 것 
*/
/* 
let [a,b] = [1,2];

console.log(a, b);

let [t1, t2, ...t3]= [100,200,300,400];
console.log(t1, t2,t3);


console.log('=======');
let [su1, su2]= [100,200];
[su1, su2] = [su2, su1];
console.log(su1, su2);


let man={
    name:'heebin',
    age:23,
    addr:'seoul'
};

let {name, age, addr}=man;
console.log(`name:${name}, age:${age}, addr:${addr}`);



let len;
let arr=[];
len=arr.push("a1");
console.log(`len:${len}, arr:${arr}`);
console.log('========');
arr.push('a2');


 */


let arr=[];

document.getElementById('store').onclick=function(){
    let nameValue =document.getElementById('name').value;
    let ageValue = document.getElementById('age').value;
    arr.push(`<li>${nameValue}, ${ageValue}</li>`);
};

 
let list = arr.join('');
console.log(list);



document.getElementById('show').onclick=function(){
     document.getElementById('result').innerHTML=arr;
}



document.getElementById('show').onclick=function(){


    document.getElementById('result').innerHTML= arr.join('');
}





