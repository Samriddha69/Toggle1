console.log("toggle", document);
const divItem1 = document.querySelector(".circle1");
const divItem2 = document.querySelector(".circle2");
const divItem3 = document.querySelector(".circle3");

divItem1.addEventListener("click", () => {
    console.log(divItem1.style.backgroundColor);
    if (divItem1.style.backgroundColor === "blue") {
        divItem1.style.backgroundColor = "red";
    } else {
        divItem1.style.backgroundColor = "blue";
    }
});
divItem2.addEventListener("click", () => {
    console.log(divItem2.style.backgroundColor);
    if (divItem2.style.backgroundColor === "blue") {
        divItem2.style.backgroundColor = "red";
    } else {
        divItem2.style.backgroundColor = "blue";
    }
});
divItem3.addEventListener("click", () => {
    console.log(divItem3.style.backgroundColor);
    if (divItem3.style.backgroundColor === "blue") {
        divItem3.style.backgroundColor = "red";
    } else {
        divItem3.style.backgroundColor = "blue";
    }
});
const button = document.querySelector('.button');