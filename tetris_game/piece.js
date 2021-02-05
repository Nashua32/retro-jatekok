const shapes = [[[5,6,5,6], [0,0,1,1]],
          [[5,6,7,7], [0,0,0,1]],
          [[4,5,6,7], [0,0,0,0]],
          [[5,6,6,7], [0,0,1,1]],
          [[6,7,5,6], [0,0,1,1]],
          [[5,6,7,5], [0,0,0,1]],
          [[5,6,7,6], [0,0,0,1]]
         ]
const colours = ['#daf900', '#4300b0', '#00ffff', '#fb0000', '#00ff00', '#ff7900', '#df00ce']
const ids = ['a','b','c','d','e','f', 'g']
const fixPoint = [0,1,1,1,0,1,1]

class piece {
  constructor (xcoords, ycoords, colour, id, fix, active) {
    this.xcoords = xcoords
    this.ycoords = ycoords
    this.colour = colour
    this.id = id
    this.fix= fix
    this.active = active
  }
  
  rotate() {
    let rxcoords = []
    let rycoords = []
    let temp
    let canRot = true
    for (let i=0; i<this.xcoords.length; i++) {
      rxcoords.push(this.xcoords[i]-this.xcoords[this.fix])
      rycoords.push(this.ycoords[i]-this.ycoords[this.fix])
    }
    for (let i=0; i<rxcoords.length; i++) {
      temp = rxcoords[i]
      rxcoords[i] = -rycoords[i]
      rycoords[i] = temp
    }
    for (let i=0; i<this.xcoords.length; i++) {
      if (field[this.ycoords[this.fix]+rycoords[i]][this.xcoords[this.fix]+rxcoords[i]] !== 0) {
        canRot = false
      }
    }
    for (let i=0; i<this.xcoords.length; i++) {
      if (canRot){
        this.xcoords[i] = this.xcoords[this.fix]+rxcoords[i]
        this.ycoords[i] = this.ycoords[this.fix]+rycoords[i]
      }
    }
    rotating = false
  }
  
  applyGrav () {
    for (let i=0; i<this.xcoords.length; i++) {
      if (field[this.ycoords[i]+1][this.xcoords[i]] !==0 ) {
        this.active = false
        moving = false
      }
    }
    if (this.active) {
      for (let i=0; i<this.ycoords.length; i++) {
        this.ycoords[i] ++
      }
    }
    else {
      for (let i=0; i<this.xcoords.length; i++) {
        field[this.ycoords[i]][this.xcoords[i]]=this.id
      }
    }
  }
  
  move() {
    let canMove = true
    switch (dir) {
      default:
        break
      case ('right'):
        if (this.active) {
          for (let i=0; i<this.xcoords.length; i++) {
            if (field[this.ycoords[i]][this.xcoords[i]+1] !== 0) {
              canMove = false
            }
          }
          if (canMove) {
            for (let i=0; i<this.ycoords.length; i++) {
              this.xcoords[i] ++
            }
          }
          dir = 'none'
        }
        break
      case('left'):
        if (this.active) {
          for (let i=0; i<this.xcoords.length; i++) {
            if (field[this.ycoords[i]][this.xcoords[i]-1] !== 0) {
              canMove = false
            }
          }
          if (canMove) {
            for (let i=0; i<this.xcoords.length; i++) {
              this.xcoords[i] --
            }
          }
          dir = 'none'
        }
        break
    }
  }
}

