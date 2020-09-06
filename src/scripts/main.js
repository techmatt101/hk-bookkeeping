function smoothScrollLink(e) {
    e.preventDefault();
    document.querySelector(this.getAttribute('href'))
        .scrollIntoView({
            behavior: 'smooth'
        });
}

window.addEventListener('load', () => {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', smoothScrollLink);
    });
});
