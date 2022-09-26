function setup()
{
    video = createCapture(VIDEO)
    video.size(550,550)
    canvas = createCanvas(550,550)
    canvas.position(750,160)
    poseNet = ml5.poseNet(video, modelLoaded)
    poseNet.on("pose", gotResults)
}
function modelLoaded()
{
    console.log("Model Loaded Successfully")
}
function draw()
{
    background ("#000000")
}
function gotResults(results)
{
    if(results.length > 0)
    {
        console.log(results);
    }
}