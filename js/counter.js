
  // Counter animation when the element is visible
  document.addEventListener('DOMContentLoaded', () => {
    const counters = document.querySelectorAll('.counter');
    const options  = { threshold: 0.6 };

    const animate = (counter) => {
      const target = +counter.dataset.target;
      const speed = 200;
      const step = Math.ceil(target / speed);

      const update = () => {
        const value = +counter.innerText;
        if (value < target) {
          counter.innerText = value + step;
          requestAnimationFrame(update);
        } else {
          counter.innerText = target.toLocaleString();
        }
      };
      update();
    };

    const observer = new IntersectionObserver((entries, obs) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          animate(entry.target);
          obs.unobserve(entry.target); // Animate only once
        }
      });
    }, options);

    counters.forEach(c => observer.observe(c));
  });
