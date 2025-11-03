// Main JavaScript functionality for Abbas Hatim Ali Resume Website

document.addEventListener('DOMContentLoaded', function() {
    // Initialize all components
    initTypewriter();
    initScrollAnimations();
    initSkillBars();
    initSkillsChart();
    initNavigation();
    initDownloadButton();
    
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
});

// Typewriter effect for hero section
function initTypewriter() {
    const typed = new Typed('#typed-summary', {
        strings: [
            'Civil Engineer',
            '10+ Years Experience',
            'Quality Control Specialist',
            'Precast Concrete Expert',
            'Project Management Professional'
        ],
        typeSpeed: 50,
        backSpeed: 30,
        backDelay: 2000,
        startDelay: 1000,
        loop: true,
        showCursor: true,
        cursorChar: '|'
    });
}

// Scroll animations
function initScrollAnimations() {
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('revealed');
            }
        });
    }, observerOptions);

    // Observe all sections with reveal animation
    document.querySelectorAll('.section-reveal').forEach(el => {
        observer.observe(el);
    });

    // Stagger animation for timeline items
    const timelineItems = document.querySelectorAll('.timeline-item');
    timelineItems.forEach((item, index) => {
        setTimeout(() => {
            observer.observe(item);
        }, index * 200);
    });
}

// Skill bars animation
function initSkillBars() {
    const skillBars = document.querySelectorAll('.skill-bar');
    
    const skillObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const bar = entry.target;
                const width = bar.getAttribute('data-width');
                setTimeout(() => {
                    bar.style.width = width;
                }, 500);
            }
        });
    }, { threshold: 0.5 });

    skillBars.forEach(bar => {
        skillObserver.observe(bar);
    });
}

// Skills chart using ECharts
function initSkillsChart() {
    const chartElement = document.getElementById('skills-chart');
    if (!chartElement) return;

    const chart = echarts.init(chartElement);
    
    const option = {
        tooltip: {
            trigger: 'item',
            formatter: '{a} <br/>{b}: {c}%'
        },
        legend: {
            orient: 'vertical',
            left: 'left',
            textStyle: {
                color: '#374151'
            }
        },
        series: [
            {
                name: 'Skills',
                type: 'pie',
                radius: ['40%', '70%'],
                avoidLabelOverlap: false,
                itemStyle: {
                    borderRadius: 10,
                    borderColor: '#fff',
                    borderWidth: 2
                },
                label: {
                    show: false,
                    position: 'center'
                },
                emphasis: {
                    label: {
                        show: true,
                        fontSize: '18',
                        fontWeight: 'bold'
                    }
                },
                labelLine: {
                    show: false
                },
                data: [
                    { value: 95, name: 'Finishing Works', itemStyle: { color: '#b45309' } },
                    { value: 92, name: 'Quality Control', itemStyle: { color: '#1e3a8a' } },
                    { value: 88, name: 'Project Management', itemStyle: { color: '#3b82f6' } },
                    { value: 94, name: 'AutoCAD/Revit', itemStyle: { color: '#f59e0b' } },
                    { value: 85, name: 'STAAD.Pro/ETABS', itemStyle: { color: '#6b7280' } },
                    { value: 90, name: 'Site Supervision', itemStyle: { color: '#10b981' } }
                ]
            }
        ]
    };

    chart.setOption(option);
    
    // Responsive chart
    window.addEventListener('resize', () => {
        chart.resize();
    });
}

// Navigation functionality
function initNavigation() {
    const nav = document.querySelector('nav');
    const navLinks = document.querySelectorAll('.nav-link');
    
    // Add active state to navigation
    window.addEventListener('scroll', () => {
        const sections = document.querySelectorAll('section[id]');
        const scrollPos = window.scrollY + 100;
        
        sections.forEach(section => {
            const top = section.offsetTop;
            const height = section.offsetHeight;
            const id = section.getAttribute('id');
            
            if (scrollPos >= top && scrollPos < top + height) {
                navLinks.forEach(link => {
                    link.classList.remove('text-navy', 'font-semibold');
                    if (link.getAttribute('href') === `#${id}`) {
                        link.classList.add('text-navy', 'font-semibold');
                    }
                });
            }
        });
        
        // Navbar background on scroll
        if (window.scrollY > 50) {
            nav.classList.add('bg-white/98', 'shadow-md');
        } else {
            nav.classList.remove('bg-white/98', 'shadow-md');
        }
    });
}

// Download resume functionality
function initDownloadButton() {
console.log("Main Aya ");
    const downloadBtn = document.getElementById('download-resume');
    if (downloadBtn) {
        downloadBtn.addEventListener('click', function() {
            // Path to resume file inside the resources folder
            const resumePath = 'AbbasResume.pdf';
            
            // Create an invisible link element
            const link = document.createElement('a');
            link.href = resumePath;
            link.download = 'resume.pdf';
            
            // Append to DOM, trigger click, then remove
            document.body.appendChild(link);
            link.click();
            document.body.removeChild(link);
        });
    }
}


// Utility functions for animations
function fadeIn(element, duration = 600) {
    element.style.opacity = '0';
    element.style.display = 'block';
    
    let start = null;
    
    function animate(timestamp) {
        if (!start) start = timestamp;
        const progress = timestamp - start;
        const opacity = Math.min(progress / duration, 1);
        
        element.style.opacity = opacity;
        
        if (progress < duration) {
            requestAnimationFrame(animate);
        }
    }
    
    requestAnimationFrame(animate);
}

function slideUp(element, duration = 600) {
    element.style.transform = 'translateY(30px)';
    element.style.opacity = '0';
    
    let start = null;
    
    function animate(timestamp) {
        if (!start) start = timestamp;
        const progress = timestamp - start;
        const translateY = Math.max(30 - (progress / duration) * 30, 0);
        const opacity = Math.min(progress / duration, 1);
        
        element.style.transform = `translateY(${translateY}px)`;
        element.style.opacity = opacity;
        
        if (progress < duration) {
            requestAnimationFrame(animate);
        }
    }
    
    requestAnimationFrame(animate);
}

// Particle background effect (optional enhancement)
function initParticleBackground() {
    const canvas = document.createElement('canvas');
    const ctx = canvas.getContext('2d');
    
    canvas.style.position = 'fixed';
    canvas.style.top = '0';
    canvas.style.left = '0';
    canvas.style.width = '100%';
    canvas.style.height = '100%';
    canvas.style.zIndex = '-1';
    canvas.style.opacity = '0.1';
    
    document.body.appendChild(canvas);
    
    function resizeCanvas() {
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
    }
    
    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);
    
    const particles = [];
    const particleCount = 50;
    
    for (let i = 0; i < particleCount; i++) {
        particles.push({
            x: Math.random() * canvas.width,
            y: Math.random() * canvas.height,
            vx: (Math.random() - 0.5) * 0.5,
            vy: (Math.random() - 0.5) * 0.5,
            size: Math.random() * 2 + 1
        });
    }
    
    function animateParticles() {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        
        particles.forEach(particle => {
            particle.x += particle.vx;
            particle.y += particle.vy;
            
            if (particle.x < 0 || particle.x > canvas.width) particle.vx *= -1;
            if (particle.y < 0 || particle.y > canvas.height) particle.vy *= -1;
            
            ctx.beginPath();
            ctx.arc(particle.x, particle.y, particle.size, 0, Math.PI * 2);
            ctx.fillStyle = '#1e3a8a';
            ctx.fill();
        });
        
        requestAnimationFrame(animateParticles);
    }
    
    animateParticles();
}

// Initialize particle background if needed
// initParticleBackground();

// Contact form handling (for future contact page)
function handleContactForm(form) {
    form.addEventListener('submit', function(e) {
        e.preventDefault();
        
        const formData = new FormData(form);
        const data = Object.fromEntries(formData);
        
        // Simulate form submission
        console.log('Form submitted:', data);
        
        // Show success message
        showNotification('Thank you for your message! I will get back to you soon.', 'success');
        form.reset();
    });
}

function showNotification(message, type = 'info') {
    const notification = document.createElement('div');
    notification.className = `fixed top-4 right-4 p-4 rounded-lg shadow-lg z-50 ${
        type === 'success' ? 'bg-green-500 text-white' : 
        type === 'error' ? 'bg-red-500 text-white' : 
        'bg-blue-500 text-white'
    }`;
    notification.textContent = message;
    
    document.body.appendChild(notification);
    
    setTimeout(() => {
        notification.remove();
    }, 5000);
}

// Export functions for use in other pages
window.ResumeApp = {
    fadeIn,
    slideUp,
    showNotification,
    handleContactForm
};
