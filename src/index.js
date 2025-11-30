import "./css/main.css";
import renderProjects from "./cards.js";
import bsImg from "./assets/photos/battleship.png";
import libImg from "./assets/photos/library.png";
import admImg from "./assets/photos/dashboard.png";
import sketchImg from "./assets/photos/sketch.png";
import listImg from "./assets/photos/todo.png";
const projects = [
  {
    title: "Battleship Game",
    description: "A classic Battleship game built for the browser.",
    img: bsImg,
    repoUrl: "https://github.com/nimbusphagia/Battleship",
    pagesUrl: "https://nimbusphagia.github.io/Battleship/"
  },
  {
    title: "Library Manager",
    description: "A simple web-based personal library manager.",
    img: libImg,
    repoUrl: "https://github.com/nimbusphagia/library",
    pagesUrl: "https://nimbusphagia.github.io/library/"
  },
  {
    title: "Admin Dashboard",
    description: "A clean, interactive dashboard web app template.",
    img: admImg,
    repoUrl: "https://github.com/nimbusphagia/admin-dashboard",
    pagesUrl: "https://nimbusphagia.github.io/admin-dashboard/"
  },
  {
    title: "To-do list",
    description: "A lightweight to-do list app.",
    img: listImg,
    repoUrl: "https://github.com/nimbusphagia/to-do-list",
    pagesUrl: "https://nimbusphagia.github.io/to-do-list/"
  },

  {
    title: "Etch a Sketch",
    description: "A browser-based drawing toy.",
    img: sketchImg,
    repoUrl: "https://github.com/nimbusphagia/etch-a-sketch",
    pagesUrl: "https://nimbusphagia.github.io/etch-a-sketch/"
  }]
renderProjects(projects);
