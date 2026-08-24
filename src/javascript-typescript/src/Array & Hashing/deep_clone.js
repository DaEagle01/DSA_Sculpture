function deepClone(value, hash = new WeakMap()) {
  // Base case: primitives
  if (value === null || typeof value !== "object") return value;

  // Handle circular references
  if (hash.has(value)) return hash.get(value);

  // Handle arrays
  if (Array.isArray(value)) {
    const arrCopy = [];
    hash.set(value, arrCopy); // store reference before recursion
    for (const item of value) {
      arrCopy.push(deepClone(item, hash));
    }
    return arrCopy;
  }

  // Handle objects
  const objCopy = {};
  hash.set(value, objCopy); // store reference before recursion
  for (const key of Object.keys(value)) {
    objCopy[key] = deepClone(value[key], hash);
  }
  return objCopy;
}

const data = {
  a: 1,
  b: [2, 3, { c: 4, d: [5, 6] }],
  e: {
    f: 7,
    g: [8, { h: 9 }],
  },
};

const clone = deepClone(data);

console.log(clone);
/* → 
{
  a: 1,
  b: [2, 3, { c: 4, d: [5, 6] }],
  e: { f: 7, g: [8, { h: 9 }] }
}
*/

console.log(clone === data); // false
console.log(clone.b[2] === data.b[2]); // false
console.log(clone.e.g[1] === data.e.g[1]); // false

const obj = { a: 1 };
obj.self = obj; // circular

const clonedObj = deepClone(obj);
console.log(clonedObj);
// → { a: 1, self: [Circular] }

console.log(clonedObj.self === clonedObj); // true
console.log(clonedObj === obj); // false
