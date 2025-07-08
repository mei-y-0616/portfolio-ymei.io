//ハンバーガーメニュー
const hb = document.querySelector(".hb");
hb.addEventListener("click", () => {
    const header = document.querySelector("#header");
    if (header.classList.contains("open")) {
        header.classList.remove("open");
    } else {
        header.classList.add("open");
    }
});

//ドロワー内リンククリックしたらドロワーを閉じる
const drawerLinks = document.querySelectorAll(".drawer nav ul li a")
drawerLinks.forEach((drawerLink) => {
    drawerLink.addEventListener("click", () => {
        const header = document.querySelector("#header");
        header.classList.remove("open");
    });
});



//ページ内リンク　スムーススクロール
const sectLinks = document.querySelectorAll("nav ul li a");
sectLinks.forEach((sectLink) => {
    if (sectLink.hasAttribute("href") && sectLink.getAttribute("href").startsWith("#")) {
        sectLink.addEventListener("click", (e) => {
            e.preventDefault();
            gsap.to(window, {
                duration: 1,
                scrollTo: {
                    y: sectLink.getAttribute("href"),
                    autoKill: true,
                    offsetY: 70
                },
                ease: "power3.out",
            });
        });
    }
});



//あいさつ変更
let greetingEle = document.querySelector(".greeting");

let d = new Date();
let hours = d.getHours();
let greeting = "";

if (hours <= 3 || 18 <= hours) {
    greeting = 
    `
    <span data-lang="jp">こんばんは</span>
    <span data-lang="en">Good evening</span>
    `;
} else if (hours <= 10) {
    greeting = 
    `
    <span data-lang="jp">おはようございます</span>
    <span data-lang="en">Good morning</span>
    `;
} else {
    greeting = 
    `
    <span data-lang="jp">こんにちは</span>
    <span data-lang="en">Hello</span>
    `;
}

greetingEle.innerHTML = greeting;


//Lenis
// Initialize Lenis
const lenis = new Lenis({
    autoRaf: true,
});


//ScrambleText
const siteTitle = document.querySelectorAll('.site-title span[data-lang="jp"]');
siteTitle.forEach((target) => {
    gsap.to(target, {
        scrollTrigger: target,
        duration: 3,
        scrambleText: {
            text: "{original}"
        }
    });
});


//言語切り替え
let nowLang = "jp";
const langCh = document.getElementById("lang-ch");
langCh.addEventListener("click", () => {
    if (nowLang === "jp") {
        changeLang("jp","en");
    } else if (nowLang === "en") {
        changeLang("en","jp");
    }
});

function changeLang(beDataLang,afDataLang){
    const beLang=gsap.utils.toArray(`span[data-lang=${beDataLang}]`);
    const afLang=gsap.utils.toArray(`span[data-lang=${afDataLang}]`);

    const tl=gsap.timeline();
    tl
    .to(beLang,{
        display:"none",
        opacity:0,
        duration:0.3,
    })
    .to(afLang,{
        display:"inline",
        opacity:1,
        duration:0.3,
    });

    nowLang=afDataLang;
}
