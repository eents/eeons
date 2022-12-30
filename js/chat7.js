let myObject;

function setup() {
  // Set the canvas size
  createCanvas(window.innerWidth, window.innerHeight, WEBGL);

  // Create the myObject variable
  myObject = {
    position: createVector(0, 0, 0),
    radius: 50
  };
}

function draw() {
  // Clear the canvas
  clear(0);

  // Move the object
  moveObject(myObject, 3);

  // Draw the object
  push();
  translate(myObject.position.x, myObject.position.y, myObject.position.z);
  sphere(myObject.radius);
  pop();
}

function moveObject(object, speed) {
    // Get the object's current position and rotation
    let xPos = object.position.x;
    let yPos = object.position.y;
    let zPos = object.position.z;
    let xRot = object.rotationX;
    let yRot = object.rotationY;
  
    // Initialize the direction variables if they don't exist
    if (typeof object.xDir === "undefined") object.xDir = 1;
    if (typeof object.yDir === "undefined") object.yDir = 1;
    if (typeof object.zDir === "undefined") object.zDir = 1;
    if (typeof object.xRotDir === "undefined") object.xRotDir = 1;
    if (typeof object.yRotDir === "undefined") object.yRotDir = 1;
  
    // Determine the new position and rotation based on the current direction
    xPos += object.xDir * speed;
    yPos += object.yDir * speed;
    zPos += object.zDir * speed;
    xRot += object.xRotDir * speed;
    yRot += object.yRotDir * speed;

    // Check if the object is at one of the edges of the canvas
  let canvasWidth = window.innerWidth;
  let canvasHeight = window.innerHeight;
  if (xPos < -canvasWidth/2 || xPos > canvasWidth/2 || yPos < -canvasHeight/2 || yPos > canvasHeight/2 || zPos < -canvasHeight/2 || zPos > canvasHeight/2) {
    // If it is, choose a new random direction
    object.xDir = (Math.random() - 0.5) * 2;
    object.yDir = (Math.random() - 0.5) * 2;
    object.zDir = (Math.random() - 0.5) * 2;
    object.xRotDir = (Math.random() - 0.5) * 2;
    object.yRotDir = (Math.random() - 0.5) * 2;

    // Make sure the object stays inside the boundaries of the canvas
    xPos = xPos < -canvasWidth/2 ? -canvasWidth/2 : xPos;
    xPos = xPos > canvasWidth/2 ? canvasWidth/2 : xPos;
    yPos = yPos < -canvasHeight/2 ? -canvasHeight/2 : yPos;
    yPos = yPos > canvasHeight/2 ? canvasHeight/2 : yPos;
    zPos = zPos < -canvasHeight/2 ? -canvasHeight/2 : zPos;
    zPos = zPos > canvasHeight/2 ? canvasHeight/2 : zPos;
  }

  // Update the object's position and rotation
  object.position.x = xPos;
  object.position.y = yPos;
  object.position.z = zPos;
  object.rotationX = xRot;
  object.rotationY = yRot;
}