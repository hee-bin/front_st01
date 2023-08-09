"use strict"


/* let a=20;
console.log('a',a);
 */

/* 
let a=30;
{
    let a=10;
    console.log('block-a',a);
}

console.log('global-a', a);


var b=30;
{
    var b=10;
    console.log('block-b',b);
}

console.log('global-b', b); */


/* console.log('------------');

for(var i=1; i<3; i++){
    console.log(i);
}

console.log(i);
console.log(i);


console.log('------------');

let tf='';
if(tf)
    console.log('true');
else
    console.log('false'); */
/* 
let arr=[10,20,30];

let fn=function(){
    console.log('functions1!!');
}
fn();

console.log('------------');

console.log(arr.length);

for(let i=0; i<arr.length; i++){
    console.log(arr[i]);
}

console.log('------------');
console.log(typeof arr);
console.log(typeof(arr));

console.log(typeof fn+1);
console.log(typeof(fn));

let person={};
console.log(typeof person);

console.log(Array.isArray(arr));
console.log(Array.isArray(person));

 */

/* let a='aaa';
let b=20;
let c=a+b;
console.log(c);
console.log(typeof c,c);

console.log(typeof (10/2), 10/2);
console.log(typeof('10/2'), '10'/2);
console.log(typeof('a'/2), 'a'/2);


 */

/* 
 let name='jung hee bin'
let score=100;

console.log('name:${name}');
console.log(`name : ${name}`)
  */
/* 
단항 연산자 ++ --
이항 연산자
    산술 연산자 + - * / % ** 
    */

/* // 비교 연산
 
console.log(10>=10);

let a='10';
let b=10;
console.log(a==b); //값만 비교
console.log(a===b); // 자료형까지 비교

 */

/* let m1={name:'jung', age:23};
let m2=m1;
let m3={name:'jung', age:23};
console.log(typeof m1, typeof m2, typeof m3);
console.log(m1==m2, m1===m2);
console.log(m1==m3, m1===m3); //참조하고 있는 객체가 없다.

 */
/* 

console.log('------------');

console.log(null==undefined);
console.log(null===undefined);
console.log(false=='');
console.log(false==0);
console.log(false===0);

 */
/* 
복합 대입 연산자
a+=10; // a= a+10;

*/

/* let a=10;
console.log(a);
a+=20;
console.log(a);
a/=3;
console.log(a);
 */

/* let max;
let su1=10;
let su2=20;
max=(su1>su2)?su1:su2;
console.log(max); */
/* 
let a=10;
console.log(a>>2);  
console.log(a<<2);
 */

/* let kor=85;
if(kor >=65)
    console.log('합격');
else
    console.log('불합격');

 */

/* console.log(10>=10 && 10!==10);
console.log(10!==10 && 10>=10); */

/* let kor=90;

if(kor>=90)
    console.log('수');
else if(kor>=80)
    console.log('우');
else if(kor>=80)
    console.log('미');
else if(kor>=70)
    console.log('양');
else if(kor>=60)
    console.log('가');

 */


/* document.getElementById('btn')
    .onclick=function(){

        let elekor=document.getElementById('kor');
        let kor=Number(elekor.value);
        let elemath =document.getElementById('math');
        let math=Number(elemath.value);
        let eleeng =document.getElementById('eng');
        let eng=Number(eleeng.value);
        
        console.log(kor, math, eng);
        
        let ave = (kor+math+eng)/3 ;
        console.log(ave);

        let result='<li>평균 : '+ ave + '</li>';

        if(kor>=90 && math>=90 && eng>=90)
            result+='<li>성취 : very good </li>';
        else if(kor>=90 || math>=90 || eng>=90)
            result+='<li>성취 :  good </li>';
        else 
            result+='<li>성취 : bad </li>';


        document.getElementById('result')
        .innerHTML=result;
    }

 */



/* swtich 
let su=10;
switch()//변수 , 식
{
    case 값
        break;
}
*/

/* let su=2;
let data='';
switch(su)
{
    case 5:
        data+='5';
    case 4:
        data+='4';
    case 3:
        data+='3';
    case 2:
        data+='2';
    case 1:
        data+='1';
    default:
        data+='나머지경우';
}

console.log(data);

let a=prompt('숫자를 입력하세요',0);
console.log(a); */


/* 

let a=Number(prompt('숫자를 입력하세요'));
let data='';

switch(a%3)
{
    case 0: //case는 값만 
        data = '3의 배수';
        break;
    case 1:
        data = '나머지 값은 1';
        break;
    case 2:
        data = '나머지 값은 2';
        break;
}
console.log(a);
console.log(data); 
 */
/* let arr=['a1', 'a2','a3'];
console.log(arr);
console.log(arr[0]);
console.log(arr[1]);
console.log(arr[2]);

console.log('-----------------')

for(let item of arr){
    console.log(item);
}

console.log('-----------------')


arr.forEach(item=>{
    console.log(item);
})

console.log('-----------------')

let man={
    name : 'heebin',
    age : 23,
    addr : 'seoul'
};

console.log(typeof man);
console.log(man.name);
console.log(man.age);
console.log(man.addr);

console.log('-----------------')

for(let key in man){
    console.log(key);
}

console.log('-----------------')

for(let index in arr){
    console.log(index)
};

// 배열은 of      객체는 in


console.log('-----------------')


let data='hello, javascript!!!';
console.log(data[1]);


 // data[1]='T'; 자료가 원시형이라 변경 안됨
 
 console.log(data);


 */

/*  let i=10;
while(i > 0){
    console.log(i);
    i-=2;
}
 */

/* let i=1;
while(true){
    console.log(i);
    i++;

    if(i==5) break;
};

// break는 반복문을 빠져나온다. if 말고

console.log('-----------------')

for(let i=1; i<10; i++){

    if(i%3==0){
        continue;
    }
    console.log(i);
}

 */

/* let i = 0;
while(i<10){
    
    i++;
    if(i%3==0){
        continue;
    };
    console.log(i);

}

 */
/* 
let arr2 = [100,20,39,99,49];
arr2.forEach(function(item, index){
    console.log(index, item);
});



 */











































