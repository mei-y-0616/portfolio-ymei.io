//history生成
const historyItem = [
    {
        day: "2024.08",
        dataAry:
            [
                {
                    type: "text",
                    text: "大学1年の夏休みにWebサイトの模写コーディング練習を開始。一日約8時間の練習を一か月毎日行った。"
                },
                {
                    type: "site",
                    title: "WebSpeaker",
                    href: "site/webspeaker/webspeaker.html",
                    img: "img/webspeaker.webp",
                    explain: "初めてコーディングしたオリジナルサイト。"
                }
            ]
    }, {
        day: "2024.09",
        dataAry:
            [
                {
                    type: "site",
                    title: "monoのポートフォリオサイト",
                    href: "site/mono/index.html",
                    img: "img/mono-portfolio.webp"
                },
                {
                    type: "site",
                    title: "Cafe Husky",
                    href: "site/cafehusky/index.html",
                    img: "img/cafehusky.webp"
                }
            ]
    }, {
        day: "2025.02",
        dataAry:
            [
                {
                    type: "text",
                    text: "「北海道情報大学メディアデザイン展」のボランティアとしてWebサイトの制作・改修に参加"
                },
                {
                    type: "site",
                    title: "北海道情報大学　メディアデザイン展　2025　ティザーサイト",
                    href: "https://www01.do-johodai.ac.jp/md-ten/2025/",
                    img: "img/md-teaser-2025.webp"
                },
                {
                    type: "site",
                    title: "北海道情報大学　メディアデザイン展　2025　メインサイト",
                    href: "https://www01.do-johodai.ac.jp/md-ten/",
                    img: "img/md-2025.webp"
                }, {
                    type: "text",
                    text: "この時期から株式会社コムスクエアの開発インターンとして約9か月間勤務。自社製品の研究開発やマニュアル作成などを担当。"
                }
            ]
    }, {
        day: "2025.05",
        dataAry:
            [
                {
                    type: "site",
                    title: "フードドライブってなんですか？",
                    href: "https://www01.do-johodai.ac.jp/wdc/works/wdc2025works/2321176/",
                    img: "img/food_wdc.webp",
                    explain: "本学のWebデザインコンテストで最優秀賞を受賞。"
                }
            ]
    }, {
        day: "2025.08",
        dataAry: [
            { type: "text", text: "本学の留学プログラム「国際コラボレーション」に参加。10日間タイで、もう10日間を日本で、タイの学生とプロジェクトを進める。" }
        ]
    }, {
        day: "2025.09",
        dataAry:
            [
                {
                    type: "site",
                    title: "HERBS FOR YOU",
                    href: "https://mei-y-0616.github.io/Herbs-For-You/top/index.html",
                    img: "img/herbs-for-you.webp",
                    explain: "「国際コラボレーション」のプロジェクトで制作したWebサイト。"
                }
            ]
    }, {
        day: "2026.01",
        dataAry:
            [
                {
                    type: "site",
                    title: "えべつたんけんたい",
                    href: "https://mei-y-0616.github.io/webpj/",
                    img: "img/webpj.webp",
                    explain: "「Web制作プロジェクト」という授業で制作。最終プレゼンで約30チームの中から見事1位を頂いた作品。"
                }
            ]
    }, {
        day: "2026.03",
        dataAry:
            [
                {
                    type: "site",
                    title: "北海道情報大学　学習支援センター　Webサイト",
                    href: "https://www01.do-johodai.ac.jp/asc/",
                    img: "img/asc.webp",
                }
            ]
    }, {
        day: "2026.05",
        dataAry:
            [
                {
                    type: "site",
                    title: "LuggGo!",
                    href: "https://lugggo.up.railway.app/",
                    img: "img/lugggo.webp",
                    explain:"結果発表はもうすぐ"
                }
            ]
    }
    , {
        day: "Now",
        dataAry: [{
            type: "text",
            text: "現在React/Next.jsの開発を練習中。"
        }]
    }
];
const history = document.querySelector(".history-area");
historyItem.forEach((ary) => {
    //日付ループ
    const dayAndItem = document.createElement("div");
    dayAndItem.classList.add("history-day-and-item");
    const day = document.createElement("span");
    day.classList.add("history-day");
    day.innerText = ary.day;
    dayAndItem.appendChild(day);

    const itemUl = document.createElement("ul");
    itemUl.classList.add("history-item-list");
    ary.dataAry.forEach((item) => {
        const itemLi = document.createElement("li");
        if (item.type === "text") {
            itemLi.innerHTML = item.text
        } else if (item.type === "site") {
            itemLi.classList.add("history-item-site")
            itemLi.innerHTML =
                `
            <h4>${item.title}</h4>
            <a href="${item.href}">
                <img src="${item.img}" alt="${item.title}へのリンク">
            </a>
            `;

            if (item.explain) {
                const explain = document.createElement("p")
                explain.classList.add("history-item-site-explain")
                explain.innerText = item.explain;
                itemLi.appendChild(explain);
            }
        }
        itemUl.appendChild(itemLi)
    })
    dayAndItem.appendChild(itemUl);

    history.appendChild(dayAndItem);
})

