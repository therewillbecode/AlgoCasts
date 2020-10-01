// --- Directions
// Implement a Queue datastructure using two stacks.
// *Do not* create an array inside of the 'Queue' class.
// Queue should implement the methods 'add', 'remove', and 'peek'.
// For a reminder on what each method does, look back
// at the Queue exercise.
// --- Examples
//     const q = new Queue();
//     q.add(1);
//     q.add(2);
//     q.peek();  // returns 1
//     q.remove(); // returns 1
//     q.remove(); // returns 2

const Stack = require('./stack');



class Queue {
    constructor() {
        this.stackA = new Stack()
        this.stackB = new Stack()
        this.nextOp = 'A'

        // this.lastPushed = this.stackA
        // this.lastPopped = this.stackB

    }

    getNextStack() {
        if (this.nextOp === 'A') {
            console.log('b')
            this.nextOp = 'B'
        } else {
            console.log('a')
            this.nextOp = 'A'
        }
    }

    moveToOtherStack(source, dest) {
        while (source.peek()) {
            dest.push(source.pop())
        }
    }

    add(a) {
        const last = this.nextOp === 'A' ? this.stackB : this.stackA
        const nex = this.nextOp === 'A' ? this.stackA : this.stackB
        this.moveToOtherStack(nex, last )
        nex.push(a)
        this.getNextStack()
    }

    remove() {
        const nex = this.nextOp === 'A' ? this.stackA : this.stackB 
        const popped = nex.pop()
        const last = this.nextOp === 'A' ? this.stackB : this.stackA
        if(!popped) return last.pop()
        // this.getNextStack()
        return popped
    }

    peek() {
        console.log(this.nextOp)

        const nex = this.nextOp === 'A' ? this.stackA : this.stackB 
        return nex.data[nex.data.length - 1]
    }
}

module.exports = Queue;
