function move(g) {
  if (!g.eaten) {
    if (mapp[g.y][g.x] === 2) {
      if (g.x < 13) {
        g.x ++
      }
      else if (g.x > 14) {
        g.x --
      }
      else {
        g.y --
      }
    }

    else {
      possdir = []
      if (mapp[g.y][g.x+1] !==1 && mapp[g.y][g.x+1] !==2 && g.dir !==2) {
        possdir.push(2)
      }
      if (mapp[g.y][g.x-1] !==1 && mapp[g.y][g.x-1] !==2 && g.dir !==-2) {
        possdir.push(-2)
      }
      if (mapp[g.y+1][g.x] !==1 && mapp[g.y+1][g.x] !==2 && g.dir !==-1) {
        possdir.push(-1)
      }
      if (mapp[g.y-1][g.x] !==1 && mapp[g.y-1][g.x] !==2 && g.dir !==1) {
        possdir.push(1)
      }

      if (possdir.length > 1) {
        g.dir = possdir[Math.floor(Math.random() * possdir.length)]
      }
      if (px === g.x && py ===g.y) {
        collision(g)
      }
      switch(g.dir) {
        case 1:
          g.y --
          break
        case -1:
          g.y ++
          break
        case 2:
          g.x++
          break
        case -2:
          g.x--
          break
      }
      if (px === g.x && py ===g.y) {
        collision(g)
      }
    }
  }
  return g
}
  
function moveghosts() {
  for (let i=0; i<4; i++) {
    ghosts[i] = move(ghosts[i])
  }
  for (let i=0; i<3; i++) {
    for (let j=i+1; j<4; j++) {
      if (ghosts[i].x == ghosts[j].x && ghosts[i].y == ghosts[j].y) {
        ghosts[i].dir = -ghosts[i].dir
        switch (ghosts[i].dir) {
          case 1:
            ghosts[i].y -=2
            break;
          case -1:
            ghosts[i].y +=2
            break;
          case 2:
            ghosts[i].x += 2
            break;
          case -2:
            ghosts[i].x -= 2
            break;
        }
        if (px === ghosts[i].x && py ===ghosts[i].y) {
          collision(ghosts[i])
        }
        ghosts[j].dir = - ghosts[j].dir
        switch (ghosts[j].dir) {
          case 1:
            ghosts[j].y -=2
            break;
          case -1:
            ghosts[j].y +=2
            break;
          case 2:
            ghosts[j].x += 2
            break;
          case -2:
            ghosts[j].x -= 2
            break;
        }
        if (px === ghosts[j].x && py ===ghosts[j].y) {
          collision(ghosts[j])
        }
      }
    }
  }
}