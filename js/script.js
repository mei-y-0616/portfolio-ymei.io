//ハンバーガーメニュー
const hb=document.querySelector(".hb");
hb.addEventListener("click",()=>{
    const header=document.querySelector("#header");
    if(header.classList.contains("open")){
        header.classList.remove("open");
    }else{
        header.classList.add("open");
    }
});

//ドロワー内リンククリックしたらドロワーを閉じる
const drawerLinks=document.querySelectorAll(".drawer nav ul li a")
drawerLinks.forEach((drawerLink)=>{
    drawerLink.addEventListener("click",()=>{
        const header=document.querySelector("#header");
        header.classList.remove("open");
    });
});



//ページ内リンク　スムーススクロール
const sectLinks=document.querySelectorAll("nav ul li a");
sectLinks.forEach((sectLink)=>{
    if(sectLink.hasAttribute("href")&&sectLink.getAttribute("href").startsWith("#")){
        sectLink.addEventListener("click",(e)=>{
            e.preventDefault();
            gsap.to(window,{
                duration:1,
                scrollTo:{
                    y:sectLink.getAttribute("href"),
                    autoKill:true,
                    offsetY:70
                },
                ease: "power3.out",
            });
        });
    }
});



//あいさつ変更
let greetingEle=document.querySelector(".greeting");

let d=new Date();
let hours=d.getHours();
let greeting="";

if(0<=hours<=3||18<=hours){
    greeting="こんばんは";
}else if(hours<=10){
    greeting="おはようございます";
}else{
    greeting="こんにちは";
}

greetingEle.textContent=greeting;


//Lenis
// Initialize Lenis
const lenis = new Lenis({
    autoRaf: true,
});