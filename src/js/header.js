document.addEventListener('DOMContentLoaded', () => {
    const themeSwitch = document.querySelector('.theme-switch__checkbox');
    const html = document.documentElement;
    const body = document.body;
    
    if (!themeSwitch) {
        console.warn('Theme switch element not found');
        return;
    }
    
    try {
        const savedTheme = localStorage.getItem('theme');
        const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
        
        const setTheme = (isDark) => {
            html.setAttribute('data-theme', isDark ? 'dark' : 'light');
            themeSwitch.checked = isDark;
            body.style.backgroundColor = isDark ? '#1a1a1a' : '#FFFFFF';
            body.style.color = isDark ? '#FFFFFF' : '#333333';
        };

        setTheme(savedTheme === 'dark' || (!savedTheme && prefersDark));

        themeSwitch.addEventListener('change', () => {
            const isDark = themeSwitch.checked;
            setTheme(isDark);
            localStorage.setItem('theme', isDark ? 'dark' : 'light');
        });

        const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
        mediaQuery.addEventListener('change', (e) => {
            if (!localStorage.getItem('theme')) {
                setTheme(e.matches);
            }
        });

    } catch (error) {
        console.error('Error in theme initialization:', error);
    }
}); 