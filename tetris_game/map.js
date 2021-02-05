//12*21-es a pálya

let field = [
      [1,0,0,0,0,0,0,0,0,0,0,1],
      [1,0,0,0,0,0,0,0,0,0,0,1],
      [1,0,0,0,0,0,0,0,0,0,0,1],
      [1,0,0,0,0,0,0,0,0,0,0,1],
      [1,0,0,0,0,0,0,0,0,0,0,1],
      [1,0,0,0,0,0,0,0,0,0,0,1],
      [1,0,0,0,0,0,0,0,0,0,0,1],
      [1,0,0,0,0,0,0,0,0,0,0,1],
      [1,0,0,0,0,0,0,0,0,0,0,1],
      [1,0,0,0,0,0,0,0,0,0,0,1],
      [1,0,0,0,0,0,0,0,0,0,0,1],
      [1,0,0,0,0,0,0,0,0,0,0,1],
      [1,0,0,0,0,0,0,0,0,0,0,1],
      [1,0,0,0,0,0,0,0,0,0,0,1],
      [1,0,0,0,0,0,0,0,0,0,0,1],
      [1,0,0,0,0,0,0,0,0,0,0,1],
      [1,0,0,0,0,0,0,0,0,0,0,1],
      [1,0,0,0,0,0,0,0,0,0,0,1],
      [1,0,0,0,0,0,0,0,0,0,0,1],
      [1,0,0,0,0,0,0,0,0,0,0,1],
      [1,1,1,1,1,1,1,1,1,1,1,1],
      [1,1,1,1,1,1,1,1,1,1,1,1]
      ]

/*0: üres
1: fal
a: elso
b:masodik
c:harmadik
d: negyedik
e:otodik
f:hatodik
g:hetedik
*/

function drawfield() {
  let size = width/12
  for (let i =0; i<21; i++) {
    for (let j=0; j<12; j++) {
      switch (field[i][j]) {
        case 1:
          fill('#939393')
          rect(j*size, i*size, size, size)
          break
        case 'a':
          fill('#daf900')
          rect(j*size, i*size, size, size)
          break
        case 'b':
          fill('#4300b0')
          rect(j*size, i*size, size, size)
          break
        case 'c':
          fill('#00ffff')
          rect(j*size, i*size, size, size)
          break
        case 'd':
          fill('#fb0000')
          rect(j*size, i*size, size, size)
          break
        case 'e':
          fill('#00ff00')
          rect(j*size, i*size, size, size)
          break
        case 'f':
          fill('#ff7900')
          rect(j*size, i*size, size, size)
          break
        case 'g':
          fill('#df00ce')
          rect(j*size, i*size, size, size)
          break
        default:
          break
      }
    }
  }
}
  
function checkForRow() {
  for (let i=0; i<20; i++) {
    let full = true
    for (let j=1; j<11; j++) {
      if(field[i][j] === 0) {
        full = false
      }
    }
    if (full) {
      for (let k=i; k>0; k--) {
        for (let j=1; j<11; j++) {
          field[k][j] = field[k-1][j]
        }
      }
      score++
    }
  }
}