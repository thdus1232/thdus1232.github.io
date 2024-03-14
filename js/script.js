gsap.registerPlugin(ScrollTrigger);

// pin고정하니까 section7 스크롤이 안먹히네?? 잉 이제또 먹히넹
const panel = document.querySelector("#section2");

ScrollTrigger.create({
    trigger: panel,
    start: "top top",
    pin: true,
    pinSpacing: false
});


const ani1 = gsap.timeline();
ani1.to("#section3 .about", {delay:0.5, opacity: 0, duration:0.5},)
    .fromTo("#section3 .contents", {opacity: 0, duration:0.1}, { opacity: 1, duration:0.5},"d")
    // xPercent:100 1번 2-1, xPercent:0 2-2번째에서 지움
    .to("#section3 .more",{yPercent:100, opacity:0}, "d")
    .to("#section3 .nameen",{marginTop:220,},"d")
    .to("#section3.nameen::before",{y:10},"d")
    .to("#section3 .name",{y:50},"d");

    ScrollTrigger.create({
        animation: ani1,
        trigger: "#section3",
        start: "top top",
        end: "+=2000",
        scrub: true,
        pin: true,
        markers: true,
        anticipatePin: 1
    }),


        // const ani1 = gsap.timeline();
        // ani1.to("#section3 .about", {xPercent: 300, autoAlpha:0},);
            

        // ScrollTrigger.create({
        //     animation: ani1,
        //     trigger: "#section3",
        //     start: "top top",
        //     end: "+=3000",
        //     scrub: true,
        //     pin: true,
        //     markers: true,
        //     anticipatePin: 1
        // });

        // ani1.to(".index-wrap", {
        //     position: 'sticky',
        //     bottom: 0,  
        // })

        // tlfour.to(".left-wrapp", {
        //     position: 'sticky',
        //     top: 0,  
        // })

        
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
            markers: true,
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

// // 가로 끝 */}
gsap.to(".spider, .up, .f1 p, .f2, .polygon, .txt, .poly, .pixel", {
    autoAlpha:0,
    duration: 15,
    ease: "elastic",
    scrollTrigger: {
        trigger: ".spider",
        containerAnimation: scrollTween,
        start: "center bottom",
        end:"+4000",
        toggleActions: "play none reverse none",
        markers: true,
        id: ".spider"
    }
});
gsap.to(".bannercon", {
    autoAlpha:1,
    duration: 5,
    ease: "elastic",
    scrollTrigger: {
        trigger: "#section4",
        containerAnimation: scrollTween,
        start: "center bottom",
        end:"+6000",
        toggleActions: "play none reverse none",
        markers: true,
        id: "#section4"
    }
});

// ------------------
// const ani2 = gsap.timeline();
// ani2.to(".spider, .up, .f1 p, .f2, .polygon, .txt, .poly, .pixel", {
//     autoAlpha:0, duration: 3})
//     .to(".bannercon", {autoAlpha: 1, duration: 1});
//     // .from("#section4 .t2", {autoAlpha: 0, duration: 1, y: 50}, "+=1")

//     // scrollTtrigger에 있는 s를 소문자로 바꾸고 나니까으흠?
// ScrollTrigger.create({
//     animation: ani2,
//     trigger: ".txt",
//     start: "left center",
//     scrub: true,
//     markers: true,
//     id:".txt",
//     anticipatePin: 1
// });

// ---------------------------------
    // const ani2 = gsap.timeline();
    //     ani2.to(".spider, .up, .f1 p, .f2 p, .polygon, .txt, .poly", { autoAlpha:0, duration:5})
    //         .fromTo(".bannercon",{opacity: 0, duration:1}, { opacity: 1, duration:0.5});
    //         // Banner, .alaf, .f3
    //     scrollTrigger.create({
    //         animation: ani2,
    //         trigger: ".spider",
    //         containerAnimation: scrollTween,
    //         start: "left bottom",
    //         toggleActions: "play none reverse none",

    //         end: "+=6000",
    //         scrub: true,
    //         pin: true,
    //         anticipatePin: 1,
    //         markers: true
    //     });
// ---------------------------------바로위까지02.22-----------


        // gsap.to(".spider, .f1>p, .f2, .polygon, .txt", {
        //     opacity: 0,
        //     duration: 1,
        //     ease: "elastic",
        //     scrollTrigger: {
        //         trigger: ".spider",
        //         containerAnimation: scrollTween,
        //         start: "top top",
        //         toggleActions: "restart none none none",
        //         markers: false,
        //         id: "spider"
        //     }
        // });
        // gsap.fromTo(".bannercon", {
        //     opacity: 0,
        //     duration: 0.3,
        //     ease: "elastic",
        //     scrollTrigger: {
        //         trigger: ".bannercon",
        //         containerAnimation: scrollTween,
        //         start: "top top",
        //         toggleActions: "restart none none none",
        //         markers: false,
        //         id: "bannercon"
        //     }},
        //  {
        //     opacity: 0,
        //     duration: 2,
        //     ease: "elastic",
        //     scrollTrigger: {
        //         trigger: ".bannercon",
        //         containerAnimation: scrollTween,
        //         start: "top top",
        //         toggleActions: "restart none none none",
        //         markers: false,
        //         id: "bannercon"
        //     }}
        // );

// const panel2 = document.querySelector("#section7");

// ScrollTrigger.create({
//     trigger: panel2,
//     start: "top top",
//     pin: true,
//     pinSpacing: false
// });

// const panel3 = document.querySelector("#section8");

// ScrollTrigger.create({
//     trigger: panel3,
//     start: "top top",
//     pin: true,
//     pinSpacing: false
// });

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