let numCircles = 21;
let circles = [];

function setup() {
  createCanvas(windowWidth, windowHeight);

  // Create circles
  for (let i = 0; i < numCircles; i++) {
    circles.push({
      x: random(0, width),
      y: random(0, height),
      speed: random(.11, 1.11),
      directionX: random(-1, 1),
      directionY: random(-1, 1),
      radius: random(33, 66)
    });
  }
}

function draw() {
  background(0);

  // Update and draw circles
  for (let i = 0; i < numCircles; i++) {
    let circle = circles[i];

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
    for (let j = 0; j < numCircles; j++) {
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
    fill(255, 0, 0);
    ellipse(circle.x, circle.y, circle.radius * 2, circle.radius * 2);
  }
}
