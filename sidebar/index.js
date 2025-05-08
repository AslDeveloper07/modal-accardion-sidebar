document.addEventListener("DOMContentLoaded", function () {
  const burgerTugma = document.getElementById("burgerMenu");
  const yonPanel = document.getElementById("sidebar");
  const chekkaTrigger = document.getElementById("edgeTrigger");
  const yonPanelElementlar = document.querySelectorAll(
    ".sidebar-item:not(.add-new)"
  );
  const qidiruvInput = document.getElementById("searchInput");

  function yonPanelniAlmashtir() {
    yonPanel.classList.toggle("active");

    if (yonPanel.classList.contains("active")) {
      burgerTugma.style.display = "none";
    } else {
      burgerTugma.style.display = "block";
    }
  }

  yonPanelElementlar.forEach((element) => {
    element.addEventListener("click", function () {
      yonPanelElementlar.forEach((i) => i.classList.remove("active"));
      this.classList.add("active");
    });
  });

  burgerTugma.addEventListener("click", yonPanelniAlmashtir);

  chekkaTrigger.addEventListener("mouseenter", function () {
    if (window.innerWidth <= 768) {
      yonPanel.classList.add("active");
      burgerTugma.style.display = "none";
    }
  });

  document.addEventListener("keydown", function (e) {
    if (window.innerWidth <= 768) {
      if (e.key === "Enter") {
        yonPanel.classList.add("active");
        burgerTugma.style.display = "none";
      }
      if (e.key === "Escape") {
        yonPanel.classList.remove("active");
        burgerTugma.style.display = "block";
      }
    }
  });

  document.addEventListener("click", function (hodisa) {
    if (window.innerWidth <= 768) {
      if (
        !yonPanel.contains(hodisa.target) &&
        hodisa.target !== burgerTugma &&
        !burgerTugma.contains(hodisa.target) &&
        !chekkaTrigger.contains(hodisa.target)
      ) {
        yonPanel.classList.remove("active");
        burgerTugma.style.display = "block";
      }
    }
  });
});
