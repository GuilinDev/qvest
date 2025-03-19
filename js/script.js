/**
 * Qvest Website JavaScript
 * Handles interactive elements and animations
 */

// Mobile Navigation Menu
function showMenu() {
    const navLinks = document.getElementById('navLinks');
    navLinks.style.right = '0';
}

function hideMenu() {
    const navLinks = document.getElementById('navLinks');
    navLinks.style.right = '-200px';
}

// Smooth Scrolling for Navigation Links
document.addEventListener('DOMContentLoaded', function() {
    const navLinks = document.querySelectorAll('nav a');
    
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            
            const targetId = this.getAttribute('href');
            const targetSection = document.querySelector(targetId);
            
            window.scrollTo({
                top: targetSection.offsetTop - 80, // Adjust for header height
                behavior: 'smooth'
            });
            
            // Hide mobile menu if open
            hideMenu();
        });
    });
    
    // Initialize animations
    initAnimations();
    
    // Initialize testimonial slider
    initTestimonialSlider();
});

// Testimonial Slider
let slideIndex = 1;
const testimonials = document.querySelectorAll('.testimonial');
const dots = document.querySelectorAll('.dot');

function initTestimonialSlider() {
    showSlides(slideIndex);
    
    // Auto slide every 5 seconds
    setInterval(() => {
        slideIndex++;
        if (slideIndex > testimonials.length) {
            slideIndex = 1;
        }
        showSlides(slideIndex);
    }, 5000);
}

function currentSlide(n) {
    showSlides(slideIndex = n);
}

function showSlides(n) {
    let i;
    
    if (n > testimonials.length) {
        slideIndex = 1;
    }
    
    if (n < 1) {
        slideIndex = testimonials.length;
    }
    
    // Hide all testimonials
    for (i = 0; i < testimonials.length; i++) {
        testimonials[i].style.display = "none";
    }
    
    // Remove active class from all dots
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }
    
    // Show current testimonial and activate corresponding dot
    testimonials[slideIndex-1].style.display = "block";
    dots[slideIndex-1].className += " active";
}

// Scroll Animation
function initAnimations() {
    const elements = document.querySelectorAll('.service-card, .project-card, .stat-box, .section-header, .about-text, .about-stats');
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('fade-in');
                observer.unobserve(entry.target);
            }
        });
    }, {
        threshold: 0.1
    });
    
    elements.forEach(element => {
        observer.observe(element);
    });
    
    // Add specific animations for hero section
    const heroContent = document.querySelector('.hero-content');
    const heroImage = document.querySelector('.hero-image');
    
    if (heroContent) {
        heroContent.classList.add('slide-in-left');
    }
    
    if (heroImage) {
        heroImage.classList.add('slide-in-right');
    }
}

// Handle form submissions
document.addEventListener('DOMContentLoaded', function() {
    const forms = document.querySelectorAll('form');
    
    forms.forEach(form => {
        form.addEventListener('submit', function(e) {
            e.preventDefault();
            
            // Here would be API call for form submission
            // For now, just show success message
            const submitBtn = this.querySelector('button[type="submit"]');
            const originalText = submitBtn.innerText;
            
            submitBtn.innerText = 'Submitted!';
            submitBtn.disabled = true;
            
            // Reset form and button after 3 seconds
            setTimeout(() => {
                form.reset();
                submitBtn.innerText = originalText;
                submitBtn.disabled = false;
            }, 3000);
        });
    });
}); 