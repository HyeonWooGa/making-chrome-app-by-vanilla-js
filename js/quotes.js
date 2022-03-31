const quotes = [
    {
        quote: "다윗의 아들 이스라엘 왕 솔로몬의 잠언이라 - 잠언 1장 1절",
        author: "솔로몬",
    },
    {
        quote: "이는 지혜와 훈계를 알게 하며 명철의 말씀을 깨닫게 하며 - 잠언 1장 2절",
        author: "솔로몬",
    },
    {
        quote: "지혜롭게, 공의롭게, 정의롭게, 정직하게 행할 일에 대하여 훈계를 받게 하며 - 잠언 1장 3절",
        author: "솔로몬",
    },
    {
        quote: "어리석은 자를 슬기롭게 하며 젊은 자에게 지식과 근신함을 주기 위한 것이니 - 잠언 1장 4절",
        author: "솔로몬",
    },
    {
        quote: "지혜 있는 자는 듣고 학식이 더할 것이요 명철한 자는 지략을 얻을 것이라 - 잠언 1장 5절",
        author: "솔로몬",
    },
    {
        quote: "잠언과 비유와 지혜 있는 자의 말과 그 오묘한 말을 깨달으리라 - 잠언 1장 6절",
        author: "솔로몬",
    },
    {
        quote: "여호와를 경외하는 것이 지식의 근본이거늘 미련한 자는 지혜와 훈계를 멸시하느니라 - 잠언 1장 7절",
        author: "솔로몬",
    },
    {
        quote: "내 아들아 네 아비의 훈계를 들으며 네 어미의 법을 떠나지 말라 - 잠언 1장 8절",
        author: "솔로몬",
    },
    {
        quote: "이는 네 머리의 아름다운 관이요 네 목의 금 사슬이니라 - 잠언 1장 9절",
        author: "솔로몬",
    },
    {
        quote: "내 아들아 악한 자가 너를 꾈지라도 따르지 말라 - 잠언 1장 10절",
        author: "솔로몬",
    },
];

const quote = document.querySelector("#quote span:first-child");
const author = document.querySelector("#quote span:last-child");

const todaysQuotes = quotes[Math.floor(Math.random() * quotes.length)];

quote.innerText = todaysQuotes.quote;
author.innerText = todaysQuotes.author;