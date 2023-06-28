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

// Animation front section

const wrapper = document.querySelector('.wrapper'),
    sectionFront_0 = document.getElementById('sectionFront_0'),
    sectionFront_1 = document.getElementById('sectionFront_1'),
    sectionFront_2 = document.getElementById('sectionFront_2'),
    sectionFront_3 = document.getElementById('sectionFront_3'),
    sectionFront_4 = document.getElementById('sectionFront_4'),
    sectionFrontTopImage = document.querySelector('.section-top__image'),
    sectionFrontTopMask = document.querySelector('.section-top__mask'),
    sectionFrontImage_0 = document.getElementById('sectionFrontImage_0'),
    sectionFrontImage_1 = document.getElementById('sectionFrontImage_1'),
    sectionFrontImage_2 = document.getElementById('sectionFrontImage_2'),
    sectionFrontImage_3 = document.getElementById('sectionFrontImage_3'),
    sectionTopTitle = document.querySelector('.section-top__title'),
    sectionTitle_1 = document.getElementById('sectionTitle_1'),
    sectionTitle_2 = document.getElementById('sectionTitle_2'),
    sectionTitle_3 = document.getElementById('sectionTitle_3')
;

function sectionTopMove() {

    let tl = new gsap.timeline({
        scrollTrigger: {
            trigger: sectionFront_0,
            scroller: wrapper,
            scrub: true,
            // pin: true,
            start: "top top",
            end: "bottom top",
            toggleActions: "play none none reverse",
            // markers: {
            // 	startColor: "#ccc",
            // 	endColor: "#ccc"
            // }
        },
        onComplete: () => {
            // sectionTwoMove();
            // wrapper.removeChild(sectionFront_0)
        }
    });

    tl
        .to(sectionFrontTopImage,
            {
                left: "-10vw",
                width: "70vw",
                // delay: "-0.6"
            }
        )
        .to(sectionFrontTopMask,
            {
                // width: "40vw",
                // autoAlpha: 0,
                left: "-17vw",
                duration: "0.6",
                delay: "-0.45"
            })
        .to(sectionFrontImage_0,
            {
                left: "-22vw",
                // autoAlpha: 0,
                delay: "-0.6"
            }
        )
        .to(sectionTopTitle, {
            // right: "65vw",
            autoAlpha: 0,
            delay: "-0.7"
        })
    ;

    ScrollTrigger.refresh();
}

function sectionTwoMove() {

    let tl = new gsap.timeline({
        scrollTrigger: {
            trigger: sectionFront_1,
            scroller: wrapper,
            scrub: true,
            // pin: true,
            start: "top top",
            end: "50% top",
            toggleActions: "play none none reverse",
            // markers: {
            //     startColor: "#ccc",
            //     endColor: "#ccc"
            // }
        },
        delay: "-1.3",
        onComplete: () => {

        }
    });

    tl
        .fromTo(sectionFrontImage_1,
            {
                left: "-17vw",
                autoAlpha: 0
            },
            {
                left: "-20vw",
                autoAlpha: 1
            }
        )
        .fromTo(sectionTitle_1,
            {
                right: '0',
                autoAlpha: 0
            },
            {
                right: '11vw',
                autoAlpha: 1,
                delay: "-0.4"
            }
        )
    ;

    ScrollTrigger.refresh();
}

function sectionThreeMove() {

    let tl = new gsap.timeline({
        scrollTrigger: {
            trigger: sectionFront_2,
            scroller: wrapper,
            scrub: true,
            // pin: true,
            start: "top top",
            end: "50% top",
            toggleActions: "play none none reverse",
            // markers: {
            //     startColor: "#ccc",
            //     endColor: "#ccc"
            // }
        },
        delay: "-1.3",
        onComplete: () => {

        }
    });

    tl
        .fromTo(sectionFrontImage_2,
            {
                left: "-17vw",
                autoAlpha: 0
            },
            {
                left: "-20vw",
                autoAlpha: 1
            }
        )
        .to(sectionTitle_1,
            {
                right: '15vw',
                autoAlpha: 0,
                delay: "-0.6"
            }
        )
        .fromTo(sectionTitle_2,
            {
                right: '0',
                autoAlpha: 0
            },
            {
                right: '11vw',
                autoAlpha: 1,
                delay: "-0.4"
            }
        )
    ;

    ScrollTrigger.refresh();
}

function sectionFourMove() {

    let tl = new gsap.timeline({
        scrollTrigger: {
            trigger: sectionFront_3,
            scroller: wrapper,
            scrub: true,
            // pin: true,
            start: "top top",
            end: "50% top",
            toggleActions: "play none none reverse",
            // markers: {
            //     startColor: "#ccc",
            //     endColor: "#ccc"
            // }
        },
        delay: "-1.3",
        onComplete: () => {

        }
    });

    tl
        .fromTo(sectionFrontImage_3,
            {
                left: "-17vw",
                autoAlpha: 0
            },
            {
                left: "-20vw",
                autoAlpha: 1
            }
        )
        .to(sectionTitle_2,
            {
                right: '15vw',
                autoAlpha: 0,
                delay: "-0.6"
            }
        )
        .fromTo(sectionTitle_3,
            {
                right: '0',
                autoAlpha: 0
            },
            {
                right: '11vw',
                autoAlpha: 1,
                delay: "-0.4"
            }
        )
    ;

    ScrollTrigger.refresh();
}

function sectionFiveMove() {

    let tl = new gsap.timeline({
        scrollTrigger: {
            trigger: sectionFront_4,
            scroller: wrapper,
            scrub: true,
            // pin: true,
            start: "top top",
            end: "50% top",
            toggleActions: "play none none reverse",
            // markers: {
            //     startColor: "#ccc",
            //     endColor: "#ccc"
            // }
        },
        delay: "-1.3"
    });

    tl
        .to(sectionFrontTopImage,
            {
                left: "-20vw",
                autoAlpha: 0
            }
        )
        .to(sectionTitle_3,
            {
                right: '20vw',
                autoAlpha: 0,
                delay: "-0.8"
            }
        )
    ;

    ScrollTrigger.refresh();
}

function initPage() {
    scrollSmooth();
    sectionTopMove();
    sectionTwoMove();
    sectionThreeMove();
    sectionFourMove();
    sectionFiveMove();
}

function initPageMobile() {
    // navMenuOpenMobile();
}

if (document.body.clientWidth > 820 || screen.width > 820) {
    initPage();
} else {
    // initPageMobile();
}