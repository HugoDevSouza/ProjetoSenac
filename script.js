const btnMobile = document.querySelector('#btn-mobile')

btnMobile.addEventListener('click', toggleMenu)

function toggleMenu(){
    const nav = document.getElementById('nav')

    nav.classList.toggle('active')
}