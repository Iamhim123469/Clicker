let points = 0;
let pointsPerClick = 1;
let autoClickerActive = false;
let autoClickerInterval;

// Function to update the points display
function updatePointsDisplay() {
    document.getElementById("points").innerText = points;
}

// Function to handle the click button
document.getElementById("clicker-btn").addEventListener("click", () => {
    points += pointsPerClick;
    updatePointsDisplay();
});

// Function to buy upgrades
function buyUpgrade(upgradeCost, pointsIncrement, upgradeIndex) {
    if (points >= upgradeCost) {
        points -= upgradeCost;
        pointsPerClick += pointsIncrement;
        updatePointsDisplay();
        document.getElementById(`cost${upgradeIndex}`).innerText = Math.floor(upgradeCost * 1.5); // Increase cost for next upgrade
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

// Function to start auto-clicker
function startAutoClicker() {
    autoClickerInterval = setInterval(() => {
        points += 1;
        updatePointsDisplay();
    }, 1000);
}

// Reset the game function (optional)
function resetGame() {
    points = 0;
    pointsPerClick = 1;
    autoClickerActive = false;
    clearInterval(autoClickerInterval);
    updatePointsDisplay();
    document.getElementById("btn3").disabled = false; // Enable auto-clicker button again
}

// Optional: Reset button for testing purposes
const resetBtn = document.createElement("button");
resetBtn.innerText = "Reset Game";
resetBtn.style.marginTop = "20px";
resetBtn.style.padding = "10px 20px";
resetBtn.style.backgroundColor = "#FF4136";
resetBtn.style.color = "white";
resetBtn.style.border = "none";
resetBtn.style.borderRadius = "5px";
resetBtn.style.cursor = "pointer";
resetBtn.addEventListener("click", resetGame);
document.body.appendChild(resetBtn);
