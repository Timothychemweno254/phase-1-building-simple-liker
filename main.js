// Defining text characters for the empty and full hearts for you to use later.
const EMPTY_HEART = '♡'
const FULL_HEART = '♥'

// Your JavaScript code goes here!
// Simulate a server call (provided by the lab)
function mimicServerCall() {
  return new Promise((resolve, reject) => {
    const random = Math.random();
    if (random > 0.5) {
      resolve("Success!");
    } else {
      reject("Error: Server request failed!");
    }
  });
}

// Add event listener to the heart
const heart = document.querySelector(".like-glyph");
heart.addEventListener("click", () => {
  if (heart.textContent === "♡") {
    // User clicked on an empty heart
    mimicServerCall()
      .then(() => {
        // Server returns success
        heart.textContent = "♥"; // Change to full heart
        heart.classList.add("activated-heart"); // Make the heart red
      })
      .catch((error) => {
        // Server returns failure
        const errorModal = document.getElementById("error-modal");
        const errorMessage = document.getElementById("error-message");

        // Display the error modal and message
        errorMessage.textContent = error;
        errorModal.classList.remove("hidden");

        // Hide the modal after 3 seconds
        setTimeout(() => {
          errorModal.classList.add("hidden");
        }, 3000);
      });
  } else {
    // User clicked on a full heart
    heart.textContent = "♡"; // Change back to empty heart
    heart.classList.remove("activated-heart"); // Remove the red color
  }
});

// Optional: Add event listener to close the modal manually
const closeModalButton = document.getElementById("close-modal");
closeModalButton.addEventListener("click", () => {
  const errorModal = document.getElementById("error-modal");
  errorModal.classList.add("hidden");
});




//------------------------------------------------------------------------------
// Don't change the code below: this function mocks the server response
//------------------------------------------------------------------------------

function mimicServerCall(url="http://mimicServer.example.com", config={}) {
  return new Promise(function(resolve, reject) {
    setTimeout(function() {
      let isRandomFailure = Math.random() < .2
      if (isRandomFailure) {
        reject("Random server error. Try again.");
      } else {
        resolve("Pretend remote server notified of action!");
      }
    }, 300);
  });
}
