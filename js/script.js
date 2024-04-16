gsap.registerPlugin(ScrollTrigger);

const panel = document.querySelector("#section1");

ScrollTrigger.create({
    trigger: panel,
    start: "top top",
    pin: true,
    pinSpacing: false
});

const ani1 = gsap.timeline();
ani1.to("#section2 .about", {delay:0.5, opacity: 0, duration:0.5},)
    .fromTo("#section2 .contents", {opacity: 0, duration:0.1}, { opacity: 1, duration:0.5},"d")
    .to("#section2 .more",{yPercent:100, opacity:0}, "d")
    .to("#section2 .nameen",{marginTop:220,},"d")
    .to("#section2 .name",{y:50},"d");

    ScrollTrigger.create({
        animation: ani1,
        trigger: "#section2",
        start: "top top",
        end: "+=2000",
        scrub: true,
        pin: true,
        markers: false,
        anticipatePin: 1
    }),
        
// 텍스트 분리
document.querySelectorAll(".split").forEach(text => {
    let splitWrap = text.innerText.split('').join("</span><span aria-hidden='true'>");
    text.innerHTML = "<span aria-hidden='true'>"+ splitWrap +"</span>";
    text.setAttribute("aria-label", text.innerText);
});

gsap.utils.toArray(".split").forEach((text) => {
    gsap.from(text.querySelectorAll("span"), {
        yPercent: -100,
        outoAlpha: 0,
        duration: 1,
        ease: "circ.out",
        //stagger: 0.04,
        stagger: {
            amount: 1,
            from: "random"
        },

        scrollTrigger: {
            trigger: text,
            start: "top bottom",
            end: "+=400",
            toggleActions: "restart none none none",
            markers: false,
        }
    });
});


// 가로
const horizontal = document.querySelector("#horizontal");
const sections = gsap.utils.toArray("#horizontal > section");

let scrollTween = gsap.to(sections, {
    xPercent: -100 * (sections.length - 1),
    ease: "none",
    scrollTrigger: {
        trigger: horizontal,
        start: "top top",
        end: () =>  "+=" + (horizontal.offsetWidth - innerWidth),
        pin: true,
        anticipatePin: 1,
        scrub: 1,
        invalidateOnRefresh: true
    }
});
// 가로 끝

// index
// let links = gsap.utils.toArray("#index ul li a");

// links.forEach(link => {
//     let element = document.querySelector(link.getAttribute("href")),
//     linkST = ScrollTrigger.create({
//         trigger: element,
//         start: "top top"
//     });

//     ScrollTrigger.create({
//         trigger: element,
//         containerAnimation: scrollTween,
//         start: "top center",
//         end: "bottom right",
//         onToggle: () => setActive(link)
//     });

//     link.addEventListener("click", e => {
//         e.preventDefault();
//         gsap.to(window, {duration: 1, scrollTo: linkST.start, overwrite: "auto"});
//     })
// });

// function setActive(link) {
//     links.forEach(el => el.classList.remove("active"));
//     link.classList.add("active");
// };

// new index start
gsap.to(".step:nth-child(2)>a>img", {
    opacity:1,
    duration:1,
    ease: "elastic",
    scrollTrigger: {
        trigger: "#section1",
        start: "top top",
        end:"+=1000",
        toggleActions: "play reset play reset",
        id: "2"
    }
});
gsap.to(".step:nth-child(3)>a>img", {
    opacity:1,
    duration:1,
    ease: "elastic",
    scrollTrigger: {
        trigger: "#section1",
        start: "+=1000",
        end:"+=1000",
        toggleActions: "play reset play reset",
        id: "3"
    }
});
gsap.to(".step:nth-child(4)>a>img", {
    opacity:1,
    duration:1,
    ease: "elastic",
    scrollTrigger: {
        trigger: "#section1",
        start: "+=2000",
        end:"+=1000",
        toggleActions: "play reset play reset",
        id: "4"
    }
});

// pixel step
gsap.to(".step:nth-child(5)>a>img", {
    autoAlpha: 1,
    duration: 1,
    ease: "elastic",
    scrollTrigger: {
        trigger: "#section3",
        containerAnimation: scrollTween,
        start: "top top",
        end: "center left",
        toggleActions: "play reset play reset",
        id: "s3"
    }
});

// poly step
gsap.to(".step:nth-child(6)>a>img", {
    autoAlpha:1,
    duration: 1,
    ease: "elastic",
    scrollTrigger: {
        trigger: ".polygon",
        containerAnimation: scrollTween,
        start: "left center",
        toggleActions: "play reset play reset",
        id: "poly"
    }
});
// banner step
gsap.to(".step:nth-child(7)>a>img", {
    autoAlpha: 1,
    duration: 1,
    ease: "elastic",
    scrollTrigger: {
        trigger: "#section4",
        containerAnimation: scrollTween,
        start: "left center",
        end: "right center",
        toggleActions: "play reset play reset",
        id: "s4"
    }
});
// login step
gsap.to(".step:nth-child(8)>a>img", {
    autoAlpha:1,
    duration: 1,
    ease: "elastic",
    scrollTrigger: {
        trigger: "#section5",
        containerAnimation: scrollTween,
        start: "left center",
        end: "center center",
        toggleActions: "play reset play reset",
        id: "s5"
    }
});
// namecard step

gsap.to(".step:nth-child(9)>a>img", {
    autoAlpha:1,
    duration: 1,
    ease: "elastic",
    scrollTrigger: {
        trigger: "#section5",
        containerAnimation: scrollTween,
        start: "center center",
        end: "right center",
        toggleActions: "play reset play reset",
        id: "name"
    }
});

// neon step
gsap.to(".step:nth-child(10)>a>img", {
    autoAlpha:1,
    duration: 1,
    ease: "elastic",
    scrollTrigger: {
        trigger: "#section6",
        containerAnimation: scrollTween,
        start: "left center",
        end: "center center",
        toggleActions: "play reset play reset",
        id: "s6"
    }
});
// card step
gsap.to(".step:nth-child(11)>a>img", {
    autoAlpha:1,
    duration: 1,
    ease: "elastic",
    scrollTrigger: {
        trigger: "#section6",
        containerAnimation: scrollTween,
        start: "left 20%",
        end: "center center",
        toggleActions: "play reset play reset",
        id: "card"
    }
});

gsap.to(".step:nth-child(12)>a>img", {
    opacity:1,
    duration:1,
    ease: "elastic",
    scrollTrigger: {
        trigger: "#section7",
        start: "-=900",
        end:"+=900",
        toggleActions: "play reset play reset",
        id: "6"
    }
});
gsap.to(".step:nth-child(13)>a>img", {
    opacity:1,
    duration:1,
    ease: "elastic",
    scrollTrigger: {
        trigger: "#section7",
        start:"top top",
        end:"bottom top",
        toggleActions: "play reset play reset",
        markers: false,
        id: "ku"
    }
});
// section7,8
const ani7 = gsap.timeline();
ani7.from("#section7 ul", {x: -150, opacity:0, duration:1},0)
    .from("#section7 .right", {x: 150, opacity:0, duration:1},0)
   
   ScrollTrigger.create({
       animation: ani7,
       trigger: "#section7",
       start: "top top",
       end: "+=300",
       scrub: true,
       pin: true,
       anticipatePin: 1
   });


gsap.to(".step:nth-child(14)>a>img", {
    opacity:1,
    duration:1,
    ease: "elastic",
    scrollTrigger: {
        trigger: "#section8",
        start: "-=300",
        end:"+=1000",
        toggleActions: "play reset play reset",
        markers: false,
        id: "fnc"
    }
});

const ani8 = gsap.timeline();
ani8.from("#section8 ul", {x: -150, opacity:0, duration:1},0)
    .from("#section8 .right", {x: 150, opacity:0, duration:1},0)
   
   ScrollTrigger.create({
       animation: ani8,
       trigger: "#section8",
       start: "top top",
       end: "+=300",
       scrub: true,
       pin: true,
       anticipatePin: 1
   });

// contact 
gsap.to(".step:nth-child(15)>a>img", {
    opacity:1,
    duration:1,
    ease: "elastic",
    scrollTrigger: {
        trigger: "#section9",
        start: "top center",
        end:"+=2500",
        toggleActions: "play reset play reset",
        id: "9"
    }
});

const ani9 = gsap.timeline();
ani9.from("#section9 .nameen", {x: innerWidth * 1,duration:0.5})
    .from("#section9>.am>div:nth-child(2)", {x: innerWidth * -1})
    .from("#section9 .name", {x: innerWidth * 1,duration:0.5})
    .from("#section9>.am>div:nth-child(4)", {x: innerWidth * -1})

    ScrollTrigger.create({
        animation: ani9,
        trigger: "#section9",
        start: "top top",
        end: "+=2000",
        scrub: true,
        pin: true,
        markers: false,
        anticipatePin: 1
    });