class HashTable {
    constructor(size) {
        this.data = new Array(size);
    }

    // esta es la hashFunction
    hashMethod(key) {
        let hash = 0;
        for (let i = 0; i < key.length; i++) {
            hash = (hash + key.charCodeAt(i) * i) % this.data.length;
        }
        return hash;
    }

    // agrega elementos a la HashTable
    set(key, value) {


        // el hash se convierte en el address, osea el slot
        const address = this.hashMethod(key);
        // todo: revisar si existe el key

        // si no exsiste ese addres, lo creamos y luego le agregamos los datos
        if (!this.data[address]) {
            this.data[address] = [];
            this.data[address].push([key, value]);
        } else {
            // si existe el addres/slot con el numero de hash:
            //1. valido que el key a ingresar no sea uno que ya esta en el slot
            for (let i = 0; i < this.data[address].length; i++) {
                if (this.data[address][i][0] === key) {
                    throw new Error("El key ingresado ya existe en la HashTable");
                }
            }
            //2. El nuevo key no esta repetido pero hay colision
            // agrego el dato, no sobreescribo
            this.data[address].push([key, value]);
        }
        return this.data;
    }

    get(key) {
        // 1. obtenemos el numero de address con el key
        const address = this.hashMethod(key);
        // 2. obtenemos el slot o bucket
        const currentBucket = this.data[address];
        // 3. validamos que exista
        if (currentBucket) {
            // 3.1 puede que haya mas de 1 elemento en el bucket, debemos recorrerlo
            for (let i = 0; i < currentBucket.length; i++) {
                if (currentBucket[i][0] === key) {
                    // 3.2 si coincide el key, devolvemos el value
                    return currentBucket[i][1];
                }
            }
        }
        // 4. si no existe return undefined
        return undefined;
    }

    delete(key) {
        // 1. obtenemos el numero de address con el key
        const address = this.hashMethod(key);
        // 2. obtenemos el slot o bucket
        const currentBucket = this.data[address];
        // 3. validamos que exista
        if (currentBucket) {
            // 3.1 puede que haya mas de 1 elemento en el bucket, debemos recorrerlo
            for (let i = 0; i < currentBucket.length; i++) {
                if (currentBucket[i][0] === key) {
                    // 3.2 si coincide el key, lo borramos y retornamos
                    //let bucketToRemove = currentBucket[i]
                    let bucketToRemove = currentBucket.splice(i, 1);

                    if (currentBucket.length == 0) {
                        delete this.data[address];
                    }
                    console.log(bucketToRemove);
                    return bucketToRemove;
                }
            }
        }
        // 4. si no existe return undefined
        console.log('no existe ningun elemento con el Key ' + key);
        return undefined;
    }

    getAllKeys() {
        let keys = [];
        for (let i = 0; i < this.data.length; i++) {
            if (this.data[i]) { // if (this.data[i].length > 0) {
                for (let j = 0; j < this.data[i].length; j++) {
                    let current = this.data[i];
                    console.log('se agrega al array de keys a ' + current[j][0]);
                    keys.push(current[j][0]);
                }
            } else {
                // la fila esta vacia
            }
        }
        return keys;
    }
}

//creamos el array con 50 espacios libres
const myHashTable = new HashTable(50);
myHashTable.set('Diego', 1990);
myHashTable.set('Mariana', 1998);
myHashTable.set("Miranda", 2000)
myHashTable.set("Cat", 2010)
console.log(myHashTable.set('Alejandra', 2000));

/* prueba de elemento repetido  
// myHashTable.set('Diego', 1992);
*/

// prueba de borrado de elemento 
/*
myHashTable.delete('Diego');
myHashTable.delete('Mariana');
console.log(myHashTable.delete('Mariana'));
//console.log(myHashTable.delete('Diegoooo'));
console.log(myHashTable); */

console.log(myHashTable.getAllKeys());