<<<<<<< HEAD
// Dynamic animations and interactions

// Intersection Observer for scroll animations
const observerOptions = {
  threshold: 0.1,
  rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('animate');
      // Additional animations for specific sections
      if (entry.target.classList.contains('pricing-grid')) {
        animateCounters();
      }
      observer.unobserve(entry.target);
    }
  });
}, observerOptions);

// Observe all animated elements
document.addEventListener('DOMContentLoaded', () => {
  document.querySelectorAll('[data-aos]').forEach(el => {
    observer.observe(el);
  });
});

// Navbar scroll effect
let ticking = false;
function updateNavbar() {
  const navbar = document.querySelector('.navbar');
  navbar.classList.toggle('scrolled', window.scrollY > 50);
}
window.addEventListener('scroll', () => {
  if (!ticking) {
    requestAnimationFrame(updateNavbar);
    ticking = true;
  }
  ticking = false;
});

// Smooth scroll for nav links
document.querySelectorAll('nav a[href^=\"#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute('href'));
    if (target) {
      target.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      });
    }
  });
});

// Enhanced FAQ accordion with smooth transition
document.querySelectorAll('.faq-question').forEach(question => {
  question.addEventListener('click', () => {
    const faqItem = question.parentElement;
    faqItem.classList.toggle('active');
    
    // Close others
    document.querySelectorAll('.faq-item').forEach(item => {
      if (item !== faqItem) {
        item.classList.remove('active');
      }
    });
  });
});

// Pricing counter animation
function animateCounters() {
  const priceEls = document.querySelectorAll('.price-card h2');
  priceEls.forEach((el, index) => {
    const target = parseInt(el.textContent.replace(/[₹,]/g, ''));
    let count = 0;
    const duration = 2000; // 2 seconds
    const increment = target / (duration / 16); // ~60fps
    const timer = setInterval(() => {
      count += increment;
      if (count >= target) {
        el.textContent = `₹${target.toLocaleString()}`;
        clearInterval(timer);
      } else {
        el.textContent = `₹${Math.floor(count).toLocaleString()}`;
      }
    }, 16);
  });
}

// Contact form validation and submission
const form = document.querySelector('form');
form.addEventListener('submit', (e) => {
  e.preventDefault();
  
  // Simple validation
  const email = form.querySelector('input[type=\"email\"]').value;
  const phone = form.querySelector('input[type=\"tel\"]').value;
  const pan = form.querySelector('input[type=\"text\"][placeholder*=\"PAN\"]').value;
  
  if (!email || !phone || !/^[A-Z]{5}[0-9]{4}[A-Z]{1}$/.test(pan.toUpperCase())) {
    alert('Please fill all fields correctly. PAN should be valid format (e.g., ABCDE1234F)');
    return;
  }
  
  // Simulate submission
  const btn = form.querySelector('.btn');
  const original = btn.textContent;
  btn.textContent = 'Sending...';
  btn.disabled = true;
  
  setTimeout(() => {
    alert('Thank you! Your message has been sent. We\'ll contact you soon.');
    form.reset();
    btn.textContent = original;
    btn.disabled = false;
  }, 2000);
});

// Floating animation for hero image
const heroImg = document.querySelector('.hero img');
if (heroImg) {
  heroImg.style.animationDelay = '0.5s';
}

// Mobile menu toggle
document.addEventListener('DOMContentLoaded', () => {
  const mobileToggle = document.querySelector('.mobile-toggle');
  if (mobileToggle) {
    mobileToggle.addEventListener('click', () => {
      document.querySelector('nav ul').classList.toggle('mobile-open');
    });
  }

  // Close mobile menu when nav link clicked
  document.querySelectorAll('nav a[href^=\"#"]').forEach(anchor => {
    anchor.addEventListener('click', () => {
      document.querySelector('nav ul').classList.remove('mobile-open');
    });
  });
});

=======
// Dynamic animations and interactions

// Intersection Observer for scroll animations
const observerOptions = {
  threshold: 0.1,
  rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('animate');
      // Additional animations for specific sections
      if (entry.target.classList.contains('pricing-grid')) {
        animateCounters();
      }
      observer.unobserve(entry.target);
    }
  });
}, observerOptions);

// Observe all animated elements
document.addEventListener('DOMContentLoaded', () => {
  document.querySelectorAll('[data-aos]').forEach(el => {
    observer.observe(el);
  });
});

// Navbar scroll effect
let ticking = false;
function updateNavbar() {
  const navbar = document.querySelector('.navbar');
  navbar.classList.toggle('scrolled', window.scrollY > 50);
}
window.addEventListener('scroll', () => {
  if (!ticking) {
    requestAnimationFrame(updateNavbar);
    ticking = true;
  }
  ticking = false;
});

// Smooth scroll for nav links
document.querySelectorAll('nav a[href^=\"#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute('href'));
    if (target) {
      target.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      });
    }
  });
});

// Enhanced FAQ accordion with smooth transition
document.querySelectorAll('.faq-question').forEach(question => {
  question.addEventListener('click', () => {
    const faqItem = question.parentElement;
    faqItem.classList.toggle('active');
    
    // Close others
    document.querySelectorAll('.faq-item').forEach(item => {
      if (item !== faqItem) {
        item.classList.remove('active');
      }
    });
  });
});

// Pricing counter animation
function animateCounters() {
  const priceEls = document.querySelectorAll('.price-card h2');
  priceEls.forEach((el, index) => {
    const target = parseInt(el.textContent.replace(/[₹,]/g, ''));
    let count = 0;
    const duration = 2000; // 2 seconds
    const increment = target / (duration / 16); // ~60fps
    const timer = setInterval(() => {
      count += increment;
      if (count >= target) {
        el.textContent = `₹${target.toLocaleString()}`;
        clearInterval(timer);
      } else {
        el.textContent = `₹${Math.floor(count).toLocaleString()}`;
      }
    }, 16);
  });
}

// Contact form validation and submission
const form = document.querySelector('form');
form.addEventListener('submit', (e) => {
  e.preventDefault();
  
  // Simple validation
  const email = form.querySelector('input[type=\"email\"]').value;
  const phone = form.querySelector('input[type=\"tel\"]').value;
  const pan = form.querySelector('input[type=\"text\"][placeholder*=\"PAN\"]').value;
  
  if (!email || !phone || !/^[A-Z]{5}[0-9]{4}[A-Z]{1}$/.test(pan.toUpperCase())) {
    alert('Please fill all fields correctly. PAN should be valid format (e.g., ABCDE1234F)');
    return;
  }
  
  // Simulate submission
  const btn = form.querySelector('.btn');
  const original = btn.textContent;
  btn.textContent = 'Sending...';
  btn.disabled = true;
  
  setTimeout(() => {
    alert('Thank you! Your message has been sent. We\'ll contact you soon.');
    form.reset();
    btn.textContent = original;
    btn.disabled = false;
  }, 2000);
});

// Floating animation for hero image
const heroImg = document.querySelector('.hero img');
if (heroImg) {
  heroImg.style.animationDelay = '0.5s';
}

// Mobile menu toggle
document.addEventListener('DOMContentLoaded', () => {
  const mobileToggle = document.querySelector('.mobile-toggle');
  if (mobileToggle) {
    mobileToggle.addEventListener('click', () => {
      document.querySelector('nav ul').classList.toggle('mobile-open');
    });
  }

  // Close mobile menu when nav link clicked
  document.querySelectorAll('nav a[href^=\"#"]').forEach(anchor => {
    anchor.addEventListener('click', () => {
      document.querySelector('nav ul').classList.remove('mobile-open');
    });
  });
});

>>>>>>> 3ad98976c24af446f098598985d45361e7162eaa
