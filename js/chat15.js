let numCircles = 21;
let circles = [];

function setup() {
    createCanvas(windowWidth, windowHeight);
  
    // Define an array of colors
    let colors = [[255, 0, 0], [0, 255, 0], [0, 0, 255], [255, 255, 0], [0, 255, 255], [255, 0, 255]];
  
    // Create custom circles
    let customCircles = [      {        name: 'custom-cir-1',        x: 100,        y: 100,        speed: 1,        directionX: 1,        directionY: 1,        radius: 50,        color: '#000000'      }    ];
  
    // Create randomly generated circles
    for (let i = 0; i < numCircles; i++) {
      circles.push({
        x: random(0, width),
        y: random(0, height),
        speed: random(.11, 1.11),
        directionX: random(-1, 1),
        directionY: random(-1, 1),
        radius: random(33, 66),
        color: colors[Math.floor(Math.random() * colors.length)]
      });
    }
  
    // Add custom circles to the circles array
    circles.push(...customCircles);
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
    let intervalId = setInterval(hideCircles, 99);
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

    // Draw circle
    fill(circle.color);
    ellipse(circle.x, circle.y, circle.radius * 2, circle.radius * 2);
}
}   