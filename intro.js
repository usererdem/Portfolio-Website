const tl = gsap.timeline({ default: { ease: "power1.out" } });

/* Intro animation */
tl.to(".text", { y: "0%", duration: 1, stagger: 0.25 });
