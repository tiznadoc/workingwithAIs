// Function to be executed when the button is clicked
function showMessage() {
    // Get the element with the ID "welcomeMessage"
    var messageContainer = document.getElementById("welcomeMessage");
    var firstName = "Victor";
    // Set the inner HTML of the message container to display the welcome message
    messageContainer.innerHTML = "Welcome " + firstName + "!";
}

// Get the button element by its ID
var button = document.getElementById("welcomeButton");

// Attach a click event listener to the button
// When the button is clicked, the showMessage function will be executed
button.addEventListener("click", showMessage);