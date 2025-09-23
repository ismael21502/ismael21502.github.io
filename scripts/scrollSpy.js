document.addEventListener('DOMContentLoaded', function () {
    const sections = document.querySelectorAll('section');
    const navLinks = document.querySelectorAll('.navBar a');

    function scrollSpy() {
        let current = '';
        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            if (window.scrollY >= sectionTop - 200) {
                current = section.getAttribute('id');
            }
        });

        navLinks.forEach(link => {
            link.parentElement.classList.remove('active');
            if (link.getAttribute('href') === "#" + current) {
                link.parentElement.classList.add('active');
            }
        });

        if ((window.innerHeight + window.scrollY) >= document.body.offsetHeight) {
            current = sections[sections.length - 1].getAttribute('id');
        }

        navLinks.forEach(link => {
            link.parentElement.classList.remove('active');
            if (link.getAttribute('href') === "#" + current) {
                link.parentElement.classList.add('active');
            }
        });
    }

    window.addEventListener('scroll', scrollSpy);
    scrollSpy();

});