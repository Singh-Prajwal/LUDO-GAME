function rolldice(){
let a=Math.floor(Math.random()*5)+1;
const p1=`./image/dice_faces/dice${a}.png`;
let b=Math.floor(Math.random()*5)+1;
const p2=`./image/dice_faces/dice${b}.png`;
if(a>b){
    document.getElementById("result").innerHTML="Player 1 WINS !";
    document.getElementById("die-1").setAttribute('src',p1);
    document.getElementById("die-2").setAttribute('src',p2);
}
else if(b>a){
    document.getElementById("result").innerHTML="Player 2 WINS !";
    document.getElementById("die-1").setAttribute('src',p1);
    document.getElementById("die-2").setAttribute('src',p2);
}
else{
    document.getElementById("result").innerHTML="DRAW !";
    document.getElementById("die-1").setAttribute('src',p1);
    document.getElementById("die-2").setAttribute('src',p2);
}
}
function confettiFalling(){
    var container=document.getElementsByClassName("container");
    var colors=['red','green','blue','yellow','orange','purple','pink'];
    for(i=0;i<1000;i++){
        //creating 1000 div elements for the confetti
        var div=document.createElement("div");
        div.classList.add("confetti");
        container.appendChild(div);
    }
}
confettiFalling();
