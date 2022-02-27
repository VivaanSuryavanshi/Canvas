canvas=document.getElementById("myCanvas");
ctx=canvas.getContext("2d");

color="purple";
width=4;



canvas.addEventListener("mousedown",my_mousedown);
function my_mousedown(e){
    color=document.getElementById("color").value;
    width=document.getElementById("width").value;
    mouseX=e.clientX-canvas.offsetLeft;
    mouseY=e.clientY-canvas.offsetTop;

    console.log("mouseX="+mouseX+" mouseY= "+mouseY);
    circle(mouseX,mouseY);
}

function circle(mouseX,mouseY){
    ctx.beginPath();
    ctx.strokeStyle=color;
    ctx.lineWidth=width;
    ctx.arc(mouseX,mouseY,40,0,360);
    ctx.stroke();
}
function clearArea(){
    console.log("clear");
    ctx.clearRect(0,0,canvas.width,canvas.height);
}