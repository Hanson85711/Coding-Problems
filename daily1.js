//Given an array and a number k that's smaller than the length of the array, rotate the array to the right k elements in-place. 
//Asssuming k will always be smaller than array

function arrayRotateOne(array) {
    const last = array[array.length - 1];
    for (let i = array.length - 2; i >= 0; i--) {
        array[i + 1] = array[i];
    }
    array[0] = last; 

    return array;
}

function arrayRotater(array, k) {
    for (let i = k; i > 0; i--) {
        arrayRotateOne(array)
    }
    return array;
}

let array = [1,2,3,4,5,6,7]

console.log(arrayRotater(array, 4));