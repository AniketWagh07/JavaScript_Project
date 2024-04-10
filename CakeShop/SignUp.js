let SignForm = document.querySelector("form");
let SignFirstName = document.querySelectorAll("input")[0];
let SignLastName = document.querySelectorAll("input")[1];
let SignEmail = document.querySelectorAll("input")[2];
let SignMobile = document.querySelectorAll("input")[3];
let SignPass = document.querySelectorAll("input")[4];
let SignConPass = document.querySelectorAll("input")[5];

let FirstSpan = document.querySelectorAll("span")[0];
let LastSpan = document.querySelectorAll("span")[1];
let EmailSpan = document.querySelectorAll("span")[2];
let MobileSpan = document.querySelectorAll("span")[3];
let PassSpan = document.querySelectorAll("span")[4];
let ConPassSpan = document.querySelectorAll("span")[5];

let storage = [];
console.log(storage);
let localData = JSON.parse(localStorage.getItem("data"));
console.log(localData);
if (localData) {
  storage = localData;
}

SignForm.addEventListener("submit", (e) => {
  let regx = /^[a-zA-Z]{2,15}$/;
  let regxNum = /^[6-9][0-9]{9}$/;
  let regxPass = /^[a-zA-Z0-9@$]{8,15}$/;
  let flag = true;

  if (SignFirstName.value == "") {
    FirstSpan.innerHTML = "*First Name Required";
    e.preventDefault();
    flag = false;
    SignLastName.style.marginTop = 0;
    FirstSpan.style.margin = "0 0 0.9rem";
  } else if (regx.test(SignFirstName.value)) {
    FirstSpan.innerHTML = "";
  } else {
    FirstSpan.innerHTML = "Invalid First Name";
    e.preventDefault;
    flag = false;
    SignLastName.style.marginTop = 0;
    FirstSpan.style.margin = "0 0 0.9rem";
  }

  if (SignLastName.value == "") {
    LastSpan.innerHTML = "*Last Name Required";
    e.preventDefault();
    flag = false;
    SignEmail.style.marginTop = 0;
    LastSpan.style.margin = "0 0 0.9rem";
  } else if (regx.test(SignLastName.value)) {
    LastSpan.innerHTML = "";
  } else {
    LastSpan.innerHTML = "*Invalid Last Name";
    e.preventDefault;
    flag = false;
    SignEmail.style.marginTop = 0;
    LastSpan.style.margin = "0 0 0.9rem";
  }

  if (SignEmail.value == "") {
    EmailSpan.innerHTML = "*Email Required";
    e.preventDefault();
    flag = false;
    SignMobile.style.marginTop = 0;
    EmailSpan.style.margin = "0 0 0.9rem";
  } else {
    EmailSpan.innerHTML = "";
  }

  if (SignMobile.value == "") {
    MobileSpan.innerHTML = "*Mobile Number Required";
    e.preventDefault();
    flag = false;
    SignPass.style.marginTop = 0;
    MobileSpan.style.margin = "0 0 0.9rem";
  } else if (regxNum.test(SignMobile.value)) {
    MobileSpan.innerHTML = "";
  } else {
    MobileSpan.innerHTML = "*Invalid Mobile Number";
    e.preventDefault();
    flag = false;
    SignPass.style.marginTop = 0;
    MobileSpan.style.margin = "0 0 0.9rem";
  }

  if (SignPass.value == "") {
    PassSpan.innerHTML = "*Password Required";
    e.preventDefault();
    flag = false;
    SignConPass.style.marginTop = 0;
    PassSpan.style.margin = "0 0 0.9rem";
  } else if (regxPass.test(SignPass.value)) {
    PassSpan.innerHTML = "";
  } else {
    PassSpan.innerHTML = "*Invalid Password";
    e.preventDefault();
    flag = false;
    SignConPass.style.marginTop = 0;
    PassSpan.style.margin = "0 0 0.9rem";
  }

  if (SignConPass.value == SignPass.value) {
    ConPassSpan.innerHTML = "";
  } else {
    ConPassSpan.innerHTML = "*Password not Matching";
    e.preventDefault();
    flag = false;
  }

  if (flag) {
    let values = {
      First: SignFirstName.value,
      Last: SignLastName.value,
      Email: SignEmail.value,
      Phone: SignMobile.value,
      Pass: SignPass.value,
    };
    console.log(values);
    storage.push(values);
    console.log(storage);
    localStorage.setItem("data", JSON.stringify(storage));
    // e.preventDefault();
  }
});
