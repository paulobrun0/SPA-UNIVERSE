import { Router } from "./router.js"

const router = new Router()

router.add("/", "/pages/home.html")
router.add("/exploration", "/pages/exploration.html")
router.add("/universe", "/pages/universe.html")
router.add(404, "/pages/404.html")

window.onpopstate = () => router.handle()
window.route = () => router.route()
window.onload = () => router.route()
