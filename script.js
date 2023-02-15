var r=Math.floor(Math.random()*6) +1;
var d="dice" + r +".png";
var s="image/" + d;
var image1 =document.querySelectorAll("img")[0];
image1.setAttribute("src",s);
var r1=Math.floor(Math.random()*6) +1;
var d1="dice" + r1 +".png";
var s1="image/" + d1;
var image2 =document.querySelectorAll("img")[1];
image2.setAttribute("src",s1);
if(r>r1){
    document.querySelector("h1").innerHTML="Player 1 won 🥇";
}
else if(r<r1){
    document.querySelector("h1").innerHTML="Player 2 won 🥇";
}

else{
    document.querySelector("h1").innerHTML="Draw 🤫"
}