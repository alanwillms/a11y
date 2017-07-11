var navMenu = document.getElementById('navMenu')
var navBar = document.querySelector('.main-header')
var navItems = document.querySelectorAll('#navMenu a.navbar-item')

document.getElementById('navMenuToggler').onclick = function () {
  navMenu.classList.toggle('is-active')
}

for (var i = 0; i < navItems.length; i++) {
  navItems[i].onclick = function (event) {
    event.preventDefault()
    location.hash = this.getAttribute('href').replace('#', '')
    navMenu.classList.remove('is-active')
    var height = navBar.offsetHeight
    if (height === undefined) {
      height = navBar.clientHeight
    }
    window.scrollTo(0, window.scrollY - height + 2)
  }
}
