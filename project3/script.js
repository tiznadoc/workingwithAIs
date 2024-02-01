// Function to handle form submission
function submitForm(event) {
    event.preventDefault(); // Prevents the default form submission behavior

    // Get the values from the form inputs
    const email = document.getElementById('email').value;
    const attendance = document.getElementById('attendance').value;

    // Display confirmation message
    const confirmationMessage = document.getElementById('confirmationMessage');

    if (attendance === 'yes') {
        // If the user is attending, display a party emoji, a positive message, and set background image
        confirmationMessage.innerHTML = '🎉 Yay! Can\'t wait to party with you, ' + email + '!';
        confirmationMessage.style.backgroundColor = '#4caf50'; // Green background color for positive message
        document.body.style.backgroundImage = "url('https://media.giphy.com/media/l2JHPB58MjfV8W3K0/giphy.gif')";
    } else {
        // If the user is not attending, display a different message and reset background image
        confirmationMessage.innerHTML = '😢 We\'ll miss you, ' + email + '!';
        confirmationMessage.style.backgroundColor = '#546e7a'; // Sad color for not attending
        document.body.style.backgroundImage = "url(https://media.giphy.com/media/JER2en0ZRiGUE/giphy.gif)"; // Reset background image if not attending
    }

    // Show the confirmation message
    confirmationMessage.style.display = 'block';
}
