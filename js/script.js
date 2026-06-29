// ================= Portfolio Script =================
document.addEventListener("DOMContentLoaded", function () {
  /* ================= HAMBURGER MENU ================= */
  const menuToggle = document.getElementById("mobile-menu");
  const navList = document.getElementById("nav-list");
  const links = document.querySelectorAll(".nav-links a");

  function openMenu() {
    navList.classList.add("active");
    menuToggle.classList.add("active");
    document.body.classList.add("no-scroll");
  }

  function closeMenu() {
    navList.classList.remove("active");
    menuToggle.classList.remove("active");
    document.body.classList.remove("no-scroll");
  }

  // Toggle menu
  if (menuToggle && navList) {
    menuToggle.addEventListener("click", function (e) {
      e.stopPropagation();
      if (navList.classList.contains("active")) {
        closeMenu();
      } else {
        openMenu();
      }
    });
  }

  // Close when clicking a link
  links.forEach((link) => {
    link.addEventListener("click", function () {
      closeMenu();
    });
  });

  // Close when clicking outside
  document.addEventListener("click", function (e) {
    if (
      navList.classList.contains("active") &&
      !navList.contains(e.target) &&
      !menuToggle.contains(e.target)
    ) {
      closeMenu();
    }
  });

  // Close menu on scroll — desktop only
  window.addEventListener("scroll", function () {
    if (window.innerWidth > 768 && navList.classList.contains("active")) {
      closeMenu();
    }
  });

  /* ================= THEME TOGGLE ================= */
  const themeToggle = document.getElementById("theme-toggle");
  if (themeToggle) {
    const savedTheme = localStorage.getItem("theme");
    if (savedTheme === "light") {
      document.body.classList.add("light-mode");
      themeToggle.textContent = "☀️";
    } else {
      document.body.classList.remove("light-mode");
      themeToggle.textContent = "🌙";
    }
    themeToggle.addEventListener("click", function () {
      document.body.classList.toggle("light-mode");
      if (document.body.classList.contains("light-mode")) {
        localStorage.setItem("theme", "light");
        this.textContent = "☀️";
      } else {
        localStorage.setItem("theme", "dark");
        this.textContent = "🌙";
      }
    });
  }

  /* ================= NAVBAR SHRINK ================= */
  let lastState = null;

  function navbarShrink() {
    const shouldShrink = window.scrollY > 80;
    if (lastState === shouldShrink) return;
    const navbar = document.querySelector(".navbar");
    navbar?.classList.toggle("shrink", shouldShrink);
    lastState = shouldShrink;
  }

  /* ================= NAVBAR HIDE/SHOW ================= */
  let lastScrollY = window.scrollY;

  function navbarHideShow() {
    const header = document.querySelector("header");
    if (!header) return;

    // On mobile — always keep navbar visible
    if (window.innerWidth <= 768) {
      header.classList.remove("hide-nav");
      return;
    }

    // Don't hide if mobile menu is open
    if (navList && navList.classList.contains("active")) return;

    const currentScrollY = window.scrollY;

    if (currentScrollY <= 0) {
      header.classList.remove("hide-nav");
    } else if (currentScrollY > lastScrollY) {
      header.classList.add("hide-nav");
    } else {
      header.classList.remove("hide-nav");
    }

    lastScrollY = currentScrollY;
  }

  let ticking = false;

  function handleScroll() {
    if (!ticking) {
      requestAnimationFrame(function () {
        navbarShrink();
        navbarHideShow();
        ticking = false;
      });
      ticking = true;
    }
  }

  window.addEventListener("scroll", handleScroll);
  window.addEventListener("load", handleScroll);

  /* ================= SCROLL REVEAL ================= */
  // Reveals .skill-card and .soft-skill-card only when they enter the viewport,
  // so the staggered animation plays at the right moment instead of on page load.
  const revealCards = document.querySelectorAll(
    ".skill-card, .soft-skill-card",
  );

  if ("IntersectionObserver" in window) {
    const observer = new IntersectionObserver(
      function (entries) {
        entries.forEach(function (entry) {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
            observer.unobserve(entry.target); // animate once
          }
        });
      },
      { threshold: 0.15 },
    );

    revealCards.forEach(function (card) {
      observer.observe(card);
    });
  } else {
    // Fallback: just show all cards immediately
    revealCards.forEach(function (card) {
      card.classList.add("visible");
    });
  }

  /* ================= HOVER EFFECT ================= */
  // JS hover only for non-card elements (highlight-card, project-card).
  // skill-card and soft-skill-card hover is handled in CSS for accuracy.
  const hoverElements = document.querySelectorAll(
    ".highlight-card, .project-card",
  );

  hoverElements.forEach((el) => {
    el.addEventListener("mouseenter", function () {
      this.style.transform = "translateY(-6px)";
    });
    el.addEventListener("mouseleave", function () {
      this.style.transform = "translateY(0)";
    });
  });
});
