/**
 * SKARDU TOURISM — main.js
 * ─────────────────────────────────────────────────────────────
 * Modules in this file:
 *   1. Custom Cursor
 *   2. Sticky Navbar
 *   3. Parallax Engine (RAF-based, GPU-accelerated)
 *   4. Scroll Reveal (IntersectionObserver)
 *   5. Drag-to-Scroll Carousel
 *   6. Smooth Anchor Scroll
 * ─────────────────────────────────────────────────────────────
 */

'use strict';

/* ─────────────────────────────────────────────────────────────
   1. CUSTOM CURSOR
   Two elements: a small dot that follows the mouse exactly,
   and a larger ring that lerps (smoothly interpolates) behind.
───────────────────────────────────────────────────────────── */
const cursor     = document.getElementById('cursor');
const cursorRing = document.getElementById('cursor-ring');

// Current mouse position
let mouseX = 0;
let mouseY = 0;

// Ring position (starts at 0,0 then lerps to mouse)
let ringX = 0;
let ringY = 0;

// How fast the ring catches up (0 = never, 1 = instant)
const RING_LERP = 0.12;

/** Update dot position immediately on mousemove */
document.addEventListener('mousemove', (e) => {
  mouseX = e.clientX;
  mouseY = e.clientY;

  // Dot snaps immediately
  cursor.style.left = `${mouseX}px`;
  cursor.style.top  = `${mouseY}px`;
});

/** Ring animates smoothly via requestAnimationFrame */
function animateRing() {
  // Linear interpolation: ringX moves RING_LERP of the gap each frame
  ringX += (mouseX - ringX) * RING_LERP;
  ringY += (mouseY - ringY) * RING_LERP;

  cursorRing.style.left = `${ringX}px`;
  cursorRing.style.top  = `${ringY}px`;

  requestAnimationFrame(animateRing);
}
animateRing();

/** Grow cursor when hovering interactive elements */
const interactiveSelectors = 'a, button, .dest-tile, .exp-card, .s-card, .btn-ghost, .btn-primary, .btn-outline';
document.querySelectorAll(interactiveSelectors).forEach((el) => {
  el.addEventListener('mouseenter', () => {
    cursor.style.width     = '18px';
    cursor.style.height    = '18px';
    cursorRing.style.width  = '52px';
    cursorRing.style.height = '52px';
    cursorRing.style.borderColor = 'var(--color-gold)';
  });
  el.addEventListener('mouseleave', () => {
    cursor.style.width     = '10px';
    cursor.style.height    = '10px';
    cursorRing.style.width  = '36px';
    cursorRing.style.height = '36px';
    cursorRing.style.borderColor = 'rgba(201,169,110,0.5)';
  });
});


/* ─────────────────────────────────────────────────────────────
   2. STICKY NAVBAR
   Add the `.scrolled` class once the user scrolls past 60 px.
   CSS handles the visual transition.
───────────────────────────────────────────────────────────── */
const navbar = document.getElementById('navbar');

function updateNavbar() {
  navbar.classList.toggle('scrolled', window.scrollY > 60);
}

window.addEventListener('scroll', updateNavbar, { passive: true });
updateNavbar(); // run once on load


/* ─────────────────────────────────────────────────────────────
   3. PARALLAX ENGINE
   Each element with `data-parallax` on it has a `.parallax-img`
   child that moves at a slower speed than the scroll, creating
   depth. Uses `transform: translateY()` (GPU-composited).

   Formula:
     progress = (viewport_bottom - section_top) / (viewport + section_height)
     offset   = (progress - 0.5) * section_height * factor
───────────────────────────────────────────────────────────── */

/** Collect all parallax images once on load */
const parallaxImages = Array.from(document.querySelectorAll('.parallax-img'));

function runParallax() {
  const viewportHeight = window.innerHeight;

  parallaxImages.forEach((img) => {
    const section = img.closest('section, div');
    if (!section) return;

    const rect = section.getBoundingClientRect();

    // Skip if section is far off-screen
    if (rect.bottom < -200 || rect.top > viewportHeight + 200) return;

    const factor   = parseFloat(img.dataset.parallax) || 0.4;
    const progress = (viewportHeight - rect.top) / (viewportHeight + rect.height);
    const offset   = (progress - 0.5) * rect.height * factor;

    img.style.transform = `translateY(${offset}px)`;
  });
}

/** Throttle with RAF so parallax runs at most once per frame */
let parallaxTicking = false;

window.addEventListener('scroll', () => {
  if (!parallaxTicking) {
    requestAnimationFrame(() => {
      runParallax();
      parallaxTicking = false;
    });
    parallaxTicking = true;
  }
}, { passive: true });

// Run once immediately so images aren't offset on first load
runParallax();


/* ─────────────────────────────────────────────────────────────
   4. SCROLL REVEAL
   Uses IntersectionObserver to add `.visible` to any element
   with the `.reveal` class as it enters the viewport.
   CSS handles the fade + slide-up animation.
───────────────────────────────────────────────────────────── */
const revealObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        // Stop observing once revealed (animation only plays once)
        revealObserver.unobserve(entry.target);
      }
    });
  },
  {
    threshold: 0.1,
    rootMargin: '0px 0px -30px 0px', // trigger slightly before element is fully visible
  }
);

document.querySelectorAll('.reveal').forEach((el) => revealObserver.observe(el));


/* ─────────────────────────────────────────────────────────────
   5. DRAG-TO-SCROLL CAROUSEL
   Allows click-and-drag scrolling on the experiences track.
   Touch devices already handle horizontal scroll natively.
───────────────────────────────────────────────────────────── */
const expTrack = document.getElementById('expTrack');

if (expTrack) {
  let isDragging   = false;
  let dragStartX   = 0;
  let scrollAtStart = 0;

  expTrack.addEventListener('mousedown', (e) => {
    isDragging    = true;
    dragStartX    = e.pageX - expTrack.offsetLeft;
    scrollAtStart = expTrack.scrollLeft;
    expTrack.classList.add('is-dragging');
  });

  // Stop dragging if mouse leaves the track or is released anywhere
  expTrack.addEventListener('mouseleave', () => {
    isDragging = false;
    expTrack.classList.remove('is-dragging');
  });

  document.addEventListener('mouseup', () => {
    isDragging = false;
    expTrack.classList.remove('is-dragging');
  });

  expTrack.addEventListener('mousemove', (e) => {
    if (!isDragging) return;
    e.preventDefault();
    const x    = e.pageX - expTrack.offsetLeft;
    const walk = (x - dragStartX) * 1.8; // 1.8× multiplier for snappiness
    expTrack.scrollLeft = scrollAtStart - walk;
  });
}


/* ─────────────────────────────────────────────────────────────
   6. SMOOTH ANCHOR SCROLL
   Native scroll-behavior:smooth already handles <a href="#id">
   links, but this gives extra control (offset for fixed navbar).
───────────────────────────────────────────────────────────── */
const NAV_OFFSET = 80; // px — height of fixed navbar

document.querySelectorAll('a[href^="#"]').forEach((link) => {
  link.addEventListener('click', (e) => {
    const targetId = link.getAttribute('href').slice(1);
    const target   = document.getElementById(targetId);
    if (!target) return;

    e.preventDefault();

    const top = target.getBoundingClientRect().top + window.scrollY - NAV_OFFSET;
    window.scrollTo({ top, behavior: 'smooth' });
  });
});
