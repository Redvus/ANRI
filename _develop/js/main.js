'use strict';

gsap.registerPlugin(ScrollTrigger);

window.onresize = function(){ location.reload(); }

function scrollSmooth() {
    const locoScroll = new LocomotiveScroll({
        el: document.querySelector('.wrapper'),
        smooth: true,
        multiplier: 0.6
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
    sectionTitle_3 = document.getElementById('sectionTitle_3'),
    sectionTitleLine = document.querySelector('.section-title__line')
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
        .from(sectionTitleLine, {
            left: "100vw",
            autoAlpha: 0,
            delay: "-0.4"
        })
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
        delay: "-1.3"
    });

    tl
        .fromTo(sectionFrontImage_1,
            {
                left: "-17vw",
                autoAlpha: 0
            },
            {
                left: "-20vw",
                autoAlpha: 1,
                ease: "sine.inOut"
            }
        )
        .to(sectionFrontImage_0, {
            left: "-=3vw",
            ease: "sine.inOut",
            delay: "-0.6"
        })
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
        delay: "-1.3"
    });

    tl
        .fromTo(sectionFrontImage_2,
            {
                left: "-17vw",
                autoAlpha: 0
            },
            {
                left: "-20vw",
                autoAlpha: 1,
                ease: "sine.inOut"
            }
        )
        .to(sectionFrontImage_1, {
            left: "-=3vw",
            ease: "sine.inOut",
            delay: "-0.6"
        })
        .to(sectionTitle_1,
            {
                right: '15vw',
                autoAlpha: 0,
                delay: "-0.4",
                ease: "sine.inOut"
            }
        )
        .fromTo(sectionTitle_2,
            {
                right: '0',
                autoAlpha: 0,
                delay: "-0.4"
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
        delay: "-1.3"
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
        .to(sectionFrontImage_2, {
            left: "-=3vw",
            ease: "sine.inOut",
            delay: "-0.6"
        })
        .to(sectionTitle_2,
            {
                right: '15vw',
                autoAlpha: 0,
                delay: "-0.4"
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
        .to(sectionTitleLine, {
            left: "100vw",
            autoAlpha: 0,
            delay: "-0.6"
        })
        .to(sectionTitle_3,
            {
                right: '0',
                autoAlpha: 0,
                delay: "-0.6"
            }
        )
        .to(sectionFrontImage_3,
            {
                left: "0",
                width: "118vw",
                delay: "-0.6"
            }
        )
        .to(sectionFrontTopImage,
            {
                left: "-10vw",
                width: "120vw",
                height: "70vh",
                delay: "-0.4"
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