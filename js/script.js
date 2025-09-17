
    // Dark Mode Toggle Functionality
    /* function toggleDarkMode() {
        const body = document.body;
        const toggleIcon = document.getElementById('toggleIcon');
        const toggleText = document.getElementById('toggleText');
        
        if (body.getAttribute('data-theme') === 'light') {
            // Switch to dark mode
            body.setAttribute('data-theme', 'dark');
            toggleIcon.className = 'fas fa-moon toggle-icon';
            toggleText.textContent = 'Dark';
            localStorage.setItem('theme', 'dark');
        } else {
            // Switch to light mode
            body.setAttribute('data-theme', 'light');
            toggleIcon.className = 'fas fa-sun toggle-icon';
            toggleText.textContent = 'Light';
            localStorage.setItem('theme', 'light');
        }
    } */

    // Initialize theme on page load
    /* function initializeTheme() {
        const savedTheme = localStorage.getItem('theme');
        const body = document.body;
        const toggleIcon = document.getElementById('toggleIcon');
        const toggleText = document.getElementById('toggleText');
        
        if (savedTheme === 'light') {
            body.setAttribute('data-theme', 'light');
            toggleIcon.className = 'fas fa-sun toggle-icon';
            toggleText.textContent = 'Light';
        } else {
            body.setAttribute('data-theme', 'dark');
            toggleIcon.className = 'fas fa-moon toggle-icon';
            toggleText.textContent = 'Dark';
        }
    } */

    // Toggle theme when pill switch is clicked
    function toggleDarkMode() {
        const body = document.body;
        if (body.getAttribute('data-theme') === 'light') {
            body.setAttribute('data-theme', 'dark');
            localStorage.setItem('theme', 'dark');
        } else {
            body.setAttribute('data-theme', 'light');
            localStorage.setItem('theme', 'light');
        }
    }

    // Set theme on load (no need to update any icon or label)
    function initializeTheme() {
        const savedTheme = localStorage.getItem('theme');
        const body = document.body;
        if (savedTheme === 'light') {
            body.setAttribute('data-theme', 'light');
        } else {
            body.setAttribute('data-theme', 'dark');
        }
    }

    // Attach to the switch
    document.addEventListener('DOMContentLoaded', function () {
        initializeTheme();
        document.getElementById('themeToggle').addEventListener('click', toggleDarkMode);
    });


    // Initialize theme when page loads
    document.addEventListener('DOMContentLoaded', initializeTheme);

    // Smooth scrolling for navigation links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });

    // Fade in animation on scroll
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('show');
            }
        });
    }, observerOptions);

    document.querySelectorAll('.fade-in').forEach(el => {
        observer.observe(el);
    });

    // Skill card toggle functionality
    // function toggleSkill(card) {
    //     // Close all other skill cards
    //     document.querySelectorAll('.skill-card').forEach(otherCard => {
    //         if (otherCard !== card) {
    //             otherCard.classList.remove('active');
    //         }
    //     });
        
    //     // Toggle current card
    //     card.classList.toggle('active');
    // }

    // Contact form handling
    document.getElementById('contactForm').addEventListener('submit', function(e) {
        e.preventDefault();
        
        const name = document.getElementById('name').value;
        const email = document.getElementById('email').value;
        const message = document.getElementById('message').value;
        
        // Basic validation
        if (!name || !message || !contact ) {
            alert('Please fill in all fields.');
            return;
        }

        // Remove the required field
        // if (!isValidEmail(email)) { 
        //     alert('Please enter a valid email address.');
        //     return;
        // }
        
        // Simulate form submission
        const button = this.querySelector('button[type="submit"]');
        const originalText = button.innerHTML;
        button.innerHTML = '<i class="fas fa-spinner fa-spin me-2"></i>Sending...';
        button.disabled = true;
        
        setTimeout(() => {
            alert('Thank you for your message! I\'ll get back to you soon.');
            this.reset();
            button.innerHTML = originalText;
            button.disabled = false;
        }, 2000);
    });

    function isValidEmail(email) {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(email);
    }

    // Download resume function
    function downloadResume() {
        // In a real scenario, this would download an actual PDF file
        alert('Resume download would start here. Please replace with actual PDF link.');
    }

    // Navbar background change on scroll
    window.addEventListener('scroll', function() {
        const navbar = document.querySelector('.navbar');
        const currentTheme = document.body.getAttribute('data-theme');
        
        if (window.scrollY > 50) {
            if (currentTheme === 'light') {
                navbar.style.backgroundColor = 'rgba(235, 226, 224, 0.98)';
            } else {
                navbar.style.backgroundColor = 'rgba(26, 26, 26, 0.98)';
            }
        } else {
            if (currentTheme === 'light') {
                navbar.style.backgroundColor = 'rgba(235, 226, 224, 0.95)';
            } else {
                navbar.style.backgroundColor = 'rgba(26, 26, 26, 0.95)';
            }
        }
    });

    // Mobile menu toggle functionality
    function toggleMobileMenu() {
        const overlay = document.getElementById('mobileMenuOverlay');
        const hamburgerLines = document.querySelectorAll('.hamburger-line');
        
        overlay.classList.toggle('active');
        
        // Animate hamburger to X
        if (overlay.classList.contains('active')) {
            hamburgerLines[0].style.transform = 'rotate(45deg) translate(5px, 5px)';
            hamburgerLines[1].style.opacity = '0';
            hamburgerLines[2].style.transform = 'rotate(-45deg) translate(7px, -6px)';
            document.body.style.overflow = 'hidden';
        } else {
            hamburgerLines[0].style.transform = 'none';
            hamburgerLines[1].style.opacity = '1';
            hamburgerLines[2].style.transform = 'none';
            document.body.style.overflow = 'auto';
        }
    }

    // Close mobile menu when clicking outside
    document.getElementById('mobileMenuOverlay').addEventListener('click', function(e) {
        if (e.target === this) {
            toggleMobileMenu();
        }
    });

    // Close mobile menu on escape key
    document.addEventListener('keydown', function(e) {
        if (e.key === 'Escape') {
            const overlay = document.getElementById('mobileMenuOverlay');
            if (overlay.classList.contains('active')) {
                toggleMobileMenu();
            }
        }
    });

    // Initialize typing animation
    window.addEventListener('load', function() {
        const typingElement = document.querySelector('.typing-animation');
        if (typingElement) {
            setTimeout(() => {
                typingElement.style.borderRight = 'none';
            }, 3000);
        }
    });

    const scriptURL = 'https://script.google.com/macros/s/AKfycbzkKavwlzwW7shVVF8SheLisjpHZ_sJlk6FM8Xwx3AiFW8MlipC1ppQbjfd5QMfUwOm/exec'
    const form = document.forms['submit-to-google-sheet']

    form.addEventListener('submit', e => {
        e.preventDefault()
        fetch(scriptURL, { method: 'POST', body: new FormData(form) })
            .then(response => console.log('Success!', response))
            .catch(error => console.error('Error!', error.message))
    })

    // Get today's date in YYYY-MM-DD format
    const today = new Date().toISOString().split('T')[0];
    
    // Set it as the hidden input value
    document.getElementById("submissionDate").value = today;