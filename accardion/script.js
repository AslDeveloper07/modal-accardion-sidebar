const items = document.querySelectorAll('.accordion-item');

    items.forEach(item => {
      const header = item.querySelector('.accordion-header');

      header.addEventListener('click', () => {
        const isActive = item.classList.contains('active');

        // Barcha accordionlarni yopish
        items.forEach(i => i.classList.remove('active'));

        // Agar bosilgan item oldin active bo‘lmagan bo‘lsa — ochish
        if (!isActive) {
          item.classList.add('active');
        }
      });
    });