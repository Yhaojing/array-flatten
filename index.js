function flatten(array, res) {
    for (let value of array.values()) {
        Array.isArray(value) ? flatten(value, res) : res.push(value);
    }
    return res;
}
module.exports = (array) => flatten(array, []);