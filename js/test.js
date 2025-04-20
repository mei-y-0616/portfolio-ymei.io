window.addEventListener("DOMContentLoaded", () => {
    const navLinks = document.querySelectorAll(".bl_navList > li > a");
    navLinks.forEach((navLink) => {
      if (
        navLink.hasAttribute("href") &&
        navLink.getAttribute("href").startsWith("#")
      ) {
        navLink.addEventListener("click", (e) => {
          e.preventDefault();
          gsap.to(window, {
            duration: 1,
            ease: "power3.inOut",
            scrollTo: {
              y: navLink.getAttribute("href"),
              offsetY: 96,
              autoKill: true
            }
          });
        });
      }
    });
  });