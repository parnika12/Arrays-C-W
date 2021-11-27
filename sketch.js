var weights = [35,38,42,45,63,77,106,84];

var sum = 0;

function setup() 
{
  createCanvas(400,400);

  for(var w = 0; w < weights.length; w = w + 1){
    sum = sum + weights[w];

  }
  var avg = sum/weights.length;
  console.log(avg);

}

function draw() 
{
  background(30);
}

 

