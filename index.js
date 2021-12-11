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
});