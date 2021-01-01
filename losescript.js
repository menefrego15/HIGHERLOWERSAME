var score = sessionStorage.getItem("Score");
var lang = localStorage.getItem('lang');

document.getElementById("scoreDisplay").textContent = score;


var backgroundFail = [
    "https://media.tenor.com/images/0f2ec1602f4f4798dbff777200dc55f0/tenor.gif", 
    "https://vl-media.fr/wp-content/uploads/2018/03/fail-gif-shopping-cart.gif",
    "https://media.giphy.com/media/hiqTKqU40YKI0/source.gif",
    "https://i.pinimg.com/originals/6d/9a/c5/6d9ac532fae8401b0ceb999a902b607a.gif",
    "https://i.pinimg.com/originals/c9/ff/4d/c9ff4d15d8cc8b88ae4a5f4577ca0da3.gif",
    "https://media.tenor.com/images/a340d53575931e6c937fd9ce9398ac0f/tenor.gif",
];

var backgroundSucces = [
    "https://thumbs.gfycat.com/AbandonedRareGangesdolphin-small.gif",
    "https://media.tenor.com/images/537f8081464118674136ed777d16d622/tenor.gif",
    "https://cdn.pixilart.com/photos/orginal/5b9c8a37a2efb2d.gif",
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

var textQuote;
var textQuoteFail;

if (score > 10) {
    randomSucces();
    textQuote = "Great this is good !!"
}else {
    randomFail();
    textQuoteFail = "This is pretty bad..."
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
    textQuote  = "Pas mal du tout !";
    textQuoteFail = "C'est vraiment nul..."
    document.getElementById("btnRestart").style.width = "130px";
}

if (score > 10) {
    document.getElementById("textQuote").textContent = textQuote;
}else {
    document.getElementById("textQuote").textContent = textQuoteFail;
}