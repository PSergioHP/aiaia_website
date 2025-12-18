// Swiss I-A Link Interactive Logic

document.addEventListener('DOMContentLoaded', () => {
    initScrollAnimations();
    initHeaderScroll();
    initHeroParallax();
});

function initScrollAnimations() {
    // Select all elements with the 'reveal' class
    const reveals = document.querySelectorAll('.reveal');

    // Intersection Observer to trigger animations when elements come into view
    const revealObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('active');
                // Optional: Stop observing once revealed if you want it to happen only once
                // observer.unobserve(entry.target); 
            }
        });
    }, {
        root: null,
        threshold: 0.15, // Trigger when 15% of the element is visible
        rootMargin: "0px"
    });

    reveals.forEach(reveal => {
        revealObserver.observe(reveal);
    });
}

function initHeaderScroll() {
    const header = document.getElementById('header');
    
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            header.classList.add('scrolled');
        } else {
            header.classList.remove('scrolled');
        }
    });
}

function initHeroParallax() {
    const heroBg = document.querySelector('.hero-bg');
    
    document.addEventListener('mousemove', (e) => {
        // Calculate mouse position relative to center of screen
        const x = (window.innerWidth - e.pageX * 2) / 100;
        const y = (window.innerHeight - e.pageY * 2) / 100;
        
        // Apply subtle transformation to the background
        if (heroBg) {
            heroBg.style.transform = `translateX(${x}px) translateY(${y}px) scale(1.05)`;
        }
    });
}
