class Node {
    constructor(value) {
        this.value = value;
        this.next = null
       // this.prev = null;
    }
}

class Queue {
    constructor() {
        this.length = 0;
        this.first = null;
        this.last=null;
    }

    /* add */
    enqueue(value){
        const newNode = new Node(value);

        if (this.length == 0){
            this.first = newNode;
            this.last = newNode;
        } else {
            //const anteUltimo = this.last;
            this.last.next = newNode;
            this.last = newNode;
            newNode.next = null;
        }
        
        this.length++;
        return this;
    }

    /* remove the first */
    dequeue(){
        if (!this.length){
            console.error('The queue is empty!');
            return undefined;
        }

        // si no esta vacio es que hay nodos.
        let nodeToRemove = this.first;
        if (this.length == 1){
            this.last = null;
            this.first = null;
        } else {
            this.first = nodeToRemove.next;
        }
        
        this.length--;
        return nodeToRemove;
    }

    /* return the first element*/
    peek(){
        return this.first;
    }
}

const myQueue = new Queue();
myQueue.enqueue(1);
myQueue.enqueue(2);
myQueue.enqueue(3);
myQueue.enqueue(4);
myQueue.enqueue(5);
console.log(myQueue);
