// Select the button using its id
const button = document.getElementById('colorButton');

// Function to generate a random color
function getRandomColor() {
    const letters = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}

// Add event listener to the button
button.addEventListener('click', function() {
    // Generate a random color
    const randomColor = getRandomColor();
    // Apply the random color to the background
    document.body.style.backgroundColor = randomColor;
});