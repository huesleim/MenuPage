import home from "./pages/home";
import menu from "./pages/menu";
import contact from "./pages/contact";

import "./styles.css";

const homeBtn = document.getElementById("home");
const menuBtn = document.getElementById("menu");
const contactBtn = document.getElementById("contact");


homeBtn.addEventListener("click", home);
menuBtn.addEventListener("click", menu);
contactBtn.addEventListener("click", contact);


home();
