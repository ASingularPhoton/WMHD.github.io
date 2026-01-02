function scrollToNav() {
  const el = document.getElementById("home-nav");
  if (el) {
    el.scrollIntoView({ behavior: "smooth" });
  }
}
