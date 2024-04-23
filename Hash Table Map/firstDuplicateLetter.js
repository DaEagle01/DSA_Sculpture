// sdjfaadfljdjfeoudfd => a

// space complexity has to be O(1)

const findFirstDuplicate = (str) => {
    const letters = {};

    for (let i = 0; i < str.length; i++) {
        const element = str[i];
        if (!letters[element]) {
            letters[element] = 1
        } else {
            return element;
        }
    }
    return "No duplicates found"
};

console.log(findFirstDuplicate("abcdefghijklmnopqrstuvwxyz"))