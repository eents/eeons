let objects = [];

let textureImages = [];

function preload() {
  textureImages.push(loadImage('imgs/testimg1.png'));
  textureImages.push(loadImage('imgs/testimg2.png'));
  textureImages.push(loadImage('imgs/testimg3.png'));
}

function createObject() {
  // Create a new object with a random size and position
  let object = {
    position: createVector(random(-width/2, width/2), random(-height/2, height/2), random(-height/2, height/2)),
    radius: random(120, 180)
  };

  // Add the object to the array
  objects.push(object);
}

function setup() {
  // Set the canvas size
  createCanvas(window.innerWidth, window.innerHeight, WEBGL);
  let obj1 = createObject();
  let obj2 = createObject();
  let obj3 = createObject();
}

function draw() {
  // Clear the canvas
  clear(0);

  // Draw each object
  for (let i = 0; i < objects.length; i++) {
    let object = objects[i];

    // Move the object
    moveObject(object, 111);

    // Apply the texture to the object
    texture(textureImages[i]);

    // Draw the object
    push();
    translate(object.position.x, object.position.y, object.position.z);
    sphere(object.radius);
    pop();
  }
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