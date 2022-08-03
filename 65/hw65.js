'use strict';

let a = 5;
let b = '5';

console.log(a === b);
console.log(a !== b);

const PI = 3.14;

let nonsense = 'Joe' - 5;
console.log(nonsense, typeof nonsense);

console.log(nonsense == nonsense);
console.log(nonsense == NaN);
console.log(NaN == NaN);

console.log(isNaN(nonsense));

nonsense = nonsense + 2;
console.log(isNaN(nonsense));