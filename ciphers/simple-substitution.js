/** Simple Substitution */

// todo: uppercase to lowercase functionality
// todo: modularity and async functionality (add functions)
// todo: add file i/o
// todo: make into exe (this goes for the entire project)
// todo: add functionality for attempting to guess a key

// Note, I'm just brute forcing my way through right now. I will be adding in modularity soon.
// Reference: https://en.wikipedia.org/wiki/Substitution_cipher#Simple_substitution

//const keyword = "";
const key = "ZEBRAS";   // Definitely going to need some i/o here...

/** Creating the alphabets */
plaintext_alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
ciphertext_alphabet = plaintext_alphabet;

for (i = 0; i < key.length; i++) {
    ciphertext_alphabet = ciphertext_alphabet.replace(key.charAt(i), '');
}
ciphertext_alphabet = key + ciphertext_alphabet;

/** Encoding a message */

// Looks at character of plaintext
// Finds it's index in the alphabet
// Returns character of ciphertext based on index
function convert(plaintext_alphabet, ciphertext_alphabet, character) {
    let index = plaintext_alphabet.indexOf(character);
    result = ciphertext_alphabet.charAt(index);

    if (!result.match(/^[0-9a-zA-Z]+$/)) 
        return character;  // Basically if the result is not alphanumeric, return the normal character
    else 
        return result;      // Otherwise, it's a letter so return the result
}

const msg = "FLEE AT ONCE. WE ARE DISCOVERED!"; // once again, remove hardcoded text. Needs i/o
let encoded_msg = "";

// for each character in message
// encode that character and append to encoded msg
for (i = 0; i < msg.length; i++) {
    temp = convert(plaintext_alphabet, ciphertext_alphabet, msg.charAt(i));
    encoded_msg = encoded_msg + temp;
}

console.log(msg);
console.log(encoded_msg);


/** Decoding a message, given a key */

// Remove every letter of the key from the alphabet
// Then prepend the key to the alphabet to create the ciphertext alphabet
// Then for each character in the encoded message, convert it to the character in the plaintext alphabet