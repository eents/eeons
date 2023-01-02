let numCircles = 24;
let circles = [];

function setup() {
  createCanvas(windowWidth, windowHeight);

  // Define arrays of colors
  let colors_1 = [[255, 0, 0], [0, 255, 0], [0, 0, 255], [255, 255, 0], [0, 255, 255], [255, 0, 255]];
  let colors_2 = [[0, 0, 0], [0, 0, 0], [0, 0, 0], [0, 0, 0], [0, 0, 0], [55, 0, 55]];
  let colors_3 = [[100, 100, 100], [100, 100, 100], [100, 100, 100], [255, 255, 100], [0, 100, 100], [100, 0, 100]];

  // Create custom circles
  let customCircles = [    {      name: 'custom-cir-1',      x: 111,      y: 333,      speed: 1,      directionX: 1,      directionY: 1,      radius: 50,      color: '#000000',      element: null }  ];

  // Create randomly generated circles
  for (let i = 0; i < numCircles; i++) {
    circles.push({
      x: random(0, width),
      y: random(0, height),
      speed: random(.11, 1.11),
      directionX: random(-1, 1),
      directionY: random(-1, 1),
      radius: random(33, 66),
      color: colors_1[Math.floor(Math.random() * colors_1.length)]
    });
  }

  // Add custom circles to the circles array
  circles.push(...customCircles);

  // Generate the HTML element for custom-cir-1
  let customCir1 = document.createElement('div');
  customCir1.setAttribute('id', 'custom-cir-1');
  customCir1.style.width = '100px';
  customCir1.style.height = '100px';
  customCir1.style.borderRadius = '50%';
  customCir1.style.backgroundColor = '#000000';
  customCir1.style.position = 'absolute';
  customCir1.style.top = '100px';
  customCir1.style.left = '100px';
  document.body.appendChild(customCir1);

  // Store the HTML element in the custom circle object
  customCircles[0].element = customCir1;
}

function hideCircles() {
  let circle = circles.shift();
  if (circle) {
    circle.radius = 1;
    circle.color = [0, 0, 0, 0];
    draw();
  } else {
    clearInterval(intervalId);
  }
}

function windowResized() {
  // Reload the page when the window is resized
  location.reload();
}

function mousePressed() {
    let elem = document.elementFromPoint(mouseX, mouseY);
    if (elem.id == "custom-cir-1") {
      let intervalId = setInterval(hideCircles, 99);
    }
}

function draw() {
    clear();
  
    // Update and draw circles
    for (let i = 0; i < circles.length; i++) {
      let circle = circles[i];
  
      // Update circle position
      circle.x += circle.speed * circle.directionX;
      circle.y += circle.speed * circle.directionY;
  
      // Check for collisions with edges of canvas
      if (circle.x > width || circle.x < 0) {
        circle.directionX *= -1;
      }
      if (circle.y > height || circle.y < 0) {
        circle.directionY *= -1;
      }
  
      // Check for collisions with other circles
      for (let j = 0; j < circles.length; j++) {
        if (i !== j) {
          let other = circles[j];
          let distance = dist(circle.x, circle.y, other.x, other.y);
          if (distance <= circle.radius + other.radius) {
            circle.directionX *= -1;
            circle.directionY *= -1;
            other.directionX *= -1;
            other.directionY *= -1;
          }
        }
      }
  
      // Check if the circle has an HTML element associated with it
      if (circle.element) {
        // Update the position and size of the HTML element
        circle.element.style.top = circle.y - circle.radius + 'px';
        circle.element.style.left = circle.x - circle.radius + 'px';
        circle.element.style.width = circle.radius * 2 + 'px';
        circle.element.style.height = circle.radius * 2 + 'px';
      } else {
        // Draw circle
        fill(circle.color);
        noStroke();
        ellipse(circle.x, circle.y, circle.radius * 2, circle.radius * 2);
      }
    }
  }