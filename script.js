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


  // Sweet Alert ! Code HERE


  document.querySelector('.contact-form-box form').addEventListener('submit', function(e) {
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

  Swal.fire({
    icon: 'success',
    title: 'Thank You for Reaching Out to Us!',
    text: 'Our Team will contact you soon.',
    confirmButtonColor: '#f5c342'
  });
});
