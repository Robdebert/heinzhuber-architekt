// Smooth scrolling for internal navigation
document.addEventListener('DOMContentLoaded', function() {


    // Add smooth scrolling behavior with header offset
    const links = document.querySelectorAll('a[href^="#"]');
    
    links.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            
            const targetId = this.getAttribute('href');
            const targetSection = document.querySelector(targetId);
            
            if (targetSection) {
                const headerHeight = document.querySelector('.header').offsetHeight;
                const targetPosition = targetSection.getBoundingClientRect().top + window.pageYOffset - headerHeight;
                
                window.scrollTo({
                    top: targetPosition,
                    behavior: 'smooth'
                });
            }
        });
    });


    
    // Add subtle animation on scroll for gallery items
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };
    
    const observer = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, observerOptions);
    
    // Observe gallery items for animation
    const galleryItems = document.querySelectorAll('.gallery-item');
    galleryItems.forEach((item, index) => {
        item.style.opacity = '0';
        item.style.transform = 'translateY(30px)';
        item.style.transition = `opacity 0.6s ease ${index * 0.1}s, transform 0.6s ease ${index * 0.1}s`;
        observer.observe(item);
    });
    
    // Add a simple navigation effect for services
    const serviceItems = document.querySelectorAll('.services-list li');
    serviceItems.forEach((item, index) => {
        item.style.opacity = '0';
        item.style.transform = 'translateX(-30px)';
        item.style.transition = `opacity 0.5s ease ${index * 0.1}s, transform 0.5s ease ${index * 0.1}s`;
        
        setTimeout(() => {
            item.style.opacity = '1';
            item.style.transform = 'translateX(0)';
        }, 500 + (index * 100));
    });

    // Add target="_blank" to PDF download links
    const downloadLinks = document.querySelectorAll('.download-link');
    downloadLinks.forEach(link => {
        link.target = '_blank';
        link.rel = 'noopener';
    });

    // Toggle visibility of first menu item based on services section visibility
    const firstMenuItem = document.getElementById('firstMenuitem');
    const servicesSection = document.getElementById('leistungen');
    
    const menuObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            // When services section is visible, hide the menu item
            firstMenuItem.style.opacity = entry.isIntersecting ? '0' : '1';
            firstMenuItem.style.visibility = entry.isIntersecting ? 'hidden' : 'visible';
        });
    }, {
        threshold: 0.1, // Trigger when at least 10% of the section is visible
        rootMargin: `-${document.querySelector('.header').offsetHeight}px 0px 0px 0px` // Account for header height
    });
    
    menuObserver.observe(servicesSection);
});