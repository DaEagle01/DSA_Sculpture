function promiseAll<T>(values: T[]): Promise<T[]> {
    return new Promise((resolve, reject) => {
        const results: T[] = [];
        let pending = values.length;

        if (pending === 0) {
            resolve(results);
            return;
        }

        values.forEach((value, index) => {
            Promise
                .resolve(value)
                .then(res => {
                    results[index] = res;
                    pending -= 1;

                    if (pending === 0) {
                        resolve(results);
                    }
                })
                .catch(err => reject(err));
        });
    });
}

async function run() {
    const results = await promiseAll([
        Promise.resolve(42),
        "hello",
        Promise.resolve(true),
    ]);

    console.log(results); // [42, "hello", true]
}

run()