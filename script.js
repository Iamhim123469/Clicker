let points = 0;
let pointsPerClick = 1;
let autoClickerActive = false;
let autoClickerInterval;
let autoClickerRate = 0; // Auto-Clicker Points/second
let multiplier = 1;
let multiplierActive = false;
let challengeActive = false;

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
function buyUpgrade(upgradeCost, pointsIncrement, autoClickerIncrement, duration = 0, upgradeIndex) {
    if (points >= upgradeCost) {
        points -= upgradeCost;
        if (duration > 0) {
            activateMultiplier(duration);
        } else {
            pointsPerClick += pointsIncrement;
            autoClickerRate += autoClickerIncrement;
            updatePointsDisplay();
            document.getElementById(`cost${upgradeIndex}`).innerText = Math.floor(upgradeCost * 1.75); // Increase cost for next upgrade
        }
    } else {
        alert("Not enough points!");
    }
}

// Event listeners for upgrade buttons
document.getElementById("btn1").addEventListener("click", () => buyUpgrade(10, 1, 0, 0, 1));
document.getElementById("btn2").addEventListener("click", () => buyUpgrade(50, 5, 0, 0, 2));
document.getElementById("btn3").addEventListener("click", () => buyUpgrade(100, 0, 1, 0, 3));
document.getElementById("btn4").addEventListener("click", () => buyUpgrade(150, 0, 0, 10, 4));
document.getElementById("btn5").addEventListener("click", () => buyUpgrade(500, 10, 0, 0, 5));
document.getElementById("btn6").addEventListener("click", () => buyUpgrade(1000, 0, 5, 0, 6));
document.getElementById("btn7").addEventListener("click", () => buyUpgrade(2500, 0, 0, 15, 7)); // Triple Points for 15s
document.getElementById("btn8").addEventListener("click", () => buyUpgrade(5000, 25, 0, 0, 8));
document.getElementById("btn9").addEventListener("click", () => buyUpgrade(10000, 0, 10, 0, 9));
document.getElementById("btn10").addEventListener("click", () => buyUpgrade(50000, 100, 0, 0, 10)); // Final upgrade

// Function to activate multiplier
function activateMultiplier(duration) {
    if (!mult
