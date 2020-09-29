// --- Directions
// Write a function that accepts a positive number N.
// The function should console log a pyramid shape
// with N levels using the # character.  Make sure the
// pyramid has spaces on both the left *and* right hand sides
// --- Examples
//   pyramid(1)
//       '#'
//   pyramid(2)
//       ' # '
//       '###'
//   pyramid(3)
//       '  #  '
//       ' ### '
//       '#####'

const pyramid = (n) => {
    for(let row = 0; row < n; row++){
        let stairs = ''
        for (let col =1; col <= (2*n)-1; col++){
            if (col === n) {
                stairs += '#'
            }
            else if (
                Math.abs(n - col ) > row
            ){
                stairs += ' '
            }

            else {
                stairs += '#'
            }
        }
        console.log(stairs)

    }
}


module.exports = pyramid;
