const toggle = document.getElementById("toggle");
const menu = document.querySelector("#active");
const barOne = document.getElementsByClassName("bar one")[0]
const barTwo = document.getElementsByClassName("bar two")[0]
const barThree = document.getElementsByClassName("bar three")[0]
const currentYear = document.getElementById("year");


toggle.addEventListener("click", ()=> {
    menu.classList.toggle("active")
    barOne.classList.toggle("active")
    barTwo.classList.toggle("active")
    barThree.classList.toggle("active")
})

currentYear.innerHTML = new Date().getFullYear();

