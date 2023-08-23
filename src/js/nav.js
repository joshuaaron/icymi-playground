const navLinks = document.querySelectorAll('[data-navLink');
navLinks.forEach((link) => {
    if (link.getAttribute('href') === window.location.pathname) {
        link.setAttribute('aria-current', 'page');
    } else {
        link.removeAttribute('aria-current');
    }
});
