// ===== Scroll Animation =====
document.addEventListener('DOMContentLoaded', function() {
    // Animate elements on scroll
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);

    // Add scroll-animate class to elements
    const cards = document.querySelectorAll('.card, .metric-card, .architecture-card, .accordion-item');
    cards.forEach(card => {
        card.classList.add('scroll-animate');
        observer.observe(card);
    });

    // Smooth scroll for navigation links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            const href = this.getAttribute('href');
            if (href !== '#' && document.querySelector(href)) {
                e.preventDefault();
                const target = document.querySelector(href);
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });

    // Active navbar link
    window.addEventListener('scroll', () => {
        let current = '';
        const sections = document.querySelectorAll('section');

        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.clientHeight;
            if (pageYOffset >= (sectionTop - 200)) {
                current = section.getAttribute('id');
            }
        });

        document.querySelectorAll('.nav-link').forEach(link => {
            link.classList.remove('active');
            if (link.getAttribute('href').slice(1) === current) {
                link.classList.add('active');
            }
        });
    });

    // Add active style to navbar links
    const style = document.createElement('style');
    style.textContent = `
        .nav-link.active {
            color: #ffc107 !important;
        }
        .nav-link.active::after {
            width: 100%;
            background: #ffc107;
        }
    `;
    document.head.appendChild(style);

    // Collapse mobile menu when link is clicked
    const navbarCollapse = document.querySelector('.navbar-collapse');
    document.querySelectorAll('.nav-link').forEach(link => {
        link.addEventListener('click', () => {
            const bsCollapse = new bootstrap.Collapse(navbarCollapse, {
                toggle: false
            });
            bsCollapse.hide();
        });
    });

    // FAQ accordion enhancement
    const accordionItems = document.querySelectorAll('.accordion-item');
    accordionItems.forEach((item, index) => {
        item.style.animationDelay = (index * 0.1) + 's';
    });

    // Add copy-to-clipboard for code blocks
    const codeBlocks = document.querySelectorAll('pre code');
    codeBlocks.forEach(code => {
        code.style.cursor = 'pointer';
        code.title = 'Click to copy';
        
        code.addEventListener('click', function(e) {
            const text = this.textContent;
            navigator.clipboard.writeText(text).then(() => {
                const originalText = this.textContent;
                this.textContent = '✓ Copied!';
                setTimeout(() => {
                    this.textContent = originalText;
                }, 2000);
            });
        });
    });

    // Counter animation for metrics
    let hasAnimated = false;
    const metricsSection = document.querySelector('.metrics-section');
    
    window.addEventListener('scroll', () => {
        if (metricsSection && !hasAnimated) {
            const rect = metricsSection.getBoundingClientRect();
            if (rect.top < window.innerHeight * 0.75) {
                animateCounters();
                hasAnimated = true;
            }
        }
    });

    function animateCounters() {
        const numbers = document.querySelectorAll('.metric-number');
        numbers.forEach(number => {
            const targetText = number.textContent.trim();
            // Extract the numeric part
            const match = targetText.match(/[\d.]+/);
            if (match) {
                const target = parseFloat(match[0]);
                const duration = 2000; // 2 seconds
                const start = Date.now();

                function update() {
                    const elapsed = Date.now() - start;
                    const progress = Math.min(elapsed / duration, 1);
                    const current = target * progress;
                    
                    if (targetText.includes('%')) {
                        number.textContent = Math.floor(current) + '%';
                    } else if (targetText.includes('-')) {
                        number.textContent = '-' + Math.floor(current) + '%';
                    } else if (targetText.includes('+')) {
                        number.textContent = '+' + Math.floor(current) + '%';
                    } else if (targetText.includes('ms')) {
                        number.textContent = Math.floor(current) + 'ms';
                    } else if (targetText.includes('GB')) {
                        number.textContent = '≤' + Math.floor(current) + 'GB';
                    } else if (targetText.includes('FPS')) {
                        number.textContent = Math.floor(current) + 'FPS';
                    } else {
                        number.textContent = Math.floor(current) + '+';
                    }

                    if (progress < 1) {
                        requestAnimationFrame(update);
                    } else {
                        number.textContent = targetText;
                    }
                }

                update();
            }
        });
    }

    // Hover effects for feature list items
    const featureItems = document.querySelectorAll('.feature-list li');
    featureItems.forEach(item => {
        item.addEventListener('mouseenter', function() {
            this.style.transform = 'translateX(10px)';
        });
        item.addEventListener('mouseleave', function() {
            this.style.transform = 'translateX(0)';
        });
    });

    // Add animation to hero section
    window.addEventListener('load', () => {
        const hero = document.querySelector('.hero-section');
        if (hero) {
            hero.style.animation = 'fadeIn 0.8s ease';
        }
    });

    // Mobile menu optimization
    const toggleButton = document.querySelector('.navbar-toggler');
    if (toggleButton) {
        toggleButton.addEventListener('click', function() {
            this.classList.toggle('menu-open');
        });
    }

    console.log('✓ Traffic Intelligence System Website Loaded');
    console.log('🚦 AI-Powered Traffic Management Platform v2.0');
    console.log('🌐 Explore the full potential of intelligent traffic control');
});

// ===== Smooth Page Load =====
window.addEventListener('load', function() {
    document.body.style.opacity = '1';
});

// ===== Performance Optimization =====
// Lazy load images if needed
if ('IntersectionObserver' in window) {
    const images = document.querySelectorAll('img[data-lazy]');
    const imageObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const img = entry.target;
                img.src = img.dataset.lazy;
                img.removeAttribute('data-lazy');
                observer.unobserve(img);
            }
        });
    });
    images.forEach(img => imageObserver.observe(img));
}
