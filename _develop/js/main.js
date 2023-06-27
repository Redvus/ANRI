'use strict';

gsap.registerPlugin(ScrollTrigger);

function scrollSmooth() {
    const locoScroll = new LocomotiveScroll({
        el: document.querySelector('.wrapper'),
        smooth: true,
        multiplier: 0.8
    });

    locoScroll.on("scroll", ScrollTrigger.update);

    ScrollTrigger.scrollerProxy(".wrapper", {
        scrollTop(value) {
            return arguments.length ? locoScroll.scrollTo(value, 0, 0) : locoScroll.scroll.instance.scroll.y;
        },

        getBoundingClientRect() {
            return {top: 0, left: 0, width: window.innerWidth, height: window.innerHeight};
        },
        // pinType: document.querySelector(".wrapper-info").style.transform ? "transform" : "fixed"
    });

    gsap.from(".header-line", {
        scrollTrigger: {
            trigger: ".header-line",
            scroller: ".wrapper",
            scrub: true,
            start: "0 0",
            end: () => `+=${document.querySelector(".wrapper").offsetHeight - window.innerHeight}`,
            // markers: {
            // 	startColor: "#ccc",
            // 	endColor: "#ccc"
            // }
        },
        scaleX: 0,
        transformOrigin: "0 0",
        ease: "none"
    });

    ScrollTrigger.addEventListener("refresh", () => locoScroll.update());
    ScrollTrigger.refresh();
}

function sectionTopMove() {

    let tl = new gsap.timeline({
        scrollTrigger: {
            trigger: ".section-top",
            scroller: ".wrapper",
            scrub: true,
            // pin: true,
            start: "top top",
            end: "bottom top",
            toggleActions: "play none none reverse",
            // markers: {
            // 	startColor: "#ccc",
            // 	endColor: "#ccc"
            // }
        }
    });

    tl
        .fromTo(".section-top__image",
            {
                left: "13.05vw",
                width: "102vw"
            },
            {
                left: "-10vw",
                width: "70vw",
                // delay: "-0.6"
            }
        )
        .fromTo(".section-top__mask",
        {
            // width: "15vw",
            // autoAlpha: 1,
            left: "8.5vw"
        },
        {
            // width: "40vw",
            // autoAlpha: 0,
            left: "-17vw",
            duration: "0.6",
            delay: "-0.45"
        })
        .fromTo("#sectionTopImage_1",
            {
                left: "-11vw",
                autoAlpha: 1
            },
            {
                left: "-22vw",
                autoAlpha: 0,
                delay: "-0.6"
            }
        )
    ;

    ScrollTrigger.refresh();
}

function sectionTwoMove() {

    let tl = new gsap.timeline({
        scrollTrigger: {
            trigger: "#section_0",
            scroller: ".wrapper",
            scrub: true,
            // pin: true,
            start: "top top",
            end: "50% top",
            toggleActions: "play none none reverse",
            // markers: {
            //     startColor: "#ccc",
            //     endColor: "#ccc"
            // }
        }
    });

    tl
        .fromTo("#sectionTopImage_2",
            {
                left: "11vw",
                autoAlpha: 0
            },
            {
                left: "-11vw",
                autoAlpha: 1,
                delay: "-1"
            }
        )
    ;

    ScrollTrigger.refresh();
}

function initPage() {
    scrollSmooth();
    sectionTopMove();
    sectionTwoMove();
}

function initPageMobile() {
    // navMenuOpenMobile();
}

if (document.body.clientWidth > 820 || screen.width > 820) {
    initPage();
} else {
    // initPageMobile();
}