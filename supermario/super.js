const mario = document.getElementById("mario");
const goomba = document.getElementById("goomba");

let isJumping = false;
let isGameOver = false;
let gameInterval;

// Mario Jump
function jump() {
    if (!isJumping && !isGameOver) {
        isJumping = true;
        mario.classList.add("jump");
        setTimeout(() => {
            mario.classList.remove("jump");
            isJumping = false;
        }, 500);
    }
}

// Collision Detection
function checkCollision() {
    const marioRect = mario.getBoundingClientRect();
    const goombaRect = goomba.getBoundingClientRect();

    if (
        marioRect.right > goombaRect.left + 10 &&  // Adjusted for better collision
        marioRect.left < goombaRect.right - 10 &&
        marioRect.bottom > goombaRect.top
    ) {
        gameOver();
    }
}

// Game Over Function
function gameOver() {
    isGameOver = true;
    goomba.style.animation = "none";
    goomba.style.left = window.getComputedStyle(goomba).left;
    clearInterval(gameInterval);
    alert("Game Over! Press Enter to Restart.");
}

// Restart Game
function restartGame() {
    if (isGameOver) {
        isGameOver = false;
        goomba.style.animation = "none";
        goomba.style.left = "100%";
        goomba.offsetHeight; // Trigger reflow
        goomba.style.animation = "moveGoomba 2s infinite linear";
        gameInterval = setInterval(checkCollision, 10);
    }
}

// Start Collision Detection
gameInterval = setInterval(checkCollision, 10);

// Event Listeners
document.addEventListener("keydown", (event) => {
    if (event.code === "Space" && !isGameOver) {
        jump();
    } else if (event.code === "Enter" && isGameOver) {
        restartGame();
    }
});
