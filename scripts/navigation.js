document.addEventListener('DOMContentLoaded', () => initMenuToggle());

function initMenuToggle() {
    const menuButton = document.getElementById('menuButton');
    const menuOverlay = document.querySelector('.menuOverlay');
    const menuLinks = document.querySelectorAll('.menu a');

    if (!menuButton || !menuOverlay || !menuLinks) return;

    menuButton.addEventListener('click', () => {
        menuOverlay.classList.toggle('active');
    });

    menuOverlay.addEventListener('click', (event) => {
        if (event.target === menuOverlay) {
            menuOverlay.classList.remove('active');
        }
    });

    menuLinks.forEach(link => {
        link.addEventListener('click', () => {
            menuOverlay.classList.remove('active');
        });
    });
}