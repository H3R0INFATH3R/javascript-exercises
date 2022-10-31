const caesar = function(string, num) {
    let result = []
    for (let i = 0; i < string.length; i++) {
        let code = string.charCodeAt(i)
        if (code > 96 && code < 123)
            code = ((((code - 18) + num) % 26) + 96)
        else if (code > 64 && code < 91)
            code = ((((code - 12) + num) % 26) + 64)
        // while (code > 122) {
        //     code = (code - 122) + 96
        // }
        result.push(String.fromCharCode(code));
    }
    return result.join('')
};

// Do not edit below this line
module.exports = caesar;
