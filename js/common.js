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




//Lenis
// Initialize Lenis
const lenis = new Lenis({
    autoRaf: true,
});


//ScrambleText
const siteTitle = document.querySelectorAll('.site-title');
siteTitle.forEach((target) => {
    gsap.to(target, {
        scrollTrigger: target,
        duration: 3,
        scrambleText: {
            text: "{original}"
        }
    });
});



//ローディング画面
window.onload = () => {
    gsap.to("#loading", {
        autoAlpha: 0,
        duration: 0.8,
    })
};


//luminous
new LuminousGallery(document.querySelectorAll(".journey-list a"));


//skill-list
const skills = document.querySelectorAll(".skill-list dd");
skills.forEach((ele) => {
    const percent = ele.dataset.skillLevel;
    const bar = document.createElement("span");
    bar.classList.add("skill-list-bar");
    bar.style.width = `${percent}%`;
    ele.appendChild(bar);
})





//マウスストーカー
function stalker() {
    const stalker = document.getElementById("stalker");
    addEventListener("mousemove", (e) => {
        const x = e.clientX;
        const y = e.clientY;

        stalker.style.opacity = 0.6;
        stalker.style.translate = `${x}px ${y}px`;
    });

    const links = gsap.utils.toArray([
        "a"
    ]);
    links.forEach(function (link) {
        link.addEventListener("mouseenter", () => {
            stalker.classList.add("js-hover");
        });
        link.addEventListener("mouseleave", () => {
            stalker.classList.remove("js-hover");
        });
    });
};
stalker();