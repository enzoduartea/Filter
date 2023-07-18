function preload()
{

}
function stepUp()
{
   canvas = createCanvas(640, 480);
   canvas.position(110, 250);
   video = createCapture(VIDEO);
   video.hide();
   tint_color = "";
}
function draw() { image(VIDEO, 0, 0, 640, 480); tint(tint_color); }

function take_Snapshot()
{
 save('student_name.png');
}
function filter_tint()
{
  tint_color = document.getElementById("color_name").value;
}