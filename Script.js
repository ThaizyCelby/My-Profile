// Mobile Navigation Toggle
const hamburger = document.getElementById('hamburger');
const navLinks = document.querySelector('.nav-links');
const navLinksItems = document.querySelectorAll('.nav-link');

hamburger.addEventListener('click', () => {
    navLinks.classList.toggle('active');
    hamburger.innerHTML = navLinks.classList.contains('active') 
        ? '<i class="fas fa-times"></i>' 
        : '<i class="fas fa-bars"></i>';
});

// Close mobile menu when clicking a link
navLinksItems.forEach(link => {
    link.addEventListener('click', () => {
        navLinks.classList.remove('active');
        hamburger.innerHTML = '<i class="fas fa-bars"></i>';
    });
});

// Update active nav link on scroll
const sections = document.querySelectorAll('section[id]');

window.addEventListener('scroll', () => {
    // Update active nav link
    let current = '';
    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        if (scrollY >= sectionTop - 200) {
            current = section.getAttribute('id');
        }
    });

    navLinksItems.forEach(item => {
        const href = item.getAttribute('href').replace('#', '');
        if (href === current) {
            item.style.color = 'var(--primary)';
            item.style.fontWeight = '600';
        } else {
            item.style.color = '';
            item.style.fontWeight = '';
        }
    });
    
    // Update header shadow
    const header = document.getElementById('header');
    if (window.scrollY > 10) {
        header.style.boxShadow = '0 4px 12px rgba(0, 0, 0, 0.08)';
    } else {
        header.style.boxShadow = '0 2px 10px rgba(0, 0, 0, 0.05)';
    }
});

// Smooth scroll for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        
        const targetId = this.getAttribute('href');
        if (targetId === '#') return;
        
        const targetElement = document.querySelector(targetId);
        if (targetElement) {
            window.scrollTo({
                top: targetElement.offsetTop - 80,
                behavior: 'smooth'
            });
        }
    });
});

// Form submission for employers
document.getElementById('contactForm').addEventListener('submit', function(e) {
    e.preventDefault();
    
    // Get form values
    const name = document.getElementById('name').value;
    const company = document.getElementById('company').value;
    const position = document.getElementById('position').value;
    
    // Show success message (in a real application, you would send this to a server)
    alert(`Thank you, ${name} from ${company}. I appreciate your interest in me for the ${position} position. I'll contact you within 24 hours to discuss further.`);
    
    // Reset form
    this.reset();
});

// Make availability badge pulse on page load
window.addEventListener('load', () => {
    const badge = document.querySelector('.profile-badge');
    setTimeout(() => {
        badge.style.animation = 'pulse 2s infinite';
    }, 1000);
    
    // Check if profile image loads
    const profileImage = document.getElementById('profileImage');
    profileImage.onerror = function() {
        this.style.display = 'none';
        document.getElementById('imagePlaceholder').style.display = 'flex';
    };
});


// Close modal when clicking outside
document.getElementById('photoModal').addEventListener('click', function(e) {
    if (e.target === this) {
        closeModal();
    }
});

// Keyboard shortcuts
document.addEventListener('keydown', function(e) {
    if (e.key === 'Escape') {
        closeModal();
    }
});