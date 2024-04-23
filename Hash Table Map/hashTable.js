class HashTable {
    constructor(size) {
        this.table = new Array(size)
        this.size = size;
    }

    hashFunction(value) {
        value = value + "";
        let sum = 0;
        for (let i = 0; i < value.length; i++) {
            sum = sum + value.charCodeAt(i);
        }
        return sum % this.size;
    }

    get(value) {
        let index = this.hashFunction(value);
        let indexArr = this.table[index]
        if (indexArr) {
            for (let i = 0; i < indexArr.length; i++) {
                if (indexArr[i] === value) {
                    return 'Value found'
                }
            }
        }
        return 'Value not found'
    }

    set(value) {
        let index = this.hashFunction(value);
        let indexArr = this.table[index]
        if (!indexArr) {
            this.table[index] = [value]
        } else {
            this.table[index].push(value);
        }
    }
}

let hash = new HashTable(5);
hash.set(15)
hash.set(954)
hash.set(65)
hash.set(150)
hash.set(462)
hash.set(500)
hash.set(900)
console.log(hash)
console.log(hash.get(900))