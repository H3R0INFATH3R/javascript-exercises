const removeFromArray = function(arr, ...num) {
    let newArr = arr.filter(element => !num.includes(element));
    return newArr;
};

// Do not edit below this line
module.exports = removeFromArray;
