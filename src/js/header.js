document.addEventListener('DOMContentLoaded', () => {
  const themeSwitch = document.querySelector('.theme-switch__checkbox');
  const html = document.documentElement;

  if (!themeSwitch) {
    console.warn('Theme switch element not found');
    return;
  }

  const setTheme = isDark => {
    html.setAttribute('data-theme', isDark ? 'dark' : 'light');
    themeSwitch.checked = isDark;
  };

  try {
    setTheme(false);
    const savedTheme = localStorage.getItem('theme');

    if (savedTheme === 'dark') {
      setTheme(true);
    } else if (!savedTheme) {
      const prefersDark = window.matchMedia(
        '(prefers-color-scheme: dark)'
      ).matches;
      if (prefersDark) {
        setTheme(true);
      }
    }

    const darkThemeMq = window.matchMedia('(prefers-color-scheme: dark)');
    darkThemeMq.addEventListener('change', e => {
      if (!localStorage.getItem('theme')) {
        setTheme(e.matches);
      }
    });

    themeSwitch.addEventListener('change', () => {
      const isDark = themeSwitch.checked;
      setTheme(isDark);
      localStorage.setItem('theme', isDark ? 'dark' : 'light');
    });
  } catch (error) {
    console.error('Error in theme initialization:', error);
  }
});
