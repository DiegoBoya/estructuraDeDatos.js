class MyArray {
    constructor() {
        this.length = 0
        this.data = {}
    }

    // lo pego del anterior ejercicio
    unshift(item) {
        if (this.length === 0 && item) {
            this.data[0] = item;
            this.length++
            return this.length;
        }
        else if (this.length != 0 && item) {
            for (let i = this.length; i > 0; i--) {
                this.data[i] = this.data[i - 1];
            }
            this.data[0] = item;
            this.length++;
            return this.length;
        }
        else if (!item) {
            return this.length;
        }
    }

    shift() {
        // Tu código aquí 👈
        if (this.length == 0) {
            return undefined;
        }

        //obtengo el primer elemento
        const firstItem = this.data[0];

        // corrijo el numero de indice de cada elemento
        for (let i = 0; i < this.length; i++) {
            this.data[i] = this.data[i + 1];
        }
        // remuevo el ultimo slot que queda con undefined
        delete this.data[this.length - 1];

        // corrijo el largo del array
        this.length--;
        
        return firstItem;
    }

}


const myArray = new MyArray()
myArray.unshift("platzinauta")
myArray.unshift("desafio")
myArray.unshift("Con el")
myArray.unshift("Suerte")
myArray.unshift("Un 🐱 random en el desafío")
const removed = myArray.shift();
console.log(myArray);
console.log(removed);