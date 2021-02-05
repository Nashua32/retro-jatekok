let direction = 'right'
let length = 2
let snake = []
const grids = 30
let eaten = true
let coords

function setup() {
  createCanvas(min(windowWidth,windowHeight)-30,min(windowWidth,windowHeight)-30)
  snake.push({
    x: floor(grids / 2),
    y: floor(grids / 2)
  })
  snake.push({
    x: floor(grids / 2),
    y: floor(grids / 2) + 1
  })
  coords = addFruit()
  frameRate(6)
}

function addFruit() {
  let c = {x: floor(random(grids)), y: floor(random(grids))}
  for (let i=0; i<snake.length; i++) {
    if (c.x == snake[i].x && c.y == snake[i].y) {
      addFruit()
    }
  }
  return c
}

function draw() {
  let size = width/grids
  background(250,250,150)
  let head = {
    x: snake[0].x,
    y: snake[0].y
  }
  switch (direction) {
    case 'right':
      head.x++
      break
    case 'left':
      head.x--
      break
    case 'up':
      head.y--
      break
    case 'down':
      head.y++
      break
  }
      
  for (let i=0; i<snake.length; i++) {
    if (coords.x == snake[i].x && coords.y == snake[i].y) {
      eaten = true
      length++
    }
  }
      
  if (eaten){
    coords = addFruit()
    eaten = false
  }
  stroke(120,0,0)
  strokeWeight(2)
  fill("red")
  rect(coords.x*size, coords.y*size, size, size)
      
  snake.unshift(head)
  while (snake.length > length) {
    snake.pop()
  }
  
  if (head.x < 0 || head.x >= grids || head.y < 0 || head.y >= grids) {
    dead()
  }
  for (let i=1; i<snake.length; i++) {
    if (snake[0].x == snake[i].x && snake[0].y == snake[i].y)
      dead()
  }
    
  noStroke()
  fill (0,80,40)
  rect(head.x*size, head.y*size, size, size)
  for (let i=1; i<snake.length; i++) {
    fill(0,200,100)
    rect(snake[i].x*size, snake[i].y*size, size, size)
  }
}

function dead() {
  noLoop()
  noStroke()
  rectMode(CENTER)
  textSize(width/30)
  textAlign(CENTER, CENTER)
  fill(0,0,0)
  text(`You died! Your score was: ${length-2}`, width/2, width/2, width-200, height-200)
}

function keyPressed() { 
  switch (keyCode) {
    case UP_ARROW:
      if (direction != 'down') {
        direction = 'up'
      }
      break
    case DOWN_ARROW:
      if (direction != 'up') {
        direction = 'down'
      }
      break
    case RIGHT_ARROW:
      if (direction != 'left') {
        direction = 'right'
      }
      break
    case LEFT_ARROW:
      if (direction != 'right') {
        direction = 'left'
      }
      break
  }
}
      