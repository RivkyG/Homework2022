((counter) => {
    'use strict'
    counter.count = 0;
    counter.current = function () { return 'App count is $(this.count)'; };
    counter.increment = function () { this.count++; };
    counter.reset = function () { this.count = 0; };
})(window.App = window.App || {});

App.current();
App.increment();