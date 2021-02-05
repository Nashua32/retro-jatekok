let px
let py
let caneatghosts = 25
let dir = 'r'
let size
let score
let ghosts = [{colour: '#fb0000', x:12, y: 14, dir: 1, initx: 12, inity: 14, eaten: false},
             {colour: '#ee80c2', x:13, y: 14, dir: 1, initx: 13, inity: 14, eaten: false},
             {colour: '#0fa4d7', x:14, y: 14, dir: 1, initx: 14, inity: 14, eaten: false},
             {colour: '#dc9b00', x:15, y: 14, dir: 1, initx: 15, inity: 14, eaten: false}]

function setup() {
  createCanvas(min(windowWidth, windowHeight)-20, min(windowWidth, windowHeight)-20)
  px = 14
  py = 17
  frameRate(6)
  size = width/28
  score = 0
}

function draw() {
  if (caneatghosts < 25) {
    caneatghosts ++
  }
  else {
    for (let i=0; i<4; i++) {
      ghosts[i].eaten = false
    }
  }
  background(0);
  drawmap();
  switch(dir) {
    case 'u':
      if (mapp[py-1][px] != 1) {
        py --
      }
      break
    case 'd':
      if (mapp[py+1][px] != 1) {
        py ++
      }
      break
    case 'l':
      if (mapp[py][px-1]!=1) {
        px --
      }
      break
    case 'r':
      if (mapp[py][px+1]!=1) {
        px++
      }
      break
  }
      
  if (py===13) {
    switch (px) {
      case 28:
        px = 0
        break
      case -1:
        px = 27
        break
    }
  }
  
  fill('#daf900')
  circle((px+0.5)*size, (py+0.5)*size, size-2)
    
  if (mapp[py][px] === 0) {
    mapp[py][px] = 4
    score ++
  }
  if (mapp[py][px] === 3) {
    mapp[py][px] = 4
    score += 5
    caneatghosts = 0
  }
    
  moveghosts()
  for (let i=0; i<4; i++) {
    if ([19,21,23,25].includes(caneatghosts)) {
      fill(ghosts[i].colour)
    }
    else {
      fill("#6300ff")
    }
    circle((ghosts[i].x+0.5)*size, (ghosts[i].y+0.5)*size, size-2)
  }
    
  if (score === 254) {
    win()
  }
}

function keyPressed() {
  switch(keyCode) {
    case UP_ARROW:
      dir ='u'
      break
    case DOWN_ARROW:
      dir ='d'
      break
    case LEFT_ARROW:
      dir ='l'
      break
    case RIGHT_ARROW:
      dir ='r'
      break
  }
}
  
function win() {
  noLoop()
  textAlign(CENTER, CENTER)
  textSize(width/30)
  fill("#ffffff")
  text(`You won!`, width/2, width/2)
}  

function collision(g) {
  if (caneatghosts < 25) {
    g.eaten = true
    g.x = g.initx
    g.y = g.inity
  }
  else {
    death()
  }
}
  
function death() {
  noLoop()
  textAlign(CENTER,CENTER)
  textSize(width/30)
  fill('#ffffff')
  text(`You died! Your score was: ${score}`, width/2, width/2)
}
