// script.js

const toggleBtn = document.getElementById('theme-toggle');
const body = document.body;
const THEME_KEY = 'theme';

// Helper: apply theme from localStorage
function applyTheme() {
    if (localStorage.getItem(THEME_KEY) === 'light') {
        body.classList.add('light-mode');
    } else {
        body.classList.remove('light-mode');
    }
}

// On load, always apply stored theme
applyTheme();

// Toggle theme and save to localStorage
toggleBtn.addEventListener('click', () => {
    body.classList.toggle('light-mode');
    if (body.classList.contains('light-mode')) {
        localStorage.setItem(THEME_KEY, 'light');
    } else {
        localStorage.setItem(THEME_KEY, 'dark');
    }
});

// Respond to theme changes in other tabs/pages (sync!)
window.addEventListener('storage', (event) => {
    if (event.key === THEME_KEY) {
        applyTheme();
    }
});
