class Node {
    constructor(value) {
        this.value = value;
        this.prev = null;
    }
}

class Stack {
    constructor() {
        this.top = null; // last in
        this.bottom = null; // First in
        this.length = 0;
    }

    peek() {
        if (this.length == 0) {
            console.error('el stack esta vacio');
            return undefined;
        }
        return this.top;
    }

    push(value) {
        const newNode = new Node(value);

        if (this.length == 0) {
            this.bottom = newNode;
            this.top = newNode;
        } else {
            const anterior = this.top;
            this.top = newNode;
            this.top.prev = anterior;
        }

        this.length++;
        return this;
    }

    pop() {
        if (this.length == 0) {
            console.error('el stack esta vacio');
            return undefined;
        }

        const nodeToRemove = this.top;
        delete this.top;
        this.top = nodeToRemove.prev;
        
        this.length--;
        
        if (this.length == 0){
            this.bottom = null;
        }

        return nodeToRemove;
    }
}

const myStack = new Stack();
myStack.push({ name: 'Diego', profession: 'dev', age: 30 })
myStack.push({ name: 'Belu', profession: 'recruter', age: 29 })
myStack.push({ name: 'Cris', profession: 'barber', age: 27 })
let removed = myStack.pop(); // cris
let removed2 = myStack.pop(); // belu
let removed3 = myStack.pop(); // Diego
let removed4 = myStack.pop(); // undefined