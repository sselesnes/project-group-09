<<<<<<< HEAD
window.onload = function() {
    const themeButton = document.querySelector('.theme-switch');
    
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme) {
        document.body.setAttribute('data-theme', savedTheme);
    }
    
    themeButton.onclick = function() {
        const currentTheme = document.body.getAttribute('data-theme');
        
        if (currentTheme === 'dark') {
            document.body.setAttribute('data-theme', 'light');
            localStorage.setItem('theme', 'light');
        } else {
            document.body.setAttribute('data-theme', 'dark');
            localStorage.setItem('theme', 'dark');
        }
    };
}; 
=======
document.addEventListener('DOMContentLoaded', () => {
    const themeToggle = document.querySelector('.switch');
    const prefersDarkScheme = window.matchMedia('(prefers-color-scheme: dark)');
    
    function toggleTheme() {
        const currentTheme = document.documentElement.getAttribute('data-theme');
        const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
        document.documentElement.setAttribute('data-theme', newTheme);
        localStorage.setItem('theme', newTheme);
    }

    const savedTheme = localStorage.getItem('theme');
    if (savedTheme) {
        document.documentElement.setAttribute('data-theme', savedTheme);
    } else if (prefersDarkScheme.matches) {
        document.documentElement.setAttribute('data-theme', 'dark');
    }

    if (themeToggle) {
        themeToggle.addEventListener('click', toggleTheme);
    }
}); 
>>>>>>> 5a24386e5dcc3fee11fee5a3f1ecc235f16cf6ce
