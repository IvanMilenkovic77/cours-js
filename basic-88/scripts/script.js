let imgCarrousel = ["https://www.francetvinfo.fr/image/759r5jd4y-f186/1200/450/9476777.jpg",
    "http://footballbetting.world/wp-content/uploads/2017/12/Konyaspor-vs-Fenerbahce-predictions-960x360.jpg",
    "https://www.rcdespanyol.com/img/common/headers/footballprograms/escola_huaxia.jpg"
]

let occurenceCaroussel = 0;

setInterval(function() {
    let img = document.querySelector('#slider img')
    img.src = imgCarrousel[occurenceCaroussel];
    occurenceCaroussel++
    if (occurenceCaroussel == imgCarrousel.length)
        occurenceCaroussel = 0;
}, 5000)


/*****************************************Exercice 2*****************************/



function randomText(text = "Ivan le BG") {
    let tableau = text.split("");
    tableau = arrayToStringRandom(tableau).join('');
    return tableau;
}

function arrayToStringRandom(tab = []) {
    let tabRandom = []
    let random, newArray = [];
    for (let i = 0; i < tab.length; i++) {
        do {
            random = getRandomInt(0, tab.length);
        }
        while (tabRandom.includes(random));
        tabRandom.push(random);
        newArray.push(tab[random]);
        console.log(random);
    }

    return newArray;
}

function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min)) + min;
}


let baliseA = document.querySelectorAll("#header > nav a")
for (let i = 0; i < baliseA.length; i++) {
    baliseA[i].innerHTML = randomText(baliseA[i.innerHTML]);
}
console.log(baliseA)
randomText("77");


/*****************************************Exercice 3*****************************/

let tabImagesArticles = ["https://www.francetvinfo.fr/image/759r5jd4y-f186/1200/450/9476777.jpg", "http://footballbetting.world/wp-content/uploads/2017/12/Konyaspor-vs-Fenerbahce-predictions-960x360.jpg", "https://www.rcdespanyol.com/img/common/headers/footballprograms/escola_huaxia.jpg"]

let dataImagesHtml = document.querySelectorAll('#services img')
console.log(dataImagesHtml);

for (let i = 0; i < dataImagesHtml.length; i++) {
    dataImagesHtml[i].addEventListener("click", function() {
        dataImagesHtml[i].src = tabImagesArticles[i]
    })
}