// Given a list of numbers and a number k, return whether any two numbers from the list add up to k.
// For example, given [10, 15, 3, 7] and k of 17, return true since 10 + 7 is 17.

const array1 = [10,15,3,7,14];
let k = 17;

for(let i of array1) {
    let diff = k - i;
    if(diff in array1) {
        return true;
    }
    else {
        return false;
    }
}