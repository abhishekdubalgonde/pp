
let sections = document.querySelectorAll("section");
let navLinks = document.querySelectorAll("header ul li a");
window.onscroll = () => {
  // .......................
  sections.forEach((sec) => {
    let top = window.scrollY;
    let offset = sec.offsetTop - 30;
    let height = sec.offsetHeight;
    let id = sec.getAttribute("id");

    if (top >= offset && top < offset + height) {
      navLinks.forEach((links) => {
        links.classList.remove("active_nav");
        document
          .querySelector("header ul li a[href*=" + id + "]")
          .classList.add("active_nav");
      });
    }
  });
  scrollFunction();
};


gsap.registerPlugin(ScrollTrigger);

{
  const process = document.querySelector('.process');
  if ((typeof(process) != 'undefined' && process != null)) {
    let h_sections = gsap.utils.toArray('.process__item');
    gsap.to(h_sections, {
      xPercent: -100 * (h_sections.length - 1),
      ease: "none",
      scrollTrigger: {
        trigger: process,
        markers: false,
        scrub: 1,
        pin: true,
        snap: 1 / (h_sections.length - 1),
        end: () => "+=" + document.querySelector(".process").offsetWidth
      },
    });
  }
}
