! Binary Practice Walkthrough

------------------------------------------------//
//Binary to base 10
let b10 = parseInt('1010', 2);      // 10
console.log(b10)

------------------------------------------------//
Binary to hexadecimal
// binary to base 10
let b10 = parseInt('1010', 2);      // 10

// // // // //base10 to hex
let hex = Number(b10).toString(16);  // 'a'
console.log(hex)  //0x0a

------------------------------------------------//
Hexadecimal to base 10//
hex to base 10
let b10 = parseInt('0xa1', 16);      // 161
console.log(b10)

------------------------------------------------//
Hexadecimal to binary
let str = 0xff

function hexaToBin(str) {
    str = str.substring(2)
    console.log('step 1', str)
    let num = parseInt(str, 16)
    console.log('step 2', num)
    return '0b' + num.toString(2)

}

console.log(hexaToBin('0xff'))

hex to base10
let b10 = parseInt('0xff', 16);      // 255
// //b10 to binary
let binary = Number(b10).toString(2);  // '11111111'

console.log(binary)  //0b11111111

------------------------------------------------//
Base 10 to binary
b10 = 8
let binary = Number(b10).toString(2);  // 1000
console.log(binary) //0b1000

------------------------------------------------//
Base 10 to hexadecimal
let b10 = 8
let hex = Number(b10).toString(16);  // 8
console.log(hex) // 0x08

------------------------------------------------//
Base 10 to ASCII
console.log(String.fromCharCode(65)); //A
console.log(String.fromCharCode(97)); //a

------------------------------------------------//
Hexadecimal to ASCII
let b10 = parseInt('0x41', 16);      // 65

console.log(String.fromCharCode(b10)); //A

------------------------------------------------//
Binary to ASCII
binary to base 10
let b10 = parseInt('01000001', 2);      // 161
//base 10 to ASCII
let ASCII = String.fromCharCode(b10);

console.log(ASCII) // A
