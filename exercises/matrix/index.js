// --- Directions
// Write a function that accepts an integer N
// and returns a NxN spiral matrix.
// --- Examples
//   matrix(2)
//     [[1, 2],
//     [4, 3]]
//   matrix(3)
//     [[1, 2, 3],
//     [8, 9, 4],
//     [7, 6, 5]]
//  matrix(4)
//     [[1,   2,  3, 4],
//     [12, 13, 14, 5],
//     [11, 16, 15, 6],
//     [10,  9,  8, 7]]


const incRowRight = (matrix, row, initCol, endCol) => {
    for (let col = initCol; col <= endCol;  col++){
        ++counter
        matrix[row][col] = counter
    }
    return matrix
}

const decRowLeft = (matrix, row, initCol, endCol) => {
    for (let col = endCol; col >= initCol;  col--){
        ++counter
        matrix[row][col] = counter
    }
    return matrix
}


const incColDown = (matrix, col, initRow, endRow) => {
    for (let row = initRow; row <= endRow; row++){
        ++counter
        matrix[row][col] = counter
    }
        return matrix
    }

const incColUp = (matrix,col, endRow ,initRow) => {
    for (let row = endRow; row >= initRow; row--){
        ++counter
        matrix[row][col] = counter
    }
    return matrix
}

const matrix = n => {
    counter = 0
    let matrix = []
    let i = 0

    while (i < n){
       matrix.push(Array(n).fill(0))
       i++
    }

    let startCol = 0
    let endCol = n - 1
    let startRow = 0
    let endRow = n - 1

    while (startCol <= endCol && startRow <= endRow){
        matrix = incRowRight(matrix, startRow, startCol, endCol)
        startRow++

        matrix = incColDown(matrix, endCol, startRow, endRow)
        endCol--

        matrix = decRowLeft(matrix,endRow, startCol, endCol)
        endRow--

        matrix = incColUp(matrix, startCol, endRow, startRow)
        startCol++
    }

    return matrix
}

module.exports = matrix;
