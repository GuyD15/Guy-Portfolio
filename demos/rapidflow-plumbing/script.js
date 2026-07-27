(function () {
  const header = document.getElementById("header");
  const menuBtn = document.getElementById("menuBtn");
  const nav = document.getElementById("nav");
  const toast = document.getElementById("toast");
  const form = document.getElementById("contactForm");

  window.addEventListener("scroll", () => {
    header.classList.toggle("scrolled", window.scrollY > 8);
  });

  menuBtn.addEventListener("click", () => {
    const open = nav.classList.toggle("open");
    menuBtn.classList.toggle("active", open);
  });

  nav.querySelectorAll("a").forEach((a) => {
    a.addEventListener("click", () => {
      nav.classList.remove("open");
      menuBtn.classList.remove("active");
    });
  });

  form.addEventListener("submit", (e) => {
    e.preventDefault();
    toast.textContent = "Request received — we'll confirm your window soon.";
    toast.classList.add("show");
    form.reset();
    setTimeout(() => toast.classList.remove("show"), 3200);
  });
})();
