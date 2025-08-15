// Portfolio JavaScript - Enhanced functionality

// Loading screen and initialization

document.addEventListener('DOMContentLoaded', function() {
    // Hide loading screen after animation
    setTimeout(() => {
        const loadingScreen = document.getElementById('loading-screen');
        loadingScreen.classList.add('fade-out');
        
        setTimeout(() => {
            loadingScreen.style.display = 'none';
            document.body.style.overflow = 'visible';
        }, 1000);
    }, 3000);

    // Initialize all functionality
    initializeNavigation();
    initializeScrollAnimations();
    initializeContactForm();
    initializeResumeDownload();
    initializeSmoothScrolling();
});

// Navigation functionality
function initializeNavigation() {
    const navToggle = document.querySelector('.nav-toggle');
    const navLinks = document.querySelector('.nav-links');
    
    // Mobile menu toggle
    if (navToggle) {
        navToggle.addEventListener('click', () => {
            navLinks.classList.toggle('active');
            navToggle.classList.toggle('active');
        });
    }

    // Close mobile menu when clicking on a link
    const navItems = document.querySelectorAll('.nav-links a');
    navItems.forEach(item => {
        item.addEventListener('click', () => {
            navLinks.classList.remove('active');
            navToggle.classList.remove('active');
        });
    });

    // Active navigation highlight
    window.addEventListener('scroll', updateActiveNavigation);
}

// Update active navigation item based on scroll position
function updateActiveNavigation() {
    const sections = document.querySelectorAll('section[id]');
    const navItems = document.querySelectorAll('.nav-links a');
    
    let current = '';
    
    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        if (scrollY >= sectionTop - 200) {
            current = section.getAttribute('id');
        }
    });

    navItems.forEach(item => {
        item.classList.remove('active');
        if (item.getAttribute('href').slice(1) === current) {
            item.classList.add('active');
        }
    });
}

// Smooth scrolling for navigation links
function initializeSmoothScrolling() {
    const navLinks = document.querySelectorAll('a[href^="#"]');
    
    navLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            
            const targetId = link.getAttribute('href');
            const targetSection = document.querySelector(targetId);
            
            if (targetSection) {
                const offsetTop = targetSection.offsetTop - 80;
                
                window.scrollTo({
                    top: offsetTop,
                    behavior: 'smooth'
                });
            }
        });
    });
}

// Scroll animations
function initializeScrollAnimations() {
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('animate-on-scroll');
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);

    // Observe all sections and cards
    const elementsToAnimate = document.querySelectorAll(
        '.section, .project-card, .skill-category, .timeline-item, .contact-card, .stat-item'
    );
    
    elementsToAnimate.forEach(el => {
        observer.observe(el);
    });
}

// Contact form functionality
function initializeContactForm() {
    const contactForm = document.getElementById('contact-form');
    
    if (contactForm) {
        contactForm.addEventListener('submit', handleFormSubmission);
    }
}

// Handle form submission with validation and email sending
async function handleFormSubmission(e) {
    e.preventDefault();
    
    const form = e.target;
    const formData = new FormData(form);
    const submitBtn = form.querySelector('button[type="submit"]');
    
    // Show loading state
    const originalText = submitBtn.innerHTML;
    submitBtn.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Sending...';
    submitBtn.disabled = true;
    
    try {
        // Validate form data
        const formObject = Object.fromEntries(formData);
        if (!validateFormData(formObject)) {
            throw new Error('Please fill all required fields correctly');
        }
        
        // Validate phone number
        if (!validatePhoneNumber(formObject.phone)) {
            throw new Error('Please enter a valid phone number');
        }
        
        // Send email using EmailJS or mailto
        await sendEmail(formObject);
        
        // Show success message
        showMessage('Message sent successfully! I\'ll get back to you soon.', 'success');
        form.reset();
        
    } catch (error) {
        console.error('Form submission error:', error);
        showMessage(error.message || 'Failed to send message. Please try again.', 'error');
    } finally {
        // Restore button state
        submitBtn.innerHTML = originalText;
        submitBtn.disabled = false;
    }
}

// Validate form data
function validateFormData(data) {
    const required = ['name', 'email', 'phone', 'subject', 'message'];
    
    for (const field of required) {
        if (!data[field] || data[field].trim().length === 0) {
            return false;
        }
    }
    
    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(data.email)) {
        return false;
    }
    
    return true;
}

// Validate phone number (Indian format)
function validatePhoneNumber(phone) {
    // Remove all non-digit characters
    const cleanPhone = phone.replace(/\D/g, '');
    const indianMobileRegex = /^(?:\+91|91)?[6-9]\d{9}$/;

    return indianMobileRegex.test(cleanPhone);
}

// Send email function
async function sendEmail(formData) {
    // Create mailto URL with form data
    const subject = encodeURIComponent(`Portfolio Contact: ${formData.subject}`);
    const body = encodeURIComponent(`
Name: ${formData.name}
Email: ${formData.email}
Phone: ${formData.phone}
Subject: ${formData.subject}

Message:
${formData.message}

---
Sent from Portfolio Contact Form
    `);
    
    const mailtoUrl = `mailto:gshreshtha7698@gmail.com?subject=${subject}&body=${body}`;
    
    // Open default email client
    window.location.href = mailtoUrl;
    
    // Simulate successful sending for demo purposes
    return new Promise((resolve) => {
        setTimeout(resolve, 1000);
    });
}

// Show success/error messages
function showMessage(message, type) {
    // Remove existing messages
    const existingMessages = document.querySelectorAll('.success-message, .error-message');
    existingMessages.forEach(msg => msg.remove());
    
    // Create new message element
    const messageDiv = document.createElement('div');
    messageDiv.className = `${type}-message`;
    messageDiv.textContent = message;
    
    // Add to form container
    const formContainer = document.querySelector('.contact-form-container');
    formContainer.appendChild(messageDiv);
    
    // Show message with animation
    setTimeout(() => {
        messageDiv.classList.add('show');
    }, 100);
    
    // Remove message after 5 seconds
    setTimeout(() => {
        messageDiv.classList.remove('show');
        setTimeout(() => messageDiv.remove(), 300);
    }, 5000);
}

// Resume download functionality (for your existing PDF file)
function initializeResumeDownload() {
    const downloadBtn = document.getElementById('download-resume');
    
    if (downloadBtn) {
        downloadBtn.addEventListener('click', (e) => {
            e.preventDefault();
            downloadResume();
        });
    }
}

function downloadResume() {
    // Correct relative path to the PDF
    const resumePath = 'shreshtha-resume.pdf';
    
    // Create download link
    const link = document.createElement('a');
    link.href = resumePath;
    link.download = 'shreshtha-resume.pdf';
    
    // Trigger download
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
}

// Initialize the download button
initializeResumeDownload();
// Utility functions
function debounce(func, wait) {
    let timeout;
    return function executedFunction(...args) {
        const later = () => {
            clearTimeout(timeout);
            func(...args);
        };
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
    };
}

// Add scroll event listener with debouncing
window.addEventListener('scroll', debounce(() => {
    updateActiveNavigation();
    
    // Add navbar background on scroll
    const navbar = document.getElementById('navbar');
    if (window.scrollY > 100) {
        navbar.style.background = 'rgba(12, 12, 12, 0.95)';
    } else {
        navbar.style.background = 'rgba(12, 12, 12, 0.9)';
    }
}, 10));

// Add loading states and error handling
window.addEventListener('error', function(e) {
    console.error('JavaScript error:', e.error);
});

// Add keyboard navigation support
document.addEventListener('keydown', function(e) {
    // ESC key to close mobile menu
    if (e.key === 'Escape') {
        const navLinks = document.querySelector('.nav-links');
        const navToggle = document.querySelector('.nav-toggle');
        if (navLinks.classList.contains('active')) {
            navLinks.classList.remove('active');
            navToggle.classList.remove('active');
        }
    }
});

// Performance optimization - lazy load images if any are added later
function lazyLoadImages() {
    const images = document.querySelectorAll('img[data-src]');
    const imageObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const img = entry.target;
                img.src = img.dataset.src;
                img.classList.remove('lazy');
                imageObserver.unobserve(img);
            }
        });
    });

    images.forEach(img => imageObserver.observe(img));
}

// Initialize lazy loading when DOM is ready
document.addEventListener('DOMContentLoaded', lazyLoadImages);

// Add typing animation for hero subtitle
function initializeTypingAnimation() {
    const subtitle = document.querySelector('.hero-subtitle');
    if (subtitle) {
        const originalText = subtitle.textContent;
        subtitle.textContent = '';
        
        let i = 0;
        const typeWriter = () => {
            if (i < originalText.length) {
                subtitle.textContent += originalText.charAt(i);
                i++;
                setTimeout(typeWriter, 100);
            }
        };
        
        // Start typing animation after loading screen
        setTimeout(() => {
            typeWriter();
        }, 4000);
    }
}

// Initialize typing animation
document.addEventListener('DOMContentLoaded', function() {
    setTimeout(() => {
        initializeTypingAnimation();
    }, 3500);
});

// Add particle animation background (optional enhancement)
function createParticleBackground() {
    const canvas = document.createElement('canvas');
    canvas.style.position = 'fixed';
    canvas.style.top = '0';
    canvas.style.left = '0';
    canvas.style.width = '100%';
    canvas.style.height = '100%';
    canvas.style.pointerEvents = 'none';
    canvas.style.zIndex = '-1';
    canvas.style.opacity = '0.1';
    
    document.body.appendChild(canvas);
    
    const ctx = canvas.getContext('2d');
    let particles = [];
    
    function resizeCanvas() {
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
    }
    
    function createParticles() {
        for (let i = 0; i < 50; i++) {
            particles.push({
                x: Math.random() * canvas.width,
                y: Math.random() * canvas.height,
                vx: (Math.random() - 0.5) * 0.5,
                vy: (Math.random() - 0.5) * 0.5,
                size: Math.random() * 2 + 1
            });
        }
    }
    
    function updateParticles() {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        ctx.fillStyle = '#8b5cf6';
        
        particles.forEach(particle => {
            particle.x += particle.vx;
            particle.y += particle.vy;
            
            if (particle.x < 0 || particle.x > canvas.width) particle.vx *= -1;
            if (particle.y < 0 || particle.y > canvas.height) particle.vy *= -1;
            
            ctx.beginPath();
            ctx.arc(particle.x, particle.y, particle.size, 0, Math.PI * 2);
            ctx.fill();
        });
        
        requestAnimationFrame(updateParticles);
    }
    
    resizeCanvas();
    createParticles();
    updateParticles();
    
    window.addEventListener('resize', () => {
        resizeCanvas();
        particles = [];
        createParticles();
    });
}

// Initialize particle background (uncomment to enable)
// document.addEventListener('DOMContentLoaded', createParticleBackground);

// Add enhanced scroll reveal animations
function enhancedScrollAnimations() {
    const revealElements = document.querySelectorAll('.skill-tag, .project-card, .timeline-item');
    
    const revealObserver = new IntersectionObserver((entries) => {
        entries.forEach((entry, index) => {
            if (entry.isIntersecting) {
                setTimeout(() => {
                    entry.target.style.opacity = '1';
                    entry.target.style.transform = 'translateY(0)';
                }, index * 100);
                revealObserver.unobserve(entry.target);
            }
        });
    }, { threshold: 0.1 });
    
    revealElements.forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(20px)';
        el.style.transition = 'all 0.6s ease-out';
        revealObserver.observe(el);
    });
}

// Initialize enhanced animations
document.addEventListener('DOMContentLoaded', enhancedScrollAnimations);

// Add theme toggle functionality (bonus feature)
function initializeThemeToggle() {
    const themeToggle = document.createElement('button');
    themeToggle.innerHTML = '<i class="fas fa-moon"></i>';
    themeToggle.className = 'theme-toggle';
    themeToggle.style.cssText = `
        position: fixed;
        top: 50%;
        right: 20px;
        transform: translateY(-50%);
        background: rgba(139, 92, 246, 0.2);
        border: 2px solid #8b5cf6;
        color: #8b5cf6;
        width: 50px;
        height: 50px;
        border-radius: 50%;
        cursor: pointer;
        transition: all 0.3s ease;
        z-index: 1000;
        font-size: 1.2rem;
    `;
    
    themeToggle.addEventListener('mouseover', () => {
        themeToggle.style.background = '#8b5cf6';
        themeToggle.style.color = 'white';
    });
    
    themeToggle.addEventListener('mouseout', () => {
        themeToggle.style.background = 'rgba(139, 92, 246, 0.2)';
        themeToggle.style.color = '#8b5cf6';
    });
    
    // Toggle between light and dark themes (currently using dark theme)
    themeToggle.addEventListener('click', () => {
        document.body.classList.toggle('light-theme');
        const icon = themeToggle.querySelector('i');
        icon.className = document.body.classList.contains('light-theme') 
            ? 'fas fa-sun' 
            : 'fas fa-moon';
    });
    
    document.body.appendChild(themeToggle);
}

// Initialize theme toggle (uncomment to enable)
// document.addEventListener('DOMContentLoaded', initializeThemeToggle);

// Add page loading progress bar
function initializeProgressBar() {
    const progressBar = document.createElement('div');
    progressBar.className = 'scroll-progress';
    progressBar.style.cssText = `
        position: fixed;
        top: 0;
        left: 0;
        width: 0%;
        height: 4px;
        background: linear-gradient(45deg, #6366f1, #8b5cf6, #ec4899);
        z-index: 10000;
        transition: width 0.3s ease;
    `;
    
    document.body.appendChild(progressBar);
    
    window.addEventListener('scroll', () => {
        const scrolled = (window.scrollY / (document.documentElement.scrollHeight - window.innerHeight)) * 100;
        progressBar.style.width = scrolled + '%';
    });
}

// Initialize progress bar
document.addEventListener('DOMContentLoaded', initializeProgressBar);

// Add copy email functionality
function initializeCopyEmail() {
    const emailElements = document.querySelectorAll('a[href^="mailto:"]');
    
    emailElements.forEach(emailLink => {
        emailLink.addEventListener('click', (e) => {
            e.preventDefault();
            
            const email = emailLink.href.replace('mailto:', '');
            
            if (navigator.clipboard && window.isSecureContext) {
                navigator.clipboard.writeText(email).then(() => {
                    showTemporaryTooltip(emailLink, 'Email copied!');
                }).catch(() => {
                    // Fallback to mailto
                    window.location.href = emailLink.href;
                });
            } else {
                // Fallback for older browsers
                const textArea = document.createElement('textarea');
                textArea.value = email;
                document.body.appendChild(textArea);
                textArea.select();
                
                try {
                    document.execCommand('copy');
                    showTemporaryTooltip(emailLink, 'Email copied!');
                } catch (err) {
                    window.location.href = emailLink.href;
                }
                
                document.body.removeChild(textArea);
            }
        });
    });
}

// Show temporary tooltip
function showTemporaryTooltip(element, message) {
    const tooltip = document.createElement('div');
    tooltip.textContent = message;
    tooltip.style.cssText = `
        position: absolute;
        background: #8b5cf6;
        color: white;
        padding: 5px 10px;
        border-radius: 5px;
        font-size: 12px;
        z-index: 10000;
        pointer-events: none;
        opacity: 0;
        transition: opacity 0.3s ease;
    `;
    
    document.body.appendChild(tooltip);
    
    const rect = element.getBoundingClientRect();
    tooltip.style.left = rect.left + (rect.width / 2) - (tooltip.offsetWidth / 2) + 'px';
    tooltip.style.top = rect.top - tooltip.offsetHeight - 10 + 'px';
    
    setTimeout(() => tooltip.style.opacity = '1', 100);
    
    setTimeout(() => {
        tooltip.style.opacity = '0';
        setTimeout(() => document.body.removeChild(tooltip), 300);
    }, 2000);
}

// Initialize copy email functionality
document.addEventListener('DOMContentLoaded', initializeCopyEmail);

// Add social media hover effects
function initializeSocialEffects() {
    const socialLinks = document.querySelectorAll('.hero-social a, .footer-social a');
    
    socialLinks.forEach(link => {
        link.addEventListener('mouseenter', () => {
            link.style.transform = 'translateY(-3px) scale(1.1)';
        });
        
        link.addEventListener('mouseleave', () => {
            link.style.transform = 'translateY(0) scale(1)';
        });
    });
}

// Initialize social effects
document.addEventListener('DOMContentLoaded', initializeSocialEffects);

// Add form validation enhancements
function enhanceFormValidation() {
    const inputs = document.querySelectorAll('#contact-form input, #contact-form textarea');
    
    inputs.forEach(input => {
        input.addEventListener('blur', validateField);
        input.addEventListener('input', clearFieldError);
    });
}

function validateField(e) {
    const field = e.target;
    const value = field.value.trim();
    
    // Remove existing error styling
    field.classList.remove('error');
    
    // Validate based on field type
    switch (field.type) {
        case 'email':
            if (value && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value)) {
                showFieldError(field, 'Please enter a valid email address');
            }
            break;
        case 'tel':
            if (value && !validatePhoneNumber(value)) {
                showFieldError(field, 'Please enter a valid phone number');
            }
            break;
        default:
            if (field.required && !value) {
                showFieldError(field, 'This field is required');
            }
    }
}

function showFieldError(field, message) {
    field.classList.add('error');
    
    let errorDiv = field.parentNode.querySelector('.field-error');
    if (!errorDiv) {
        errorDiv = document.createElement('div');
        errorDiv.className = 'field-error';
        errorDiv.style.cssText = `
            color: #ef4444;
            font-size: 0.8rem;
            margin-top: 0.25rem;
            opacity: 0;
            transition: opacity 0.3s ease;
        `;
        field.parentNode.appendChild(errorDiv);
    }
    
    errorDiv.textContent = message;
    setTimeout(() => errorDiv.style.opacity = '1', 100);
}

function clearFieldError(e) {
    const field = e.target;
    const errorDiv = field.parentNode.querySelector('.field-error');
    
    if (errorDiv) {
        errorDiv.style.opacity = '0';
        setTimeout(() => errorDiv.remove(), 300);
    }
    
    field.classList.remove('error');
}

// Add error field styles
const style = document.createElement('style');
style.textContent = `
    .form-group input.error,
    .form-group textarea.error {
        border-color: #ef4444 !important;
    }
`;
document.head.appendChild(style);

// Initialize enhanced form validation
document.addEventListener('DOMContentLoaded', enhanceFormValidation);

// Console welcome message
console.log(`
🎉 Welcome to Shreshtha Gupta's Portfolio!
🚀 Built with modern web technologies
💼 Full-stack developer & CS-AIML student
📧 Contact: gshreshtha7698@gmail.com
`);

// Add emergency contact validation
function validateEmergencyContact() {
    const phoneField = document.getElementById('phone');
    
    if (phoneField) {
        phoneField.addEventListener('input', (e) => {
            const value = e.target.value;
            const cleanedValue = value.replace(/\D/g, '');
            
            // Format phone number as user types
            if (cleanedValue.length <= 10) {
                if (cleanedValue.length > 5) {
                    e.target.value = cleanedValue.slice(0, 5) + '-' + cleanedValue.slice(5);
                } else {
                    e.target.value = cleanedValue;
                }
            }
        });
    }
}

// Initialize emergency contact validation
document.addEventListener('DOMContentLoaded', validateEmergencyContact);
