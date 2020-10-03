// --- Directions
// Given a node, validate the binary search tree,
// ensuring that every node's left hand child is
// less than the parent node's value, and that
// every node's right hand child is greater than
// the parent

const validate = (node, min = null, max = null) => {
    // if(node.right && node.right.data < min) return false
    // if(node.left && node.left.data > max) return false

    if(max !== null && node.data > max) {
        return false
    }


    if(min !== null && node.data < min) {
        return false
    }

    if(node.val < min || node.val > max) return false


    if (node.left && node.right) {
        return validate(node.left, min, node.data) && validate(node.right, node.data, max)
    }
    else if(node.left) {
        return validate(node.left, min, node.data)
    }
    else if(node.right) {
        return validate(node.right, node.data, max)
    }

    return true
}

module.exports = validate;
