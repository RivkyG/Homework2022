// SL - pattern to allow window.app to exist in multiple files not quite complete enough to actually work correctly
((counter) => {
    'use strict'
    counter.count = 0; // SL - ok, but now this is avaiable to callers to see and/or change. Better would be a private variable in function accessed by the closures.
    counter.current = function () { return 'App count is $(this.count)'; };
    counter.increment = function () { this.count++; };
    counter.reset = function () { this.count = 0; };
})(window.App = window.App || {});

App.current();
App.increment();

// SL - html loads part3.js but no such file...

// SL - grade - 74