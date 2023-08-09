"user strict"





/* document.getElementById('sum').onclick=function(){
    let su1 = document.getElementById('su1').value;
    let su2 = document.getElementById('su2').value;

    su1 = Number(su1);
    su2 = Number(su2);

    let result = su1+su2;
    console.log(result);

    document.getElementById('result').innerHTML=result;
}

let su1=Number('10');
let data=su1.toString();
console.log(typeof su1, su1);
console.log(typeof data, data);
console.log(Number.MAX_VALUE);
 */

let now = new Date();

now.getFullYear();

let year = now.getFullYear();
let month = now.getMonth()+1;
let day = now.getDate();
let hour = now.getHours();
let min = now.getMinutes();
let sec = now.getSeconds();

console.log(month);

document.getElementById('time').innerHTML=`${year}.${month}.${day} ${hour}:${min}:${sec}`;












