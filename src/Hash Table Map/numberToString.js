// 1234 => One Two Three Four

const numbers = {
    1: "One",
    2: "Two",
    3: "Three",
    4: "Four",
    5: "Five",
    6: "Six",
    7: "Seven",
    8: "Eight",
    9: "Nine",
    0: "Zero"
}

const numberToString = (num) => {
    const str = num.toString();
    let result = "";
    for (let i = 0; i < str.length; i++) {
        const element = str[i];
        result = result + numbers[element] + " "
    }
    return result;
};

console.log(numberToString(45816))