/*
     2 - 0
    / \
   1 - 3
*/

// edge list
const edgeList = [
    [0, 2],
    [2, 3],
    [2, 1],
    [1, 3]
];

// adjacent List
// indice nodo =       0      1       2      3
const adjacentList = [[2], [2, 3], [0, 1, 3], [1, 2]];


// usando HashTables + adjacentList
const hashTable = {
    0: [2],
    1: [2, 3],
    2: [0, 1, 3],
    3: [1, 2]
}

// adjacent matrix
const adjacentMatrixx = [
    [0, 0, 1, 0],
    [0, 0, 1, 1],
    [1, 1, 0, 1],
    [0, 1, 1, 0],
]

// hashTable + adjacent matrix  
const adjacentMatrix = {
    0: [0, 0, 1, 0],
    1: [0, 0, 1, 1],
    2: [1, 1, 0, 1],
    3: [0, 1, 1, 0],
}

const graph = adjacentMatrix;