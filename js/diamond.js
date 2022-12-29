function setup() {
    createCanvas(200, 300, WEBGL);
  }
  
  function draw() {
    
    rotateY(frameCount * 0.03);
    
    let s1 = beginShape();
    vertex(0, 140, 0);
    vertex(80, 0, 0);
    vertex(60, 0, 60);
    s1.fill(37, 15, 85);
    endShape(CLOSE);
    let s2 = beginShape();
    vertex(0, 140, 0);
    vertex(80, 0, 0);
    vertex(60, 0, -60);
    s2.fill(76, 16, 35);
    endShape(CLOSE);
    let s3 = beginShape();
    vertex(0, 140, 0);
    vertex(-80, 0, 0);
    vertex(-60, 0, 60);
    s3.fill(22, 57, 31);
    endShape(CLOSE);
    let s4 = beginShape();
    vertex(0, 140, 0);
    vertex(-80, 0, 0);
    vertex(-60, 0, -60);
    s4.fill(12, 139, 43);
    endShape(CLOSE);
    let s5 = beginShape();
    vertex(0, 140, 0);
    vertex(0, 0, 80);
    vertex(60, 0, 60);
    s5.fill(57, 15, 172);
    endShape(CLOSE);
    let s6 = beginShape();
    vertex(0, 140, 0);
    vertex(0, 0, 80);
    vertex(-60, 0, 60);
    s6.fill(76, 16, 35);
    endShape(CLOSE);
    let s7 = beginShape();
    vertex(0, 140, 0);
    vertex(0, 0, -80);
    vertex(60, 0, -60);
    s7.fill(12, 139, 43);
    endShape(CLOSE);
    let s8 = beginShape();
    vertex(0, 140, 0);
    vertex(0, 0, -80);
    vertex(-60, 0, -60);
    s8.fill(114, 14, 66);
    endShape(CLOSE);
    let s9 = beginShape();
    vertex(0, -140, 0);
    vertex(80, 0, 0);
    vertex(60, 0, 60);
    s9.fill(57, 15, 172);
    endShape(CLOSE);
    let s10 = beginShape();
    vertex(0, -140, 0);
    vertex(80, 0, 0);
    vertex(60, 0, -60);
    s10.fill(37, 15, 85);
    endShape(CLOSE);
    let s11 = beginShape();
    vertex(0, -140, 0);
    vertex(-80, 0, 0);
    vertex(-60, 0, 60);
    s11.fill(114, 14, 66);
    endShape(CLOSE);
    let s12 = beginShape();
    vertex(0, -140, 0);
    vertex(-80, 0, 0);
    vertex(-60, 0, -60);
    s12.fill(166, 8, 91);
    endShape(CLOSE);
    let s13 = beginShape();
    vertex(0, -140, 0);
    vertex(0, 0, 80);
    vertex(60, 0, 60);
    s13.fill(76, 16, 35);
    endShape(CLOSE);
    let s14 = beginShape();
    vertex(0, -140, 0);
    vertex(0, 0, 80);
    vertex(-60, 0, 60);
    s14.fill(166, 8, 91);
    endShape(CLOSE);
    let s15 = beginShape();
    vertex(0, -140, 0);
    vertex(0, 0, -80);
    vertex(60, 0, -60);
    s15.fill(22, 85, 38);
    endShape(CLOSE);
    let s16 = beginShape();
    vertex(0, -140, 0);
    vertex(0, 0, -80);
    vertex(-60, 0, -60);
    s16.fill(22, 57, 31);
    endShape(CLOSE);
  }