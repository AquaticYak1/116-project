noseX=0;
noseY=0;

function preload(){
    tophat=loadImage("https://i.postimg.cc/dQmz0Lwj/black-top-hat-png-clipart-5a3c35a30bc237-8870952815138953310482.jpg");
    mustache=loadImage("https://i.postimg.cc/3x3QzSGq/m.png")
}
function setup() {
    canvas=createCanvas(500, 500);
    canvas.center();
    video=createCapture(500, 500);
    video.size(500, 500);
    video.hide();

    poseNet = ml5.poseNet(video, modelLoaded);
    poseNet.on('pose', gotPoses);
}

function modelLoaded(){
    console.log('PoseNet Is Initialized');
}

function gotPoses(results){
    if(results.length > 0) {
        console.log(results);
        noseX = results[0].pose.nose.x;
        noseY = results[0].pose.nose.y;
        console.log("nose x = "+results[0].pose.nose.x);
        console.log("nose y = "+results[0].pose.nose.y);
    }
}

function draw() {
    image(video, 0, 0, 500, 500,);
    fill(252, 186, 3);
    stroke(107, 3, 252);
    circle(noseX, noseY, 20);
    image(tophat, noseX - 80, noseY - 300, 150, 200);
    image(mustache, noseX - 50, noseY - 20, 100, 100);
}
function take_snapshot(){
    save('Geoff_what_is_this?.png');
}