// PDF Juggler Landing Page - Softablitz 2025
// Team: JholaChhapDevs - Shubham Gupta, Pawan Kumar, Sanyam Goel

document.addEventListener('DOMContentLoaded', () => {
    const tabs = document.querySelectorAll('.tab');
    const tabContents = document.querySelectorAll('.tab-content');

    function switchTab(tabName) {
        tabs.forEach(tab => tab.classList.remove('active'));
        tabContents.forEach(content => content.classList.remove('active'));
        
        const activeTab = document.querySelector('[data-tab="' + tabName + '"]');
        if (activeTab) {
            activeTab.classList.add('active');
        }
        
        const activeContent = document.getElementById(tabName + 'Tab');
        if (activeContent) {
            activeContent.classList.add('active');
        }
    }

    tabs.forEach(tab => {
        tab.addEventListener('click', () => {
            const tabName = tab.dataset.tab;
            switchTab(tabName);
        });
    });

    const downloadButtons = document.querySelectorAll('.download-btn');
    
    downloadButtons.forEach(btn => {
        btn.addEventListener('click', (e) => {
            e.preventDefault();
            
            const platform = btn.classList.contains('windows') ? 'Windows' :
                           btn.classList.contains('macos') ? 'macOS' : 'Linux';
            
            alert('Thank you for your interest in PDF Juggler!\n\nThe ' + platform + ' download will be available soon.\n\nFor now, please check back later or contact the team for early access.');
        });
    });

    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -100px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, observerOptions);

    document.querySelectorAll('.feature-card, .team-card, .download-btn').forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(20px)';
        el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(el);
    });

    // Add glow effect class and track cursor
    const cards = document.querySelectorAll('.feature-card, .team-card, .download-btn, .tech-item, .feature-item');
    
    cards.forEach(card => {
        card.classList.add('glow-effect');
        card.addEventListener('mousemove', (e) => {
            const rect = card.getBoundingClientRect();
            card.style.setProperty('--x', `${e.clientX - rect.left}px`);
            card.style.setProperty('--y', `${e.clientY - rect.top}px`);
        });
    });

    console.log('%c PDF Juggler ', 'background: #CC9900; color: #330000; font-size: 20px; font-weight: bold; padding: 10px;');
    console.log('%c Created by JholaChhapDevs for Softablitz 2025 ', 'background: #330000; color: #FFCC99; font-size: 14px; padding: 5px;');
    console.log('%c Team: Shubham Gupta (Leader), Pawan Kumar, Sanyam Goel ', 'color: #CC9900; font-size: 12px;');
    console.log('%c MCA 2nd Year ', 'color: #FFCC99; font-size: 12px;');
});
