const increment = (() => {
    'use strict'
    let counter = 0;
    console.log(counter);
    const number = (num) => console.log(num);
    return () => (counter++, number(counter));

})();
increment();