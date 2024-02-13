const palindromes = function (phrase) {
    let phraseWithoutSpecialCharacters = phrase.replace(/[^a-zA-Z0-9]/g, "");
    let phraseWithoutSpecialCharactersReversed = phraseWithoutSpecialCharacters.split("").reverse().join("");

    return phraseWithoutSpecialCharacters.toLowerCase() === phraseWithoutSpecialCharactersReversed.toLowerCase();
};

// Do not edit below this line
module.exports = palindromes;
