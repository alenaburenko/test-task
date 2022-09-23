const burgerIcon = document.getElementById("burger_icon");
const searchIcon = document.getElementById("search_icon");
const closeSearchIcon = document.getElementById("close_search_icon");
const searchBar = document.getElementById("search_bar");
const header = document.getElementById("header");
const closeBurger = document.getElementById("close_burger");
const burgerContainer = document.getElementById("burger-container");
const burgerCont = document.getElementById("contain");
const womenId = document.getElementById("women");
const ourStories = document.createElement("div");
const deliver = document.createElement("p");
const burgerScreen = document.getElementById("burger_screen");
const createHeaderContainer = document.createElement("div");
const login = document.querySelector(".login-switch");
const loginBurger = document.querySelector(".log-burger");
const input = document.querySelector(".input_looking_for");
const search = document.querySelector(".search-icon");
const bgInput = document.querySelector(".input-bg");

searchIcon.addEventListener("click", () => {
  if (searchBar.classList.contains("input-mobile-show")) {
    searchBar.remove();
  } else {
    header.append(searchBar);
  }
  searchBar.classList.toggle("input-mobile-show");
});

burgerIcon.addEventListener("click", () => {
  document.getElementById("overlay").classList.add("burger-opened");
  document.getElementById("burger_screen").classList.add("burger-opened");
});
closeBurger.addEventListener("click", () => {
  document.getElementById("overlay").classList.remove("burger-opened");
  document.getElementById("burger_screen").classList.remove("burger-opened");
});

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
label = true;
login.addEventListener("click", () => {
  if (label) {
    label = false;
    search.style.filter = "brightness(0)";
    bgInput.style.backgroundColor = "#F2F2F2";
    input.className = "inputOtherPlaceHolder";
    document.getElementById("top-side").style.backgroundImage =
      "url(img/hp-oh-hi.png)";
    document.getElementById("header").classList.add("bg-change");
    [...document.querySelectorAll(".text-color")].map((elem) => {
      elem.style.color = "#000";
    });
    login.innerHTML =
      '<div style="color:#000"> Hi, Angels! <span> | </span><a href="#" style="margin-right:25px; font-size:11px;color:#000">Sign out</a> </div>';
    const chest = document.querySelector(".basket-wrap");
    chest.innerHTML =
      '<a href="#" class="basket text-color"><img style="filter: brightness(0);" src="img/basket.png" alt="basket"><img style="margin-left:8px" src="img/Group.png" alt="basket"></a>';
  } else {
    bgInput.style.backgroundColor = "";
    input.className = "input_looking_for";
    input.style.backgroundColor = "";
    label = true;
    [...document.querySelectorAll(".text-color")].map((elem) => {
      elem.style.color = "#FFF";
    });
    search.style.filter = "";
    document.getElementById("header").classList.remove("bg-change");
    document.getElementById("top-side").style.backgroundImage =
      "url(img/9193579.png)";
    login.innerHTML =
      '<a href="#">Sign in</a><span> | </span><a href="#">Register</a>';
    const chest = document.querySelector(".basket-wrap");
    chest.innerHTML =
      '<a href="#" class="basket"><img src="img/basket.png" alt="basket"></a>';
  }
});
loginBurger.addEventListener("click", () => {
  if (label) {
    label = false;
    search.style.filter = "brightness(0)";
    searchIcon.style.filter = "brightness(0)";
    burgerIcon.style.filter = "brightness(0)";
    input.className = "inputOtherPlaceHolder";
    document.getElementById("top-side").style.backgroundImage =
      "url(img/hp-oh-hi.png)";
    document.getElementById("header").classList.add("bg-change");
    [...document.querySelectorAll(".text-color")].map((elem) => {
      elem.style.color = "#000";
    });
    login.innerHTML =
      '<div style="color:#000"> Hi, Angels! <span> | </span><a href="#" style="margin-right:25px; font-size:11px;color:#000">Sign out</a> </div>';
    const chest = document.querySelector(".basket-wrap");
    chest.innerHTML =
      '<a href="#" class="basket"><img style="filter: brightness(0);" src="img/basket.png" alt="basket"><img style="margin-left:8px" src="img/Group.png" alt="basket"></a>';
  } else {
    label = true;
    input.className = "input_looking_for";
    burgerIcon.style.filter = "brightness(1)";
    searchIcon.style.filter = "brightness(1)";
    [...document.querySelectorAll(".text-color")].map((elem) => {
      elem.style.color = "#FFF";
    });
    search.style.filter = "";
    document.getElementById("header").classList.remove("bg-change");
    document.getElementById("top-side").style.backgroundImage =
      "url(img/9193579.png)";

    login.innerHTML =
      '<a href="#">Sign in</a><span> | </span><a href="#">Register</a>';
    const chest = document.querySelector(".basket-wrap");
    chest.innerHTML =
      '<a href="#" class="basket"><img src="img/basket.png" alt="basket"></a>';
  }
});
//////////////////////////////////////////////////////////////////////////////////////////
const womenList = {
  women: [
    { id: "clothing", label: "clothing" },
    { id: "collections", label: "collections" },
    { id: "collabs", label: "collabs" },
    { id: "brands", label: "brands" },
  ],
};
const clothingList = {
  clothing: [
    {
      id: "T-shirts",
      label: "T-shirts",
    },
    {
      id: "Sweatshirts",
      label: "Sweatshirts",
    },
    {
      id: "Knitwear",
      label: "Knitwear",
    },
    {
      id: "Jeans",
      label: "Jeans",
    },
    {
      id: "Jumpsuits",
      label: "Jumpsuits",
    },
    {
      id: "Skirts",
      label: "Skirts",
    },
    {
      id: "Dresses",
      label: "Dresses",
    },
  ],
};

womenId.addEventListener("click", (e) => {
  const list = document.createElement("ul");
  list.id = "list";
  console.log(list);
  console.log(womenId, "womenid");
  function createHeaderNested(nameHeader, arrow) {
    createHeaderContainer.classList.add("view-all");
    createHeaderContainer.innerHTML = `<p>${nameHeader}</p><a href="#" id="ViewAll">View all</a>`;
    burgerScreen.insertBefore(createHeaderContainer, burgerCont);
    document.getElementById("ViewAll").addEventListener("click", (e) => {
      list.remove();
      burgerContainer.style.display = "block";
      createHeaderContainer.textContent = "";
      burgerCont.append(burgerContainer);
      createHeaderContainer.remove();
      deliver.remove();
      ourStories.remove();
    });
    if (arrow) {
      const clothesArrow = document.createElement("img");
      clothesArrow.src = arrow;
      clothesArrow.style.position = "absolute";
      clothesArrow.style.left = "14px";
      console.log(clothesArrow);
      createHeaderContainer.prepend(clothesArrow);
      clothesArrow.addEventListener("click", () => {
        console.log([...list.getElementsByClassName("burger-menu-item-name")]);
        console.log(b);
        b.forEach((e) => {
          e.style.display = "block";
        });
        const burgerSubMenu = document.querySelectorAll(
          ".burger-submenu-item-name"
        );
        burgerSubMenu.forEach((e) => {
          e.style.display = "none";
        });
        clothesArrow.style.display = "none";
        createHeaderContainer.querySelector("p").textContent = "women";
      });
    }
  }
  createHeaderNested("women");
  burgerContainer.style.display = "none";
  const currentListToRender = womenList.women;
  console.log(currentListToRender);
  currentListToRender.forEach((elem) => {
    const listElement = document.createElement("li");
    listElement.classList.add("burger-menu-item-name");
    listElement.id = elem.id;
    listElement.innerHTML = `${elem.label}<span>&#8250;</span>`;
    list.append(listElement);
    ourStories.style.display = "flex";
    ourStories.style.paddingLeft = "36px";
    ourStories.style.backgroundColor = "#F7F7F7";
    ourStories.style.paddingTop = "16px";
    ourStories.style.paddingBottom = "17px";
    ourStories.innerHTML = `<span><img style="padding-right:7px" src="img/location.png" alt="map icon" /></span><span><p>Our stores</p></span>`;
    deliver.textContent = "We deliver Worldwide";
    deliver.classList.add("deliver-burger");
    burgerScreen.append(ourStories, deliver);
  });

  const b = [...list.getElementsByClassName("burger-menu-item-name")];
  b.forEach((e) => {
    e.addEventListener("click", (e) => {
      const currentList = clothingList[e.target.id];
      currentList.forEach((elem) => {
        b.forEach((e) => {
          e.style.display = "none";
        });
        const listEl = document.createElement("li");
        listEl.id = elem.id;
        listEl.innerHTML = `<li class="burger-submenu-item-name" id ="${elem.id}">${elem.label}<span>&#8250;</span></li>`;
        list.append(listEl);
      });
      createHeaderContainer.style.display = "none";
      createHeaderNested("clothing", "img/chevron-right.png");
      createHeaderContainer.style.display = "flex";
    });
  });
  burgerCont.append(list);
});
