document.addEventListener("DOMContentLoaded", function () {
    let counter = 0;
    let intervalId;
    const counterDisplay = document.getElementById('counter');
    const minusButton = document.getElementById('minus');
    const plusButton = document.getElementById('plus');
    const heartButton = document.getElementById('heart');
    const pauseButton = document.getElementById('pause');
    const likesList = document.querySelector('.likes');
    const commentForm = document.getElementById('comment-form');
    const commentInput = document.getElementById('comment-input');
    const commentsDiv = document.getElementById('list');
    
    // Update the counter display
    function updateCounter() {
      counterDisplay.textContent = counter;
    }
  
    // Increment the counter
    plusButton.addEventListener('click', function() {
      counter++;
      updateCounter();
    });
  
    // Decrement the counter
    minusButton.addEventListener('click', function() {
      counter--;
      updateCounter();
    });
  
    // Add a like when the heart button is clicked
    heartButton.addEventListener('click', function() {
      const likeItem = document.createElement('li');
      likeItem.textContent = `❤️ ${counter}`;
      likesList.appendChild(likeItem);
    });
  
    // Pause the counter (pause all functionality)
    pauseButton.addEventListener('click', function() {
      if (intervalId) {
        clearInterval(intervalId);
        intervalId = null;
        pauseButton.textContent = 'resume';
      } else {
        intervalId = setInterval(() => {
          counter++;
          updateCounter();
        }, 1000);
        pauseButton.textContent = 'pause';
      }
    });
  
    // Submit a comment
    commentForm.addEventListener('submit', function(e) {
      e.preventDefault(); // Prevent form submission
      
      const commentText = commentInput.value;
      if (commentText) {
        const commentElement = document.createElement('p');
        commentElement.textContent = commentText;
        commentsDiv.appendChild(commentElement);
        commentInput.value = ''; // Clear input field
      }
    });
  
    // Start the counter automatically
    intervalId = setInterval(() => {
      counter++;
      updateCounter();
    }, 1000);
  });
  