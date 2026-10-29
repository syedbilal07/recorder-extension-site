// Shared by the site's pages. Kept tiny: no libraries, no tracking.

// The store link, once the listing is live. Until then the buttons say
// "Coming soon". Paste the listing URL here and every button becomes a link.
const STORE_URL = '';

for (const a of document.querySelectorAll('[data-store-link]')) {
  if (STORE_URL) {
    a.href = STORE_URL;
    a.textContent = 'Add to Chrome – it’s free';
    a.rel = 'noopener';
  } else {
    a.setAttribute('aria-disabled', 'true');
    a.addEventListener('click', (e) => e.preventDefault());
  }
}

// Respect reduced motion: no autoplaying video, just a play button.
const video = document.querySelector('video.demo');
if (video && matchMedia('(prefers-reduced-motion: reduce)').matches) {
  video.removeAttribute('autoplay');
  video.pause();
  video.controls = true;
}
