let authBtn = document.querySelector('.navbar__login')
let modal = document.querySelector('.modal')
let close = document.querySelector('.close-modal')
let overlay = document.querySelector('.overlay')


authBtn.addEventListener(
    'click', function () {
        modal.classList.remove('hidden')
        overlay.classList.remove('hidden')
    }
)
close.addEventListener(
    'click', function () {
        modal.classList.add('hidden')
        overlay.classList.add('hidden')
    }
)

document.addEventListener(
    'keydown', function(i) {
    if (i.key === 'Escape' && !modal.classList.contains('hidden')){
        modal.classList.add('hidden')
        overlay.classList.add('hidden')
        console.log('Escape is working');

    }
   
}
)

