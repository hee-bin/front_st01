/* function fn_move01(){
    console.log('fn1');
    console.log('fn2');
}

fn_move01();
console.log('-----------');
fn_move01();


function fn_move02(name, age){

        console.log(`name : ${name}, age : ${age}`);
        console.log('움직입니다.!!!');
}

console.log('-----------');


fn_move02('heebin',29);

console.log('-----------');

function getSu(){
    let su2 = 100;
    return su2;
}

let su=getSu();
console.log('값은 : '+ su);

console.log('-----------');

function fn_add(n1, n2){
    let sum = n1+n2;
    //return sum;
    console.log(n1+n2);
}

let su1 = 100;
let su2 = 200;
fn_add(su1, su2);

console.log('-----------');


function prt(arg){
    console.log(arg, typeof arg);
}

prt('dkssud');

console.log('-----------');

let arr=[10,20,30];
prt(arr); */


/* let name='jung'
function prt(su1, su2){
    var test='test';
    console.log(test);
    console.log(name);
}

prt();
console.log(name);

console.log(test);


 */
/* let prt = function(){
    console.log('prt')
};
prt();

 // const 는 선언 후 호출
//const 는 변경이 안된다/

const prt2 = function(name='yeji', age=0){
    console.log(`이름 : ${name} \n나이 : ${age}`)
};
prt2('heebin', 20);

console.log('----------')
prt2(); // 기본으로 설정된 값이 호출된다

console.log('--------------');

const show=function(...x){
    for(let i=0; i<x.length; i++){
        console.log(x[i]);
    };

    console.log('----------');

    for(let a of x){
        console.log(a);
    };
} 

show([10,20,30]);
*/

/* let arr1=[1,2,3];
let arr2=[5,6,7];
let arr3=[...arr1, ...arr2];

let prt=function(t){
    console.log(t[1]);
}

prt(arr3);
console.log(arr3);

let add = function(a,b){
    return a+b;
}
let tot=add(10,20);
console.log(tot);
 */

/* 
let prt=()=>'heebin';

let result=prt();
console.log(result);

let prt2=()=>{
    console.log('t1');
    console.log('t2');
}
prt2();

let prt3=(a,b)=>{
    console.log(`a : ${a} b : ${b}`);
}
prt3(3, 's');

 */

/* 
let fn = function(a, b, f1){
    let
    console.log(f1(a,b))


}


let add=function(su1, su2){
    let sum=su1+su2;
    return sum;
}

fn(1,2,add);
 */





// rest parameter, spread something, call back function.





































