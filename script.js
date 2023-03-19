document.querySelector('.burger-menu').addEventListener('click', function () {
    this.classList.toggle('active');
    document.querySelector('.header-flex-nav').classList.toggle('open');
})