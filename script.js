const counters = document.querySelectorAll('.count');
const speed = 100; // lower is faster

counters.forEach(counter => {
  const updateCount = () => {
    const target = +counter.getAttribute('data-target');
    const count = +counter.innerText;
    const inc = Math.ceil(target / speed);

    if (count < target) {
      counter.innerText = count + inc;
      setTimeout(updateCount, 20);
    } else {
      counter.innerText = target.toLocaleString(); // format number with commas
    }
  };

  updateCount();
});

// Form Data Submission Code 

document.querySelector('.contact-form-box form').addEventListener('submit', function (e) {
  e.preventDefault();

  const name = this.querySelector('input[type="text"]').value.trim();
  const email = this.querySelector('input[type="email"]').value.trim();
  const message = this.querySelector('textarea').value.trim();

  if (!name || !email || !message) {
    Swal.fire({
      icon: 'warning',
      title: 'Oops...',
      text: 'Please fill out all the fields before submitting!',
      confirmButtonColor: '#f5c342'
    });
    return;
  }

  this.reset();

  // ✅ Show SweetAlert, then redirect to WhatsApp
  Swal.fire({
    icon: 'success',
    title: 'Thank You for Reaching Out to Us!',
    text: 'Our Team will contact you soon.',
    confirmButtonColor: '#f5c342'
  }).then(() => {
    // ✅ Replace the number below with your WhatsApp number (with country code)
    const whatsappNumber = '919665658240'; // ← your number without +
    const encodedMsg = encodeURIComponent(`New Inquiry 👋\nName: ${name}\nEmail: ${email}\nMessage: ${message}`);
    const whatsappURL = `https://wa.me/${whatsappNumber}?text=${encodedMsg}`;

    // Redirect after alert
    window.location.href = whatsappURL;
  });
});


// course Section Slider Code

let currentIndex = 0;

function scrollCourses(direction) {
  const slider = document.getElementById("courseSlider");
  const cards = slider.querySelectorAll(".course-card-container");

  if (cards.length === 0) return;

  const cardStyle = window.getComputedStyle(cards[0]);
  const cardWidth = cards[0].offsetWidth + parseInt(cardStyle.marginRight) + parseInt(cardStyle.marginLeft);

  const maxIndex = cards.length - 1;

  currentIndex += direction;

  if (currentIndex < 0) currentIndex = 0;
  if (currentIndex > maxIndex) currentIndex = maxIndex;

  slider.style.transform = `translateX(-${currentIndex * cardWidth}px)`;
}



// Animated Cards Section --- Count down of Reviews number

document.addEventListener("DOMContentLoaded", () => {
  const counters = document.querySelectorAll(".animated-number");
  counters.forEach(counter => {
    const updateCount = () => {
      const target = +counter.getAttribute("data-target");
      const count = +counter.innerText;
      const increment = target / 50;

      if (count < target) {
        counter.innerText = Math.ceil(count + increment);
        setTimeout(updateCount, 30);
      } else {
        counter.innerText = (target >= 1000) ? (target / 1000).toFixed(1) + "k" : target;
      }
    };
    updateCount();
  });
});


// Read More Card Will Flip

document.addEventListener("DOMContentLoaded", () => {
  const cards = document.querySelectorAll(".course-card");

  cards.forEach(card => {
    const readMore = card.querySelector(".read-more");

    // Flip the card when clicking Read More
    readMore.addEventListener("click", (e) => {
      e.stopPropagation(); // Prevent click from bubbling to the document
      // Close other flipped cards
      cards.forEach(c => {
        if (c !== card) c.classList.remove("flipped");
      });
      // Toggle the current one
      card.classList.toggle("flipped");
    });
  });

  // Click anywhere outside to close all flipped cards
  document.addEventListener("click", () => {
    cards.forEach(card => {
      card.classList.remove("flipped");
    });
  });

  // Animated counter logic (unchanged)
  const counters = document.querySelectorAll(".animated-number");
  counters.forEach(counter => {
    const updateCount = () => {
      const target = +counter.getAttribute("data-target");
      const count = +counter.innerText;
      const increment = target / 100;

      if (count < target) {
        counter.innerText = Math.ceil(count + increment);
        setTimeout(updateCount, 10);
      } else {
        counter.innerText = target.toLocaleString(); // e.g., 1,500
      }
    };
    updateCount();
  });
});





// Mobile Hamburger Toggle
document.addEventListener("DOMContentLoaded", () => {
  const hamburger = document.querySelector('.hamburger');
  const navLinks = document.querySelector('.nav-links');
  const navItems = document.querySelectorAll('.nav-links li a');

  if (hamburger && navLinks) {
    // Toggle hamburger menu
    hamburger.addEventListener('click', () => {
      hamburger.classList.toggle('active');
      navLinks.classList.toggle('open');
    });

    // ✅ Close menu when any nav item is clicked
    navItems.forEach(link => {
      link.addEventListener('click', () => {
        if (navLinks.classList.contains('open')) {
          navLinks.classList.remove('open');
          hamburger.classList.remove('active');
        }
      });
    });
  }
});
