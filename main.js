noseX=0;
noseY=0;

function preload(){

}

function setup(){
canvas=createCanvas(300,300);
canvas.center();
video=createCapture(VIDEO);
video.size(300,300);
video.hide();
posenet=ml5.poseNet(video,modelloaded);
posenet.on("pose",gotPoses)
}

function gotPoses(result){
    if (result.length>0) {
        console.log(result);
        noseX=result[0].pose.nose.x;
        noseY=result[0].pose.nose.y;
        console.log("nose x = "+result[0].pose.nose.x);
        console.log("nose y = "+result[0].pose.nose.y);
    }
}

function modelloaded(){
    console.log("posenet is initialized");
}

function draw(){
image(video,0,0,300,300);
fill(255,0,0);
stroke(155,0,0);
circle(noseX,noseY,20);

}

function take_snapshot(){
    save("myfilterimg.png");
}