export class Router {
  routes = {}

  add(routerName, page) {
    this.route[routerName] = page
  }

  route(event) {
    event = event || window.event
    event.preventDefault()
    window.history.pushState({}, "", event.target.href)
    this.handle()
    this.checkRouter()
  }

  handle() {
    const { pathname } = window.location
    const route = this.route[pathname] || this.route[404]

    fetch(route)
      .then((data) => data.text())
      .then((html) => {
        document.querySelector("#app").innerHTML = html
      })
  }

  checkRouter() {
    const { pathname } = window.location
    const route = this.route[pathname]
    if (route === "/pages/home.html") {
      document.body.style.backgroundImage =
        ' url("/images/mountains-universe-1.png") '
      document.querySelector("#home").classList.add("active")
      document.querySelector("#universe").classList.remove("active")
      document.querySelector("#exploration").classList.remove("active")
    } else if (route === "/pages/universe.html") {
      document.body.style.backgroundImage =
        ' url("/images/mountains-universe02.png") '
      document.querySelector("#universe").classList.add("active")
      document.querySelector("#home").classList.remove("active")
      document.querySelector("#exploration").classList.remove("active")
    } else if (route === "/pages/exploration.html") {
      document.body.style.backgroundImage =
        ' url("/images/mountains-universe-3.png") '
      document.querySelector("#exploration").classList.add("active")
      document.querySelector("#home").classList.remove("active")
      document.querySelector("#universe").classList.remove("active")
    } else {
      document.body.style.backgroundImage =
        ' url("/images/mountains-universe-1.png") '
    }
  }
}

export default new Router()
