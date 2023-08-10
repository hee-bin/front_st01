/* "use strict"
/* 
const ele_td = document.getElementsByTagName("td");


//방법2
for(let i = ele_td.length-1; i>=0; i--){
    ele_td[i].addEventListener('click', function(){
        console.log(this);
        console.log(this.parentElement.classList)
        this.parentElement.classList.toggle('yellow');
    });
};





//방법1
let ele_table = document.getElementsByTagName('table')[0];

ele_table.onclick=function(e){
    console.log(e.target);
    e.target.parentElement.classList.toggle('yellow');
};

 */
/* let d2 = document.getElementById('d2');
let ele_span = document.createElement('span');
let txt_span = document.createTextNode('span');
ele_span.appendChild(txt_span);

d2.appendChild(ele_span)
 
let tagBody = document.getElementsByTagName('body')[0];

tagBody.insertBefore(ele_span ,d2); 
*/





/* 


// 전화 번호부

const searchfn=(e)=>{
    e.preventDefault();
    let inputvalue = e.target.value;
    let ele_li = document.getElementsByTagName('li');

    [...ele_li].forEach(item=>{
        let ele_a = item.getElementsByTagName('a')[0];
        let a_content = ele_a.textContent;

        if(a_content.indexOf(inputvalue) >-1)
            item.style.display="";// 검색어가 포함된 경우 해당 li 요소 보이기
        else   
            item.style.display='none'; // 검색어가 포함되지 않은 경우 해당 li 요소 숨기기

        });
    };

document.getElementById('myInput').addEventListener('input', searchfn);

 */


/*  아코디언
let acc = document.getElementsByClassName("acodian");

for (let i = 0; i < acc.length; i++) {
  acc[i].addEventListener("click", function() {
    this.classList.toggle("active");
    let panel = this.nextElementSibling;
    if (panel.style.display === "block") {
      panel.style.display = "none";
    } else {
      panel.style.display = "block";
    }
  });
}

 */


const tabListItems = document.querySelectorAll('.tablist li');
console.log(tabListItems);
const tabContents = document.querySelectorAll('.tabcontent');
console.log(tabContents);

tabContents.forEach((content, index) => {
    if (index !== 0) {
        content.style.display = 'none';
    }
});



tabListItems.forEach((item, index) => {
    item.addEventListener('click', () => {
        tabContents.forEach(content => {
            content.style.display = 'none';
        });
        tabContents[index].style.display = 'block';
    });
});

