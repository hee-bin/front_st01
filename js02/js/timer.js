"user strict"


let a;
document.getElementById('timer').onclick=function(){
    a = setInterval(()=>{
        let now = new Date();

        let year = now.getFullYear();
        let month = now.getMonth()+1;
        let day = now.getDate();
        let hour = now.getHours();
        let min = now.getMinutes();
        let sec = now.getSeconds();


        document.getElementById('result').innerHTML=`${year}.${month}.${day} ${hour}:${min}:${sec}`;
    }, 1);
}


document.getElementById('stop').onclick=function(){
    clearInterval(a);
}
