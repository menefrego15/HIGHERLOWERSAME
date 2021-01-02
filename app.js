var buttonHigher = document.getElementById("btnHigher");
var buttonLower = document.getElementById("btnLower");
var buttonSame = document.getElementById("btnSame");

//pop up language

var seconds = 0;

function incrementSeconds() {
    seconds += 1;
}

setInterval(incrementSeconds, 1000);



//SET CLASS AND ALL DATA
class People {
    constructor(name, netWorth, image) {
      this.name = name;
      this.netWorth = netWorth;
      this.image = image;
    }
  
  }

  var person1 = new People("Elon Musk","140000000000","https://mobile-img.lpcdn.ca/lpca/924x/r3996/3d08f534-3d2d-11ea-82bb-0eda3a42da3c.jpg");
  var person2 = new People("Post Malone","26000000","https://images3.alphacoders.com/104/1041797.jpg");
  var person3 = new People("6ix9ine","8000000","https://www.hiersoiraparis.com/wp-content/uploads/2020/05/6ix9ine-Gooba.jpg");
  var person4 = new People("Future","40000000","https://i.pinimg.com/originals/04/1a/9c/041a9c299dc8fe60304c50a8e4a8f177.png");
  var person5 = new People("Justin Bieber","285000000","https://upload.wikimedia.org/wikipedia/commons/d/da/Justin_Bieber_in_2015.jpg");
  var person6 = new People("Shakira","300000000","https://mobile-img.lpcdn.ca/lpca/924x/r3996/0fe08244-ffe9-11e9-82bb-0eda3a42da3c.jpg");
  var person7 = new People("George Strait","300000000","https://cdn.wealthygorilla.com/wp-content/uploads/2017/11/Richest-Singers-George-Strait.webp");
  var person8 = new People("Mariah Carey","320000000","https://cdn.wealthygorilla.com/wp-content/uploads/2017/11/Richest-Singers-Mariah-Carey.webp");
  var person9 = new People("Lady Gaga","320000000","https://cdn.wealthygorilla.com/wp-content/uploads/2017/11/Richest-Singers-Lady-Gaga.webp");
  var person10 = new People("Katy Perry","330000000","https://img.svnews.ro/foto/2020/05/12/210318/e02e8b2bbe95fc048dc0a486b.jpg");
  var person11 = new People("Garth Brooks","350000000","https://cdn.wealthygorilla.com/wp-content/uploads/2019/03/Richest-Singers-Garth-Brooks.webp");
  var person12 = new People("Cher","360000000","https://cdn.wealthygorilla.com/wp-content/uploads/2017/11/Richest-Singers-Cher.webp");
  var person13 = new People("Toby Keith","365000000","https://cdn.wealthygorilla.com/wp-content/uploads/2017/11/Richest-Singers-Tony-Keith.webp");
  var person14 = new People("Taylor Swift","400000000","https://cdn.wealthygorilla.com/wp-content/uploads/2017/11/Richest-Singers-Taylor-Swift.webp");
  var person15 = new People("Rihanna","600000000","https://cdn.wealthygorilla.com/wp-content/uploads/2019/08/Richest-Singers-Rihanna.webp");
  var person16 = new People("Johnny Mathis","400000000","https://cdn.wealthygorilla.com/wp-content/uploads/2017/11/Richest-Singers-Johnny-Mathis.webp");
  var person17 = new People("Jennifer Lopez","400000000","https://scontent-rtl.akamaized.net/GED/10060000/10062000/10062031_700x0.webp");
  var person18 = new People("Victoria Beckham","450000000","https://cdn.wealthygorilla.com/wp-content/uploads/2017/11/Richest-Singers-Victoria-Beckham.webp");
  var person19 = new People("Bruce Springsteen","500000000","https://cdn.wealthygorilla.com/wp-content/uploads/2017/11/Richest-Singers-Bruce-Springsteen.webp");
  var person20 = new People("Gloria Estefan","500000000","https://cdn.wealthygorilla.com/wp-content/uploads/2017/11/Richest-Singers-Gloria-Estefan.webp");
  var person21 = new People("Beyonce","400000000","https://cdn.wealthygorilla.com/wp-content/uploads/2017/11/Richest-Singers-Beyonce.webp");
  var person22 = new People("Julio Iglesias","600000000","https://cdn.wealthygorilla.com/wp-content/uploads/2017/11/Richest-Singers-Julio-Iglesias.webp");
  var person23 = new People("Madonna","850000000","https://cdn.radiofrance.fr/s3/cruiser-production/2020/03/8af12810-7e2b-4474-8549-ffd2f59cc390/838_la_madonne.jpg");
  var person24 = new People("Nas","70000000","https://cdn-biiinge.konbini.com/images/files/2017/02/nas-feat.jpg?webp=");
  var person25 = new People("Rev Run","70000000","https://bucket.mn2s.com/wp-content/uploads/2018/10/13145014/Rev-Run-MN2S.jpg");
  var person26 = new People("Kendrick Lamar","75000000","https://s.france24.com/media/display/52d57766-102c-11e9-a28a-005056bff430/w:1280/p:16x9/17042018_kendrick_lamar.webp");
  var person27 = new People("Nicki Minaj","80000000","https://partyflock.nl/images/artist/115521_362x451_505013/Nicki-Minaj.webp");
  var person28 = new People("Akon","80000000","https://images-na.ssl-images-amazon.com/images/I/71Zj-iS9RsL._AC_SL1333_.jpg");
  var person29 = new People("Pitbull","90000000","https://ae01.alicdn.com/kf/HTB1bOANNXXXXXaAapXXq6xXFXXXU/Pitbull-Rappeur-Chanteur-Hip-Hop-Musique-Art-norme-Impression-Affiche-TXHOME-D7172.jpg_Q90.jpg_.webp");
  var person30 = new People("Lil Wayne","150000000","https://www.nme.com/wp-content/uploads/2020/01/Webp.net-resizeimage-5-2-696x443.jpg");
  var person31 = new People("Snoop Dogg","150000000","https://s.france24.com/media/display/1581cbba-12c2-11e9-9780-005056bff430/w:1280/p:16x9/020815-snoop-dogg.webp");
  var person32 = new People("Pharrell Williams","150000000","https://cdn-www.konbini.com/fr/images/files/2020/04/pharrel2-feat.jpg?webp=");
  var person33 = new People("Ice Cube","160000000","https://cdn-www.konbini.com/fr/images/files/2018/12/icecube3.jpg?webp=");
  var person34 = new People("Drake","180000000","https://img.urbania.ca/media/2018/07/Drake1.jpg?fm=webp");
  var person35 = new People("Usher","180000000","https://cdn-www.konbini.com/fr/images/files/2018/10/konbini-usher-album-a-2.jpg?webp=");
  var person36 = new People("Eminem","230000000","https://hiphopcorner.fr/wp-content/uploads/2020/06/eminem-goat-list-rappeurs-preferes.jpg");
  var person37 = new People("Dr Dre","820000000","https://cdn-www.konbini.com/fr/images/files/2018/05/dr-dre-dr.jpg?webp=");
  var person38 = new People("Jay Z","1000000000","https://metrodakar.com/wp-content/uploads/2020/03/jay-z.jpg.webp");
  var person39 = new People("Kanye West","3200000000","https://mobile-img.lpcdn.ca/lpca/924x/f69d547e/b908d318-c14d-11ea-b8ad-02fe89184577.jpg");
  


  L = [person1, person2, person3, person4, person5, person6, person7, person8, person9, person10, 
    person11, person12, person13, person14, person15, person16, person17, person18, person19, person20, 
    person21, person22, person23, person24, person25, person26, person27, person28, person29, person30, 
    person31, person32, person33, person34, person35, person36, person37, person38, person39];

//GENERATE RANDOM NUMBER AND PICK 2 PPL IN THE L TAB
//generate random x
function randomN(L) {
    var l = L.length;
    var x = Math.floor(Math.random() * l);
    return x;
}

function randomy() {
    
    var y = randomN(L);

    if (x == y) {
        if (x == L.length -1) {
            y--;
        }else{
            y++;
        }
    }
    return y;
}

var x = randomN(L);
var y = randomy();


function random(L){
    return L[x];
}

function random2(L){
    return L[y];
}

var perso1 = random(L);
var perso2 = random2(L); 

//stock all the data
var image1;
var name1;
var net;
var Newimg;
var name2;
var net2;

function stockData(perso1, perso2) {
    image1 = perso1.image;
    name1 = perso1.name;
    net = parseInt(perso1.netWorth, 10);
    Newimg = perso2.image;
    name2 = perso2.name;
    net2 = parseInt(perso2.netWorth, 10);
}


stockData(perso1, perso2);


//CREATE DATA TO DISPLAY
var displaynet;
var displaynet2;
var animateN;
var valueM;
var animateBegin = 0;

function displayData(net) {
    displaynet = net.toLocaleString();
    displaynet2 = net.toLocaleString();
    animateN = parseInt(displaynet, 10);
    valueM = "";

    if (net > 999999999) {
        valueM = "B";
    }else {
        valueM = "M";
    }
}

displayData(net);

function animateValue(id, start, end, duration) {
    if (start === end) return;
    var range = end - start;
    var current = start;
    var increment = end > start? 1 : -1;
    var stepTime = Math.abs(Math.floor(duration / range));
    var obj = document.getElementById(id);
    var timer = setInterval(function() {
        current += increment;
        obj.innerHTML = "$" + current + valueM;
        if (current == end) {
            clearInterval(timer);
        }
    }, stepTime);
}



//PLACE ALL RANDOM DATA IN THE PAGE
function DisplayPerso1(name, image, animateN) {
    
    document.getElementById("name").textContent = name;
    if (animateN > 300) {
        var animateB = animateN - 100;
    }else {
        animateB = 0;
    }
    animateValue("networth", animateB, animateN, 10);
    
    document.getElementById('a').style.backgroundImage="url("+ image +")"; // specify the image path here
}

function DisplayPerso2(name, image) {
    
    document.getElementById("b").style.backgroundImage="url("+image+")";
    document.getElementById("name2").textContent = name;

}

DisplayPerso1(name1, image1, animateN);

DisplayPerso2(name2, Newimg);

//ANIMATE BUTTON 
function animateBtn(button){
    if(button.classList != "animate"){
    if (button.classList.contains("animate")){return}
    button.classList.add("animate");
}
    setTimeout(function(){
        button.classList.remove("animate");
    }, 500);
};

function animateBtnRed(button){
    if(button.classList != "animateRed"){
    if (button.classList.contains("animateRed")){return}
    button.classList.add("animateRed");
}
    setTimeout(function(){
        button.classList.remove("animateRed");
    }, 500);
};

function loseDisplay(score) {
    sessionStorage.setItem("Score", score);
    window.location.href = "losegame.html";
}

//BUTTON LOGIC

//var count score 

var score = 0;

buttonHigher.addEventListener("click", function() {
    if (net2 > net) {
        //score + 1
        score++;
        setTimeout(nextStep, 500);
        animateBtn(buttonHigher);
    }else {
        animateBtnRed(buttonHigher);
        setTimeout(loseDisplay(score), 500);
        if (net2 == net) {
            correctAns = "SAME";
        }else {
            correctAns = "LOWER";
        }
        sessionStorage.setItem("ans", correctAns);
        sessionStorage.setItem("second", seconds);
    }
})

var correctAns;


buttonLower.addEventListener("click", function() {
    if (net2 < net) {
        score++;
        setTimeout(nextStep, 500);
        animateBtn(buttonLower);
    }else {
        animateBtnRed(buttonLower);
        setTimeout(loseDisplay(score), 500);
        if (net2 == net) {
            correctAns = "SAME";
        }else {
            correctAns = "HIGHER";
        }
        sessionStorage.setItem("ans", correctAns);
        sessionStorage.setItem("second", seconds);
    }
})

buttonSame.addEventListener("click", function() {
    if (net2 == net) {
        score++;
        setTimeout(nextStep, 500);
        animateBtn(buttonSame);
    }else {
        animateBtnRed(buttonSame);
        setTimeout(loseDisplay(score), 500);
        if (net2 > net) {
            correctAns = "HIGHER";
        }else {
            correctAns = "LOWER";
        }
        sessionStorage.setItem("ans", correctAns);
        sessionStorage.setItem("second", seconds);
    }
})







function nextStep() {
    randomN(L);
    x = randomN(L);
    y = randomy();

    perso1 = random(L);
    perso2 = random2(L); 
    
    stockData(perso1, perso2);

    displayData(net);


    DisplayPerso1(name1, image1, animateN);

    DisplayPerso2(name2, Newimg);


}

function togglePopup(){
    document.getElementById("popup-1").classList.toggle("active");
  }  



var buttonFrench = document.getElementById("french");
var buttonEnglish = document.getElementById("english");

var french = "francais";
var english = "anglais";


buttonFrench.addEventListener("click", function() {
    document.getElementById("popup-1").classList.remove("active");
    myLanguage(french);
    document.location.reload();
})

buttonEnglish.addEventListener("click", function() {
    document.getElementById("popup-1").classList.remove("active");
    myLanguage(english);
})

var myLanguage;

function myLanguage(lang) {
    if (lang == "francais") {
        myLanguage = "french";
        localStorage.setItem('lang', myLanguage);
    } else {
        myLanguage = "english";
        localStorage.setItem('lang', myLanguage);
    }
}

var lelangage;

lelangage = localStorage.getItem("lang");


if (lelangage === "french") {
    document.getElementById("textNet").textContent = "FORTUNE";
    document.getElementById("textNet2").textContent = "SA FORTUNE EST";
    document.getElementById("btnHigher").textContent = "PLUS HAUT";
    document.getElementById("btnLower").textContent = "PLUS BAS";
    document.getElementById("btnSame").textContent = "PAREIL";
}


if (lelangage !== "french" && lelangage != "english") {
    setTimeout(togglePopup, 2000);
}






