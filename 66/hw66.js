'use strict'

const isAboveThreshold = (currentValue) => currentValue < 40;
const array1 = [91, 80, 39, 29, 10, 43];
console.log(array1.every(isAboveThreshold));

const moreLetters = ['a', 'B', 'c', 'D', 'e'];
function isUpperCase(it) {
    return it === it.toUpperCase();
}