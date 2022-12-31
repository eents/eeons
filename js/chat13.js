let numCircles = 21;
let circles = [];
let bgImage;

function preload() {
  bgImage = loadImage('imgs/testimg1.png');  // Replace 'path/to/image.jpg' with the actual path to your image file
}

function setup() {
    createCanvas(windowWidth, windowHeight);
  
    // Define an array of colors
    let colors = ['#ff0000', '#00ff00', '#0000ff', '#ffff00', '#00ffff', '#ff00ff'];
  
    // Create custom circles
    let customCircles = [
      {
        name: 'custom-cir-1',
        x: 100,
        y: 100,
        speed: 1,
        directionX: 1,
        directionY: 1,
        radius: 50,
        color: '#000000'
      },
      {
        name: 'custom-cir-2',
        x: 200,
        y: 200,
        speed: 1,
        directionX: 1,
        directionY: 1,
        radius: 50,
        color: '#ffff00'
      },
      {
        name: 'custom-cir-3',
        x: 300,
        y: 300,
        speed: 1,
        directionX: 1,
        directionY: 1,
        radius: 50,
        color: '#0000ff'
      },
      {
        name: 'custom-cir-4',
        x: 400,
        y: 400,
        speed: 1,
        directionX: 1,
        directionY: 1,
        radius: 50,
        color: '#00ff00'
      },
      {
        name: 'custom-cir-5',
        x: 500,
        y: 500,
        speed: 1,
        directionX: 1,
        directionY: 1,
        radius: 50,
        color: '#ff0000'
      }
    ];
  
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

  function windowResized() {
    // Reload the page when the window is resized
    location.reload();
  }

  function draw() {
    // Draw the image as the background
  image(bgImage, 0, 0, width, height);

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