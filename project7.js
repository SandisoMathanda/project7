var screen = document.getElementById("screen")
var namespace = "http://www.w3.org/2000/svg"
var canvas = document.getElementById("screen")
var mousepress = false

// utility function
function transformPoint(event) {
  var pt = screen.createSVGPoint()
  pt.x = event.x
  pt.y = event.y
  var mousept =  pt.matrixTransform(screen.getScreenCTM().inverse())
  return mousept
}

// Step 2: drawSquare and drawCircle functions
function drawSquare(x, y, number, color) {
  // square drawing code here
var newsquare = document.createElementNS(namespace, "rect")
newsquare.setAttribute("x", x)
newsquare.setAttribute("y", y)
newsquare.setAttribute("width" , number*2)
newsquare.setAttribute("height", number*2)
newsquare.setAttribute("fill", color)
canvas.appendChild(newsquare)
console.log("square")
}

function drawCircle(x, y, number, color) {
  var newcircle = document.createElementNS(namespace, "circle")
  newcircle.setAttribute("cx", x)
  newcircle.setAttribute("cy", y)
  newcircle.setAttribute("r", number)
  newcircle.setAttribute("fill", color)
  canvas.appendChild(newcircle)
console.log("circle")
}

  function drawTriangle(xpos, ypos, number, color) {
    number = Number(number)*2
  var pts = "" + xpos + "," + ypos + " " + (xpos + number) + "," + ypos + " " + (xpos + 0.5*number) + "," + (ypos - number)
  console.log("triangle")
  var newtriangle = document.createElementNS(namespace, "polygon")
  newtriangle.setAttribute("points", pts)
  newtriangle.setAttribute("fill", color)
  canvas.appendChild(newtriangle)
  // your code here:
  // use drawTriangle to draw
  // a Christmas tree!
}

// Step 3: Event listen(ers
document.addEventListener("mousedown", function(e) {
  // what do you want to do when the user presses down
  // on the mouse button?
  mousepress = true
  console.log("mptrue")
})

document.addEventListener("mouseup", function(e) {
mousepress = false
console.log("mpfalse")
})

document.addEventListener("mousemove", function(e) {
  if (mousepress == true) {
  var pt = transformPoint(e)
  var selectShape = document.getElementById("shapeSelect").value
  var selectColor = document.getElementById("colorSelect").value
  var selectSize = document.getElementById("sizeSelect").value
if (selectShape == "circle") {
    drawCircle(pt.x, pt.y, selectSize, selectColor)
  }
  else if (selectShape == "square" ) {
    drawSquare(pt.x, pt.y, selectSize, selectColor)
  }
  else {
    drawTriangle(pt.x, pt.y, selectSize, selectColor)
  }
}})
