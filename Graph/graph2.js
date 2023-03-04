// de otro compa
class NodeGraph {
    constructor(value) {
        this.value = value;
        this.connections = [];
    }
}

class Graph {
    constructor(){
        this.graph = {}; // En el constructor inicializamos el hash table donde van a almacenarse todos los nodos y sus conexiones
        this.length = 0;
    }
    insertNode(value) { // insertNode() nos va a permitir insertar un nodo
        const newNode = new NodeGraph(value); // Crear un nodo y guardarlo
        if (this.graph[value]) return console.error(new Error('Ya existe ese nodo')) // Si ya existe el nodo que se va a añadir, regresa un error
        this.graph[value] = newNode.connections; // La key del graph se va a asignar con el valor pasado en el parametro, y se van a establecer las conexiones como value
        this.length++; // Agregamos el registro
        return this;
    }
    setConnections(node1, [...node2]) { // setConnections() nos va a permitir hacer los Edge de cada uno de los nodos, recibe una array de segundo parametro si se quiere añadir mas de una conexion
        if (!this.graph[node1]) return console.error(new Error('No existe ningun nodo inicial con ese valor')); // Si no existe el nodo pasado por el primer parametro, regresa un error
        let validNodes = []; // Esta array se hace para dejar los nodos que si se puedan conectar, ya que pueden haber nodos que no se puedan conectar
        node2.forEach(node => { // Vamos a recorrer la array que nos pasaron en el segundo parametro
            if (node === node1) return console.error(new Error('No de puede hacer conexion con el mismo nodo!')) // Si en las conexiones esta el mismo nodo del primer parametro, entonces retorna un error
            if (!this.graph[node]) return console.error(new Error(`El nodo ${node} no se encontró para hacer la conexion.`)) // Si no existe alguna conexion en nuestra Hash Table de nodos, entonces regresa un error
            if (this.graph[node].find(connections => node1 === connections)) return console.error(new Error(`Ya existe una conexion con el nodo: ${node}`)); // Si alguna de las conexiones ya tiene una conexion con el nodo del primer parametro, regresa un error
            this.graph[node].push(node1); // Si pasa todas las validaciones, agrega a el nodo de la conexion, el nodo pasado en el primer parametro
            validNodes.push(node); // Y vamos a añadir a la array de Nodos Validos el nodo que estabamos evaluando y paso todas las validaciones
        }) // Con este forEach() primero vamos establecer las conexiones en los nodos ajenos
        this.graph[node1].push(...validNodes); // Para que cuando ya se revisen todas las conexiones, solo se tenga que añadir los valores de los nodos que pasaron todas las validaciones
        return this;
    }
    deleteNode(node) { // deleteNode() nos va a permitir eliminar un nodo del Graph y de los nodos con los que tenía conexion
        const nodeDeleted = this.graph[node]; // Vamos a guardar el nodo que va a ser eliminado para retornarlo antes
        this.graph[node].forEach(connection => { // Vamos a recorrer todas las conexiones que tenía le nodo que vamos a eliminar
            this.graph[connection].forEach(connections => { // Cuando ya ubiquemos el nodo que tiene la conexion, vamos a recorrer las conexiones que tiene para encontrar el nodo que vamos a eliminar
                let index = -1; // Creamos un contador para el index, para poder eliminar el elemento de la array bien
                index++; // Como esta inicializado con -1, entonces vamos a añadirle uno para que quede en el index: 0. Recordemos que vamos a recorrer los elementos del nodo y necesitamos una referencia del index
                if (connections === node) this.graph[connection].splice(index, index+1); // Cuando encontremos el nodo que vamos a eliminar en las conexiones, vamos a eliminarlo con splice()
            })
        })
        // Cuando el nodo que se va a eliminar ya no existe en ninguna de sus conexiones...
        delete this.graph[node]; // Vamos a eliminar definitivamente el nodo
        this.length--; // Vamos a agregar el registro de que se elimino el nodo
        return `Nodo eliminado: ${node} : ${nodeDeleted}`; // Y vamos a retornar este mensaje
    }
}