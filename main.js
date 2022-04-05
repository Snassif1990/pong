// Size of the game area (in px)
const GAME_AREA_WIDTH = 700;
const GAME_AREA_HEIGHT = 500;

// Size of the paddles (in px)
const PADDLE_HEIGHT = 100;
const PADDLE_WIDTH = 20;

// Size of the ball (in px)
const BALL_SIZE = 20;

// Get the computer paddle element
const computerPaddle = document.querySelector('.computer-paddle');

// The y-velocity of the computer paddle
let computerPaddleYPosition = 0;
let computerPaddleYVelocity = 1;

// Update the pong world
function update() {

    // Update the computer paddle's position
    computerPaddleYPosition = computerPaddleYPosition + computerPaddleYVelocity;

    // Apply the y-position 
    computerPaddle.style.top = `${computerPaddleYPosition}px`;

    if (computerPaddleYPosition > 400){
        computerPaddleYVelocity = computerPaddleYVelocity - 4;
    }
    if (computerPaddleYPosition <= 0){
        computerPaddleYPosition = computerPaddleYVelocity + 4;
    }
}

// Call the update() function every 35ms
setInterval(update, 35);

// Variables

let playerPaddle = document.querySelector('.player-paddle');
let playerPaddleMove = 0;
let playerPaddleVelocity = 10;
let ball = document.querySelector('.ball');

let ballMoveTop = 250;
let ballVelocity = 5;

ball.style.left = '300px';
ball.style.top = '250px';

let ballMoveSide = 50;
let ballVelocityX = 5;

// interval function

setInterval(function (){
    ballMoveTop = ballMoveTop - ballVelocity;
    ball.style.top = ballMoveTop + 'px';

    ballVelocity += 0.05;

    ballMoveSide = ballMoveSide - ballVelocityX;
    ball.style.left = ballMoveSide + 'px';

    ballVelocityX -= 0.05;

    if (ballMoveTop === computerPaddleYPosition || ballMoveTop === playerPaddleMove){
        ballVelocityX = ballVelocityX * -1;
    }

    if (ballMoveTop >= 480){
        ballVelocity = ballVelocity * -1;
        ballMoveTop = 479;
    }
    if (ballMoveSide >= 680){
        ballVelocityX = ballVelocityX * -1;
        ballMoveSide = 679;
    }
    if (ballMoveSide <= 0){
        ballVelocityX = ballVelocityX * -1;
        ballMoveSide = 1;
    }
    if (ballMoveTop <= 0){
        ballVelocity = ballVelocity * -1;
    }
}, 80);

window.addEventListener("keydown", function (e){
    console.log(e);
    if (e.code === 'ArrowDown'){
        playerPaddleMove = playerPaddleMove + playerPaddleVelocity;
        playerPaddle.style.top = `${playerPaddleMove}px`;
    } else if (e.code === 'ArrowUp'){
        playerPaddleMove = playerPaddleMove - playerPaddleVelocity;
        playerPaddle.style.top = `${playerPaddleMove}px`
    }
})