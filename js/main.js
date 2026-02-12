// ===========================
// NAVIGATION
// ===========================

// Navbar scroll effect
const navbar = document.getElementById('navbar');
const mobileToggle = document.getElementById('mobileToggle');
const navMenu = document.getElementById('navMenu');
const navLinks = document.querySelectorAll('.nav-link');

window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
});

// Mobile menu toggle
mobileToggle.addEventListener('click', () => {
    mobileToggle.classList.toggle('active');
    navMenu.classList.toggle('active');
});

// Smooth scroll and active link
navLinks.forEach(link => {
    link.addEventListener('click', (e) => {
        e.preventDefault();
        const targetId = link.getAttribute('href').substring(1);
        const targetSection = document.getElementById(targetId);
        
        if (targetSection) {
            targetSection.scrollIntoView({ behavior: 'smooth' });
            
            // Update active link
            navLinks.forEach(l => l.classList.remove('active'));
            link.classList.add('active');
            
            // Close mobile menu
            navMenu.classList.remove('active');
            mobileToggle.classList.remove('active');
        }
    });
});

// Update active link on scroll
const sections = document.querySelectorAll('section[id]');

window.addEventListener('scroll', () => {
    let current = '';
    
    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        
        if (window.scrollY >= sectionTop - 200) {
            current = section.getAttribute('id');
        }
    });
    
    navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href').substring(1) === current) {
            link.classList.add('active');
        }
    });
});

// ===========================
// DYNAMIC CONTENT RENDERING
// ===========================

// Render Projects
function renderProjects() {
    const portfolioGrid = document.getElementById('portfolioGrid');
    
    portfolioData.projects.forEach((project, index) => {
        const projectCard = document.createElement('div');
        projectCard.className = 'project-card stagger-item';
        projectCard.innerHTML = `
            <div class="project-image">
                <img src="${project.image}" alt="${project.title}" loading="lazy">
                <div class="project-overlay"></div>
            </div>
            <div class="project-content">
                <h3 class="project-title">${project.title}</h3>
                <p class="project-description">${project.description}</p>
                <div class="project-tags">
                    ${project.tags.map(tag => `<span class="tag">${tag}</span>`).join('')}
                </div>
                <a href="${project.link}" class="project-link">
                    View Project
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                        <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
                        <polyline points="15 3 21 3 21 9"></polyline>
                        <line x1="10" y1="14" x2="21" y2="3"></line>
                    </svg>
                </a>
            </div>
        `;
        portfolioGrid.appendChild(projectCard);
    });
}

// Render Skills
function renderSkills() {
    const skillsList = document.getElementById('skillsList');
    
    portfolioData.skills.forEach(skill => {
        const skillItem = document.createElement('div');
        skillItem.className = 'skill-item';
        skillItem.innerHTML = `
            <div class="skill-header">
                <span class="skill-name">${skill.name}</span>
                <span class="skill-level">${skill.level}%</span>
            </div>
            <div class="skill-bar">
                <div class="skill-progress" style="width: 0%" data-width="${skill.level}"></div>
            </div>
        `;
        skillsList.appendChild(skillItem);
    });
    
    // Animate skill bars when in view
    animateSkillBars();
}

// Render Services
function renderServices() {
    const servicesGrid = document.getElementById('servicesGrid');
    
    portfolioData.services.forEach((service, index) => {
        const serviceCard = document.createElement('div');
        serviceCard.className = 'service-card stagger-item';
        serviceCard.innerHTML = `
            <div class="service-icon">${service.icon}</div>
            <h3 class="service-title">${service.title}</h3>
            <p class="service-description">${service.description}</p>
        `;
        servicesGrid.appendChild(serviceCard);
    });
}

// Render Blog Posts
function renderBlogPosts() {
    const blogGrid = document.getElementById('blogGrid');
    
    portfolioData.blogPosts.forEach((post, index) => {
        const blogCard = document.createElement('div');
        blogCard.className = 'blog-card stagger-item';
        blogCard.innerHTML = `
            <div class="blog-content">
                <div class="blog-meta">
                    <span>${post.date}</span>
                    <span>•</span>
                    <span>${post.readTime}</span>
                </div>
                <h3 class="blog-title">${post.title}</h3>
                <p class="blog-excerpt">${post.excerpt}</p>
                <a href="${post.link}" class="blog-link">
                    Read More
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                        <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
                        <polyline points="15 3 21 3 21 9"></polyline>
                        <line x1="10" y1="14" x2="21" y2="3"></line>
                    </svg>
                </a>
            </div>
        `;
        blogGrid.appendChild(blogCard);
    });
}

// ===========================
// ANIMATIONS
// ===========================

// Animate skill bars when in viewport
function animateSkillBars() {
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const progressBars = entry.target.querySelectorAll('.skill-progress');
                progressBars.forEach(bar => {
                    const width = bar.getAttribute('data-width');
                    setTimeout(() => {
                        bar.style.width = width + '%';
                    }, 100);
                });
                observer.unobserve(entry.target);
            }
        });
    }, { threshold: 0.5 });
    
    const skillsSection = document.querySelector('.skills-list');
    if (skillsSection) {
        observer.observe(skillsSection);
    }
}

// Stagger animation for grid items
function setupStaggerAnimation() {
    const staggerItems = document.querySelectorAll('.stagger-item');
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                observer.unobserve(entry.target);
            }
        });
    }, { threshold: 0.1 });
    
    staggerItems.forEach(item => {
        observer.observe(item);
    });
}

// Reveal animation on scroll
function setupRevealAnimation() {
    const reveals = document.querySelectorAll('.reveal');
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('active');
                observer.unobserve(entry.target);
            }
        });
    }, { threshold: 0.15 });
    
    reveals.forEach(reveal => {
        observer.observe(reveal);
    });
}

// ===========================
// CONTACT FORM
// ===========================

const contactForm = document.getElementById('contactForm');
const submitButton = contactForm.querySelector('.btn-submit');
const originalButtonText = submitButton.innerHTML;

// Initialize EmailJS (you need to set up your EmailJS account)
// EmailJS Configuration - Replace with your actual credentials
const EMAILJS_SERVICE_ID = 'service_YOUR_SERVICE_ID';
const EMAILJS_TEMPLATE_ID = 'template_YOUR_TEMPLATE_ID';
const EMAILJS_PUBLIC_KEY = 'YOUR_PUBLIC_KEY';

contactForm.addEventListener('submit', async (e) => {
    e.preventDefault();
    
    const name = document.getElementById('name').value.trim();
    const email = document.getElementById('email').value.trim();
    const message = document.getElementById('message').value.trim();
    
    // Validation
    if (!name || !email || !message) {
        showNotification('Please fill in all fields', 'error');
        return;
    }
    
    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
        showNotification('Please enter a valid email address', 'error');
        return;
    }
    
    // Disable button and show loading state
    submitButton.disabled = true;
    submitButton.innerHTML = '<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" style="animation: spin 1s linear infinite;"><circle cx="12" cy="12" r="1"></circle><path d="M12 5v14"></path></svg> Sending...';
    
    try {
        // Method 1: Using EmailJS (Recommended)
        if (typeof emailjs !== 'undefined') {
            await emailjs.send(EMAILJS_SERVICE_ID, EMAILJS_TEMPLATE_ID, {
                from_name: name,
                from_email: email,
                message: message,
                reply_to: email
            }, EMAILJS_PUBLIC_KEY);
            
            showNotification('Message sent successfully! I\'ll get back to you soon.', 'success');
        } else {
            // Method 2: Using FormSubmit (No setup required, free backend)
            const formData = new FormData();
            formData.append('name', name);
            formData.append('email', email);
            formData.append('message', message);
            formData.append('_captcha', 'false');
            formData.append('_next', window.location.href);
            
            const response = await fetch('https://formspree.io/f/YOUR_FORM_ID', {
                method: 'POST',
                body: formData
            });
            
            if (response.ok) {
                showNotification('Message sent successfully! I\'ll get back to you soon.', 'success');
            } else {
                throw new Error('Failed to send message');
            }
        }
        
        // Reset form
        contactForm.reset();
    } catch (error) {
        console.error('Form submission error:', error);
        showNotification('Failed to send message. Please try again or email me directly.', 'error');
    } finally {
        // Re-enable button and restore original text
        submitButton.disabled = false;
        submitButton.innerHTML = originalButtonText;
    }
});

// Notification function
function showNotification(message, type = 'success') {
    // Remove any existing notification
    const existingNotification = document.querySelector('.form-notification');
    if (existingNotification) {
        existingNotification.remove();
    }
    
    // Create notification element
    const notification = document.createElement('div');
    notification.className = `form-notification form-notification-${type}`;
    notification.textContent = message;
    notification.style.cssText = `
        position: fixed;
        top: 20px;
        right: 20px;
        padding: 1rem 1.5rem;
        background: ${type === 'success' ? '#10b981' : '#ef4444'};
        color: white;
        border-radius: 0.5rem;
        font-weight: 500;
        z-index: 1000;
        animation: slideIn 0.3s ease-out;
        box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
    `;
    
    document.body.appendChild(notification);
    
    // Auto-remove notification after 5 seconds
    setTimeout(() => {
        notification.style.animation = 'slideOut 0.3s ease-out forwards';
        setTimeout(() => notification.remove(), 300);
    }, 5000);
}


// Theme initialization and toggle
(function(){
    const THEME_KEY = 'theme';
    const html = document.documentElement;
    const btn = document.getElementById('themeToggle');
    const iconSpan = btn && btn.querySelector('.theme-icon');
    const textSpan = btn && btn.querySelector('.theme-text');

    function applyTheme(theme){
        html.setAttribute('data-theme', theme);
        if(iconSpan){
            iconSpan.textContent = theme === 'dark' ? '☀️' : '🌙';
        }
        if(textSpan){
            textSpan.textContent = theme === 'dark' ? 'Light' : 'Dark';
        }
    }

    // Determine default: saved -> system preference -> light
    const saved = localStorage.getItem(THEME_KEY);
    const systemPrefersDark = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;
    const initial = saved ? saved : (systemPrefersDark ? 'dark' : 'light');
    applyTheme(initial);

    // Toggle handler
    if(btn){
        btn.addEventListener('click', () => {
            const current = html.getAttribute('data-theme') === 'dark' ? 'dark' : 'light';
            const next = current === 'dark' ? 'light' : 'dark';
            applyTheme(next);
            localStorage.setItem(THEME_KEY, next);
        });
    }

    // Respond to system changes if user hasn't set a preference
    if(!saved && window.matchMedia){
        window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', e => {
            const newPref = e.matches ? 'dark' : 'light';
            // only apply if user hasn't stored a choice
            if(!localStorage.getItem(THEME_KEY)) applyTheme(newPref);
        });
    }
})();

// ===========================
// UTILITY FUNCTIONS
// ===========================

// Update current year in footer
function updateCurrentYear() {
    const yearElement = document.getElementById('currentYear');
    if (yearElement) {
        yearElement.textContent = new Date().getFullYear();
    }
}

// Smooth scroll to top
function scrollToTop() {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
}

// Add scroll to top button (optional)
function addScrollToTopButton() {
    const scrollBtn = document.createElement('button');
    scrollBtn.className = 'scroll-to-top';
    scrollBtn.innerHTML = '↑';
    scrollBtn.style.cssText = `
        position: fixed;
        bottom: 30px;
        right: 30px;
        width: 50px;
        height: 50px;
        background: linear-gradient(135deg, #2563eb, #9333ea);
        color: white;
        border: none;
        border-radius: 50%;
        font-size: 24px;
        cursor: pointer;
        display: none;
        z-index: 999;
        box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
        transition: all 0.3s ease;
    `;
    
    document.body.appendChild(scrollBtn);
    
    window.addEventListener('scroll', () => {
        if (window.scrollY > 500) {
            scrollBtn.style.display = 'block';
        } else {
            scrollBtn.style.display = 'none';
        }
    });
    
    scrollBtn.addEventListener('click', scrollToTop);
    
    scrollBtn.addEventListener('mouseenter', () => {
        scrollBtn.style.transform = 'scale(1.1)';
    });
    
    scrollBtn.addEventListener('mouseleave', () => {
        scrollBtn.style.transform = 'scale(1)';
    });
}

// ===========================
// PAGE LOADING ANIMATION
// ===========================

function initPageLoad() {
    // Add fade-in effect to sections
    const sections = document.querySelectorAll('section');
    sections.forEach((section, index) => {
        section.style.opacity = '0';
        section.style.transform = 'translateY(30px)';
        section.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        
        setTimeout(() => {
            section.style.opacity = '1';
            section.style.transform = 'translateY(0)';
        }, index * 100);
    });
}

// ===========================
// TYPING EFFECT (Optional)
// ===========================

function typeWriter(element, text, speed = 50) {
    let i = 0;
    element.textContent = '';
    
    function type() {
        if (i < text.length) {
            element.textContent += text.charAt(i);
            i++;
            setTimeout(type, speed);
        }
    }
    
    type();
}

// ===========================
// PARALLAX EFFECT (Optional)
// ===========================

function initParallax() {
    window.addEventListener('scroll', () => {
        const scrolled = window.scrollY;
        const parallaxElements = document.querySelectorAll('.parallax');
        
        parallaxElements.forEach(element => {
            const speed = element.dataset.speed || 0.5;
            element.style.transform = `translateY(${scrolled * speed}px)`;
        });
    });
}

// ===========================
// MOUSE CURSOR EFFECT (Optional)
// ===========================

function initCustomCursor() {
    const cursor = document.createElement('div');
    cursor.className = 'custom-cursor';
    cursor.style.cssText = `
        width: 20px;
        height: 20px;
        border: 2px solid #2563eb;
        border-radius: 50%;
        position: fixed;
        pointer-events: none;
        z-index: 9999;
        transition: transform 0.2s ease;
        display: none;
    `;
    document.body.appendChild(cursor);
    
    document.addEventListener('mousemove', (e) => {
        cursor.style.display = 'block';
        cursor.style.left = e.clientX + 'px';
        cursor.style.top = e.clientY + 'px';
    });
    
    document.addEventListener('mousedown', () => {
        cursor.style.transform = 'scale(0.8)';
    });
    
    document.addEventListener('mouseup', () => {
        cursor.style.transform = 'scale(1)';
    });
}

// ===========================
// INITIALIZATION
// ===========================

document.addEventListener('DOMContentLoaded', () => {
    // Render all content
    renderProjects();
    renderSkills();
    renderServices();
    renderBlogPosts();
    
    // Setup animations
    setupStaggerAnimation();
    setupRevealAnimation();
    
    // Update footer year
    updateCurrentYear();
    
    // Add scroll to top button
    addScrollToTopButton();
    
    // Optional: Page load animation
    // initPageLoad();
    
    // Optional: Parallax effect
    // initParallax();
    
    // Optional: Custom cursor
    // initCustomCursor();
    
    console.log('Portfolio website loaded successfully! 🚀');
});

// ===========================
// PERFORMANCE OPTIMIZATION
// ===========================

// Lazy load images
if ('IntersectionObserver' in window) {
    const imageObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const img = entry.target;
                img.src = img.dataset.src || img.src;
                img.classList.add('loaded');
                imageObserver.unobserve(img);
            }
        });
    });
    
    const images = document.querySelectorAll('img[loading="lazy"]');
    images.forEach(img => imageObserver.observe(img));
}

// Debounce function for scroll events
function debounce(func, wait = 10) {
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

// Throttle function for performance
function throttle(func, limit = 100) {
    let inThrottle;
    return function(...args) {
        if (!inThrottle) {
            func.apply(this, args);
            inThrottle = true;
            setTimeout(() => inThrottle = false, limit);
        }
    };
}

// Use throttle for scroll events
const handleScroll = throttle(() => {
    // Your scroll handler code here
}, 100);

window.addEventListener('scroll', handleScroll);
