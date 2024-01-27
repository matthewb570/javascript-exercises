const removeFromArray = function(array, ...args) {
    
    for (let i = 0; i < args.length; i++) {
        
        let j = 0;
        while (j < array.length) {
            if (array[j] === args[i]) {
                array.splice(j, 1);
            } else {
                j++;
            }
        }
    }

    return array;

    // return array.filter(element => !args.includes(element));
};

// Do not edit below this line
module.exports = removeFromArray;
