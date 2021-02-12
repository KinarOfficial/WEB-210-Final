
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
    document.querySelector("#infoDisplay").innerHTML = "<h1><a href='akali.html'>Akali</a></h1><p>Akali may strike in silence, but her message will be heard loud and clear: fear the assassin with no master</p>";
  }
  
  else if(bgs[1] == "https://res.cloudinary.com/walkerh/image/upload/v1605208079/Splash%20Images/Yone_Splash_iwfwq8.jpg"){
    document.querySelector("#infoDisplay").innerHTML = "<h1><a href='yone.html'>Yone</a></h1><p>In life, he was Yone—half-brother of Yasuo, and renowned student of his village's sword school. But upon his death at the hands of his brother, he found himself hunted by a malevolent entity of the spirit realm, and was forced to slay it with its own sword.</p>";
  }
  
  else {
    document.querySelector("#infoDisplay").innerHTML = "<h1><a href='yasou.html'>Yasou</a></h1><p>An Ionian of deep resolve, Yasuo is an agile swordsman who wields the air itself against his enemies. As a proud young man, he was falsely accused of murdering his master—unable to prove his innocence, he was forced to slay his own brother in self-defense.</p>";
  }
}