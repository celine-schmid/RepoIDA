// var fontSize = 300;



// function setup() {
//     // createCanvas(windowWidth, windowHeight, WEBGL);
//     createCanvas(windowWidth, windowHeight);
//     // colorMode(HSB);
//     // background(136, 30, 40);




//     textSize(fontSize);

//     noCursor();

//     h1 = createElement('h1', 'p5.js');
//     h1.position(windowWidth / 20, windowHeight / 50);

//     // blendMode(MULTIPLY);

// }

// function draw() {
//     background(236, 50); //gezeichnetes wiederholt sich nicht immer
//     ellipse(mouseX, mouseY, 50, 50);
//     noStroke();
//     fill(100);
//     triangle(mouseX / 2, mouseY, 0, 0, 60, 30);
//     triangle(mouseX, mouseY / 2, 60, 30, 30, 60);

//     // ellipsoid(100, 100, 100);

//     let x = mouseX;
//     let y = mouseY;
//     let ix = width - mouseX;
//     let iy = height - mouseY;

//     var hue = map(y, 0, width, 160, 270);
//     var brightness = map(mouseX, 0, height, 20, 45);
//     stroke(hue, 75, 20);

// }