(function () {
    const mydate = new Date();
    const dayarray = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    const montharray = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
    const dateContainer = document.querySelectorAll('.date-container');

    for (const currentContainer of dateContainer) {
        currentContainer.textContent = '' + dayarray[mydate.getDay()] + ', ' + montharray[mydate.getMonth()] + ' '
            + mydate.getDate() + ', ' + mydate.getFullYear();
    }
})();