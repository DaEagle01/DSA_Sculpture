// Extend Array prototype
declare global {
  interface Array<T> {
    myFilter(
      callback: (value: T, index: number, array: T[]) => unknown,
      thisArg?: any
    ): T[];
  }
}

if (!Array.prototype.myFilter) {
  Array.prototype.myFilter = function<T>(
    this: T[],
    callback: (value: T, index: number, array: T[]) => unknown,
    thisArg?: any
  ): T[] {
    if (typeof callback !== "function") {
      throw new TypeError(callback + " is not a function");
    }

    const result: T[] = [];

    for (let i = 0; i < this.length; i++) {
      if (i in this) { // skip holes in sparse arrays
        const value = this[i];
        if (callback.call(thisArg, value, i, this)) {
          result.push(value);
        }
      }
    }

    return result;
  };
}

export {};
