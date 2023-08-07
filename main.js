let bcc = document.querySelector(".all");
let btn1 = document.querySelector(".cl1");
let btn2 = document.querySelector(".cl2");
let btn3 = document.querySelector(".cl3");
let btn4 = document.querySelector(".cl4");


btn1.addEventListener('click' , function(){
   btn1.classList.toggle("btn-click-change"); 
   btn2.classList.remove("btn-click-change"); 
   btn3.classList.remove("btn-click-change"); 
   btn4.classList.remove("btn-click-change"); 
   bcc.classList.toggle("btn-bg-change");
   bcc.classList.remove("btn-bg-change2");
   bcc.classList.remove("btn-bg-change3");
   bcc.classList.remove("btn-bg-change4");
})
btn2.addEventListener('click' , function(){
    btn2.classList.toggle("btn-click-change"); 
    btn1.classList.remove("btn-click-change"); 
    btn3.classList.remove("btn-click-change"); 
    btn4.classList.remove("btn-click-change"); 
    bcc.classList.toggle("btn-bg-change2");
    bcc.classList.remove("btn-bg-change");
    bcc.classList.remove("btn-bg-change3");
    bcc.classList.remove("btn-bg-change4");
})
btn3.addEventListener('click' , function(){
    btn3.classList.toggle("btn-click-change"); 
    btn2.classList.remove("btn-click-change"); 
    btn1.classList.remove("btn-click-change"); 
    btn4.classList.remove("btn-click-change"); 
    bcc.classList.toggle("btn-bg-change3");
    bcc.classList.remove("btn-bg-change");
    bcc.classList.remove("btn-bg-change2");
    bcc.classList.remove("btn-bg-change4");
})
btn4.addEventListener('click' , function(){
    btn4.classList.toggle("btn-click-change"); 
    btn2.classList.remove("btn-click-change"); 
    btn3.classList.remove("btn-click-change"); 
    btn1.classList.remove("btn-click-change"); 
    bcc.classList.toggle("btn-bg-change4");
    bcc.classList.remove("btn-bg-change");
    bcc.classList.remove("btn-bg-change2");
    bcc.classList.remove("btn-bg-change3");
})