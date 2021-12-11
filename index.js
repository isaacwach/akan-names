var year = document.getElementById("year");
var month = document.getElementById("month");
var day = document.getElementById("day");

document.getElementById("btn").addEventListener("click", function () {
    var month=document.getElementById("month").value;
    const inputtedDate = new Date(year.value, month, day.value)
    let dayOfBirth = inputtedDate.getDay()
});