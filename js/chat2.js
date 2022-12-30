function moveObject(object, speed) {
    // Get the object's current position
    let xPos = object.offsetLeft;
    let yPos = object.offsetTop;
  
    // Generate a random number between 0 and 1
    let rand = Math.random();
  
    // Determine the new direction based on the random number
    if (rand < 0.25) {
      // Move up
      yPos -= speed;
    } else if (rand < 0.5) {
      // Move right
      xPos += speed;
    } else if (rand < 0.75) {
      // Move down
      yPos += speed;
    } else {
      // Move left
      xPos -= speed;
    }
  
    // Check if the object is at one of the edges of the screen
    let screenWidth = window.innerWidth;
    let screenHeight = window.innerHeight;
    if (xPos < 0 || xPos + object.offsetWidth > screenWidth || yPos < 0 || yPos + object.offsetHeight > screenHeight) {
      // If it is, reverse the direction
      xPos = xPos < 0 ? 0 : xPos;
      xPos = xPos + object.offsetWidth > screenWidth ? screenWidth - object.offsetWidth : xPos;
      yPos = yPos < 0 ? 0 : yPos;
      yPos = yPos + object.offsetHeight > screenHeight ? screenHeight - object.offsetHeight : yPos;
    }
  
    // Update the object's position
    object.style.left = xPos + "px";
    object.style.top = yPos + "px";
  }

  let myObject = document.getElementById("diamond-ctr");
  setInterval(function() {
    moveObject(myObject, 25);
  }, 1000 / 6); // Run the function 60 times per second