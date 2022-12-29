function moveObject(object) {
    // Set the object's initial direction and position
    let direction = 1;
    let x = 0;
    let y = 0;
  
    // Set the object's speed
    let speed = 5;
  
    // Set the object's size
    let width = object.offsetWidth;
    let height = object.offsetHeight;
  
    // Set the boundaries of the screen
    let maxX = window.innerWidth - width;
    let maxY = window.innerHeight - height;
  
    // Update the object's position every 10 milliseconds
    setInterval(function() {
      // Update the object's position
      x += direction * speed;
      y += direction * speed;
  
      // Reverse the object's direction if it hits the edge of the screen
      if (x >= maxX || x <= 0) {
        direction *= -1;
      }
      if (y >= maxY || y <= 0) {
        direction *= -1;
      }
  
      // Update the object's position on the screen
      object.style.left = x + "px";
      object.style.top = y + "px";
    }, 10);
  }

  let myObject = document.getElementById("my-object");
  moveObject(myObject);
  