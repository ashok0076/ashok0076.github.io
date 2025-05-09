// Motivational quotes for loader
const quotes = [
    "JUST DO IT",
    "MAKE IT HAPPEN",
    "DREAM BIGGER",
    "PUSH YOUR LIMITS",
    "BREAK BARRIERS",
    "STAY FOCUSED",
    "BE LEGENDARY",
    "NEVER GIVE UP",
    "GO BEYOND",
    "RISE AND GRIND"
];

// Modern animation classes for loader
const animations = [
    'fade-up',
    'slide-in',
    'scale-in',
    'blur-in'
];

document.addEventListener('DOMContentLoaded', function() {
    // Initialize AOS but disable it initially
    AOS.init({
        disable: true,
        duration: 800,
        easing: 'cubic-bezier(0.4, 0, 0.2, 1)',
        once: true
    });

    // Handle loader with random quote and animation
    const loader = document.querySelector('.loader');
    const loaderText = document.querySelector('.loader-text');
    
    if (loader && loaderText) {
        // Select random quote and animation
        const randomQuote = quotes[Math.floor(Math.random() * quotes.length)];
        const randomAnimation = animations[Math.floor(Math.random() * animations.length)];
        
        // Set quote and animation
        loaderText.textContent = randomQuote;
        loaderText.classList.add(randomAnimation);
        
        setTimeout(() => {
            loader.classList.add('fade-out');
            setTimeout(() => {
                loader.style.display = 'none';
                // Enable and refresh AOS after loader is gone
                AOS.init({
                    disable: false,
                    duration: 800,
                    easing: 'cubic-bezier(0.4, 0, 0.2, 1)',
                    once: true,
                    startEvent: 'load'
                });
                // Force AOS to refresh
                AOS.refresh();
            }, 300);
        }, 800);
    }

    // Mobile menu functionality
    const hamburger = document.querySelector('.hamburger');
    const navLinks = document.querySelector('.nav-links');
    
    if (hamburger && navLinks) {
        hamburger.addEventListener('click', () => {
            navLinks.classList.toggle('active');
            hamburger.classList.toggle('active');
        });
    }

    // Close mobile menu when clicking a link
    const links = document.querySelectorAll('.nav-links a');
    links.forEach(link => {
        link.addEventListener('click', () => {
            navLinks.classList.remove('active');
            hamburger.classList.remove('active');
        });
    });
});

// Typing effect text content
const typingTexts = [
    "AI | DS | ML Enthusiast",
    "Discord Bots & Backend Developer",
    "Love to learn new things",
    "Interested in new projects"
];

// Typing effect implementation
let textIndex = 0;
let charIndex = 0;
let isDeleting = false;
const typingDelay = 100;
const erasingDelay = 50;
const newTextDelay = 2000;

function typeEffect() {
    const typingElement = document.querySelector('.typing-text');
    if (!typingElement) return;

    const currentText = typingTexts[textIndex];

    if (isDeleting) {
        typingElement.textContent = currentText.substring(0, charIndex - 1);
        charIndex--;
    } else {
        typingElement.textContent = currentText.substring(0, charIndex + 1);
        charIndex++;
    }

    if (!isDeleting && charIndex === currentText.length) {
        isDeleting = true;
        setTimeout(() => typeEffect(), newTextDelay);
    } else if (isDeleting && charIndex === 0) {
        isDeleting = false;
        textIndex = (textIndex + 1) % typingTexts.length;
        setTimeout(() => typeEffect(), typingDelay);
    } else {
        setTimeout(() => typeEffect(), isDeleting ? erasingDelay : typingDelay);
    }
}

// Start typing effect after loader disappears
setTimeout(() => {
    typeEffect();
}, 2000);

// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            // Close mobile menu if open
            if (navLinks.classList.contains('active')) {
                navLinks.classList.remove('active');
                const spans = hamburger.querySelectorAll('span');
                spans[0].style.transform = '';
                spans[1].style.opacity = '1';
                spans[2].style.transform = '';
            }

            // Smooth scroll to target
            const headerOffset = 80;
            const elementPosition = target.getBoundingClientRect().top;
            const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

            window.scrollTo({
                top: offsetPosition,
                behavior: 'smooth'
            });
        }
    });
});

// Contact Form Handling
const contactForm = document.getElementById('contact-form');
if (contactForm) {
    contactForm.addEventListener('submit', (e) => {
        e.preventDefault();
        // Add your form handling logic here
        // For now, we'll just show an alert
        alert('Thank you for your message! I will get back to you soon.');
        contactForm.reset();
    });
}

// Scroll to top button
const scrollToTop = () => {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
};

// Navbar scroll behavior
let lastScroll = 0;
const navbar = document.querySelector('.navbar');
const scrollThreshold = 50;

window.addEventListener('scroll', () => {
    const currentScroll = window.pageYOffset;
    
    if (currentScroll <= 0) {
        navbar.style.transform = 'translateY(0)';
        navbar.style.background = 'rgba(255, 255, 255, 0.98)';
        return;
    }
    
    if (currentScroll > lastScroll && currentScroll > scrollThreshold) {
        // Scrolling down & past threshold
        navbar.style.transform = 'translateY(-100%)';
    } else {
        // Scrolling up
        navbar.style.transform = 'translateY(0)';
        navbar.style.background = 'rgba(255, 255, 255, 0.98)';
    }
    lastScroll = currentScroll;
});

// Active link highlighting
function setActiveLink() {
    const sections = document.querySelectorAll('section');
    const navLinks = document.querySelectorAll('.nav-links a');
    
    let current = '';
    
    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        if (window.pageYOffset >= sectionTop - 150) {
            current = section.getAttribute('id');
        }
    });
    
    navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href').substring(1) === current) {
            link.classList.add('active');
        }
    });
}

window.addEventListener('scroll', setActiveLink);
window.addEventListener('load', setActiveLink); 