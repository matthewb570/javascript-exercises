const reverseString = function(string) {

    let reversedString = "";

    let stringArray = string.split("");

    for (let i = stringArray.length - 1; i >= 0; i--) {
        reversedString += stringArray[i];
    }

    return reversedString;
};

// Do not edit below this line
module.exports = reverseString;
