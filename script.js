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
