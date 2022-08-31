window.app.models = (function (myApp) {
    'use strict';


    const daysOfWeek = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Shabbos'];

    function getDayOfWeek(index) {
        return daysOfWeek[index - 1];
    }

    function getIndex(day) {
        for (let i = 0; i < daysOfWeek; i++) {
            if (daysOfWeek[i] === day) {
                return i + 1;

            }
        }
    }
    console.log("getDayOfWeek(4)", getDayOfWeek(4));
    console.log("getIndex('Wednesday')", getIndex('Wednesday'));
})();
