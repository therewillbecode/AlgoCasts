// --- Directions
// Given the root node of a tree, return
// an array where each element is the width
// of the tree at each level.
// --- Example
// Given:
//     0
//   / |  \
// 1   2   3
// |       |
// 4       5
// Answer: [1, 3, 2]

const levelWidth = root => {
    if(!root) return []
    let widths = [0]
    let q = [root, 'A']

    while(q.length > 1) {
        let [head, ...tail] = q

        q = tail.concat(head.children)

        if(head==='A') {
            q = tail.concat(head)
            widths.push(0)
        }
        else {
            widths[widths.length -1] += 1
        }
    }
    return widths

}

module.exports = levelWidth;
