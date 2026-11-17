/* TinyWOD — minimal vanilla JavaScript
   Smooth scrolling is handled natively via CSS `scroll-behavior: smooth`.
   This script keeps external links safe and closes the mobile nav (if present) on click.
*/

(function () {
  'use strict';

  // Ensure all external links open securely.
  document.querySelectorAll('a[target="_blank"]').forEach(function (link) {
    if (!link.rel) {
      link.rel = 'noopener noreferrer';
    }
  });

  // Highlight the nav link of the section currently in view.
  var sections = document.querySelectorAll('section[id], header[id]');
  var navLinks = document.querySelectorAll('.nav-links a');

  if (!('IntersectionObserver' in window)) {
    return;
  }

  var observer = new IntersectionObserver(
    function (entries) {
      entries.forEach(function (entry) {
        if (!entry.isIntersecting) {
          return;
        }
        var id = entry.target.getAttribute('id');
        navLinks.forEach(function (link) {
          var href = link.getAttribute('href');
          link.classList.toggle('active', href === '#' + id);
        });
      });
    },
    { rootMargin: '-45% 0px -50% 0px', threshold: 0 }
  );

  sections.forEach(function (section) {
    observer.observe(section);
  });
})();
