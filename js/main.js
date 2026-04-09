// Navigation

// Navbar scroll effect
const navbar = document.getElementById('navbar');
const mobileToggle = document.getElementById('mobileToggle');
const navMenu = document.getElementById('navMenu');
const navLinks = document.querySelectorAll('.nav-link');

if (navbar) {
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }
    });
}

// Mobile menu toggle
if (mobileToggle && navMenu) {
    mobileToggle.addEventListener('click', () => {
        mobileToggle.classList.toggle('active');
        navMenu.classList.toggle('active');
    });
}

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

// Dynamic content rendering

// I sanitize text before injecting HTML so project data never breaks layout.
function escapeHtml(value) {
    return String(value ?? '')
        .replace(/&/g, '&amp;')
        .replace(/</g, '&lt;')
        .replace(/>/g, '&gt;')
        .replace(/"/g, '&quot;')
        .replace(/'/g, '&#39;');
}

// Render Projects
function renderProjects() {
    const portfolioGrid = document.getElementById('portfolioGrid');
    if (!portfolioGrid) {
        console.warn('Portfolio grid container (#portfolioGrid) not found.');
        return;
    }

    if (typeof portfolioData === 'undefined') {
        console.error('portfolioData is undefined. Ensure js/data.js loads before js/main.js.');
        return;
    }

    if (!Array.isArray(portfolioData.projects)) {
        console.error('portfolioData.projects is missing or not an array.');
        return;
    }

    const projects = [...portfolioData.projects].sort((a, b) => Number(b.featured) - Number(a.featured));
    portfolioGrid.innerHTML = '';

    projects.forEach((project) => {
        if (!project || !project.title || !project.link) {
            console.warn('Skipping invalid project entry:', project);
            return;
        }

        const tags = Array.isArray(project.tags) ? project.tags : [];
        const safeTitle = escapeHtml(project.title);
        const safeDescription = escapeHtml(project.description);
        const safeOutcome = escapeHtml(project.outcome);
        const safeCategory = escapeHtml(project.category || 'General');
        const safeYear = escapeHtml(project.year || '');
        const safeImage = escapeHtml(project.image || '');
        const safeLink = escapeHtml(project.link || '#');
        const safeGithub = escapeHtml(project.github || '');
        const fallbackImage = 'https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=1200&h=800&fit=crop';
        const projectCard = document.createElement('div');
        projectCard.className = 'project-card stagger-item';
        projectCard.innerHTML = `
            <div class="project-image">
                <img src="${safeImage}" alt="${safeTitle}" loading="lazy" onerror="this.onerror=null;this.src='${fallbackImage}'">
                <div class="project-overlay"></div>
            </div>
            <div class="project-content">
                <div class="project-meta">
                    ${project.featured ? '<span class="project-badge project-badge-featured">Featured</span>' : ''}
                    <span class="project-badge">${safeCategory}</span>
                    <span class="project-year">${safeYear}</span>
                </div>
                <h3 class="project-title">${safeTitle}</h3>
                <p class="project-description">${safeDescription}</p>
                ${project.outcome ? `<p class="project-outcome">${safeOutcome}</p>` : ''}
                <div class="project-tags">
                    ${tags.map(tag => `<span class="tag">${escapeHtml(tag)}</span>`).join('')}
                </div>
                <div class="project-links">
                    <a href="${safeLink}" class="project-link" target="_blank" rel="noopener noreferrer">
                        Live Demo
                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                            <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
                            <polyline points="15 3 21 3 21 9"></polyline>
                            <line x1="10" y1="14" x2="21" y2="3"></line>
                        </svg>
                    </a>
                    ${project.github && project.github !== '#' ? `
                    <a href="${safeGithub}" class="project-link project-link-secondary" target="_blank" rel="noopener noreferrer">
                        Source Code
                    </a>` : ''}
                </div>
            </div>
        `;
        portfolioGrid.appendChild(projectCard);
    });
}

// Render Skills
function renderSkills() {
    const skillsList = document.getElementById('skillsList');
    if (!skillsList || typeof portfolioData === 'undefined' || !Array.isArray(portfolioData.skills)) return;
    
    portfolioData.skills.forEach(skill => {
        const skillItem = document.createElement('div');
        skillItem.className = 'skill-item';
        skillItem.innerHTML = `
            <div class="skill-header">
                <span class="skill-name">${escapeHtml(skill.name)}</span>
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
    if (!servicesGrid || typeof portfolioData === 'undefined' || !Array.isArray(portfolioData.services)) return;
    
    portfolioData.services.forEach((service) => {
        const serviceCard = document.createElement('div');
        serviceCard.className = 'service-card stagger-item';
        serviceCard.innerHTML = `
            <div class="service-icon">${escapeHtml(service.icon)}</div>
            <h3 class="service-title">${escapeHtml(service.title)}</h3>
            <p class="service-description">${escapeHtml(service.description)}</p>
        `;
        servicesGrid.appendChild(serviceCard);
    });
}

// Render Blog Posts
function renderBlogPosts() {
    const blogGrid = document.getElementById('blogGrid');
    if (!blogGrid || typeof portfolioData === 'undefined' || !Array.isArray(portfolioData.blogPosts)) return;
    
    portfolioData.blogPosts.forEach((post) => {
        const blogCard = document.createElement('div');
        blogCard.className = 'blog-card stagger-item';
        blogCard.innerHTML = `
            <div class="blog-content">
                <div class="blog-meta">
                    <span>${escapeHtml(post.date)}</span>
                    <span>•</span>
                    <span>${escapeHtml(post.readTime)}</span>
                </div>
                <h3 class="blog-title">${escapeHtml(post.title)}</h3>
                <p class="blog-excerpt">${escapeHtml(post.excerpt)}</p>
                <a href="${escapeHtml(post.link)}" class="blog-link" target="_blank" rel="noopener noreferrer">
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

// Animations

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

// Contact form

const contactForm = document.getElementById('contactForm');
const submitButton = contactForm ? contactForm.querySelector('.btn-submit') : null;
const originalButtonText = submitButton ? submitButton.innerHTML : '';
const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

const EMAILJS_CONFIG = window.EMAILJS_CONFIG || null;

function setFieldState(field, message = '', state = '') {
    const formGroup = field.closest('.form-group');
    const feedback = formGroup ? formGroup.querySelector('.field-feedback') : null;

    if (formGroup) {
        formGroup.classList.remove('field-valid', 'field-error');
        if (state === 'valid') formGroup.classList.add('field-valid');
        if (state === 'error') formGroup.classList.add('field-error');
    }

    if (feedback) {
        feedback.textContent = message;
    }
}

function validateField(field) {
    const value = field.value.trim();
    if (!value) {
        setFieldState(field, 'This field is required.', 'error');
        return false;
    }

    if (field.id === 'email' && !emailRegex.test(value)) {
        setFieldState(field, 'Enter a valid email address.', 'error');
        return false;
    }

    if (field.id === 'message' && value.length < 15) {
        setFieldState(field, 'Please add at least 15 characters.', 'error');
        return false;
    }

    setFieldState(field, 'Looks good.', 'valid');
    return true;
}

['name', 'email', 'message'].forEach((id) => {
    const field = document.getElementById(id);
    if (!field) return;
    field.addEventListener('blur', () => validateField(field));
    field.addEventListener('input', () => {
        if (field.value.trim()) validateField(field);
    });
});

if (contactForm && submitButton) {
contactForm.addEventListener('submit', async (e) => {
    e.preventDefault();
    
    const nameField = document.getElementById('name');
    const emailField = document.getElementById('email');
    const messageField = document.getElementById('message');
    if (!nameField || !emailField || !messageField) {
        showNotification('Form fields are unavailable. Please refresh and try again.', 'error');
        return;
    }
    const allValid = [nameField, emailField, messageField].every(validateField);

    if (!allValid) {
        showNotification('Please correct the highlighted fields and try again.', 'error');
        return;
    }

    const name = nameField.value.trim();
    const email = emailField.value.trim();
    const message = messageField.value.trim();
    
    // Disable button and show loading state
    submitButton.disabled = true;
    submitButton.innerHTML = '<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" style="animation: spin 1s linear infinite;"><circle cx="12" cy="12" r="1"></circle><path d="M12 5v14"></path></svg> Sending...';
    
    try {
        const canUseEmailJS = (
            typeof emailjs !== 'undefined' &&
            EMAILJS_CONFIG &&
            EMAILJS_CONFIG.serviceId &&
            EMAILJS_CONFIG.templateId &&
            EMAILJS_CONFIG.publicKey
        );

        if (canUseEmailJS) {
            await emailjs.send(EMAILJS_CONFIG.serviceId, EMAILJS_CONFIG.templateId, {
                from_name: name,
                from_email: email,
                message: message,
                reply_to: email
            }, EMAILJS_CONFIG.publicKey);
            
            showNotification('Message sent successfully! I\'ll get back to you soon.', 'success');
        } else {
            // I keep Formspree as a reliable backup if EmailJS is not configured.
            if (typeof emailjs !== 'undefined' && !canUseEmailJS) {
                console.warn('EmailJS SDK loaded but EMAILJS_CONFIG is missing/invalid. Falling back to Formspree.');
            }

            const formData = new FormData();
            formData.append('name', name);
            formData.append('email', email);
            formData.append('message', message);
            formData.append('_captcha', 'false');
            formData.append('_next', window.location.href);

            const response = await fetch('https://formspree.io/f/xpqjqekp', {
                method: 'POST',
                headers: {
                    'Accept': 'application/json'
                },
                body: formData
            });

            if (response.ok) {
                showNotification('Message sent successfully! I\'ll get back to you soon.', 'success');
            } else {
                let respText = '';
                try {
                    respText = await response.text();
                } catch (e) {
                    respText = '<unable to read response body>';
                }
                const err = new Error(`Formspree error: ${response.status} ${response.statusText} - ${respText}`);
                err.response = { status: response.status, statusText: response.statusText, body: respText };
                throw err;
            }
        }
        
        contactForm.reset();
        [nameField, emailField, messageField].forEach((field) => setFieldState(field, '', ''));
    } catch (error) {
        console.error('Form submission error:', error);
        if (error && error.response) {
            console.error('Response details:', error.response);
        }

        showNotification('Failed to send message. Check the console for details or email me directly at amanray8422@gmail.com', 'error');
    } finally {
        submitButton.disabled = false;
        submitButton.innerHTML = originalButtonText;
    }
});
}

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

// Utility functions

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

// Initialization

document.addEventListener('DOMContentLoaded', () => {
    // Render all content
    try {
        renderProjects();
        renderSkills();
        renderServices();
        renderBlogPosts();
    } catch (error) {
        console.error('Rendering failed during initialization:', error);
    }
    
    // Setup animations
    setupStaggerAnimation();
    // Update footer year
    updateCurrentYear();
    
    // Add scroll to top button
    addScrollToTopButton();
    console.log('Portfolio website loaded successfully! 🚀');
});

// Performance optimization

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

