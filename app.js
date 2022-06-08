const share = document.querySelector('.share')
const shared = document.querySelector('.shared')
const footer = document.querySelector('.footer')
const footerShare = document.querySelector('.footer-share')

share.addEventListener('click', function () {
    if (screen && screen.width < 769) {
        footer.style.display = "none"
        footerShare.style.display = "flex"
    }
})

shared.addEventListener('click', function () {
    if (screen && screen.width < 769) {
    footerShare.style.display = "none"
    footer.style.display = "flex"
    }
    else {
       footer.style.display = footer.style.display === 'none' ? 'flex' : 'none';
    }
})
