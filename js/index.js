import { Router } from './router.js'

const homeAnchor = document.querySelector("#home")
const universeAnchor = document.querySelector("#universe")
const explorationAnchor = document.querySelector("#exploration")
const anchors = [homeAnchor, universeAnchor, explorationAnchor]

const router = new Router()
router.add("/", "/pages/home.html")
router.add("/index.html", "/pages/home.html")
router.add("/universe", "/pages/universe.html")
router.add("/exploration", "/pages/exploration.html")
router.add(404, "/pages/404.html")

router.handle()

function updateAnchorStyle() {
    for (const anchor of anchors) {
      anchor.style.fontWeight = "100";
      anchor.style.color = "#8d8d99";
    }
  
    switch (window.location.pathname) {
      case "/":
        homeAnchor.style.fontWeight = "bold";
        homeAnchor.style.color = "#FFF";
        break;
      case "/universe":
        universeAnchor.style.fontWeight = "bold";
        universeAnchor.style.color = "#FFF";
        break;
      case "/exploration":
        explorationAnchor.style.fontWeight = "bold";
        explorationAnchor.style.color = "#FFF";
        break;
      default:
        break;
    }
  }
  
  window.addEventListener("click", (event) => {
    router.route();
    
    if (event.target.tagName == "A" || event.target.tagName == "BUTTON") {
      updateAnchorStyle();
    }
  
  });
  
  updateAnchorStyle();