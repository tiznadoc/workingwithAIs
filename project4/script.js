// Array to store participants
let participants = [];

// Function to add a participant
function addParticipant() {
    const nameInput = document.getElementById('participantName');
    const name = nameInput.value.trim();

    if (name !== '') {
        participants.push(name);
        displayParticipants();
        nameInput.value = '';
    }
}

// Function to display participants
function displayParticipants() {
    const participantsList = document.getElementById('participantsList');
    participantsList.innerHTML = '<h3>Participants:</h3>';
    participants.forEach(participant => {
        participantsList.innerHTML += `<p>${participant}</p>`;
    });
}

// Function to draw a winner
function drawWinner() {
    const winnerDisplay = document.getElementById('winnerDisplay');
    const participantsList = document.getElementById('participantsList');

    if (participants.length > 0) {
        const randomIndex = Math.floor(Math.random() * participants.length);
        const winner = participants[randomIndex];
        winnerDisplay.innerHTML = `<h3>Winner:</h3><p>${winner} 🎂🎉</p>`;
        participantsList.innerHTML = ''; // Clear the participants list
        participants = []; // Reset participants array
    } else {
        winnerDisplay.innerHTML = '<p>No participants to draw from.</p>';
    }
}
