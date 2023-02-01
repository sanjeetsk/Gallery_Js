var img1 = document.getElementById("image1");
var img4 = document.getElementById("image4");
var form = document.getElementById("myForm");
var display = document.getElementById("display");

img4.style.display="none";

img1.addEventListener("click", function () {
    form.style.display = "block";
},{once : true});

form.addEventListener("submit", function (event) {
    event.preventDefault();
    name = document.getElementById("name").value;
    email = document.getElementById("email").value;
    userName = document.getElementById("username").value;
    // document.getElementById("disp").innerHTML = "Name: " + name + "<br>Email: " + email;
    // form.style.display = "none";
    let heading1 = document.createElement("h1");
    heading1.setAttribute("id", "h1");
    heading1.innerHTML = "Click on the second image";
    form.style.display = "none";
    display.append(heading1);
});

var flag = false;
var img2 = document.getElementById("image2");

img2.addEventListener("click", userDetail);

function userDetail(e){
    e.preventDefault();
    // let div = document.createElement("div");
    // div.setAttribute("id", "div1");
    // div.innerHTML = name + " " + email + " " + userName;  
    // document.body.appendChild(div);
    // img1.removeEventListener("click", function(){});
    display.innerHTML = "&emsp;&emsp;Name : " + name + "<br><br>&emsp;&emsp;Username: " + userName +"<br><br><br>&emsp;&emsp;Click on the third image";
    flag=true;
};

var img3 = document.getElementById("image3");
var dice = document.getElementById("dice");
var diceContainer = document.getElementById("dice-container");
var result = document.getElementById("result");
var rolls = [];
var k=1;
var total = 0;

img3.addEventListener("click", function(){
    display.innerHTML= "";
    diceContainer.style.display = "block";
},{once : true});

dice.addEventListener("click", function(){
    if(rolls.length < 3){
        var roll = Math.floor(Math.random() * 6) + 1;
        rolls.push(roll);
        total += roll;
        k++;
        result.innerHTML = "Rolls: " + rolls.join(", ") + "<br>Total: " + total;
    }

    if(rolls.length == 3 && total < 10 && k<6){
        result.innerHTML +="<br>You need to score more than 10."
        prompt("Try Again");
        // dice.addEventListener();
        total=0;
        rolls = [];
        // result.innerHTML = "";
    }

    if(rolls.length == 3 && total >= 10){
        result.innerHTML += "<br>Click on fourth image" ;
        img4.style.display="flex";
    }

    if(rolls.length == 3 && k>6 && total < 10){
        result.innerHTML = "Bad Luck";
    }
});

var couponCode = "";
img4.addEventListener("click",function(){
    diceContainer.style.display="none";
    for(let i=0; i<=12; i++){
        couponCode += Math.floor(Math.random() * 10);
    }
    result.innerHTML = "Your Coupon Code is : "+couponCode;
    let img = document.createElement("img");
    img.src="https://media.tenor.com/F0UWHBTt6xQAAAAi/congratulations-congrats.gif";
    display.appendChild(img);
    
},{once : true});





