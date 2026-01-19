// ==========================================
// Theme Toggle Functionality
// ==========================================
const themeToggle = document.getElementById('themeToggle');
const html = document.documentElement;

// Check for saved theme preference or default to 'light'
const currentTheme = localStorage.getItem('theme') || 'light';
html.setAttribute('data-theme', currentTheme);
updateThemeIcon(currentTheme);

themeToggle.addEventListener('click', () => {
    const theme = html.getAttribute('data-theme');
    const newTheme = theme === 'light' ? 'dark' : 'light';

    html.setAttribute('data-theme', newTheme);
    localStorage.setItem('theme', newTheme);
    updateThemeIcon(newTheme);
});

function updateThemeIcon(theme) {
    themeToggle.textContent = theme === 'light' ? '🌙' : '☀️';
}

// ==========================================
// Smooth Scrolling for Navigation Links
// ==========================================
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));

        if (target) {
            const offsetTop = target.offsetTop - 80; // Account for fixed navbar
            window.scrollTo({
                top: offsetTop,
                behavior: 'smooth'
            });
        }
    });
});

// ==========================================
// Back to Top Button
// ==========================================
const backToTopButton = document.getElementById('backToTop');

window.addEventListener('scroll', () => {
    if (window.pageYOffset > 300) {
        backToTopButton.classList.add('visible');
    } else {
        backToTopButton.classList.remove('visible');
    }
});

backToTopButton.addEventListener('click', () => {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
});

// ==========================================
// Active Navigation Link on Scroll
// ==========================================
const sections = document.querySelectorAll('.section[id]');
const navLinks = document.querySelectorAll('.nav-menu a');

window.addEventListener('scroll', () => {
    let current = '';
    const scrollPosition = window.pageYOffset + 100;

    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;

        if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
            current = section.getAttribute('id');
        }
    });

    navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href') === `#${current}`) {
            link.classList.add('active');
        }
    });
});

// ==========================================
// Intersection Observer for Animations
// ==========================================
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('fade-in');
            observer.unobserve(entry.target);
        }
    });
}, observerOptions);

// Observe all content cards and feature items
document.querySelectorAll('.content-card, .feature-item, .path-step').forEach(el => {
    observer.observe(el);
});

// ==========================================
// Code Block Syntax Highlighting (Simple)
// ==========================================
document.addEventListener('DOMContentLoaded', () => {
    // Simple syntax highlighting for Rust code
    const rustCodeBlocks = document.querySelectorAll('code.rust');

    rustCodeBlocks.forEach(block => {
        let html = block.innerHTML;

        // Keywords
        const keywords = ['fn', 'let', 'mut', 'pub', 'use', 'mod', 'struct', 'impl', 'enum', 'trait', 'type', 'const', 'static', 'return', 'if', 'else', 'while', 'for', 'loop', 'match', 'break', 'continue', 'move', 'ref', 'where'];
        keywords.forEach(keyword => {
            const regex = new RegExp(`\\b(${keyword})\\b`, 'g');
            html = html.replace(regex, '<span class="syntax-keyword">$1</span>');
        });

        // Types
        const types = ['String', 'u32', 'u64', 'i32', 'i64', 'usize', 'bool', 'f32', 'f64', 'Vec', 'Option', 'Result', 'Context', 'Account', 'Signer', 'Program', 'System'];
        types.forEach(type => {
            const regex = new RegExp(`\\b(${type})\\b`, 'g');
            html = html.replace(regex, '<span class="syntax-type">$1</span>');
        });

        // Macros
        html = html.replace(/(\w+!)/g, '<span class="syntax-macro">$1</span>');

        // Comments
        html = html.replace(/(\/\/.*$)/gm, '<span class="syntax-comment">$1</span>');

        // Strings
        html = html.replace(/(".*?")/g, '<span class="syntax-string">$1</span>');

        block.innerHTML = html;
    });
});

// ==========================================
// Copy Code Functionality
// ==========================================
document.querySelectorAll('pre').forEach(pre => {
    const wrapper = document.createElement('div');
    wrapper.className = 'code-block-wrapper';
    wrapper.style.position = 'relative';

    const copyButton = document.createElement('button');
    copyButton.className = 'copy-button';
    copyButton.textContent = '📋 Copy';
    copyButton.style.cssText = `
        position: absolute;
        top: 0.5rem;
        right: 0.5rem;
        background: rgba(255,255,255,0.1);
        border: 1px solid rgba(255,255,255,0.2);
        color: #fff;
        padding: 0.25rem 0.75rem;
        border-radius: 0.25rem;
        cursor: pointer;
        font-size: 0.85rem;
        transition: all 0.2s ease;
    `;

    copyButton.addEventListener('click', async () => {
        const code = pre.querySelector('code');
        if (code) {
            try {
                await navigator.clipboard.writeText(code.textContent);
                copyButton.textContent = '✅ Copied!';
                setTimeout(() => {
                    copyButton.textContent = '📋 Copy';
                }, 2000);
            } catch (err) {
                copyButton.textContent = '❌ Failed';
                setTimeout(() => {
                    copyButton.textContent = '📋 Copy';
                }, 2000);
            }
        }
    });

    copyButton.addEventListener('mouseenter', () => {
        copyButton.style.background = 'rgba(255,255,255,0.2)';
    });

    copyButton.addEventListener('mouseleave', () => {
        copyButton.style.background = 'rgba(255,255,255,0.1)';
    });

    pre.parentNode.insertBefore(wrapper, pre);
    wrapper.appendChild(pre);
    wrapper.appendChild(copyButton);
});

// ==========================================
// Mobile Menu Toggle
// ==========================================
const createMobileMenu = () => {
    const navContainer = document.querySelector('.nav-container');
    const navMenu = document.querySelector('.nav-menu');

    // Create hamburger button
    const hamburger = document.createElement('button');
    hamburger.className = 'hamburger';
    hamburger.innerHTML = '☰';
    hamburger.style.cssText = `
        display: none;
        background: none;
        border: none;
        font-size: 1.5rem;
        color: var(--text-primary);
        cursor: pointer;
    `;

    navContainer.insertBefore(hamburger, navMenu);

    // Show hamburger on mobile
    const mediaQuery = window.matchMedia('(max-width: 768px)');

    const handleMobileView = (e) => {
        if (e.matches) {
            hamburger.style.display = 'block';
            navMenu.style.cssText = `
                display: none;
                flex-direction: column;
                position: absolute;
                top: 100%;
                left: 0;
                right: 0;
                background: var(--bg-card);
                padding: 1rem;
                border-bottom: 1px solid var(--border-color);
                box-shadow: var(--shadow-lg);
            `;
        } else {
            hamburger.style.display = 'none';
            navMenu.style.cssText = `
                display: flex;
                flex-direction: row;
                position: static;
                padding: 0;
                border: none;
                box-shadow: none;
            `;
        }
    };

    mediaQuery.addListener(handleMobileView);
    handleMobileView(mediaQuery);

    // Toggle menu
    hamburger.addEventListener('click', () => {
        const isVisible = navMenu.style.display === 'flex';
        navMenu.style.display = isVisible ? 'none' : 'flex';
    });
};

// Initialize mobile menu
createMobileMenu();

// ==========================================
// Search Functionality (Simple)
// ==========================================
const createSearchFeature = () => {
    const searchContainer = document.createElement('div');
    searchContainer.className = 'search-container';
    searchContainer.style.cssText = `
        position: relative;
        margin: 0 1rem;
    `;

    const searchInput = document.createElement('input');
    searchInput.type = 'text';
    searchInput.placeholder = '🔍 搜索 | Search...';
    searchInput.style.cssText = `
        padding: 0.5rem 1rem;
        border: 1px solid var(--border-color);
        border-radius: 2rem;
        background: var(--bg-secondary);
        color: var(--text-primary);
        font-size: 0.9rem;
        width: 200px;
        transition: all 0.3s ease;
    `;

    searchInput.addEventListener('focus', () => {
        searchInput.style.width = '300px';
        searchInput.style.borderColor = 'var(--accent-color)';
    });

    searchInput.addEventListener('blur', () => {
        searchInput.style.width = '200px';
        searchInput.style.borderColor = 'var(--border-color)';
    });

    searchContainer.appendChild(searchInput);

    // Add search to navigation
    const navContainer = document.querySelector('.nav-container');
    const themeToggle = document.getElementById('themeToggle');
    navContainer.insertBefore(searchContainer, themeToggle);

    // Search functionality
    let searchTimeout;
    searchInput.addEventListener('input', (e) => {
        clearTimeout(searchTimeout);
        const query = e.target.value.toLowerCase();

        if (query.length < 2) {
            clearHighlights();
            return;
        }

        searchTimeout = setTimeout(() => {
            clearHighlights();
            highlightSearchResults(query);
        }, 300);
    });
};

function highlightSearchResults(query) {
    const contentCards = document.querySelectorAll('.content-card');

    contentCards.forEach(card => {
        const walker = document.createTreeWalker(
            card,
            NodeFilter.SHOW_TEXT,
            null,
            false
        );

        const textNodes = [];
        let node;
        while (node = walker.nextNode()) {
            if (node.nodeValue.toLowerCase().includes(query)) {
                textNodes.push(node);
            }
        }

        textNodes.forEach(textNode => {
            const parent = textNode.parentNode;
            if (parent.tagName !== 'SCRIPT' && parent.tagName !== 'STYLE') {
                const regex = new RegExp(`(${query})`, 'gi');
                const highlighted = textNode.nodeValue.replace(regex, '🔍$1🔍');
                const span = document.createElement('span');
                span.innerHTML = highlighted;
                parent.replaceChild(span, textNode);
            }
        });
    });
}

function clearHighlights() {
    const highlights = document.querySelectorAll('span');
    highlights.forEach(span => {
        if (span.innerHTML.includes('🔍')) {
            const text = span.innerHTML.replace(/🔍/g, '');
            const textNode = document.createTextNode(text);
            span.parentNode.replaceChild(textNode, span);
        }
    });
}

// Initialize search
createSearchFeature();

// ==========================================
// Keyboard Shortcuts
// ==========================================
document.addEventListener('keydown', (e) => {
    // Ctrl/Cmd + K to focus search
    if ((e.ctrlKey || e.metaKey) && e.key === 'k') {
        e.preventDefault();
        const searchInput = document.querySelector('.search-container input');
        if (searchInput) {
            searchInput.focus();
        }
    }

    // Escape to clear search
    if (e.key === 'Escape') {
        const searchInput = document.querySelector('.search-container input');
        if (searchInput && document.activeElement === searchInput) {
            searchInput.value = '';
            clearHighlights();
            searchInput.blur();
        }
    }
});

// ==========================================
// Progress Bar
// ==========================================
const createProgressBar = () => {
    const progressBar = document.createElement('div');
    progressBar.className = 'reading-progress';
    progressBar.style.cssText = `
        position: fixed;
        top: 0;
        left: 0;
        height: 3px;
        background: linear-gradient(90deg, #9945FF, #14F195);
        width: 0%;
        z-index: 9999;
        transition: width 0.1s ease;
    `;

    document.body.appendChild(progressBar);

    window.addEventListener('scroll', () => {
        const scrollTop = window.pageYOffset;
        const docHeight = document.documentElement.scrollHeight - window.innerHeight;
        const progress = (scrollTop / docHeight) * 100;
        progressBar.style.width = `${progress}%`;
    });
};

createProgressBar();

// ==========================================
// External Link Handling
// ==========================================
document.querySelectorAll('a[href^="http"]').forEach(link => {
    if (!link.hostname.includes(window.location.hostname)) {
        link.setAttribute('target', '_blank');
        link.setAttribute('rel', 'noopener noreferrer');
        link.setAttribute('aria-label', `Opens ${link.textContent} in a new tab`);
    }
});

// ==========================================
// Console Welcome Message
// ==========================================
console.log('%c🦀 Rust Web3 Learning Guide', 'font-size: 24px; font-weight: bold; color: #ce422b;');
console.log('%cWelcome to the Rust + Solana + Arbitrum learning guide!', 'font-size: 14px; color: #64748b;');
console.log('%cMade with ❤️ for the Web3 community', 'font-size: 12px; color: #94a3b8;');
console.log('%c🔗 Learn more: https://github.com', 'font-size: 12px; color: #3b82f6;');

// ==========================================
// Performance Optimization
// ==========================================
// Debounce scroll events
let scrollTimeout;
window.addEventListener('scroll', () => {
    if (scrollTimeout) {
        window.cancelAnimationFrame(scrollTimeout);
    }
    scrollTimeout = window.requestAnimationFrame(() => {
        // Scroll handling code here
    });
});

// Lazy load images (if any are added in the future)
const lazyLoadImages = () => {
    const images = document.querySelectorAll('img[data-src]');

    const imageObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const img = entry.target;
                img.src = img.dataset.src;
                img.removeAttribute('data-src');
                imageObserver.unobserve(img);
            }
        });
    });

    images.forEach(img => imageObserver.observe(img));
};

lazyLoadImages();

console.log('✅ All JavaScript features loaded successfully!');