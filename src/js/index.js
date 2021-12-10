import { doc } from "prettier";
import "../css/index.css";

// -------------------nav開關控制-------------------

let openbtn = document.getElementById("openbtn");
let closebtn = document.getElementById("closebtn");
let navlist = document.getElementById("navlist");

openbtn.addEventListener("click", () => {
  toggleNav("open");
});

closebtn.addEventListener("click", () => {
  toggleNav("close");
});

function toggleNav(type) {
  if (type == "open") {
    openbtn.classList.remove("show");
    openbtn.classList.add("close");

    closebtn.classList.remove("close");
    closebtn.classList.add("show");

    navlist.classList.add("open");
  } else {
    openbtn.classList.remove("close");
    openbtn.classList.add("show");

    closebtn.classList.remove("show");
    closebtn.classList.add("close");

    navlist.classList.remove("open");
  }
}

// -------------------nav fixed控制-------------------

let navbar = document.getElementById("navbar");

window.addEventListener("scroll", (e) => {
  if (window.scrollY > 500) {
    navbar.classList.add("isfixed");
  } else {
    if (navbar.classList.contains("isfixed")) {
      navbar.classList.remove("isfixed");
    }
  }
});

// -------------------form radio 切換-------------------

let electRadio = document.getElementById("elect");
if (electRadio !== null) {
  let paperRadio = document.getElementById("paper");

  let electInput = document.getElementById("electInput");
  let paperInput = document.getElementById("paperInput");

  electRadio.addEventListener("change", () => {
    electInput.classList.remove("hidden");
    if (!paperInput.classList.contains("hidden")) {
      paperInput.classList.add("hidden");
    }
  });

  paperRadio.addEventListener("change", () => {
    paperInput.classList.remove("hidden");
    if (!electInput.classList.contains("hidden")) {
      electInput.classList.add("hidden");
    }
  });
}
