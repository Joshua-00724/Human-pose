let webcam;
let humanpose;
let noseX,noseY;
let singlePose, skeleton;
let eyerX,eyerY,eyelX,eyelY;

function setup()
{
    createCanvas(640, 480);
   // curr_img = loadImage('images/checkman.jpg');
    webcam = createCapture(VIDEO)
    webcam.hide();

    humanpose = ml5.poseNet(webcam, loadmodel);
    humanpose.on('pose', recPoses);
}

function recPoses(poses)
{
    console.log(poses);

    if(poses.length > 0)
    {
        // singlePose = poses[0];
        // noseX = singlePose.pose.nose.x;
        // noseY = singlePose.pose.nose.y;

        // eyerX = singlePose.pose.rightEye.x;
        // eyerY = singlePose.pose.rightEye.y;

        // eyelX = singlePose.pose.leftEye.x;
        // eyelY = singlePose.pose.leftEye.y;

        singlePose = poses[0].pose;
        skeleton = poses[0].skeleton;
        
    }
    console.log(noseX + " " + noseY);
}

function loadmodel()
{
    console.log('The model has been loaded');
}

function draw()
{
// rect(mouseX, mouseY, 50, 50);
//     // constrain the x position of the rectangle to be within the canvas
// mouseX = constrain(mouseX, 0, width - 50);
//     // constrain the y position of the rectangle to be within the canvas
// mouseY = constrain(mouseY, 0, height - 50);
image(webcam, 0, 0);
fill(0,255,0);
//ellipse(noseX, noseY, 30);
// ellipse(eyerX, eyerY, 30);
// ellipse(eyelX, eyelY, 30);

if(singlePose)
{
for(let i=0; i<singlePose.keypoints.length; i++)
{
    ellipse(singlePose.keypoints[i].position.x,singlePose.keypoints[i].position.y,20);
}
stroke(255,0,0);
strokeWeight(3);
for(let j=0; j<skeleton.length; j++)
{
    line(skeleton[j][0].position.x, skeleton[j][0].position.y, skeleton[j][1].position.x, skeleton[j][1].position.y)
}
}
}