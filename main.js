// Portfolio Builder - Japanese-Inspired Minimalist Design

document.addEventListener('DOMContentLoaded', function() {
    // Initialize the portfolio builder
    initPortfolioBuilder();
    
    // Initialize theme system
    initThemeSystem();
});

function initPortfolioBuilder() {
    const blankState = document.getElementById('blankState');
    const mainContent = document.getElementById('mainContent');
    const typewriterText = document.getElementById('typewriterText');
    
    // Typewriter effect text
    const greetingText = "Hey, I'm Berkay's digital twin. Let me build something peaceful for you…";
    
    // Start typewriter effect
    typewriterEffect(typewriterText, greetingText, () => {
        // After typewriter completes, fade out blank state and show main content
        setTimeout(() => {
            fadeOutBlankState();
            showMainContent();
        }, 1000);
    });
}

// Theme System
function initThemeSystem() {
    const themeToggle = document.getElementById('themeToggle');
    const themeBtn = document.getElementById('themeBtn');
    const themeIcon = document.getElementById('themeIcon');
    
    // Check for saved theme preference or default to light
    const savedTheme = localStorage.getItem('theme') || 'light';
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    
    // Set initial theme
    const initialTheme = savedTheme === 'system' ? (prefersDark ? 'dark' : 'light') : savedTheme;
    setTheme(initialTheme);
    
    // Show theme toggle after a delay
    setTimeout(() => {
        themeToggle.classList.add('visible');
    }, 2000);
    
    // Theme toggle click handler
    themeBtn.addEventListener('click', () => {
        const currentTheme = document.documentElement.getAttribute('data-theme') || 'light';
        const newTheme = currentTheme === 'light' ? 'dark' : 'light';
        setTheme(newTheme);
        localStorage.setItem('theme', newTheme);
    });
    
    // Listen for system theme changes
    window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', (e) => {
        if (localStorage.getItem('theme') === 'system') {
            setTheme(e.matches ? 'dark' : 'light');
        }
    });
}

function setTheme(theme) {
    const themeIcon = document.getElementById('themeIcon');
    
    // Remove existing theme
    document.documentElement.removeAttribute('data-theme');
    
    // Set new theme
    if (theme === 'dark') {
        document.documentElement.setAttribute('data-theme', 'dark');
        themeIcon.className = 'fas fa-sun';
        themeIcon.setAttribute('aria-label', 'Switch to light mode');
    } else {
        document.documentElement.setAttribute('data-theme', 'light');
        themeIcon.className = 'fas fa-moon';
        themeIcon.setAttribute('aria-label', 'Switch to dark mode');
    }
    
    // Add smooth transition effect
    document.body.style.transition = 'background-color 0.4s ease, color 0.4s ease';
    
    // Remove transition after animation completes
    setTimeout(() => {
        document.body.style.transition = '';
    }, 400);
}

function typewriterEffect(element, text, callback) {
    let index = 0;
    const speed = 80; // milliseconds per character
    
    function type() {
        if (index < text.length) {
            element.textContent += text.charAt(index);
            index++;
            setTimeout(type, speed);
        } else {
            if (callback) callback();
        }
    }
    
    type();
}

function fadeOutBlankState() {
    const blankState = document.getElementById('blankState');
    blankState.classList.add('fade-out');
}

function showMainContent() {
    const mainContent = document.getElementById('mainContent');
    mainContent.classList.add('visible');
    
    // Start revealing sections with staggered animation
    setTimeout(() => {
        revealSections();
    }, 500);
}

function revealSections() {
    const sections = document.querySelectorAll('section');
    
    // Create intersection observer for smooth reveal animations
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                
                // If it's the skills section, animate the progress bars
                if (entry.target.id === 'skills') {
                    setTimeout(() => {
                        animateSkillBars();
                    }, 300);
                }
            }
        });
    }, {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    });
    
    // Observe all sections
    sections.forEach(section => {
        observer.observe(section);
    });
}

function animateSkillBars() {
    const skillBars = document.querySelectorAll('.skill-progress');
    
    skillBars.forEach(bar => {
        const level = bar.getAttribute('data-level');
        bar.style.width = level + '%';
    });
}

// Project Modal Functionality
function showProjectDetails(projectType) {
    const modal = document.getElementById('projectModal');
    const modalTitle = document.getElementById('modalTitle');
    const modalDescription = document.getElementById('modalDescription');
    const modalRole = document.getElementById('modalRole');
    const modalDuration = document.getElementById('modalDuration');
    const modalTech = document.getElementById('modalTech');
    const modalDemo = document.getElementById('modalDemo');
    const modalCode = document.getElementById('modalCode');
    
    // Project data
    const projectData = {
        enterprise: {
            title: 'Enterprise Solutions',
            description: 'Developed scalable microservices architecture for enterprise clients, implementing containerization with Docker and orchestration with Kubernetes. The solution reduced deployment time by 70% and improved system reliability.',
            role: 'Lead Full Stack Developer',
            duration: '8 months',
            technologies: ['React', 'Node.js', 'AWS', 'Docker', 'Kubernetes', 'PostgreSQL'],
            demo: '#',
            code: '#'
        },
        mobile: {
            title: 'Mobile Applications',
            description: 'Built cross-platform mobile solutions using Flutter, focusing on intuitive user experiences and performance optimization. The app achieved 4.8/5 rating on app stores.',
            role: 'Mobile Developer',
            duration: '6 months',
            technologies: ['Flutter', 'Firebase', 'Dart', 'REST APIs', 'State Management'],
            demo: '#',
            code: '#'
        },
        cloud: {
            title: 'Cloud Architecture',
            description: 'Implemented comprehensive DevOps and CI/CD pipelines using Jenkins, Docker, and AWS. Streamlined development workflows and improved deployment frequency by 300%.',
            role: 'DevOps Engineer',
            duration: '4 months',
            technologies: ['Docker', 'Kubernetes', 'Jenkins', 'AWS', 'Terraform', 'Ansible'],
            demo: '#',
            code: '#'
        }
    };
    
    const project = projectData[projectType];
    
    // Update modal content
    modalTitle.textContent = project.title;
    modalDescription.textContent = project.description;
    modalRole.textContent = project.role;
    modalDuration.textContent = project.duration;
    
    // Clear and populate technologies
    modalTech.innerHTML = '';
    project.technologies.forEach(tech => {
        const tag = document.createElement('span');
        tag.className = 'tag';
        tag.textContent = tech;
        modalTech.appendChild(tag);
    });
    
    // Update links
    modalDemo.href = project.demo;
    modalCode.href = project.code;
    
    // Show modal
    modal.classList.add('active');
    document.body.style.overflow = 'hidden';
}

function closeProjectModal() {
    const modal = document.getElementById('projectModal');
    modal.classList.remove('active');
    document.body.style.overflow = 'auto';
}

// Close modal on escape key
document.addEventListener('keydown', function(event) {
    if (event.key === 'Escape') {
        closeProjectModal();
    }
});

// Smooth scrolling for navigation
function smoothScrollTo(elementId) {
    const element = document.getElementById(elementId);
    if (element) {
        element.scrollIntoView({
            behavior: 'smooth',
            block: 'start'
        });
    }
}

// Add subtle parallax effect to hero section
window.addEventListener('scroll', function() {
    const scrolled = window.pageYOffset;
    const hero = document.querySelector('.hero');
    const profilePhoto = document.querySelector('.profile-photo');
    
    if (hero && profilePhoto) {
        const rate = scrolled * -0.5;
        profilePhoto.style.transform = `translateY(${rate}px) scale(1.05)`;
    }
});

// Add breathing animation to philosophy items
function addBreathingAnimation() {
    const philosophyItems = document.querySelectorAll('.philosophy-item');
    
    philosophyItems.forEach((item, index) => {
        item.style.animationDelay = `${index * 0.2}s`;
        item.style.animation = 'breathing 4s ease-in-out infinite';
    });
}

// Add floating animation to project cards
function addFloatingAnimation() {
    const projectCards = document.querySelectorAll('.project-card');
    
    projectCards.forEach((card, index) => {
        card.style.animationDelay = `${index * 0.3}s`;
        card.style.animation = 'floating 6s ease-in-out infinite';
    });
}

// CSS animations (added via JavaScript for better control)
const style = document.createElement('style');
style.textContent = `
    @keyframes breathing {
        0%, 100% { transform: translateY(0px); }
        50% { transform: translateY(-8px); }
    }
    
    @keyframes floating {
        0%, 100% { transform: translateY(0px); }
        50% { transform: translateY(-6px); }
    }
`;
document.head.appendChild(style);

// Initialize animations after sections are visible
document.addEventListener('DOMContentLoaded', function() {
    setTimeout(() => {
        addBreathingAnimation();
        addFloatingAnimation();
    }, 2000);
});

// Add hover effects for better interactivity
function addHoverEffects() {
    // Add subtle hover effects to contact links
    const contactLinks = document.querySelectorAll('.contact-link');
    
    contactLinks.forEach(link => {
        link.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-4px) scale(1.02)';
        });
        
        link.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0) scale(1)';
        });
    });
}

// Initialize hover effects
document.addEventListener('DOMContentLoaded', function() {
    setTimeout(() => {
        addHoverEffects();
    }, 3000);
});

// Performance optimization: Lazy load images
function lazyLoadImages() {
    const images = document.querySelectorAll('img[loading="lazy"]');
    
    if ('IntersectionObserver' in window) {
        const imageObserver = new IntersectionObserver((entries, observer) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const img = entry.target;
                    img.src = img.src; // Trigger load
                    imageObserver.unobserve(img);
                }
            });
        });
        
        images.forEach(img => imageObserver.observe(img));
    }
}

// Initialize lazy loading
document.addEventListener('DOMContentLoaded', function() {
    lazyLoadImages();
});

// Accessibility improvements
function improveAccessibility() {
    // Add focus indicators
    const focusableElements = document.querySelectorAll('a, button, input, textarea, select');
    
    focusableElements.forEach(element => {
        element.addEventListener('focus', function() {
            this.style.outline = '2px solid var(--color-accent)';
            this.style.outlineOffset = '2px';
        });
        
        element.addEventListener('blur', function() {
            this.style.outline = 'none';
        });
    });
    
    // Add keyboard navigation for project cards
    const projectCards = document.querySelectorAll('.project-card');
    
    projectCards.forEach(card => {
        card.setAttribute('tabindex', '0');
        card.addEventListener('keydown', function(event) {
            if (event.key === 'Enter' || event.key === ' ') {
                event.preventDefault();
                const projectType = this.getAttribute('data-project');
                showProjectDetails(projectType);
            }
        });
    });
}

// Initialize accessibility improvements
document.addEventListener('DOMContentLoaded', function() {
    improveAccessibility();
}); 
