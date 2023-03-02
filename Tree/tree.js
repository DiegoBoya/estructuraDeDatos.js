class Node {
    constructor(value) {
        this.right = null;
        this.left = null;
        this.value = value;
    }
}

class BinarySearchTree {
    constructor() {
        this.root = null;
    }

    insert(value) {
        const newNode = new Node(value);
        if (this.root == null) {
            this.root = newNode;
        } else if (this.root.value == value) {
            return "el nodo " + value + " ya fue ingresado en el arbol";
        } else {

            // validamos si el nodo nuevo es left o righ
            let currentNode = this.root;

            while (true) {


                // si es menor va a la izq
                if (value < currentNode.value) {
                    // si no existe un nodo left
                    if (!currentNode.left) {
                        currentNode.left = newNode;
                        return this; // retorna el tree
                    }
                    // existe un nodo a la izq, tenemos que reacomodar
                    /*lo de la izq es el left del root, y pisa a lo que tenia antes, que era el root
                    va bajando en la estructura para poder recorrerla */
                    currentNode = currentNode.left;

                } else if (value > currentNode.value) {
                    // es mayor, va a la derecha
                    if (!currentNode.right) {
                        currentNode.right = newNode;
                        return this;
                    }
                    // else ... exsiste nodo
                    /*tenemos que volver a iterar, en la 
                    proxima validacion se comopara todo contra lo que es currentNode.right*/
                    currentNode = currentNode.right;
                } else {
                    // si no es mayor ni es menor, es que es igual
                    return "el nodo " + value + " ya fue ingresado en el arbol";
                }
            }

            // vuelve al while !
        }

    }

    // Buesca el valor y devuelve toda su ramificacion
    search(value) {
        let firstNode = this.root;
        while (true) {
            if (firstNode === null) {
                return "No esta en el arbol";
            }
            if (value === firstNode.value) {
                return firstNode;
            } else if (value < firstNode.value) {
                firstNode = firstNode.left;
            } else {
                firstNode = firstNode.right;
            }
        }
    }

    // utiliza recursividad
    search2(value, tree = this.root) {

        if (tree == null) {
            return "El elemento no se encuentra.";
        }
        else if(value > tree.value) {
            return this.search(value, tree.right);
        }
        else if(value < tree.value) {
            return this.search(value, tree.left);
        } else {
            return "¡El elemento ha sido encontrado!";
        }
    }
}



const tree = new BinarySearchTree();
tree.insert(10);
tree.insert(4);
tree.insert(17);
tree.insert(44);
tree.insert(1);
tree.insert(1); // no lo puede agregar
tree.insert(10); // no lo puede agregar
console.log('------------');
const nodo = tree.search2(14);
console.log(nodo);
console.log('------------');
const nodo1 = tree.search2(17);
console.log(nodo1);
console.log('------------');
const nodo2 = tree.search2(1);
console.log(nodo2);