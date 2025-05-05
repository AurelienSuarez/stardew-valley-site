// Mobile menu toggle
document.addEventListener('DOMContentLoaded', function() {
  const mobileMenuToggle = document.querySelector('.mobile-menu-toggle');
  const nav = document.querySelector('nav');
  
  if (mobileMenuToggle) {
    mobileMenuToggle.addEventListener('click', function() {
      nav.style.display = nav.style.display === 'block' ? 'none' : 'block';
    });
  }
  
  // Gestion du formulaire de newsletter
  const newsletterForm = document.querySelector('.newsletter-form');
  if (newsletterForm) {
    newsletterForm.addEventListener('submit', function(e) {
      e.preventDefault();
      const email = this.querySelector('input[type="email"]').value;
      alert('Merci de vous ?tre inscrit avec l\'adresse : ' + email + ' (Ceci est une d?mo)');
      this.reset();
    });
  }
});
