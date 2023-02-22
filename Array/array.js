class MyArray {
  constructor() {
    this.length = 0;
    this.data = {};
  }
  get(index) {
    return this.data[index];
  }
  push(item) {
    this.data[this.length] = item;
    this.length++;
    return this.data;
  }

  pop(){
    const lastItem = this.data[this.length -1];
    delete this.data[this.length -1];;
    this.length--;
    return lastItem;
   }

   // se podria llamar delete()
   remove(index){
    //recupera el elemento a borrar
      const item = this.data[index];
      // elimina el ultimo elemento y reacomoda los indeces de los elementos
      this.shiftIndex(index);

      return item;
   }

   // Metodo que al eliminar un elemento del array, reacomoda los valores de los indicies
   shiftIndex(index){
    //comenzamos a recorres desde el indice que pasamos de parametro
      for(let i = index; i < this.length-1; i++){
      /* borraremos el elemento n2, entonces en 2 tiene que estar lo que estaba en 3, y en 3 lo que estaba en 4... por eso usamos un for y reasignamos a data[i] lo que esta en data[i+1] hacemos que los elementos que estan despues del elemento borrado, bajen un indice */
        this.data[i] = this.data[i+1];
      }
      //borramos el ultimo elemento, ya que fue agregado en el ante ultimo elemento
      delete this.data[this.length-1];

      //disminuimos el lenth
      this.length--;
   }
}

const myArray = new MyArray();
myArray.push('diego');
myArray.push('shushan');
myArray.push('belu');
myArray.push('memecito memelin')
const removido = myArray.remove(0);
console.log('removido: ' + removido);
myArray.pop();
myArray.pop();
console.log( myArray);