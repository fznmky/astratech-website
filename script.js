// script.js

// 1. Initialize Smooth Scroll Animations (AOS)
document.addEventListener("DOMContentLoaded", function () {
    AOS.init({
        duration: 900,
        easing: 'ease-out-cubic',
        once: true,
        offset: 50,
    });
});

// 2. Interactive Tabs Logic with Animation Trigger
const tabs = ['auto', 'electronics', 'packaging', 'agri', 'hardware'];

function switchTab(selected) {
    tabs.forEach(tab => {
        const contentEl = document.getElementById('content-' + tab);
        if (contentEl) {
            contentEl.classList.add('hidden');
            contentEl.classList.remove('md:grid', 'grid', 'tab-pane-enter');
        }

        const tabEl = document.getElementById('tab-' + tab);
        if (tabEl) {
            tabEl.classList.remove('tab-active');
        }
    });

    const selectedContent = document.getElementById('content-' + selected);
    if (selectedContent) {
        selectedContent.classList.remove('hidden');
        void selectedContent.offsetWidth;
        selectedContent.classList.add('grid', 'md:grid', 'tab-pane-enter');
    }

    const selectedTab = document.getElementById('tab-' + selected);
    if (selectedTab) {
        selectedTab.classList.add('tab-active');
    }
}

// 3. NDA Form Logic
document.addEventListener("DOMContentLoaded", function () {
    const ndaCheckbox = document.getElementById('nda-checkbox');
    const ndaMessage = document.getElementById('nda-message');

    if (ndaCheckbox && ndaMessage) {
        ndaCheckbox.addEventListener('change', function () {
            if (this.checked) {
                ndaMessage.classList.remove('hidden');
            } else {
                ndaMessage.classList.add('hidden');
            }
        });
    }
});

// 4. Mobile Menu Toggle Logic
document.addEventListener("DOMContentLoaded", function () {
    const mobileMenuBtn = document.getElementById('mobile-menu-btn');
    const mobileMenu = document.getElementById('mobile-menu');

    if (mobileMenuBtn && mobileMenu) {
        mobileMenuBtn.addEventListener('click', function () {
            mobileMenu.classList.toggle('hidden');
        });

        // Close mobile menu when clicking a link
        const mobileLinks = mobileMenu.querySelectorAll('a');
        mobileLinks.forEach(link => {
            link.addEventListener('click', () => {
                mobileMenu.classList.add('hidden');
            });
        });
    }
});