
document.addEventListener("DOMContentLoaded",function(){
    let s3 = document.querySelectorAll(".box1")
    for(let i = 8; i<=11; i++){
        s3[i].classList.add("yellow")
    }
})

let s3btn = document.querySelector(".btn-footer")
s3btn.addEventListener("click",function(){
    let s3 = document.querySelectorAll(".box1")
    for(let i = 8; i<=11; i++){
        s3[i].classList.remove("yellow")
    }
    let section3 = document.querySelector('.section3')
    let section3boxes = document.querySelector('.boxes')
    section3.style.height = '1107px'
    section3boxes.style.height = '1020px' 
    s3btn.classList.add("yellow")
})




let svgm = document.querySelector(".svg-menu")
svgm.addEventListener("click",function(){
    let slidebar = document.querySelector(".slidebar")
    slidebar.style.display = 'block'
 })
    
let svgx = document.querySelector(".svg-cross")
svgx.addEventListener("click",function(){
 let slidebar = document.querySelector(".slidebar")
 slidebar.style.display = 'none'
})    


document.addEventListener("DOMContentLoaded",function(){
    let section3 = document.querySelector('.section3')
    section3.style.height = '840px'
    let section3boxes = document.querySelector('.boxes')
    section3boxes.style.height = '707px'  
})


let section5btn = document.querySelector(".section5-btn")
console.log(section5btn);
