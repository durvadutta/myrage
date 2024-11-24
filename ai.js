// javascript which can replicate AI-logic
// Replace the javascript with AI actual integration
const gender = document.getElementById("selectGender");
const send = document.getElementById("send-button")
const section1 = document.getElementById("products-male");
const section2 = document.getElementById("products-female");
const load = document.getElementById("load");
const head = document.getElementById("suggestion-heading");


send.addEventListener('click', function () {
    const selectedValue = gender.value;

    section1.style.display = "none";
    section2.style.display = "none";
    if (section1.style.display === "none" && section2.style.display === "none") {
        load.style.display = "block";

    }
    if (selectedValue === "option1") {
        setTimeout(function () {
            section1.style.display = "flex";
            load.style.display = "none";
            head.style.display = "none";
        }, 2000);
    } else if (selectedValue === "option2") {
        setTimeout(function () {
            section2.style.display = "flex";
            load.style.display = "none";
            head.style.display = "none";
        }, 2000);
    }
    else if (selectedValue === "option0") {
        setTimeout(function () {
            section1.style.display = "flex";
            section2.style.display = "flex";
            load.style.display = "none";
            head.style.display = "none";
        }, 2000);
    }
});




