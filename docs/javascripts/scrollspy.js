// ScrollSpy functionality for MkDocs Material theme
document.addEventListener('DOMContentLoaded', function() {
    // Configuration
    const config = {
        offset: 100, // Offset from top when considering if section is active
        activeClass: 'active'
    };

    // Get all headings and TOC links
    const headings = document.querySelectorAll('h1[id], h2[id], h3[id], h4[id], h5[id], h6[id]');
    const tocLinks = document.querySelectorAll('.md-nav__link[href^="#"]');
    
    if (headings.length === 0 || tocLinks.length === 0) {
        return; // Exit if no headings or TOC links found
    }

    // Create a map of href to TOC link elements
    const tocMap = new Map();
    tocLinks.forEach(link => {
        const href = link.getAttribute('href');
        tocMap.set(href, link);
    });

    // Function to get the currently active section
    function getCurrentSection() {
        const scrollPos = window.scrollY + config.offset;
        
        for (let i = headings.length - 1; i >= 0; i--) {
            const heading = headings[i];
            if (heading.offsetTop <= scrollPos) {
                return heading.id;
            }
        }
        
        return headings[0] ? headings[0].id : null;
    }

    // Function to update active TOC item
    function updateActiveTocItem() {
        const currentSection = getCurrentSection();
        
        if (!currentSection) return;

        // Remove active class from all TOC links
        tocLinks.forEach(link => {
            link.classList.remove(config.activeClass);
        });

        // Add active class to current section's TOC link
        const currentTocLink = tocMap.get(`#${currentSection}`);
        if (currentTocLink) {
            currentTocLink.classList.add(config.activeClass);
        }
    }

    // Throttle function to improve performance
    function throttle(func, limit) {
        let inThrottle;
        return function() {
            const args = arguments;
            const context = this;
            if (!inThrottle) {
                func.apply(context, args);
                inThrottle = true;
                setTimeout(() => inThrottle = false, limit);
            }
        }
    }

    // Event listeners
    const throttledUpdate = throttle(updateActiveTocItem, 100);
    window.addEventListener('scroll', throttledUpdate);
    window.addEventListener('resize', throttledUpdate);

    // Initial call
    updateActiveTocItem();

    // Handle TOC link clicks for smooth scrolling
    tocLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            const href = this.getAttribute('href');
            if (href.startsWith('#')) {
                e.preventDefault();
                const targetElement = document.getElementById(href.substring(1));
                if (targetElement) {
                    const offsetTop = targetElement.offsetTop - config.offset + 50;
                    window.scrollTo({
                        top: offsetTop,
                        behavior: 'smooth'
                    });
                }
            }
        });
    });
});
