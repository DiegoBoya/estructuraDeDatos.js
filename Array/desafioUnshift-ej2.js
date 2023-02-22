
class MiArray {
    constructor() {
        this.length = 0;
        this.data = {};
    }

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
}

const miArray = new MiArray();
miArray.unshift("!!!")
miArray.unshift("Platzinauta")
miArray.unshift("lograste")
miArray.unshift("lo")
console.log(miArray);
