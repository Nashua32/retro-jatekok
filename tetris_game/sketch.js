let size
let score
let moving
let currentPiece
let numb
let dir = 'none'
let rotating = false
let timer = 0
let speed = 3

/*alert("búúúúúúúúúúúúúúúúúúúúúúúúúúúúúúúúúúúúúúúúúúúúúúúúúúúúúúúúúúúúúúúúúúúúúúúúúúúúúúúúúúúúúúúúúúúúúúúúúúúúúúúúúúúúúúúúúúúúúúúúúúúúúúúúúúúúúúúúúúúúúúúúúúúúúúúúú")*/
function setup() {
  createCanvas(min(windowWidth, windowHeight)*48/100, min(windowWidth, windowHeight)*84/100)
  frameRate(3)
  size = width/12
  score = 0
  moving = false
  timer = 0
}

function draw() {
  timer++
  if (timer%100 === 0) {
    speed++
  }
  frameRate(speed)
  background(0)
  if (!moving) {
    numb = Math.floor(Math.random()*7)
    currentPiece = new piece(shapes[numb][0].slice(0), shapes[numb][1].slice(0), colours[numb], ids[numb], fixPoint[numb], true)
    moving = true
  }
  drawfield()
  if (rotating) {
    currentPiece.rotate()
  }
  currentPiece.move()
  currentPiece.applyGrav()
  checkForRow()
  fill(currentPiece.colour)
  for (let i=0; i<currentPiece.xcoords.length; i++) {
    rect(currentPiece.xcoords[i]*size, currentPiece.ycoords[i]*size, size, size)
  }
  for (let i=1; i<11; i++) {
    if (field[0][i] !== 0) {
      death()
    }
  }
}

function keyPressed() {
  switch(keyCode) {
    case LEFT_ARROW:
      dir ='left'
      break
    case RIGHT_ARROW:
      dir ='right'
      break
    case UP_ARROW:
      rotating = true
      break
  }
}
  
function death() {
  noLoop()
  textAlign(CENTER,CENTER)
  textSize(width/20)
  fill('#ffffff')
  text(`You died! Your score was: ${score}`, width/2, width/2)
}
