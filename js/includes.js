document.addEventListener('DOMContentLoaded', () => {
  Promise.all([
    fetch('partials/header.html').then(r => r.text()),
    fetch('partials/footer.html').then(r => r.text())
  ])
  .then(([header, footer]) => {
    document.getElementById('site-header').innerHTML = header;
    document.getElementById('site-footer').innerHTML = footer;

    // After header is loaded, dispatch a custom event
    document.dispatchEvent(new Event('header-loaded'));
  })
  .catch(err => console.error('Include error:', err));
});