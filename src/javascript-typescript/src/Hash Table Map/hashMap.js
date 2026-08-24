class HashMap {
    constructor() {
        this.map = {}
    }

    put(key, value) {
        this.map[key] = value
    }

    get(key) {
        if (this.map[key]) {
            return this.map[key];
        }
    }
}

const myMap = new HashMap();

myMap.put("name", "FBK")
myMap.put("age", 29)
myMap.put("gender", "Male")

myMap