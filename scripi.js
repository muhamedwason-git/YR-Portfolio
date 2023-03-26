const contact = document.querySelector('.call-btn1');

window.addEventListener('scroll', locate);
function locate() {
    if (window.scrollY <= 1970) {
        contact.classList.add("display")
    }else {
        contact.classList.remove("display")
    }
}