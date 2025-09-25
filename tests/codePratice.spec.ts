let val: String = "Pyramid";

// function reverseString(str: String): String {
//     return str.split('').reverse().join('');
// }
// console.log()
// console.log(reverseString(val));
console.log(reverseStringLoop(val));
console.log();
console.log();


function reverseStringLoop(val: String): String {
    let v: String = "";
    for (let i = val.split("").length - 1; i >= 0; i--) {
        v = v + val.split("")[i]

    }
    return v.toLowerCase();
}