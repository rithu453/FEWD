// const dino = document.getElementById("dino");
// const cactus = document.getElementById("cactus");

// document.addEventListener("keydown", function(event) {
//     if (event.code === "Space") {
//         jump();
//     }
// });

// function jump() {
//     if (!dino.classList.contains("jump")) {
//         dino.classList.add("jump");

//         setTimeout(function() {
//             dino.classList.remove("jump");
//         }, 500);
//     }
// }

// let isAlive = setInterval(function() {
//     // Dino's Y position
//     let dinoTop = parseInt(window.getComputedStyle(dino).getPropertyValue("bottom"));

//     // Cactus's X position
//     let cactusLeft = parseInt(window.getComputedStyle(cactus).getPropertyValue("left"));

//     // Accurate Collision Detection
//     if (cactusLeft > 50 && cactusLeft < 90 && dinoTop < 60) {
//         gameOver();
//     }
// }, 10);

// // Game Over Function
// function gameOver() {
//     clearInterval(isAlive); // Stop the collision check
//     cactus.style.animation = "none"; // Stop cactus movement
//     cactus.style.left = window.getComputedStyle(cactus).left; // Freeze position
//     alert("Game Over! Press Enter to Restart.");
//     isGameOver = true;
// }

// // Restart Game Function
// function restartGame() {
//     isGameOver = false;
//     cactus.style.animation = "none";  // Reset animation
//     cactus.style.left = "100%";       // Start cactus off-screen
//     cactus.offsetHeight;              // Trigger reflow to restart animation
//     cactus.style.animation = "moveCactus 2s infinite linear";
//     isAlive = setInterval(checkCollision, 10); // Restart collision detection
// }

// // Listen for Restart
// document.addEventListener("keydown", function(event) {
//     if (event.code === "Enter" && isGameOver) {
//         restartGame();
//     }
// });


// Player Objects
const mario = document.getElementById("mario");
const luigi = document.getElementById("luigi");
const goomba = document.getElementById("goomba");

let player1 = {
    score: 0,
    highScore: 0,
    isJumping: false,
    gameOver: false
};

let player2 = {
    score: 0,
    highScore: 0,
    isJumping: false,
    gameOver: false
};

// Mario (Player 1) Jump
function jumpMario() {
    if (!player1.isJumping && !player1.gameOver) {
        player1.isJumping = true;
        mario.classList.add("jump");
        setTimeout(() => {
            mario.classList.remove("jump");
            player1.isJumping = false;
        }, 500);
    }
}

// Luigi (Player 2) Jump
function jumpLuigi() {
    if (!player2.isJumping && !player2.gameOver) {
        player2.isJumping = true;
        luigi.classList.add("jump");
        setTimeout(() => {
            luigi.classList.remove("jump");
            player2.isJumping = false;
        }, 500);
    }
}

// Collision Detection for Mario
function checkCollisionMario() {
    const marioRect = mario.getBoundingClientRect();
    const goombaRect = goomba.getBoundingClientRect();
    
    if (
        marioRect.right > goombaRect.left + 10 &&
        marioRect.left < goombaRect.right - 10 &&
        marioRect.bottom > goombaRect.top
    ) {
        player1.gameOver = true;
    }
}

// Collision Detection for Luigi
function checkCollisionLuigi() {
    const luigiRect = luigi.getBoundingClientRect();
    const goombaRect = goomba.getBoundingClientRect();
    
    if (
        luigiRect.right > goombaRect.left + 10 &&
        luigiRect.left < goombaRect.right - 10 &&
        luigiRect.bottom > goombaRect.top
    ) {
        player2.gameOver = true;
    }
}

// Update and Display Scores
function updateScores() {
    if (!player1.gameOver) {
        player1.score += 1;
        document.getElementById("score1").innerText = `Player 1 Score: ${player1.score}`;
    }
    if (!player2.gameOver) {
        player2.score += 1;
        document.getElementById("score2").innerText = `Player 2 Score: ${player2.score}`;
    }
}

// Restart Game
function restartGame() {
    player1.gameOver = false;
    player2.gameOver = false;
    player1.score = 0;
    player2.score = 0;
    goomba.style.animation = "none";
    goomba.style.left = "100%";
    goomba.offsetHeight;
    goomba.style.animation = "moveGoomba 2s infinite linear";
}

// Game Loop
function gameLoop() {
    if (!player1.gameOver) checkCollisionMario();
    if (!player2.gameOver) checkCollisionLuigi();

    updateScores();
    
    if (player1.gameOver && player2.gameOver) {
        // Update High Scores
        player1.highScore = Math.max(player1.score, player1.highScore);
        player2.highScore = Math.max(player2.score, player2.highScore);
        
        document.getElementById("high-score1").innerText = `Player 1 High Score: ${player1.highScore}`;
        document.getElementById("high-score2").innerText = `Player 2 High Score: ${player2.highScore}`;
        
        // Display Winner
        if (player1.score > player2.score) {
            alert("Player 1 Wins!");
        } else if (player2.score > player1.score) {
            alert("Player 2 Wins!");
        } else {
            alert("It's a Tie!");
        }
        
        restartGame();
    }
    requestAnimationFrame(gameLoop);
}

// Event Listeners
document.addEventListener("keydown", (event) => {
    if (event.key === "w" && !player1.gameOver) {
        jumpMario();
    } else if (event.key === "ArrowUp" && !player2.gameOver) {
        jumpLuigi();
    }
});

// Start Game Loop
gameLoop();
