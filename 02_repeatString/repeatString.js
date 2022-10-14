const repeatString = function(string, num) {
    let stringXnum = '';
    if (num < 0) return 'ERROR';
    for (let i = 0; i < num; i++) {
        stringXnum += string;
    }
    return stringXnum;
};

// Do not edit below this line
module.exports = repeatString;
