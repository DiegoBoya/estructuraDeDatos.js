/*1-- > 2-- > 3-- > 4-- > 5-- > null;

let singlyLinkedList = {
  head: {
    value: 1,
    next: {
      value: 2,
      next: {
        value: 3,
        next: {
          value: 4,
          next: null,
        },
      },
    },
  },
};*/

class Node {
    constructor(value) {
        this.value = value;
        this.next = null;
    }
}

class MySinglyLinkedList {
    constructor(value) {
        this.head = {
            value: value,
            next: null,
        };
        this.tail = this.head;

        this.length = 1;
    }

    /* agrega un nodo al final */
    append(value) {
        const newNode = new Node(value);
        
        // agregamos el nodo a la lista
        this.tail.next = newNode;
        // hacemos que el nuevo nodo sea el ultimo nodo
        this.tail = newNode;
        this.length++;

        return this;
    }

    /* agrega un nodo al inicio */
    prepend(value) {
        const newNode = new Node(value);

        // agregamos el nodo a la lista
        newNode.next = this.head;
        // hacemos que el nuevo nodo sea el primer nodo
        this.head = newNode;
        this.length++;

        return this;
    }
}

let myLinkedList = new MySinglyLinkedList(1);
myLinkedList.append(2);
myLinkedList.append(3);
myLinkedList.append(4);
myLinkedList.prepend(0);
console.log(myLinkedList)