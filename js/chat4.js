function moveObject(object, speed) {
    // Get the object's current position
    let xPos = object.offsetLeft;
    let yPos = object.offsetTop;
  
    // Initialize the direction variables if they don't exist
    if (typeof object.xDir === "undefined") object.xDir = 1;
    if (typeof object.yDir === "undefined") object.yDir = 1;
  
    // Determine the new position based on the current direction
    xPos += object.xDir * speed;
    yPos += object.yDir * speed;
  
    // Check if the object is at one of the edges of the screen
    let screenWidth = window.innerWidth;
    let screenHeight = window.innerHeight;
    if (xPos < 0 || xPos + object.offsetWidth > screenWidth || yPos < 0 || yPos + object.offsetHeight > screenHeight) {
      // If it is, reverse the direction
      xPos = xPos < 0 ? 0 : xPos;
      xPos = xPos + object.offsetWidth > screenWidth ? screenWidth - object.offsetWidth : xPos;
      yPos = yPos < 0 ? 0 : yPos;
      yPos = yPos + object.offsetHeight > screenHeight ? screenHeight - object.offsetHeight : yPos;
      object.xDir *= -1;
      object.yDir *= -1;
    }
  
    // Update the object's position
    object.style.left = xPos + "px";
    object.style.top = yPos + "px";
  }

  
  let myObject = document.getElementById("diamond-ctr");
  setInterval(function() {
    moveObject(myObject, 5);
  }, 1000 / 60); // Run the function 60 times per second
  