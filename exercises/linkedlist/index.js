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

    getFirst () {
       return this.head
    }

    getLast () {
        if (!this.head) return null

        while (this.head) {
            if (this.head.next === null) {
                return this.head
            }
            this.head = this.head.next
        }

    }

    clear () {
       this.head = null
    }


    removeFirst () {
        if (!this.head) {
            return;
        }
        this.head = this.head.next
    }

    removeLast {
        
    }
}

const list = new LinkedList()

module.exports = { Node, LinkedList };
