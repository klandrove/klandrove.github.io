document.addEventListener("DOMContentLoaded", function () {
    const sections = document.querySelectorAll("section"); // Select all sections
    const navLinks = document.querySelectorAll(".cs-li-link"); // Select all navbar links
  
    window.addEventListener("scroll", () => {
      let current = "";
  
      sections.forEach((section) => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
  
        if (window.scrollY >= sectionTop - sectionHeight / 3) {
          current = section.getAttribute("id");
        }
      });
      
      navLinks.forEach((link) => {
        link.classList.remove("cs-active");
        if (link.getAttribute("href") === `#${current}`) {
          link.classList.add("cs-active");
        }
      });
    });
  });
  