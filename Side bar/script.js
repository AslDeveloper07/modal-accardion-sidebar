
// Toggle sidebar open/close
document.getElementById('navbarToggle').addEventListener('click', function() {
    const sidebar = document.getElementById('sidebar');
    const overlay = document.getElementById('overlay');

    // Toggle sidebar
    sidebar.classList.toggle('open');
    overlay.classList.toggle('active');

    // Change menu icon
    const menuIcon = this.querySelector('i');
    menuIcon.classList.toggle('ri-menu-fill');
    menuIcon.classList.toggle('ri-close-line');
  });

  // Close sidebar when clicking overlay
  document.getElementById('overlay').addEventListener('click', function() {
    const sidebar = document.getElementById('sidebar');
    const navbarToggle = document.getElementById('navbarToggle');

    sidebar.classList.remove('open');
    this.classList.remove('active');

    // Reset menu icon
    const menuIcon = navbarToggle.querySelector('i');
    menuIcon.classList.remove('ri-close-line');
    menuIcon.classList.add('ri-menu-fill');
  });

  // Accordion functionality for sidebar items
  document.querySelectorAll('.sidebar__header').forEach(header => {
    header.addEventListener('click', function() {
        const item = this.parentElement;
        const wasActive = item.classList.contains('active');

        // Close all items first
        document.querySelectorAll('.sidebar__item').forEach(i => {
            i.classList.remove('active');
        });

        // Open clicked item if it wasn't active
        if (!wasActive) {
            item.classList.add('active');
        }
    });
  });