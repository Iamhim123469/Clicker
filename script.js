let score = 0; // Initial score
let pointsPerClick = 1; // Points earned per click

// Function to update the displayed score and points per click
function updateDisplay() {
    document.getElementById("score").innerText = score; // Update score display
    document.getElementById("pointsPerClick").innerText = pointsPerClick; // Update points per click display
}

// Initial display update
updateDisplay();

// Get the click button element
const button = document.getElementById("clickButton");

// Event listener for button clicks
button.addEventListener("click", () => {
    score += pointsPerClick; // Increase score by points per click
    updateDisplay(); // Update displayed score
});

// Upgrade buttons
const upgrade1 = document.getElementById("upgrade1");
const upgrade2 = document.getElementById("upgrade2");
const upgrade3 = document.getElementById("upgrade3");

// Event listeners for upgrades
upgrade1.addEventListener("click", () => {
    if (score >= 10) {
        score -= 10; // Deduct cost
        pointsPerClick += 1; // Increase points per click
        updateDisplay(); // Update displayed score
    } else {
        alert("Not enough points for Upgrade 1!");
    }
});

upgrade2.addEventListener("click", () => {
    if (score >= 50) {
        score -= 50; // Deduct cost
        pointsPerClick += 5; // Increase points per click
        updateDisplay(); // Update displayed score
    } else {
        alert("Not enough points for Upgrade 2!");
    }
});

upgrade3.addEventListener("click", () => {
    if (score >= 100) {
        score -= 100; // Deduct cost
        pointsPerClick += 10; // Increase points per click
        updateDisplay(); // Update displayed score
    } else {
        alert("Not enough points for Upgrade 3!");
    }
});
