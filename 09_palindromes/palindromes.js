const palindromes = function (string) {
    string = string.toLowerCase();
    string = string.replace('.', '');
    string = string.replace('!', '');
    string = string.replace(/,/g, '');
    string = string.replace(/ /g, '');
    let str = string.split('');
    str = str.reverse();
    str = str.join('');

    return string === str ? true : false;
};

// Do not edit below this line
module.exports = palindromes;
