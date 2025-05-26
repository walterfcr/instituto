(() => {
  const STORAGE_KEY = 'uTheme';
  const body = document.body;

  // Apply saved theme immediately (before content loaded)
  const applyTheme = theme => {
    body.classList.remove('theme-blue', 'theme-green', 'theme-red');
    body.classList.add(theme);
    localStorage.setItem(STORAGE_KEY, theme);
  };

  const saved = localStorage.getItem(STORAGE_KEY);
  if (saved) applyTheme(saved);

  // Wait until header is loaded before querying .theme-select
  document.addEventListener('header-loaded', () => {
    const links = document.querySelectorAll('.theme-select');
    links.forEach(link => {
      link.addEventListener('click', e => {
        e.preventDefault();
        applyTheme(link.dataset.theme);
      });
    });
  });
})();
