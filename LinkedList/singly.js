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

    // saca un nodo, y reacomoda todo para que quede bien
    remove(index){
        if (index < 0 || index > this.length){
            throw Error('error al remover elemento, revisr el index solicitado');
        }
        
        const nodoAnterior = this.searchIndex(index -1);
        const nodoRemovido = nodoAnterior.next;
        const nodoPosterior = nodoRemovido.next;
        nodoAnterior.next = nodoPosterior;
        this.length--;
        
        console.log('el nodo removido es: ' + nodoRemovido.value);
        // para que el elemento retornado no tenga referencias a nodos
        nodoRemovido.next = null; 
        return nodoRemovido;
    }

    /* agrega un nodo en una posicion especifica*/
    insert(index, value){
        // si el index pasado es mayor a la lognitud de la lista se agrega al final
        if (index >= this.length){
            return this.append(value);
        }

        // si el index es 0, agrega el nodo al inicio
        if (index === 0){
            return this.prepend(value);
        }

        const newNode = new Node(value);
        // busca el nodo anterior al solicitado
        const nodoAnterior = this.searchIndex(index - 1);
        const nodoPosterior = nodoAnterior.next;
        nodoAnterior.next = newNode;
        newNode.next = nodoPosterior;
        this.length++;
        return this;
    }

    /* busca el nodo segun el index */
    searchIndex(index){
        let counter = 0;
        let currentNode = this.head;

        while(counter !== index){
            currentNode = currentNode.next;
            counter++;
        }
        return currentNode;
    }
}

let myLinkedList = new MySinglyLinkedList(1);
myLinkedList.append(2);
myLinkedList.append(3);
myLinkedList.append(4);
myLinkedList.prepend(0);
myLinkedList.insert(4, 3.5);
console.log(myLinkedList)
let removido = myLinkedList.remove(4);
console.log(removido);