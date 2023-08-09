/* document.getElementById('win').onclick=function(){
    //location.href = "https://www.naver.com";
    document.write("  jhgjhgjhg");
}
 */

/* let d = document.body;
console.log(d);

let i = document.getElementById('listId');
console.log(i);

let c = document.getElementsByClassName('listClass');
console.log(c);

let t = document.getElementsByTagName('li');
console.log(t);

let child1 = document.body.children;
console.log(child1);

console.log('========')
let lis = document.getElementsByTagName('li');

console.log(lis[2].textContent);


 */


/* 
let layoutImgs = document.getElementsByClassName('layout');
console.log(layoutImgs)

for (let layoutImg of layoutImgs) {
    layoutImg.addEventListener('mouseover', function() {

        for (let i = 0; i < layoutImgs.length; i++) {
            layoutImgs[i].style.border = ''; // 모든 이미지의 테두리 초기화
        }

        this.style.border = '3px solid red'; 
        let v = document.getElementById('view');
        v.setAttribute('src', this.src);
        v.setAttribute('alt', this.alt);    

        });
    }       */



let ele_reds =  document.querySelectorAll('.red');
console.log(ele_reds);
/* 
for(let i=0; i < ele_reds.length; i++){
    ele_reds[i].className='green';
    i--;
}
 */
/* 
for(let i=ele_reds.length-1; i>=0; i--){
    ele_reds[i].className='green';
}
 */
/* 
[...ele_reds].forEach(item=>item.className='green'); */

/* 
document.querySelectorAll('.red').forEach(item=>item.className='green'); */