/* ========================================
   LUMINA – Interactive JavaScript
   ======================================== */

(function () {
  'use strict';

  // ── Element References ──────────────────────
  const navbar    = document.getElementById('navbar');
  const hamburger = document.getElementById('hamburger');
  const mobileMenu = document.getElementById('mobileMenu');
  const mobileLinks = document.querySelectorAll('.mobile-link');
  const navLinks    = document.querySelectorAll('.nav-link');
  const revealEls   = document.querySelectorAll('.reveal');

  // ── 1. Navbar Scroll Shrink ─────────────────
  function onScroll() {
    if (window.scrollY > 50) {
      navbar.classList.add('nav-scrolled');
    } else {
      navbar.classList.remove('nav-scrolled');
    }
  }

  window.addEventListener('scroll', onScroll, { passive: true });
  onScroll(); // run on load

  // ── 2. Hamburger Menu Toggle ────────────────
  function openMenu() {
    hamburger.classList.add('open');
    mobileMenu.classList.add('open');
    hamburger.setAttribute('aria-expanded', 'true');
    document.body.style.overflow = 'hidden';
  }

  function closeMenu() {
    hamburger.classList.remove('open');
    mobileMenu.classList.remove('open');
    hamburger.setAttribute('aria-expanded', 'false');
    document.body.style.overflow = '';
  }

  hamburger.addEventListener('click', function () {
    const isOpen = mobileMenu.classList.contains('open');
    isOpen ? closeMenu() : openMenu();
  });

  // Close menu on mobile link click
  mobileLinks.forEach(function (link) {
    link.addEventListener('click', closeMenu);
  });

  // Close on Escape key
  document.addEventListener('keydown', function (e) {
    if (e.key === 'Escape') closeMenu();
  });

  // ── 3. Active Nav Link on Scroll ───────────
  const sections = document.querySelectorAll('section[id]');

  function updateActiveNavLink() {
    let currentSection = '';

    sections.forEach(function (section) {
      const sectionTop = section.offsetTop - 120;
      if (window.scrollY >= sectionTop) {
        currentSection = section.getAttribute('id');
      }
    });

    navLinks.forEach(function (link) {
      link.classList.remove('active');
      if (link.getAttribute('href') === '#' + currentSection) {
        link.classList.add('active');
      }
    });
  }

  window.addEventListener('scroll', updateActiveNavLink, { passive: true });
  updateActiveNavLink();

  // ── 4. Scroll Reveal (IntersectionObserver) ─
  const revealObserver = new IntersectionObserver(
    function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
          revealObserver.unobserve(entry.target); // animate once
        }
      });
    },
    {
      threshold: 0.12,
      rootMargin: '0px 0px -40px 0px',
    }
  );

  revealEls.forEach(function (el) {
    revealObserver.observe(el);
  });

  // ── 5. Smooth Scroll for Nav Links ─────────
  document.querySelectorAll('a[href^="#"]').forEach(function (anchor) {
    anchor.addEventListener('click', function (e) {
      const target = document.querySelector(this.getAttribute('href'));
      if (target) {
        e.preventDefault();
        const offset = navbar.offsetHeight + 12;
        const top = target.getBoundingClientRect().top + window.scrollY - offset;
        window.scrollTo({ top: top, behavior: 'smooth' });
      }
    });
  });

  // ── 6. Stagger Reveal for Feature Cards ────
  // Cards have --delay set inline in HTML; IntersectionObserver
  // handles individual triggers. This ensures visible cards
  // cascade nicely via their CSS --delay variable.

  // ── 7. Subtle Mouse Parallax on Hero Blobs ──
  const blobs = document.querySelectorAll('.blur');
  let mouseX = 0, mouseY = 0;
  let rafId = null;

  document.addEventListener('mousemove', function (e) {
    mouseX = (e.clientX / window.innerWidth  - 0.5) * 2;
    mouseY = (e.clientY / window.innerHeight - 0.5) * 2;

    if (!rafId) {
      rafId = requestAnimationFrame(function () {
        blobs.forEach(function (blob, i) {
          const depth  = (i % 3 + 1) * 6;
          const moveX  = mouseX * depth;
          const moveY  = mouseY * depth;
          blob.style.transform = `translate(${moveX}px, ${moveY}px)`;
        });
        rafId = null;
      });
    }
  });

})();
