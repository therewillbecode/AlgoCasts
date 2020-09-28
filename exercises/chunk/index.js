// --- Directions
// Given an array and chunk size, divide the array into many subarrays
// where each subarray is of length size
// --- Examples
// chunk([1, 2, 3, 4], 2) --> [[ 1, 2], [3, 4]]
// chunk([1, 2, 3, 4, 5], 2) --> [[ 1, 2], [3, 4], [5]]
// chunk([1, 2, 3, 4, 5, 6, 7, 8], 3) --> [[ 1, 2, 3], [4, 5, 6], [7, 8]]
// chunk([1, 2, 3, 4, 5], 4) --> [[ 1, 2, 3, 4], [5]]
// chunk([1, 2, 3, 4, 5], 10) --> [[ 1, 2, 3, 4, 5]]

function chunk(arr, size) {
    if (arr === []) return arr

    let c = 0
    const s = arr.reduce(
        (acc, n, i) => {
            if(!acc[c]){
                acc[c] = []
            }
            if (acc[c].length === size) {
                c += 1
                acc[c] = []
                acc[c].push(n)
            } else {
                acc[c].push(n)
            }
            return acc
        }
        , [])

    return s
}

module.exports = chunk;
