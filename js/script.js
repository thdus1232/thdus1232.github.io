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
let links = gsap.utils.toArray("#index ul li a");

links.forEach(link => {
    let element = document.querySelector(link.getAttribute("href")),
    linkST = ScrollTrigger.create({
        trigger: element,
        start: "top top"
    });

    ScrollTrigger.create({
        trigger: element,
        containerAnimation: scrollTween,
        start: "top center",
        end: "bottom right",
        markers: false,
        onToggle: () => setActive(link)
    });

    link.addEventListener("click", e => {
        e.preventDefault();
        gsap.to(window, {duration: 1, scrollTo: linkST.start, overwrite: "auto"});
    })
});

function setActive(link) {
    links.forEach(el => el.classList.remove("active"));
    link.classList.add("active");
};

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
       markers: false,
       anticipatePin: 1
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
       markers: false,
       anticipatePin: 1
   });

// contact 
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