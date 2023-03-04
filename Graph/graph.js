class Graph {
    constructor(){
        this.cantNodos = 0,
        this.adjacentList = {}
    }

    // vertex == nodo
    addVertex(node){
        this.adjacentList[node] = [];
        this.cantNodos++;
    }

    // edge == uniones entre nodos
    // crea conexion entre nodos
    addEdge(node1, node2){
        //agrega el nodo al array del otro nodo
        this.adjacentList[node1].push(node2);
        this.adjacentList[node2].push(node1);
    }
}

const graph = new Graph();
graph.addVertex('1');
graph.addVertex('3');
graph.addVertex('4');
graph.addVertex('5');
graph.addVertex('6');
graph.addVertex('8');

graph.addEdge('8','4');
graph.addEdge('5','4');
graph.addEdge('5','3');
graph.addEdge('1','4');
graph.addEdge('1','3');
graph.addEdge('1','6');
graph.addEdge('6','3');

