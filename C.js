let input1 = document.getElementById("one");
let input2 = document.getElementById("two");
let input3 = document.getElementById("three");
let sub = document.getElementById("end");
//100* (3T - F) /3Q
let form = document.forms[0];
form.addEventListener("submit", mohasebe);
function mohasebe(event) {
  if (input1.value == "" || input2.value == "" || input3.value == "") {
    sub.nextElementSibling.innerHTML = "You Must Fill All Fields";
    event.preventDefault();
  } else if (
    Number(input3.value) + Number(input2.value) >
    Number(input1.value)
  ) {
    sub.nextElementSibling.innerHTML = "You entered the wrong numbers";
    event.preventDefault();
  } else {
    sub.nextElementSibling.innerHTML =
      "Your Answer Is : " +
      (100 * (3 * Number(input2.value) - Number(input3.value))) /
        (3 * Number(input1.value)) +
      " % ";

    event.preventDefault();
  }
}
