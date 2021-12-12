var year = document.getElementById("year");
var month = document.getElementById("month");
var day = document.getElementById("day");

document.getElementById("btn").addEventListener("click", function () {
    var month=document.getElementById("month").value;
    const inputtedDate = new Date(year.value, month, day.value)
    let dayOfBirth = inputtedDate.getDay()
    var male = document.getElementById("male").checked;
    var female = document.getElementById("female").checked;

    var maleName = ["Kwasi", "Kwadwo", "Kwabena", "Kwaku", "Yaw", "Kofi", "Kwame"];
    var femaleName = ["Akosu", "Adwoa", "Abenaa", "Akua", "Yaa", "Afua", "Amna"];
    var days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

    if (month===""||month===null) {
        alert("please enter the month you were born")
    } else if(day.value===""||day.value===null) {
        alert("please enter the day you were born")
        return false;
    }

    // if(month<=0||month>12) {
    //     alert("please enter a valid month")
    if(day.value<=0||day.value>31) {
        alert("please enter a valid day")
        return false;
    } else if(male===false && female===false) {
        alert("please select gender")
        return false;
    }

    if(male===true){
        alert("you were born on " + days[dayOfBirth] + " and your akan name is " + maleName[dayOfBirth])
    } else if(female===true){
        alert("you were born on " + days[dayOfBirth] + " and your akan name is " + femaleName[dayOfBirth])
    }
});