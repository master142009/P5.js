function preload() { 
}

function setup() {
    canvas = createCanvas(650, 480);
    canvas.position(475, 250);
    video = createCapture(VIDEO);
    video.hide();

    tint_color = "";
}

function draw() {
    image(video, 0, 0, 650, 480)
    tint(tint_color);
}

function take_snapshot() {
    save('photo.png');
}

function filter_run() {
    tint_color = document.getElementById("color-filter").value;
}