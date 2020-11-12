
var l = document.querySelector("#l");
var r = document.querySelector("#r");
var one = document.querySelector("#c1");
var two = document.querySelector("#c2");
var thr = document.querySelector("#c3");


var bgs = ["https://res.cloudinary.com/walkerh/image/upload/v1605208081/Splash%20Images/Akali_Splash_skr9bi.jpg", "https://res.cloudinary.com/walkerh/image/upload/v1605208079/Splash%20Images/Yone_Splash_iwfwq8.jpg", "https://res.cloudinary.com/walkerh/image/upload/v1605208079/Splash%20Images/Yasou_Splash_fjyixy.jpg"]

one.style.backgroundImage = "url(" + bgs[0] + ")";
two.style.backgroundImage = "url(" + bgs[1] + ")";
thr.style.backgroundImage = "url(" + bgs[2] + ")";

l.onclick = function() {
  var t = bgs[2];
  bgs.pop();
  bgs.unshift(t);
  
  one.style.backgroundImage = "url(" + bgs[0] + ")";
  two.style.backgroundImage = "url(" + bgs[1] + ")";
  thr.style.backgroundImage = "url(" + bgs[2] + ")";
  
  display();
  
}

r.onclick = function() {
  const firstItem = bgs.shift();
  bgs.push(firstItem);
  
  one.style.backgroundImage = "url(" + bgs[0] + ")";
  two.style.backgroundImage = "url(" + bgs[1] + ")";
  thr.style.backgroundImage = "url(" + bgs[2] + ")";
  
  display();
}

function display(){
  if(bgs[1] == "https://res.cloudinary.com/walkerh/image/upload/v1605208081/Splash%20Images/Akali_Splash_skr9bi.jpg"){
    document.querySelector("#infoDisplay").innerHTML = "<h1>Akali</h1>";
  }
  
  else if(bgs[1] == "https://res.cloudinary.com/walkerh/image/upload/v1605208079/Splash%20Images/Yone_Splash_iwfwq8.jpg"){
    document.querySelector("#infoDisplay").innerHTML = "<h1>Yone</h1>";
  }
  
  else {
    document.querySelector("#infoDisplay").innerHTML = "<h1>Yasou</h1>";
  }
}