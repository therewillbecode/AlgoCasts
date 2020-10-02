// --- Directions
// Implement classes Node and Linked Lists
// See 'directions' document

class Node {
    constructor(data, next = null){
        this.data = data
        this.next = next
    }
}

class LinkedList {
    constructor() {
        this.head = null
    }

    insertFirst (data) {
        this.head = new Node(data, this.head)
    }

    size () {
        let counter = 0

        while (this.head) {
           this.head = this.head.next
           counter++
        }

        return counter
    }
}

const list = new LinkedList()

module.exports = { Node, LinkedList };
