// --- Directions
// Write a function that accepts a positive number N.
// The function should console log a step shape
// with N levels using the # character.  Make sure the
// step has spaces on the right hand side!
// --- Examples
//   steps(2)
//       '# '
//       '##'
//   steps(3)
//       '#  '
//       '## '
//       '###'
//   steps(4)
//       '#   '
//       '##  '
//       '### '
//       '####'

const steps = n => {
    let arr = []

    for (let i =0; i < n; i++){
        let step = ''

        for (let k = 0; k < n; k++){
            const l = i >= k  ? '#' : ' '
            step += l
        }
        console.log(step)
    }
}


module.exports = steps;
