(function () {
  const header = document.getElementById("header");
  const menuBtn = document.getElementById("menuBtn");
  const nav = document.getElementById("nav");
  const toast = document.getElementById("toast");

  window.addEventListener("scroll", () => {
    header.classList.toggle("scrolled", window.scrollY > 10);
  });

  menuBtn.addEventListener("click", () => {
    const open = nav.classList.toggle("open");
    menuBtn.classList.toggle("active", open);
    menuBtn.setAttribute("aria-expanded", open);
  });

  nav.querySelectorAll("a").forEach((link) => {
    link.addEventListener("click", () => {
      nav.classList.remove("open");
      menuBtn.classList.remove("active");
    });
  });

  function showToast(message) {
    toast.textContent = message;
    toast.classList.add("show");
    setTimeout(() => toast.classList.remove("show"), 3200);
  }

  function handleForm(form) {
    form.addEventListener("submit", (e) => {
      e.preventDefault();
      showToast("Thanks! We'll be in touch shortly.");
      form.reset();
    });
  }

  const heroForm = document.getElementById("heroForm");
  const contactForm = document.getElementById("contactForm");
  if (heroForm) handleForm(heroForm);
  if (contactForm) handleForm(contactForm);
})();
