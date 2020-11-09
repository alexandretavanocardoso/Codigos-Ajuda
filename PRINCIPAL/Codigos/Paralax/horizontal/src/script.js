gsap.registerPlugin(ScrollTrigger);

document.addEventListener("DOMContentLoaded", () => {
    
    const chevronRight = document.getElementById("chev-right");
    const learnMore = document.getElementById("learn");

    let tl = gsap.timeline();

    tl.to(chevronRight, {
        x: 13,
        duration: 1,
        ease: "sine",
        yoyo: true,
        repeat: -1
    })

    learnMore.addEventListener("mouseover", () => {
        tl.resume();
    });

    learnMore.addEventListener("mouseout", () => {
        tl.pause();
    });
})

let pages = gsap.utils.toArray(".panel");

gsap.to(pages, {
  xPercent: -100 * (pages.length - 1),
  ease: "none",
  scrollTrigger: {
    trigger: ".container",
    pin: true,
    scrub: 1,
    snap: 1 / (pages.length - 1),
    end: () => "+=" + document.querySelector(".container").offsetWidth
  }
});