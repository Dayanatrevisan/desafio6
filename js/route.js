export class Route {
  routes = {}

  add(routeName, page){
    this.routes[routeName] = page

  }

  route(event) {
    event = event || window.event
    event.preventDefault()
  
    window.history.pushState({}, "", event.target.href)

    this.handle()
  }

  handle() {
    const pathname = window.location.pathname
    const route = this.routes[pathname] || routes[404]
    fetch(route)
    .then(data => data.text())
    .then(html => {
    document.querySelector('#app').innerHTML = html
    })
  }
}

