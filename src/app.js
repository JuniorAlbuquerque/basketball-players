// import 'bootstrap/dist/css/bootstrap.css'

export class App {
  constructor() {
    this.message = 'Hello World!'
    this.postTitle = ''
    this.player = []
  }

  configureRouter(config, router) {
    this.router = router
    config.title = 'Jnr'
    config.map([
      {
        route: ['', 'home'],
        name: 'home',
        moduleId: PLATFORM.moduleName('./presentation/pages/home/index'),
        title: 'Basketball Players',
      },
      {
        route: 'about',
        name: 'about',
        moduleId: PLATFORM.moduleName('./presentation/pages/about/index'),
        title: 'About',
      },
      {
        route: 'post/:id',
        name: 'post',
        moduleId: PLATFORM.moduleName('./presentation/pages/post/index'),
        title: 'Post',
      },
    ])
  }
}
