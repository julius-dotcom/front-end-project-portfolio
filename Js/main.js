// =======================
// Responsive Navbar Toggle
// =======================
const navbar = document.getElementById('navbar');
const themeToggle = document.getElementById('theme-toggle');

function toggleMenu() {
  navbar.classList.toggle('active');
}

// =======================
// Dark/Light Theme Toggle
// =======================
const body = document.body;

// Load saved theme
if (localStorage.getItem("theme") === "light") {
  body.classList.add("light");
  themeToggle.textContent = "🌙"; // moon icon
} else {
  themeToggle.textContent = "☀️"; // sun icon
}

themeToggle.addEventListener("click", () => {
  body.classList.toggle("light");
  if (body.classList.contains("light")) {
    localStorage.setItem("theme", "light");
    themeToggle.textContent = "🌙";
  } else {
    localStorage.setItem("theme", "dark");
    themeToggle.textContent = "☀️";
  }
});

// =======================
// ScrollReveal Animations
// =======================
document.addEventListener("DOMContentLoaded", () => {
  ScrollReveal().reveal('.hero-content', {
    delay: 300,
    origin: 'bottom',
    distance: '50px',
    duration: 1000
  });

  ScrollReveal().reveal('.hero-img', {
    delay: 500,
    origin: 'right',
    distance: '50px',
    duration: 1000
  });

  ScrollReveal().reveal('.cards .card', {
    interval: 200,
    origin: 'bottom',
    distance: '50px',
    duration: 900
  });

  ScrollReveal().reveal('.skill-cards .skill-card', {
    interval: 150,
    origin: 'bottom',
    distance: '40px',
    duration: 900
  });

  ScrollReveal().reveal('h2, .skills-intro', {
    delay: 150,
    origin: 'top',
    distance: '30px',
    duration: 800
  });

  ScrollReveal().reveal('.project-card', {
    interval: 200,
    origin: 'bottom',
    distance: '40px',
    duration: 900
  });

  ScrollReveal().reveal('form', {
    delay: 300,
    origin: 'right',
    distance: '60px',
    duration: 1000
  });
});

// =======================
// Intersection Observer for extra reveal
// =======================
const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add("animate");
      observer.unobserve(entry.target);
    }
  });
}, { threshold: 0.2 });

document.querySelectorAll(".reveal").forEach(el => observer.observe(el));

// =======================
// Modal for Projects
// =======================
const projects = {
  bankbrain: {
    title: "BankBrain",
    img: "images/bankbrain.png",
    desc: "A smart banking platform with modern UI and secure transactions.",
    link: "projects/bankbrain/index.html"
  },
  explorease: {
    title: "ExploreEase",
    img: "images/explorease.png",
    desc: "A travel and exploration website to discover destinations with ease.",
    link: "projects/explorease/index.html"
  },
  "find-my-phone": {
    title: "Find My Phone",
    img: "images/find-my-phone-img.png",
    desc: "A location-based app to track lost devices in real-time.",
    link: "find-my-phone/signup"
  }
};

function openProject(id) {
  const modal = document.getElementById("project-modal");
  const p = projects[id];
  document.getElementById("modal-title").textContent = p.title;
  document.getElementById("modal-img").src = p.img;
  document.getElementById("modal-desc").textContent = p.desc;
  document.getElementById("modal-link").href = p.link;
  modal.style.display = "flex";
}

function closeModal() {
  document.getElementById("project-modal").style.display = "none";
}

// =======================
// Project Filter
// =======================
function filterProjects(category, btn) {
  const cards = document.querySelectorAll('.project-card');
  cards.forEach(card => {
    if (category === 'all' || card.dataset.category === category) {
      card.style.display = 'block';
    } else {
      card.style.display = 'none';
    }
  });

  // Update active button style
  document.querySelectorAll('.filter-buttons button').forEach(b => b.classList.remove('active'));
  if (btn) btn.classList.add('active');
}
