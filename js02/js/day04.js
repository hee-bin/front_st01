"use strict"

/* 
const target = { a: 1, b: 2 };
const source = { b: 4, c: 5 };

const returnedTarget = Object.assign(target, source); // target에 source를 덮는다

console.log(target);
// Expected output: Object { a: 1, b: 4, c: 5 }

console.log(returnedTarget === target);
// Expected output: true

console.log(source);
 */

/* let a = [1,2,3];

let o = Object.assign({}, a);

console.log(a);
console.log(o);
console.log(a===o);
a.forEach(item=>{
    console.log(item);
});

o[1]=1;

console.log('========');
console.log(a);
console.log(o);
console.log(a===o);
a.forEach(item=>{
    console.log(item);
});

 */


/* console.log()
const inputString = "aaa@aaa.com";
const frontIndex = inputString.indexOf("@");
const backIndex = frontIndex + "@".length;

const email = inputString.substring(0, frontIndex);
const domain = inputString.substring(backIndex, inputString.length);

console.log(frontIndex, backIndex);
console.log(email, domain);

console.log(`이메일 : ${email} \n도메인 : ${domain}`);


let data = "jung hee bin";
let result = inputString.split(" ");
console.log(result); */

/* let arr = [1,2,3];
let arr2 = new Array(100,200,300);

let result = arr.concat(arr2, ['a', 'b', 'c']);
console.log(result);


 */
/* const array1 = [5, 12, 8, 130, 44];

const found = array1.find((element) => element > 10);

console.log(found);
// Expected output: 12
 */

/* let data = [10,30,40,50,60,20,340,199];
let result = data.filter(function(element){
    return element>50;
});
console.log(result);



const elements = ['Fire', 'Air', 'Water'];

console.log(elements.join());
// Expected output: "Fire,Air,Water"

console.log(elements.join(' '));
// Expected output: "FireAirWater"

console.log(elements.join('-'));    
// Expected output: "Fire-Air-Water"
 */

/* let names = ['정', '김', '이'];

/* names.map((item) => `<li>${item}</li>`)
names.forEach((element)=>{
    elements+=`<li>${element}</li`;
}); 


document.getElementById('view').onclick=function(){
    let result='';

    result= names.map((x)=>`<li>${x}</li>`);

    document.getElementById('result').innerHTML=result.join(' ');
}

 */


/* try {
    console.log('trying');
    let arr = new Array(-1);
    console.log('trying2');

    
} catch (e) {
    //console.log(e);
    console.log('catching');
    
}finally{
    console.log('finally');
}

 */


/* 
try {
    if(a>20)
        console.log(a);
    else if(a==20)
        throw '20과 동일';
    else
        throw '20보다 작음';    
} catch(e){
    console.log('error');
    console.log(e);
    
} finally{
    console.log('finally');
}

 */


/* document.getElementById('btn').onclick=function(){
    let name = document.getElementById('name').value;
    let age = document.getElementById('age').value;
    age = Number(age);
    //console.log(typeof name, typeof age);
    //console.log(name, age);
    try {
        if(Number.isNaN(age)){
            throw new Error('숫자형자료가 아님');
        }else{
            if(age<0)
                throw new Error('0보다 작습니다.');
            else{
                console.log(`name : ${name} \nage : ${age}`);
            }
        }
    } catch(e){
        console.log(e);
        
    } finally{
        console.log('finally');
        console.log('===========');
    }
};
 */


/* 
    async : 브라우저가 페이지를 파싱하는 동안에도 스크립트가 실행
    defer : 브라우저가 페이지를 파싱의 파싱을 모두 끝내면 스크립트가 실행
    async, defer 모두 선언하지 않을 경우 : 
        브라우저가 페이지를 파싱하기 전에 스크립트를 가져와서 바로 실행


*/
