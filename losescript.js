

var score = sessionStorage.getItem("Score");
var lang = localStorage.getItem('lang');

var answer;

answer = sessionStorage.getItem("ans");

document.getElementById("scoreDisplay").textContent = score;

var seconds = sessionStorage.getItem("second");

var backgroundFail = [
    "https://media.tenor.com/images/0f2ec1602f4f4798dbff777200dc55f0/tenor.gif", 
    "https://vl-media.fr/wp-content/uploads/2018/03/fail-gif-shopping-cart.gif",
    "https://media.giphy.com/media/hiqTKqU40YKI0/source.gif",
    "https://i.pinimg.com/originals/6d/9a/c5/6d9ac532fae8401b0ceb999a902b607a.gif",
    "https://i.pinimg.com/originals/c9/ff/4d/c9ff4d15d8cc8b88ae4a5f4577ca0da3.gif",
    "https://media.tenor.com/images/a340d53575931e6c937fd9ce9398ac0f/tenor.gif",
    "https://i.pinimg.com/originals/9e/db/3f/9edb3f6a282f13de6579fc4df77172ae.gif",
    "https://i.pinimg.com/originals/30/7e/44/307e44c8022a1cc37d7d1ddb102770f0.gif",
    "https://i.pinimg.com/originals/83/5c/f1/835cf19a7fc40d519295eeef0283ad59.gif",

];

var backgroundSucces = [
    "https://thumbs.gfycat.com/AbandonedRareGangesdolphin-small.gif",
    "https://media.tenor.com/images/537f8081464118674136ed777d16d622/tenor.gif",
    "https://cdn.pixilart.com/photos/orginal/5b9c8a37a2efb2d.gif",
    "https://media.tenor.com/images/fce377e4df546aa2fdd3f842e2150f0f/tenor.gif",
    "https://g1f.fr/image/1428139236-giphy.gif",
    "https://media.tenor.com/images/73cca45a93f91944b2c9fdd4b05c3c53/tenor.gif",
    "https://thumbs.gfycat.com/LegalCorruptAsianpiedstarling-small.gif",
    "https://www.lolgifs.net/wp-content/uploads/2019/01/leonardo-dicaprio-funny-dance.gif"
]

var textQuoteEnglish = [
    "It's really really bad",
    "It's pretty bad",
    "I'm sure you can do better",
    "Try again this is not good at all",
    "You really are trying your best ?",
    "Let's say this is not bad",
    "Look like you trained a lot",
    "Amazing !! This is.. not bad",
    "Mhh good good",
    "Its not bad at all",
    "Quite impresive",
    "This really good !!",
    "Its amazing",
    "This is really really good",
    "OMG You can't even do better",
    "New record right ?"
]

var textQuoteFrench = [
    "C'est pas bon du tout",
    "C'est un peu nul",
    "Je suis sûr que tu peux mieux faire",
    "Réessaie c'est pas bon du tout",
    "Tu fais vraiment de ton mieux ?",
    "Disons que c'est pas trop mauvais",
    "On dirait que tu t'est bien entraîné",
    "Génial... C'est pas mauvais",
    "Mhh bien bien",
    "C'est pas mauvais du tout",
    "Impressionant",
    "C'est très bon !!",
    "Génial",
    "C'est excellent",
    "Tu peux vraiment pas faire mieux !!!",
    "Nouveau record non ?"
]


function randomFail() {    
    var l = backgroundFail.length;
    var x = Math.floor(Math.random() * l);
    var imageBack = backgroundFail[x];
    document.getElementById("backgroundImage").style.backgroundImage = "url(" + imageBack +")";
}

function randomSucces() {
    var l = backgroundSucces.length;
    var x = Math.floor(Math.random() * l);
    var imageBack = backgroundSucces[x];
    document.getElementById("backgroundImage").style.backgroundImage = "url(" + imageBack +")";
}

var len;

function randomText() {
    if (lang=="french") {
        len = textQuoteFrench.length;
    }else {
        len = textQuoteEnglish.length;
    }
}

randomText();
var y;

function printQuote() {
    if (score<5) {
        y = Math.floor(Math.random() * (4 - 0 +1)) + 0;
        if (lang=="french") {
            document.getElementById("textQuote").textContent = textQuoteFrench[y];
        }else{
            document.getElementById("textQuote").textContent = textQuoteEnglish[y];
        }
    }else if (score<10) {
        y = Math.floor(Math.random() * (9 - 5 +1)) + 5;
        if (lang=="french") {
            document.getElementById("textQuote").textContent = textQuoteFrench[y];
        }else{
            document.getElementById("textQuote").textContent = textQuoteEnglish[y];
        }
    }else if (score<15) {
        y = Math.floor(Math.random() * (14 - 10 +1)) + 10;
        if (lang=="french") {
            document.getElementById("textQuote").textContent = textQuoteFrench[y];
        }else{
            document.getElementById("textQuote").textContent = textQuoteEnglish[y];
        }
    }else {
        y = Math.floor(Math.random() * (len - 10 +1)) + 10;
        if (lang=="french") {
            document.getElementById("textQuote").textContent = textQuoteFrench[y];
        }else{
            document.getElementById("textQuote").textContent = textQuoteEnglish[y];
        }
    }
    
}




if (score > 10) {
    randomSucces();
    printQuote();
}else {
    randomFail();
    printQuote();
}

var buttonRestart = document.getElementById("btnRestart");

buttonRestart.addEventListener("click", function() {
    score = 0;
    sessionStorage.removeItem("Score", score);
    window.location.href = "index.html";
})



if (lang == "french") {
    document.getElementById("textNet").textContent = "Ton score est de";
    document.getElementById("btnRestart").textContent = "RECOMMENCER";
    document.getElementById("btnRestart").style.width = "130px";
    
    if (answer === "HIGHER") {
        answer = "PLUS HAUT";
    }else if (answer === "LOWER") {
        answer = "PLUS BAS";
    }else {
        answer = "SAME";
    }
    document.getElementById("ans").textContent = "BONNE RÉPONSE: " + answer;
}

if (lang == "english") {
    document.getElementById("ans").textContent = "CORRECT ANSWER: " + answer;
}





console.log(answer);