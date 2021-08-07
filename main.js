var NoseX = 0;
var NoseY = 0;

var Clone = '';



function preload(){
    CloneNose = loadImage('https://i.postimg.cc/7hRyD3cS/th-3.jpg');
    //draw();
}

function setImageCircle(){
    CloneNose = loadImage('https://i.postimg.cc/FFdrWw3z/th-1.jpg');
    //draw();
}

function setImageMustache(){
    CloneNose = loadImage('https://i.postimg.cc/7hRyD3cS/th-3.jpg');
    //draw();
}

function setup(){
    canvas = createCanvas(400, 350);
    canvas.center();
    video = createCapture(VIDEO);
    video.size(400, 350);
    video.hide();
    poseNet = ml5.poseNet(video, modelLoaded);
    poseNet.on('pose',gotPoses);
}



function TakeSnap(){
    save("Picture.png");
}

function modelLoaded(){
    console.log("PoseNet is Initialized")
}

function gotPoses(results){
    if(results.length > 0){
        NoseX = results[0].pose.nose.x-15;
        NoseY = results[0].pose.nose.y-15;
        console.log("nose x = " + results[0].pose.nose.x);
        console.log("nose y = " + results[0].pose.nose.y);
        
    }
}

function draw(){
    image(video, 0, 0, 400, 350);
    image(CloneNose,NoseX, NoseY, 50, 30);
}