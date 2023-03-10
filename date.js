exports.getDate = function () {          /*here gerDate is decleared anonymously*/
    const today = new Date();

    const options = {
        weekday: "long",
        day: "numeric",
        month: "long",
        year: "numeric"
    };
    const day = today.toLocaleDateString("en-US", options);
    return day;
}


// this is for showing only day
module.exports.getDay = getDay;
function getDay() {
    const today = new Date();

    const options = {
        weekday: "long"
    };
    const day = today.toLocaleDateString("hi-IN", options);
    return day;
}