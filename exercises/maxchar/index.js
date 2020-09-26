// --- Directions
// Given a string, return the character that is most
// commonly used in the string.
// --- Examples
// maxChar("abcccccccd") === "c"
// maxChar("apple 1231111") === "1"


const maxChar = str => {
    const charCount = {}
    const maxCharCount = 0
    let maxChar = ''

    for(const char of str ) {
        charCount[char] = charCount[char] +1 || 1
        if (charCount[char] > maxCharCount )
            maxChar = char
    }

    return maxChar
}


module.exports = maxChar;
