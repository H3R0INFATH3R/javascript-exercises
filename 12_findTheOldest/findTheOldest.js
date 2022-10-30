const findTheOldest = function(arr) {
    let newArr = arr.map(function(element) {
        if (!Object.hasOwn(element, 'yearOfDeath')) {
            let date = new Date().getFullYear();
            element.yearOfDeath = date;
        }
        return element.yearOfDeath - element.yearOfBirth;
    });
    
    let max = newArr[0];
    let index = 0;
    for (let i = 1; i < newArr.length; i++) {
        if (newArr[i] > max) {
            max = newArr[i];
            index = i;
        }
    }
    return arr[index];
};

// Do not edit below this line
module.exports = findTheOldest;
