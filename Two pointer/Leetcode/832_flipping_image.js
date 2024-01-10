/* 
    832. Flipping an Image
    https://leetcode.com/problems/flipping-an-image/
*/
const flipAndInvertImage = (image) => {
    for (let i = 0; i < image.length; i++) {
        const element = image[i].reverse();
        for (let j = 0; j < element.length; j++) {
            element[j] ? element[j] = 0 : element[j] = 1
        }
    };
    return image;
};
const image1 = [[1, 1, 0], [1, 0, 1], [0, 0, 0]];
const image2 = [[1, 1, 0, 0], [1, 0, 0, 1], [0, 1, 1, 1], [1, 0, 1, 0]];
console.log(flipAndInvertImage(image1));
console.log(flipAndInvertImage(image2));