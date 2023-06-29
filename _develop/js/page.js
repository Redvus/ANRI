'use strict';

gsap.registerPlugin(ScrollTrigger);

window.onresize = function(){ location.reload(); }

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

function initPage() {
    scrollSmooth();

}

function initPageMobile() {
    // navMenuOpenMobile();
}

if (document.body.clientWidth > 820 || screen.width > 820) {
    initPage();
} else {
    // initPageMobile();
}