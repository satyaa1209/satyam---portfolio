
// ================= SMOOTH SCROLL =================

document.querySelectorAll('a[href^="#"]').forEach(link => {

    link.addEventListener('click', function(e) {

        const target = document.querySelector(this.getAttribute('href'));

        if (target) {
            e.preventDefault();

            target.scrollIntoView({
                behavior: 'smooth'
            });
        }

    });

});


// ================= NAVBAR SCROLL EFFECT =================

window.addEventListener('scroll', function() {

    const header = document.querySelector('header');

    if (window.scrollY > 50) {
        header.style.boxShadow = '0 5px 25px rgba(0,0,0,0.3)';
    } else {
        header.style.boxShadow = 'none';
    }

});


// ================= CURRENT YEAR =================

const footerText = document.querySelector('footer p');

if (footerText) {
    footerText.textContent =
        `© ${new Date().getFullYear()} Satyam Rawat. All Rights Reserved.`;
}


// ================= REVEAL ANIMATION =================

const sections = document.querySelectorAll('.section, .hero-content, .hero-image');

const observer = new IntersectionObserver((entries) => {

    entries.forEach(entry => {

        if (entry.isIntersecting) {

            entry.target.classList.add('show');

            observer.unobserve(entry.target);

        }

    });

}, {
    threshold: 0.15
});

sections.forEach(section => {

    section.classList.add('reveal');

    observer.observe(section);

});
