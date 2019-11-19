var canvas = document.getElementById("Game");
var ctx = canvas.getContext("2d");

var ballX = canvas.width/2;
var ballY = canvas.height/2;
var ballColor = 'rgb(255, 192, 191)';
var ballRadius = 15;

var speedX = 12;
var speedY = 6;

var directionDown = true;
var directionRight = true;

function animate(){
    ctx.fillStyle = 'rgba(255, 255, 255, 0.3)';
    ctx.fillRect(0, 0, canvas.width, canvas.height);

    ctx.beginPath();
    ctx.fillStyle = ballColor;
    ctx.strokeStyle = 'rgba(255, 255, 255, 0.3)';
    ctx.arc(ballX, ballY, ballRadius, 0, 2*Math.PI);
    ctx.fill();
    ctx.stroke();
    ctx.closePath();

    if(ballX + ballRadius >= canvas.width || ballX - ballRadius <= 0 ) {
        directionRight = !directionRight;
    }

    if(directionRight){
        ballX = ballX + speedX;
    }
    else {
        ballX = ballX - speedX;
    }


    if(ballY + ballRadius >= canvas.height || ballY - ballRadius <= 0) {
        directionDown = !directionDown;
    }
    if(directionDown){
        ballY = ballY + speedY;
    }
    else {
        ballY = ballY - speedY;
    }

    window.requestAnimationFrame(animate);
}

animate();

canvas.addEventListener("click", function(event){

    var distX = Math.abs(ballX - event.clientX);
    var distY = Math.abs(ballY - event.clientY);

    if(distX < ballRadius && distY < ballRadius){
        alert('Hmm, ya so agile.')
    }
})

function myFunction() {
    document.getElementsByName("ball").style.color = "red";
  }