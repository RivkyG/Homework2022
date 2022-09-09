// SL - not in app, not an IIFE
const increment = (() => {
    'use strict'
    let counter = 0;
    console.log(counter); // SL - whats this for?
    const number = (num) => console.log(num); // SL - why do we need a function that takes a param and logs it?
    return () => (counter++, number(counter)); // SL - so we return a function that when called, will increment counter and call a function to log it out. Not quite what we wanted. We wanted access to 2 functions, 1 to increment and 1 to get current count

})();
increment();
