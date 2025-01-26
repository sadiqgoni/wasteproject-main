// Mobile Menu Toggle
document.addEventListener('DOMContentLoaded', () => {
    const mobileMenu = document.querySelector('.mobile-menu');
    const navLinks = document.querySelector('.nav-links');

    mobileMenu.addEventListener('click', () => {
        navLinks.style.display = navLinks.style.display === 'flex' ? 'none' : 'flex';
    });

    // Interactive Infographic Data
    const infographicData = [
        {
            title: 'Take',
            description: 'Raw materials are extracted from the Earth',
            icon: '🏭'
        },
        {
            title: 'Make',
            description: 'Materials are used to manufacture products',
            icon: '⚙️'
        },
        {
            title: 'Use',
            description: 'Products are used by consumers',
            icon: '👥'
        },
        {
            title: 'Recover',
            description: 'Materials are recycled and reused',
            icon: '♻️'
        }
    ];

    // Populate Interactive Infographic
    const infographic = document.querySelector('.interactive-infographic');
    if (infographic) {
        const infographicHTML = infographicData.map(item => `
            <div class="infographic-item">
                <div class="icon">${item.icon}</div>
                <h3>${item.title}</h3>
                <p>${item.description}</p>
            </div>
        `).join('');
        infographic.innerHTML = infographicHTML;
    }

    // Challenges Data
    const challengesData = [
        {
            title: 'Resource Depletion',
            description: 'Overconsumption of natural resources',
            icon: '🌍'
        },
        {
            title: 'Waste Management',
            description: 'Inefficient waste disposal systems',
            icon: '🗑️'
        },
        {
            title: 'Carbon Emissions',
            description: 'High environmental impact of production',
            icon: '💨'
        },
        {
            title: 'Economic Impact',
            description: 'Cost of transitioning to circular systems',
            icon: '💰'
        }
    ];

    // Populate Challenges Grid
    const challengesGrid = document.querySelector('.challenges-grid');
    if (challengesGrid) {
        const challengesHTML = challengesData.map(challenge => `
            <div class="challenge-card">
                <div class="icon">${challenge.icon}</div>
                <h3>${challenge.title}</h3>
                <p>${challenge.description}</p>
            </div>
        `).join('');
        challengesGrid.innerHTML = challengesHTML;
    }

    // Contact Form Handling
    const contactForm = document.getElementById('contactForm');
    if (contactForm) {
        contactForm.addEventListener('submit', (e) => {
            e.preventDefault();
            const formData = {
                name: document.getElementById('name').value,
                email: document.getElementById('email').value,
                message: document.getElementById('message').value
            };
            // Here you would typically send the form data to a server
            console.log('Form submitted:', formData);
            alert('Thank you for your message! We will get back to you soon.');
            contactForm.reset();
        });
    }

    // Smooth Scrolling for Navigation Links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
                // Close mobile menu if open
                navLinks.style.display = '';
            }
        });
    });
});

// Add scroll event listener for navbar
window.addEventListener('scroll', () => {
    const navbar = document.querySelector('.navbar');
    if (window.scrollY > 50) {
        navbar.style.background = 'rgba(255, 255, 255, 0.95)';
        navbar.style.boxShadow = '0 2px 10px rgba(0,0,0,0.1)';
    } else {
        navbar.style.background = 'white';
        navbar.style.boxShadow = '0 2px 5px rgba(0,0,0,0.1)';
    }
});
