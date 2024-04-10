// slider buttons
let main = document.querySelector("#main");
let leftBtn = document.querySelector(".fa-angle-left");
let rightBtn = document.querySelector(".fa-angle-right");

let sqrBtns = document.querySelectorAll(".sqrBtns");
let first_h = document.querySelector(".first_h");
let sec_h = document.querySelector(".sec_h");

// console.log(leftBtn, rightBtn, sqrBtn1, sqrBtn2, sqrBtn3, sqrBtn4, sqrBtn5);

let photoBtnLeft = document.querySelectorAll(".photoBtn")[0];
let photoBtnRight = document.querySelectorAll(".photoBtn")[1];
let photoBtnSquare1 = document.querySelectorAll(".photoBtn")[2];
let photoBtnSquare2 = document.querySelectorAll(".photoBtn")[3];
console.log(photoBtnSquare1, photoBtnSquare2);

let mainImgStorage = [
  {
    title1: "Baked",
    title2: "with Love",
    url: 'url("./Images/main_bg-1.jpg")',
  },
  {
    title1: "Deliciously",
    title2: "Yours",
    url: 'url("./Images/main_bg-2.jpg")',
  },
  {
    title1: "Endless",
    title2: "Cravings",
    url: 'url("./Images/main_bg-3.jpg")',
  },
  {
    title1: "Delightful",
    title2: "Flavours",
    url: 'url("./Images/main_bg-4.jpg")',
  },
  {
    title1: "Mouth-Watering",
    title2: "Delicacies",
    url: 'url("./Images/main_bg-5.jpg")',
  },
];

// Main section Slider
let index = 0;
function slider() {
  main.style.backgroundImage = mainImgStorage[index].url;
  first_h.innerHTML = mainImgStorage[index].title1;
  sec_h.innerHTML = mainImgStorage[index].title2;

  sqrBtns.forEach((a) => {
    a.style.backgroundColor = "transparent";
  });
  sqrBtns[index].style.backgroundColor = "#c19d56";
}
let int = setInterval(() => {
  index = (index + 1) % mainImgStorage.length;
  slider();
}, 4000);

rightBtn.addEventListener("click", (e) => {
  // clearInterval(int);
  index = (index + 1) % mainImgStorage.length;
  slider();
});
leftBtn.addEventListener("click", (e) => {
  // clearInterval(int);
  index = (index - 1 + mainImgStorage.length) % mainImgStorage.length;
  slider();
});
sqrBtns.forEach((a) => {
  a.addEventListener("click", () => {
    index = Array.from(sqrBtns).indexOf(a);
    slider();
  });
});

window.addEventListener("scroll", function () {
  // var scrollTop = window.scrollY + 2800;
  // var windowHeight = window.innerHeight;
  // var documentHeight = document.body.clientHeight;
  // var scrollPercent = (scrollTop / (documentHeight - windowHeight)) * 100;
  // console.log(scrollTop, windowHeight, documentHeight, scrollPercent);
  // var backgroundPosition = "50% " + (scrollPercent - 70) + "%"; // Adjusted percentage
  // document.getElementById("welcome").style.backgroundPosition =
  //   backgroundPosition;

  var scrollTop = window.scrollY;
  var windowHeight = window.innerHeight;
  var documentHeight = document.body.clientHeight;

  var scrollPercent =
    (scrollTop / (documentHeight - windowHeight * 4.5)) * 100 + 40; // Increase divisor and add more offset

  console.log(scrollTop, windowHeight, documentHeight, scrollPercent);

  var backgroundPosition = "50% " + (scrollPercent - 90) + "%"; // Adjusted percentage
  document.getElementById("welcome").style.backgroundPosition =
    backgroundPosition;

  // document.getElementById("make").style.backgroundPosition =
  //   "50% " + (scrollPercent - 95) + "%";
  if (scrollTop >= 900) {
    document.getElementById("nav").style.position = "sticky";
    document.getElementById("nav").style.backgroundColor = "white";
    document.getElementById("nav").style.boxShadow = "0 1px 3px gray";
    document.querySelector("nav > #left > img").src =
      "./Images/nav_imgBlack.png";
    document.querySelectorAll(".sticky").forEach((a) => {
      a.style.color = "black";
    });
    document.getElementById("nav-icons").style.color = "#c19d56";
    document.querySelectorAll("#hr-div hr").forEach((h) => {
      h.style.backgroundColor = "#c19d56";
    });
  } else {
    document.getElementById("nav").style.position = "absolute";
    document.getElementById("nav").style.backgroundColor = "transparent";
    document.querySelector("nav > #left > img").src =
      "./Images/nav_imgWhite.png";
    document.getElementById("nav").style.boxShadow = "0 0 0 transparent";
    document.querySelectorAll(".sticky").forEach((a) => {
      a.style.color = "white";
    });
    document.getElementById("nav-icons").style.color = "white";
    document.querySelectorAll("#hr-div hr").forEach((h) => {
      h.style.backgroundColor = "white";
    });
  }
});
function DisplayPhotoFirst(n) {
  if (n == 1) {
    document.querySelectorAll("#photo > div > img")[4].style.display = "none";
    document.querySelectorAll("#photo > div > img")[0].style.display = "block";

    photoBtnSquare1.style.backgroundColor = "#c19d56";
    photoBtnSquare2.style.backgroundColor = "transparent";
  } else {
    document.querySelectorAll("#photo > div > img")[0].style.display = "none";
    document.querySelectorAll("#photo > div > img")[4].style.display = "block";

    photoBtnSquare1.style.backgroundColor = "transparent";
    photoBtnSquare2.style.backgroundColor = "#c19d56";
  }
}
photoBtnLeft.addEventListener("click", () => {
  DisplayPhotoFirst(1);
});
photoBtnRight.addEventListener("click", () => {
  DisplayPhotoFirst(0);
});
photoBtnSquare1.addEventListener("click", () => {
  DisplayPhotoFirst(1);
});
photoBtnSquare2.addEventListener("click", () => {
  DisplayPhotoFirst(0);
});
