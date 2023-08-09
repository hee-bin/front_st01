"use strict"


/* 
    IIFE :
    정의하자마자 즉시 실행되는 함수
*/

/* (function prt(){
    console.log('par!!!');
})(); //선언적 함수


let fnprt = function(a,b){
    console.log(`test fnpart ${a} , ${b}`);
};


((a,b)=>{
    console.log(`test fnpart ${a} , ${b}`);
})(10,20);
 */

/* const addcount=function(){
    let count=0;
    count++;
    return count;
}

document.getElementById('btn')
.onclick=function(){
    document.getElementById('result')
    .innerHTML=addcount(); // 계속 초기화 됨
} */

/* const addcount=(function(){
    let count=0;
    console.log(count);

    let fn=function(){
        count++;
        return count;
    };
    
    return fn;
})();

document.getElementById('btn').onclick=function(){
    document.getElementById('result').innerHTML=addcount();
}; */


/* document.getElementById('btn').onclick=function(){
    let nameValue =document.getElementById('name').value;

    console.log(nameValue);

     document.getElementById('result').innerHTML+=`<li>${nameValue}</li>`;
};
 */



/* 
    객체 생성
    1. Function() 생성자 함수
    2. Object 생성자 함수
    3. 생성자 함수
    4. 객체 리터럴
    5. 클래스

*/

/* const op=new Function('a','b', 'return a+b');

let result = op(10,20);
console.log('result', result);

 */

/* let person1 = new Object();
person1.name="heebin";
person1.age=20;
person1.addr='seoul';
person1.prt=function(){
    console.log('prt !!!!!!!');
};

console.log(`name : ${person1.name} \nage : ${person1.age}\naddr : ${person1.addr}`);
console.log(person1);
console.log(typeof person1);
console.log(Array.isArray(person1));




function Man(name, age){
    this.name=name;
    this.age=age;
    this.prt=function(){
        console.log(`name : ${name} \nage : ${age}`);
    };
};

let p1 = new Man('heebin', 23);
let p2 = new Man('minji', 30);

console.log(p1, p2);
console.log(p1.name, p1.age);
console.log('-----------------');
console.log(p1['name'],p1['name']);
p2.prt();

 */

/* const m1 = {name:'heebin', age:20, addr:"seoul"};
const m2 = {name:'mimji', age:30, addr:"busan"};

console.log(typeof m1, typeof m2);
console.log(m1, m2);
 */


/* class Student{
    constructor(id, name, age){
        this.id=id;
        this.name=name;
        this.age=age;
    };

}

let s1 = new Student(1, 'heebin', 23);

console.log(s1, typeof s1);
 */
/* 
    속성 추가
*/
/* 
s1.addr='seoul';
s1.sayHello = ()=>{
    console.log('hihi');
};

console.log(s1, typeof s1);

console.log('---속성 삭제---');

delete s1.addr;
console.log(s1);
 */
/* 
let a='age';
const user={
    name: 'jung',
    [a]:20
};
console.log(user);


 */
/* 
console.log('==========');

for(let item in s1)
{
    console.log(s1[item]);
} */


class Student{
    constructor(name, age){
        this.name=name;
        this.age=age;
    }
    prt=function(){
        console.log('prt method');
    };
};

let ins1 = new Student('a1', 20);
let ins2 = new Student('a2', 10);


console.log('-=====');
console.dir(ins1);
console.dir(ins2);

Student.prototype.prt=function(){
    console.log('prt!!!');
}




