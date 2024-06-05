// Get a random integer between min and max
function getRandomInt(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

// Get the dice image file name based on the roll
function getDiceImage(roll) {
  return `images/dice${roll}.png`;
}

// Determine the winner
function determineWinner(roll1, roll2) {
  if (roll1 > roll2) {
    return "🚩 Player 1 Wins!";
  } else if (roll1 < roll2) {
    return "Player 2 Wins! 🚩";
  } else {
    return "It's a Draw!";
  }
}

// Check if the page is being loaded for the first time or refreshed
window.onload = function() {
  if (performance.navigation.type === 1) { // Page reload
    // Generate random rolls for both dice
    const roll1 = getRandomInt(1, 6);
    const roll2 = getRandomInt(1, 6);

    // Set the new dice images
    document.querySelector(".img1").src = getDiceImage(roll1);
    document.querySelector(".img2").src = getDiceImage(roll2);

    // Determine and set the winner text
    document.querySelector(".container h1").textContent = determineWinner(roll1, roll2);
  }
};