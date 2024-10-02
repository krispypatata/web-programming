const getTheSum = (x, y) => {
    return x + y;
}

const PI = 3.14;
const obj = { "one": 1, "two": 2}
// export { getTheSum };

// export default getTheSum;
// export default { getTheSum, PI, obj };  // ES - 6

// CommonJs
module.exports.getTheSum = getTheSum; 
module.exports.PI = PI;
module.exports.obj = obj;

