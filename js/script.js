gsap.registerPlugin(ScrollTrigger);
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
    invalidateOnRefresh: true,
}
});
// // 가로 끝 */}