// side bar

const menuItems = document.querySelectorAll(".menu-item");

//message

const messagesNotification = document.querySelector("#messages-notification");
const messages = document.querySelector(".messages");
const message = messages.querySelectorAll(".message");
const messageSearch = document.querySelector("#message-search");

// THEME
const theme = document.querySelector("#theme");
const themeModal = document.querySelector(".customize-theme");
const fontSizes = document.querySelectorAll(".choose-size span");
var root = document.querySelector(":root");
const colorPalette = document.querySelectorAll(".choose-color span");

const Bg1 = document.querySelector(".bg-1");
const Bg2 = document.querySelector(".bg-2");
const Bg3 = document.querySelector(".bg-3");

// ========side bar==========

//remove active from all menu item

const changeActiveItem = () => {
  menuItems.forEach((item) => {
    item.classList.remove("active");
  });
};

menuItems.forEach((item) => {
  item.addEventListener("click", () => {
    changeActiveItem();
    item.classList.add("active");

    if (item.id != "notifications") {
      document.querySelector(".notifications-popup").style.display = "none";
    } else {
      document.querySelector(".notifications-popup").style.display = "block";
      document.querySelector(
        "#notifications .notification-count"
      ).style.display = "none";
    }
  });
});

// ===========messages=====================

//searches chats
const searchMessage = () => {
  const val = messageSearch.value.toLowerCase();
  message.forEach((user) => {
    let name = user.querySelector("h5").textContent.toLowerCase();
    if (name.indexOf(val) != -1) {
      user.style.display = "flex";
    } else {
      user.style.display = "none";
    }
  });
};

// searches chat
messageSearch.addEventListener("keyup", searchMessage);

// highlifgt messages card when message mewnu item is clicked
messagesNotification.addEventListener("click", () => {
  messages.style.boxShadow = "0 0 1rem var(--color-primary)";
  messagesNotification.querySelector(".notification-count").style.display =
    "none";

  setTimeout(() => {
    messages.style.boxShadow = "none";
  }, 2000);
});

// theme /display customaztion

// open modal
const openThemeModal = () => {
  themeModal.style.display = "grid";
};

// closes modal

const closeThemeModal = (e) => {
  if (e.target.classList.contains("customize-theme")) {
    themeModal.style.display = "none";
  }
};

// close modal
themeModal.addEventListener("click", closeThemeModal);

theme.addEventListener("click", openThemeModal);

// ...........fonts...........

// remove active class from spans or font size  selector

const removeSizeSelector = () => {
  fontSizes.forEach((size) => {
    size.classList.remove("active");
  });
};

fontSizes.forEach((size) => {
  size.addEventListener("click", () => {
    removeSizeSelector();
    let fontSize;
    size.classList.toggle("active");

    if (size.classList.contains("font-size-1")) {
      fontSize = "10PX";
      root.style.setProperty("--sticky-top-left", "5.4rem");
      root.style.setProperty("--sticky-top-right", "5.4rem");
    } else if (size.classList.contains("font-size-2")) {
      fontSize = "13PX";
      root.style.setProperty("--sticky-top-left", "5.4rem");
      root.style.setProperty("--sticky-top-right", "-7rem");
    } else if (size.classList.contains("font-size-3")) {
      fontSize = "16PX";
      root.style.setProperty("--sticky-top-left", "-2rem");
      root.style.setProperty("--sticky-top-right", "-17rem");
    } else if (size.classList.contains("font-size-4")) {
      fontSize = "19PX";
      root.style.setProperty("--sticky-top-left", "-5rem");
      root.style.setProperty("--sticky-top-right", "-25rem");
    } else if (size.classList.contains("font-size-5")) {
      fontSize = "22PX";
      root.style.setProperty("--sticky-top-left", "-12rem");
      root.style.setProperty("--sticky-top-right", "-35rem");
    }

    document.querySelector("html").style.fontSize = fontSize;
  });
});

// remove active class from colors

const changeActiveColorClass = () => {
  colorPalette.forEach((colorPicker) => {
    colorPicker.classList.remove("active");
  });
};

// change primary color

colorPalette.forEach((color) => {
  color.addEventListener("click", () => {
    let primary;
    // remove active class from colors
    changeActiveColorClass();

    if (color.classList.contains("color-1")) {
      primaryHue = 252;
    } else if (color.classList.contains("color-2")) {
      primaryHue = 52;
    } else if (color.classList.contains("color-3")) {
      primaryHue = 352;
    } else if (color.classList.contains("color-4")) {
      primaryHue = 152;
    } else if (color.classList.contains("color-5")) {
      primaryHue = 202;
    }
    color.classList.add("active");
    root.style.setProperty("--primary-color-hue", primaryHue);
  });
});

// theme background value

let lightColorLightness;
let WhiteColorLightness;
let darkColorLightness;

// change background color
const changeBG = () => {
  root.style.setProperty("--light-color-lightness", lightColorLightness);
  root.style.setProperty("--white-color-lightness", WhiteColorLightness);
  root.style.setProperty("--dark-color-lightness", darkColorLightness);
};

Bg1.addEventListener("click", () => {
  // add active clASS
  Bg1.classList.add("active");
  // remove active class from the other
  Bg2.classList.remove("active");
  Bg3.classList.remove("active");

  //    remove customized changes from local storagr
  window.location.reload();
});

Bg2.addEventListener("click", () => {
  darkColorLightness = "95%";
  WhiteColorLightness = "20%";
  lightColorLightness = "15%";

  // add active clASS
  Bg2.classList.add("active");
  // remove active class from the other
  Bg1.classList.remove("active");
  Bg3.classList.remove("active");

  changeBG();
});

Bg3.addEventListener("click", () => {
  darkColorLightness = "95%";
  WhiteColorLightness = "10%";
  lightColorLightness = "0%";

  // add active clASS
  Bg3.classList.add("active");
  // remove active class from the other
  Bg1.classList.remove("active");
  Bg2.classList.remove("active");

  changeBG();
});
// end
