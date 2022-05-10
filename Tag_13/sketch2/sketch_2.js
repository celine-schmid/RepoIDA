// let history;
// let count = 0;

// function setup() {
//     createCanvas(window.innerWidth, window.innerHeight);
//     let url = "chrome_history.json";
//     loadJSON(url, loaded);
//     background(255);
//     fill(255);
//     textSize(60)
//     textAlign(CENTER, CENTER);
//     frameRate(1);

//     // let x = map(mouseX, 0, width, 0, 255);

//     // background(x, 0, 255);

//     // blendMode(MULTIPLY);
// }

// function loaded(data) {
//     history = data;
//     console.log(history[0].title);

// }


// function draw() {


//     text(history[count].title, width / 2, height / 2);
//     count++;
//     if (count > Object.keys(history).length) {
//         count = 0;
//     }

// }

let history;
let count = 0;

document.body.style.overflow = 'hidden';

function setup() {
    createCanvas(window.innerWidth, windowHeight);
    let url = "chrome_history.json";
    loadJSON(url, loaded);
    background(0);
    fill(255);
    textSize(60)
    textAlign(CENTER, CENTER);
    frameRate(6);

    text('Helvetica');


    h1 = createElement('h1', 'What did I google?');
    h1.position(windowWidth / 20, windowHeight / 45);

    noCursor();

    colorMode(HSB);
}

function loaded(data) {
    history = data;

    let aktuellestunde = 15;
    let deckungsgrad = map(aktuellestunde, 0, 23, 0, 255)

    console.log(deckungsgrad);

    noFill();


}

function draw() {

    background(0);

    let textGroesse = map(history[count].visitCount, 1, 20, 62, 120);
    let start = 0;
    let zeile = 20; /* Versatz in der y Achse, soviel rutscht jeder Eintrag gegen unten*/
    let step = 2; /* Um soviel Pixel wird der nächste Eintrag grösser */
    let portion = 50;
    textSize(textGroesse);


    let hue = map(history[count].visitCount, 1, 343, 60, 360);

    stroke(hue, 100, 100);

    // // text(history[count].title, mouseX, mouseY);
    // text(history[count].title, width / 2, height / 2);
    // count++;
    // if (count > Object.keys(history).length) {
    //     count = 0;
    // }

    for (let i = start; i < portion + start; i++) {
        textSize((i - start) * step);
        text(history[i].title, width / 2, (i - start - 1) * zeile);
    }


}

function keyReleased() {
    if (key == 's' || key == 'S') {
        let d = new Date();
        let now = d.getFullYear() + "" + (d.getMonth() + 1) + "" + d.getDate() + "" + (d.getHours() + 1) + "-" + (d.getMinutes() + 1) + "" + (d.getSeconds() + 1) + "-" + frameCount;
        saveCanvas(now, 'png');
    }
}