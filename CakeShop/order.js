let cartStorage = [];

let login = document.getElementById("login");

let order = document.getElementById("cakes");
let cart = document.querySelector(".fa-cart-shopping");
let popup = document.querySelector("#popup");
let x = document.querySelector("#x");
let dynamic = document.querySelector("#dynamic");

let particularUser = JSON.parse(localStorage.getItem("particularUser"));
console.log(particularUser);

cart.addEventListener("click", () => {
  popup.style.right = "0";
});
x.addEventListener("click", () => {
  popup.style.right = "-100%";
});

if (particularUser) {
  login.innerHTML = `<span>${particularUser.First.toUpperCase()}</span>
    <a href="./order.html" id="logout"><button>logout</button></a>`;
  let logout = document.querySelector("#logout");
  console.log(logout);
  logout.addEventListener("click", () => {
    localStorage.removeItem("particularUser");
  });
}

async function details() {
  let data = await fetch("details.json");
  let main = await data.json();

  main.map((e) => {
    order.innerHTML += `<div id="${e.productId}">
      <div class="content" >
        <img src="./Images/veg.png" alt="VEG" id="veg" />
        <h3>${e.name}</h3>
        <h5>₹ ${e.price}</h5>
        <p class="rating"><i class="fa-solid fa-star"></i> ${e.rating}</p>
        <p class="des">
          ${e.description}
        </p>
      </div>
      <div id="product-img">
        <img
          src="${e.img}"
          alt=""
        />
        <button>ADD</button>
      </div>
    </div>`;
  });

  let cat = document.querySelectorAll("#heading > div > h5");
  cat.forEach((a) => {
    a.addEventListener("click", (x) => {
      order.innerHTML = "";

      cat.forEach((l) => {
        l.classList.remove("bgActive");
      });
      a.classList.add("bgActive");

      console.log(a.id);

      if (a.id == "all") {
        main.map((e) => {
          order.innerHTML += `<div id="${e.productId}">
                          <div class="content" >
                            <img src="./Images/veg.png" alt="VEG" id="veg" />
                            <h3>${e.name}</h3>
                            <h5>₹ ${e.price}</h5>
                            <p class="rating"><i class="fa-solid fa-star"></i> ${e.rating}</p>
                            <p class="des">
                              ${e.description}
                            </p>
                          </div>
                          <div id="product-img">
                            <img
                              src="${e.img}"
                              alt=""
                            />
                            <button>ADD</button>
                          </div>
                        </div>`;
        });
      } else if (a.id == "Chocolate") {
        main.map((e) => {
          if (e.flavor == a.id && e.category == "cake") {
            order.innerHTML += `<div id="${e.productId}">
                            <div class="content" >
                              <img src="./Images/veg.png" alt="VEG" id="veg" />
                              <h3>${e.name}</h3>
                              <h5>₹ ${e.price}</h5>
                              <p class="rating"><i class="fa-solid fa-star"></i> ${e.rating}</p>
                              <p class="des">
                                ${e.description}
                              </p>
                            </div>
                            <div id="product-img">
                              <img
                                src="${e.img}"
                                alt=""
                              />
                              <button>ADD</button>
                            </div>
                          </div>`;
          }
        });
      } else if (a.id == "Fruite") {
        main.map((e) => {
          if (e.flavor == a.id && e.category == "cake") {
            order.innerHTML += `<div id="${e.productId}">
                            <div class="content" >
                              <img src="./Images/veg.png" alt="VEG" id="veg" />
                              <h3>${e.name}</h3>
                              <h5>₹ ${e.price}</h5>
                              <p class="rating"><i class="fa-solid fa-star"></i> ${e.rating}</p>
                              <p class="des">
                                ${e.description}
                              </p>
                            </div>
                            <div id="product-img">
                              <img
                                src="${e.img}"
                                alt=""
                              />
                              <button>ADD</button>
                            </div>
                          </div>`;
          }
        });
      } else {
        main.map((e) => {
          if (e.category == String(a.id)) {
            order.innerHTML += `<div id="${e.productId}">
                      <div class="content">
                        <img src="./Images/veg.png" alt="VEG" id="veg" />
                        <h3>${e.name}</h3>
                        <h5>₹ ${e.price}</h5>
                        <p class="rating"><i class="fa-solid fa-star"></i> ${e.rating}</p>
                        <p class="des">
                          ${e.description}
                        </p>
                      </div>
                      <div id="product-img">
                        <img
                          src="${e.img}"
                          alt=""
                        />
                        <button>ADD</button>
                      </div>
                    </div>`;
          }
        });
      }
    });
  });

  let addBtn = document.querySelectorAll(
    "#order_products > #cakes > div > #product-img > button"
  );
  console.log(addBtn);
  addBtn.forEach((e) => {
    e.addEventListener("click", () => {
      if (particularUser) {
        let parentElement = e.parentElement.parentElement.id;
        console.log(parentElement);

        let oneProduct = main.find((e) => {
          if (e.productId == parentElement) {
            return e;
          }
        });

        if (!cartStorage.includes(oneProduct)) {
          cartStorage.push(oneProduct);
        }
        print();
        subTotal();
        del();
        grandTotal();

        let cart_count = document.querySelector("#cart_count");
        cart_count.style.display = "block";
        cart_count.innerHTML = cartStorage.length;
      } else {
        dynamic.innerHTML = "<a href='./login.html'>Login First</a>";
      }

      let footer = document.querySelector("#footer");
      if (cartStorage.length > 0) {
        cart_count.innerHTML = cartStorage.length;
        footer.style.display = "block";
      } else {
        cart_count.style.display = "none";
        footer.style.display = "none";
      }
    });
  });
}
details();

function print() {
  dynamic.innerHTML = "";
  cartStorage.map((e) => {
    dynamic.innerHTML += `<div class="cart-design" id="${e.productId}">
                    <div>
                        <img src="${e.img}" alt="image">
                    </div>
                    <div>
                        <h3>${e.name}</h3>
                        <input type="number">
                    </div>
                    <div>
                        <h4 class="price">${e.price}</h4>
                    </div>
                    <div>
                        <h4 class="sub">${e.price}</h4>
                        <i class="fa-solid fa-trash"></i>
                    </div>
                </div>`;
  });
  del();
}

function del() {
  let trash = document.querySelectorAll(".fa-trash");
  trash.forEach((e) => {
    e.addEventListener("click", () => {
      // console.log(e);
      let parentElement = e.parentElement.parentElement;
      cartStorage = cartStorage.filter((e) => {
        if (parentElement.id != e.productId) {
          return e;
        }
      });
      console.log(cartStorage);
      print();
      grandTotal();

      if (cartStorage.length > 0) {
        cart_count.innerHTML = cartStorage.length;
      } else {
        cart_count.style.display = "none";
        footer.style.display = "none";
      }
    });
  });
}

function subTotal() {
  let sub = document.querySelectorAll(".sub");
  console.log(sub);

  let quantity = document.querySelectorAll(".cart-design > div > input");
  console.log(quantity);

  quantity.forEach((e) => {
    e.value = 1;
    e.addEventListener("input", () => {
      if (e.value < 1) {
        e.value = 1;
      }
      let parentElement = e.parentElement.parentElement;
      let price = parentElement.querySelector(".price");
      let sub = parentElement.querySelector(".sub");

      // console.log(parentElement, price, sub);
      sub.innerHTML = e.value * price.innerHTML;
      grandTotal();
    });
  });
}

function grandTotal() {
  let gt = document.querySelector("#gt");
  let sub = document.querySelectorAll(".sub");
  let sum = 0;

  sub.forEach((e) => {
    let total = parseInt(e.innerHTML);
    sum += total;
  });
  gt.innerHTML = sum;
}
