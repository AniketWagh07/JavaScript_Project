let form = document.querySelector("form");
let userName = document.querySelectorAll("input")[0];
let password = document.querySelectorAll("input")[1];

let errUser = document.querySelectorAll("span")[0];
let errPass = document.querySelectorAll("span")[1];
let errSubmit = document.querySelectorAll("span")[2];

let localData = JSON.parse(localStorage.getItem("data"));
console.log(localData);

form.addEventListener("submit", (e) => {
  errUser.innerHTML = "";
  errPass.innerHTML = "";
  errSubmit.innerHTML = "";

  userName.style.marginBottom = "2rem";
  password.style.marginBottom = "2rem";
  errUser.style.marginBottom = "0";
  errPass.style.marginBottom = "0";

  let Matching = localData.find((e) => {
    if (userName.value == e.Email && password.value == e.Pass) {
      return e;
    }
  });
  console.log(Matching);

  if (userName.value == "" && password.value == "") {
    errUser.innerHTML = "UserName Required";
    errPass.innerHTML = "Password Required";

    userName.style.marginBottom = "0";
    password.style.marginBottom = "0";
    errUser.style.marginBottom = "1.5rem";
    errPass.style.marginBottom = "1.5rem";

    e.preventDefault();
  } else if (userName.value == "") {
    errUser.innerHTML = "UserName Required";

    userName.style.marginBottom = "0";
    errUser.style.marginBottom = "1.5rem";

    e.preventDefault();
  } else if (password.value == "") {
    errPass.innerHTML = "Password Required";

    password.style.marginBottom = "0";
    errPass.style.marginBottom = "1.5rem";

    e.preventDefault();
  } else if (Matching) {
    alert("Welcome here");
    localStorage.setItem("particularUser", JSON.stringify(Matching));
  } else {
    errSubmit.innerHTML = "Password Not Matching";
    e.preventDefault();
  }
});
