alert ('Здоров Павло');
alert ('Мені стало скучно приєднювати CSS до HTML');
alert ('Тому я вирішив навчити JS тебе обзивати')

let partBody = ["Череп", "Пісюн", "Нога", "Вухо", "Палець", "Око", "Печінка", "Пупок", "Шия"];
let animalsAjectives = ["Коняча", "Псяча", "Щуряча", "Коров'яча", "Котяча", "Мишина", "Голубина", "Хробача", "Свиняча"];
let hurtWords = ["Глиста", "Задниця", "Мордяка", "Срачка", "Моча", "Какашка", "Лапа", "Пряма кишка", "Матня"];

function jsHurt() {
    let randomPartBody = partBody[Math.floor(Math.random() * partBody.length)];
    let randomAnimalsAjectives = animalsAjectives[Math.floor(Math.random() * animalsAjectives.length)];
    let randomHurtWords = hurtWords[Math.floor(Math.random() * hurtWords.length)];
    alert ("В тебе " + randomPartBody + ", як " + randomAnimalsAjectives + " " + randomHurtWords + "!");
}

btn.onclick = jsHurt;

