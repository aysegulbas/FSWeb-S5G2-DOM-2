import './less/index.less'

// Örnek bir event kullanımı aşağıdadır. Çalıştırmak için comment dışına alın
// document.querySelector("h1").addEventListener("click",function(e){
// alert("Bana tıkladın!")
// });



const resim=document.querySelectorAll(".img-content");
for(let i of resim){
i.addEventListener("mouseover",()=>{
i.style.transform="scale(1.1)";
i.style.opacity="0.7";  
});
i.addEventListener("mouseleave",()=>{
    i.style.transform="scale(1.0)";
    i.style.opacity="1";  
    });
}
const logo=document.querySelector(".intro img")
logo.addEventListener("mouseover",(e)=>
    e.target.style.filter="grayscale(1) opacity(0.7)")
logo.addEventListener("mouseout",(e)=>
e.target.style.filter="grayscale(0) opacity(1)")

const tıklama=document.querySelectorAll("nav a");
for(let i of tıklama){
i.addEventListener("click",(e=>alert ("Sayfadan ayrılıyorsunuz" )
))
}

document.querySelector("header").addEventListener("dblclick",(e)=>{e.target.style.backgroundColor="hotpink"})

window.addEventListener("wheel",()=>{
const altkisim=document.querySelector(".content-pick")

altkisim.children[0].style.backgroundColor="lightgrey";
altkisim.children[1].style.backgroundColor="lightgrey";
altkisim.children[2].style.backgroundColor="lightgrey";
})

const keyli=document.querySelector(".intro h2")
keyli.addEventListener("mousedown",(e)=>e.target.style.color="red")
keyli.addEventListener("mouseup",(e)=>e.target.style.color="blue")

window.addEventListener("scroll",()=>{
    document.querySelector(".footer p").textContent="sayfanın sonuna geldiniz"
})