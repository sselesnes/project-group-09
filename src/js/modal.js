document.addEventListener('DOMContentLoaded', () => {
    const body = document.body;
    const mobileMenu = document.querySelector('.mobile-menu');
    const burgerButton = document.querySelector('.burger-menu');
    const closeButton = document.querySelector('.mobile-close');
    const menuLinks = document.querySelectorAll('.mobile-menu .nav-link');

    if (!mobileMenu || !burgerButton || !closeButton) return;

    function toggleMenu() {
        body.classList.toggle('menu-open');
        mobileMenu.classList.toggle('is-open');
    }

    burgerButton.addEventListener('click', toggleMenu);
    closeButton.addEventListener('click', toggleMenu);

    menuLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            const targetId = link.getAttribute('href');
            toggleMenu();
            const targetElement = document.querySelector(targetId);
            if (targetElement) {
                targetElement.scrollIntoView({ behavior: 'smooth' });
            }
        });
    });

    document.addEventListener('click', (e) => {
        if (mobileMenu.classList.contains('is-open') && 
            !mobileMenu.contains(e.target) && 
            !burgerButton.contains(e.target) &&
            !closeButton.contains(e.target)) {
            toggleMenu();
        }
    });
}); 