let points = 0;
let pointsPerClick = 1;
let autoClickerActive = false;
let autoClickerInterval;
let multiplier = 1;
let multiplierActive = false;

// Function to update the points display
function updatePointsDisplay() {
    document.getElementById("points").innerText = points;
    document.getElementById("multiplier").innerText = multiplier;
}

// Function to handle the click button
document.getElementById("clicker-btn").addEventListener("click", () => {
    points += pointsPerClick * multiplier;
    updatePointsDisplay();
});

// Function to buy upgrades
function buyUpgrade(upgradeCost, pointsIncrement, upgradeIndex, duration = 0) {
    if (points >= upgradeCost) {
        points -= upgradeCost;
        if (duration > 0) {
            activateMultiplier(duration);
        } else {
            pointsPerClick += pointsIncrement;
            updatePointsDisplay();
            document.getElementById(`cost${upgradeIndex}`).innerText = Math.floor(upgradeCost * 1.5); // Increase cost for next upgrade
        }
    } else {
        alert("Not enough points!");
    }
}

// Event listeners for upgrade buttons
document.getElementById("btn1").addEventListener("click", () => buyUpgrade(10, 1, 1));
document.getElementById("btn2").addEventListener("click", () => buyUpgrade(50, 5, 2));
document.getElementById("btn3").addEventListener("click", () => {
    if (points >= 100 && !autoClickerActive) {
        points -= 100;
        autoClickerActive = true;
        updatePointsDisplay();
        startAutoClicker();
        document.getElementById("cost3").innerText = "Maxed Out"; // Change the button text after purchase
        document.getElementById("btn3").disabled = true; // Disable the button
    } else {
        alert("Not enough points or already purchased!");
    }
});
document.getElementById("btn4").addEventListener("click", () => buyUpgrade(150, 0, 4, 10)); // Double Points Upgrade
document.getElementById("btn5").addEventListener("click", () => buyUpgrade(200, 0, 5)); // Point Multiplier Upgrade

// Function to activate multiplier
function activateMultiplier(duration) {
    if (!multiplierActive) {
        multiplierActive = true;
        multiplier *= 2; // Double the multiplier
        updatePointsDisplay();
        setTimeout(() => {
            multiplier /= 2; // Revert multiplier after duration
            multiplierActive = false;
            updatePointsDisplay();
        }, duration * 1000);
    } else {
        alert("Multiplier is already active!");
    }
}

// Function to start auto-clicker
function startAutoClicker() {
    autoClickerInterval = setInterval(() => {
        points += 1;
        updatePointsDisplay();
    }, 1000);
}

// Reset the game function
document.getElementById("reset-btn").addEventListener("click", resetGame);

function resetGame() {
    points = 0;
    pointsPerClick = 1;
    autoClickerActive = false;
    multiplier = 1;
    multiplierActive = false;
    clearInterval(autoClickerInterval);
    updatePointsDisplay();
    document.getElementById("btn3").disabled = false; // Enable auto-clicker button again
    document.getElementById("cost3").innerText = 100; // Reset cost
}
