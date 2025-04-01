// Function to simulate a delay using async/await with setTimeout
function delay(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

// Async function to handle the form submission
async function handleFormSubmit() {
    // Retrieve the input values from the form
    const text = document.getElementById('text').value;
    const delayTime = parseInt(document.getElementById('delay').value);

    // Check if the delayTime is a valid number
    if (isNaN(delayTime) || delayTime <= 0) {
        alert('Please enter a valid delay time.');
        return;
    }

    // Display message after the specified delay
    await delay(delayTime);
    document.getElementById('output').textContent = text;
}

// Event listener for the submit button
document.getElementById('btn').addEventListener('click', handleFormSubmit);
