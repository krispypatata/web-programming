

var reverseAString = function (str) {
    let reversedString = '';

    for (let i = str.length - 1; i >= 0; i--) 
        reversedString += str[i];


    console.log(reversedString);
    return reversedString;
}


// var storePassword  = function (a, b, c) {

// }


reverseAString('REVERSE');


// A function to check if a given string contains at least 1 number, 1 uppercase character, and 1 lowercase character 
var checkIfStringIsValid = function (str) {
    let hasNumber = false;
    let hasUpperCaseChar = false;
    let hasLowerCaseChar = false;

    for (let i = 0; i < str.length; i ++) {
        if (parseInt(str[i])) hasNumber = true;

        if (str[i] === str[i].toUpperCase()) hasUpperCaseChar = true;

        if (str[i] === str[i].toLowerCase()) hasLowerCaseChar = true;
    }

    // return hasNumber && hasUpperCaseChar && hasLowerCaseChar;
    return hasLowerCaseChar;
}

console.log(checkIfStringIsValid('Pass1234'));


var validatePassword = function (password1, password2) {
    // the password has at least 8 characters
    if (password1.length < 8 && password2.length < 8)
        return false;

    // The two passwords match;
    if (password1 !== password2)
        return false;

    // the password has at least 1 number, 1 uppercase character, and 1 lowercase character 
    if (checkIfStringIsValid(password1) == false && checkIfStringIsValid(password2) == false)
        return false;

    return true;
}


console.log(validatePassword('HELLO1234', 'HELLO1234'));

console.log(checkIfStringIsValid('HELLO1234'));