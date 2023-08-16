'use strict';

gsap.registerPlugin(ScrollTrigger);

function reloadWindowResize() {
    window.onresize = function () {
        location.reload();
    }
}

function scrollSmooth() {
    const scrollLine = document.getElementById('scrollLine'),
        wrapper = document.querySelector('.wrapper');
    const locoScroll = new LocomotiveScroll({
        el: wrapper,
        smooth: true,
        multiplier: 0.3
    });


    locoScroll.on("scroll", ScrollTrigger.update);

    ScrollTrigger.scrollerProxy(wrapper, {
        scrollTop(value) {
            return arguments.length ? locoScroll.scrollTo(value, 0, 0) : locoScroll.scroll.instance.scroll.y;
        },

        getBoundingClientRect() {
            return {top: 0, left: 0, width: window.innerWidth, height: window.innerHeight};
        },
        // pinType: document.querySelector(".wrapper-info").style.transform ? "transform" : "fixed"
    });

    gsap.from(scrollLine, {
        scrollTrigger: {
            trigger: scrollLine,
            scroller: wrapper,
            scrub: true,
            start: "0 0",
            end: () => `+=${wrapper.offsetHeight - window.innerHeight}`,
            // markers: {
            // 	startColor: "#ccc",
            // 	endColor: "#ccc"
            // }
        },
        scaleX: 0,
        transformOrigin: "0 0",
        ease: "none"
    });

    ScrollTrigger.addEventListener("refreshInit", () => locoScroll.update());
    ScrollTrigger.refresh();
}

// Section Change
const sectionChangeContent = new SectionAnimation(),
    sectionTopChangeContent = new SectionTopAnimation(),
    wrapper = document.querySelector('.wrapper'),
    sectionPark_0 = document.getElementById('sectionPark_0'),
    sectionPark_1 = document.getElementById('sectionPark_1'),
    sectionPark_2 = document.getElementById('sectionPark_2'),
    sectionPark_3 = document.getElementById('sectionPark_3'),
    sectionPark_4 = document.getElementById('sectionPark_4'),
    sectionPark_5 = document.getElementById('sectionPark_5'),
    sectionPark_6 = document.getElementById('sectionPark_6'),
    sectionPark_7 = document.getElementById('sectionPark_7'),
    sectionPark_8 = document.getElementById('sectionPark_8'),
    sectionPark_9 = document.getElementById('sectionPark_9'),
    sectionPark_10 = document.getElementById('sectionPark_10'),
    sectionPark_11 = document.getElementById('sectionPark_11'),
    sectionParkImage_0 = document.getElementById('sectionParkImage_0'),
    sectionParkImage_1 = document.getElementById('sectionParkImage_1'),
    sectionParkImage_2 = document.getElementById('sectionParkImage_2'),
    sectionParkImage_3 = document.getElementById('sectionParkImage_3'),
    sectionParkImage_4 = document.getElementById('sectionParkImage_4'),
    sectionParkImage_5 = document.getElementById('sectionParkImage_5'),
    sectionParkImage_6 = document.getElementById('sectionParkImage_6'),
    sectionParkImage_7 = document.getElementById('sectionParkImage_7'),
    sectionParkImage_8 = document.getElementById('sectionParkImage_8'),
    sectionParkImage_9 = document.getElementById('sectionParkImage_9'),
    sectionParkImage_10 = document.getElementById('sectionParkImage_10'),
    sectionParkImage_11 = document.getElementById('sectionParkImage_11'),
    sectionTopTitle = document.querySelector('.section-top__title'),
    scrollMarkerPark_0 = document.getElementById('scrollMarkerPark_0'),
    scrollMarkerPark_1 = document.getElementById('scrollMarkerPark_1'),
    scrollMarkerPark_2 = document.getElementById('scrollMarkerPark_2'),
    scrollMarkerPark_3 = document.getElementById('scrollMarkerPark_3'),
    scrollMarkerPark_4 = document.getElementById('scrollMarkerPark_4'),
    scrollMarkerPark_5 = document.getElementById('scrollMarkerPark_5'),
    scrollMarkerPark_6 = document.getElementById('scrollMarkerPark_6'),
    scrollMarkerPark_7 = document.getElementById('scrollMarkerPark_7'),
    scrollMarkerPark_8 = document.getElementById('scrollMarkerPark_8'),
    scrollMarkerPark_9 = document.getElementById('scrollMarkerPark_9'),
    scrollMarkerPark_10 = document.getElementById('scrollMarkerPark_10')
;

// Section Info
const sectionInfoTitle_0 = document.getElementById('sectionInfoTitle_0'),
    sectionInfoTitle_1 = document.getElementById('sectionInfoTitle_1'),
    sectionInfoTitle_2 = document.getElementById('sectionInfoTitle_2'),
    sectionInfoTitle_3 = document.getElementById('sectionInfoTitle_3'),
    sectionInfoTitle_4 = document.getElementById('sectionInfoTitle_4'),
    sectionInfoTitle_5 = document.getElementById('sectionInfoTitle_5'),
    sectionInfoTitle_6 = document.getElementById('sectionInfoTitle_6'),
    sectionInfoTitle_7 = document.getElementById('sectionInfoTitle_7'),
    sectionInfoTitle_8 = document.getElementById('sectionInfoTitle_8'),
    sectionInfoTitle_9 = document.getElementById('sectionInfoTitle_9'),
    sectionInfoTitle_10 = document.getElementById('sectionInfoTitle_10'),
    sectionInfoTitle_11 = document.getElementById('sectionInfoTitle_11'),
    sectionInfoImage_0 = document.getElementById('sectionInfoImage_0'),
    sectionInfoImage_1 = document.getElementById('sectionInfoImage_1'),
    sectionInfoImage_2 = document.getElementById('sectionInfoImage_2'),
    sectionInfoImage_3 = document.getElementById('sectionInfoImage_3'),
    sectionInfoImage_4 = document.getElementById('sectionInfoImage_4'),
    sectionInfoImage_5 = document.getElementById('sectionInfoImage_5'),
    sectionInfoImage_6 = document.getElementById('sectionInfoImage_6'),
    sectionInfoImage_7 = document.getElementById('sectionInfoImage_7'),
    sectionInfoImage_8 = document.getElementById('sectionInfoImage_8'),
    sectionInfoImage_9 = document.getElementById('sectionInfoImage_9'),
    sectionInfoImage_10 = document.getElementById('sectionInfoImage_10'),
    sectionInfoImage_11 = document.getElementById('sectionInfoImage_11'),
    sectionInfoDescription_0 = document.getElementById('sectionInfoDescription_0'),
    sectionInfoDescription_1 = document.getElementById('sectionInfoDescription_1'),
    sectionInfoDescription_2 = document.getElementById('sectionInfoDescription_2'),
    sectionInfoDescription_3 = document.getElementById('sectionInfoDescription_3'),
    sectionInfoDescription_4 = document.getElementById('sectionInfoDescription_4'),
    sectionInfoDescription_5 = document.getElementById('sectionInfoDescription_5'),
    sectionInfoDescription_6 = document.getElementById('sectionInfoDescription_6'),
    sectionInfoDescription_7 = document.getElementById('sectionInfoDescription_7'),
    sectionInfoDescription_8 = document.getElementById('sectionInfoDescription_8'),
    sectionInfoDescription_9 = document.getElementById('sectionInfoDescription_9'),
    sectionInfoDescription_10 = document.getElementById('sectionInfoDescription_10'),
    sectionInfoDescription_11 = document.getElementById('sectionInfoDescription_11')
;

function sectionAnimLoad() {
    sectionTopChangeContent.sectionTopChange(
        sectionPark_0,
        sectionParkImage_0,
        sectionTopTitle);
    sectionChangeContent.sectionChange(
        sectionPark_0,
        sectionParkImage_0,
        sectionParkImage_1,
        scrollMarkerPark_0,
        sectionInfoTitle_0,
        sectionInfoTitle_1,
        sectionInfoImage_0,
        sectionInfoImage_1,
        sectionInfoDescription_0,
        sectionInfoDescription_1);
    sectionChangeContent.sectionChange(
        sectionPark_1,
        sectionParkImage_1,
        sectionParkImage_2,
        scrollMarkerPark_1,
        sectionInfoTitle_1,
        sectionInfoTitle_2,
        sectionInfoImage_1,
        sectionInfoImage_2,
        sectionInfoDescription_1,
        sectionInfoDescription_2);
    sectionChangeContent.sectionChange(
        sectionPark_2,
        sectionParkImage_2,
        sectionParkImage_3,
        scrollMarkerPark_2,
        sectionInfoTitle_2,
        sectionInfoTitle_3,
        sectionInfoImage_2,
        sectionInfoImage_3,
        sectionInfoDescription_2,
        sectionInfoDescription_3);
    sectionChangeContent.sectionChange(
        sectionPark_3,
        sectionParkImage_3,
        sectionParkImage_4,
        scrollMarkerPark_3,
        sectionInfoTitle_3,
        sectionInfoTitle_4,
        sectionInfoImage_3,
        sectionInfoImage_4,
        sectionInfoDescription_3,
        sectionInfoDescription_4);
    sectionChangeContent.sectionChange(
        sectionPark_4,
        sectionParkImage_4,
        sectionParkImage_5,
        scrollMarkerPark_4,
        sectionInfoTitle_4,
        sectionInfoTitle_5,
        sectionInfoImage_4,
        sectionInfoImage_5,
        sectionInfoDescription_4,
        sectionInfoDescription_5);
    sectionChangeContent.sectionChange(
        sectionPark_5,
        sectionParkImage_5,
        sectionParkImage_6,
        scrollMarkerPark_5,
        sectionInfoTitle_5,
        sectionInfoTitle_6,
        sectionInfoImage_5,
        sectionInfoImage_6,
        sectionInfoDescription_5,
        sectionInfoDescription_6);
    sectionChangeContent.sectionChange(
        sectionPark_6,
        sectionParkImage_6,
        sectionParkImage_7,
        scrollMarkerPark_6,
        sectionInfoTitle_6,
        sectionInfoTitle_7,
        sectionInfoImage_6,
        sectionInfoImage_7,
        sectionInfoDescription_6,
        sectionInfoDescription_7);
    sectionChangeContent.sectionChange(
        sectionPark_7,
        sectionParkImage_7,
        sectionParkImage_8,
        scrollMarkerPark_7,
        sectionInfoTitle_7,
        sectionInfoTitle_8,
        sectionInfoImage_7,
        sectionInfoImage_8,
        sectionInfoDescription_7,
        sectionInfoDescription_8);
    sectionChangeContent.sectionChange(
        sectionPark_8,
        sectionParkImage_8,
        sectionParkImage_9,
        scrollMarkerPark_8,
        sectionInfoTitle_8,
        sectionInfoTitle_9,
        sectionInfoImage_8,
        sectionInfoImage_9,
        sectionInfoDescription_8,
        sectionInfoDescription_9);
    sectionChangeContent.sectionChange(
        sectionPark_9,
        sectionParkImage_9,
        sectionParkImage_10,
        scrollMarkerPark_9,
        sectionInfoTitle_9,
        sectionInfoTitle_10,
        sectionInfoImage_9,
        sectionInfoImage_10,
        sectionInfoDescription_9,
        sectionInfoDescription_10);
    sectionChangeContent.sectionChange(
        sectionPark_10,
        sectionParkImage_10,
        sectionParkImage_11,
        scrollMarkerPark_10,
        sectionInfoTitle_10,
        sectionInfoTitle_11,
        sectionInfoImage_10,
        sectionInfoImage_11,
        sectionInfoDescription_10,
        sectionInfoDescription_11);
    sectionChangeContent.sectionChange(
        sectionPark_11,
        sectionParkImage_10,
        sectionParkImage_11,
        scrollMarkerPark_10,
        sectionInfoDescription_10,
        sectionInfoDescription_11);
}

function initPage() {
    scrollSmooth();
    reloadWindowResize();
    sectionAnimLoad();
}

function initPageMobile() {

}

if (document.body.clientWidth > 820 || screen.width > 820) {
    initPage();
} else {
    initPageMobile();
}