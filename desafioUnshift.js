class MiArray {
    constructor() {
      this.length = 0;
      this.data = {};
    }
    
    unshift(item){
      // Tu código aquí 👈 
      if (!item) {
        return this.length
      }
      if (this.length !== 0) {
        for (let i = this.length - 1; i >= 0; i--) {
          this.data[i + 1] = this.data[i];
        }
      }
  
      this.data[0] = item;
      this.length++;
      return this.length
    }
  }

const miArray = new MiArray();
miArray.unshift("!!!")
miArray.unshift("Platzinauta")
miArray.unshift("lograste")
miArray.unshift("lo")
console.log(miArray);
