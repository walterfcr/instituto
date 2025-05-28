const loadMoreBtn = document.getElementById('load-more-btn');
const hiddenPosts = document.querySelectorAll('#blog-posts-container .d-none');

loadMoreBtn.addEventListener('click', () => {
  hiddenPosts.forEach(post => post.classList.remove('d-none'));
  loadMoreBtn.style.display = 'none'; // Hide the button after loading more posts

  // Refresh AOS animations for newly visible elements
  if (AOS) {
    AOS.refresh();
  }
});