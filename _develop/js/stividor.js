'use strict';

const sectionChangeContent = new SectionAnimation(),
    sectionTopChangeContent = new SectionTopAnimation(),
    sectionTopTitle = document.querySelector('.section-top__title'),
    sectionStividor_0 = document.getElementById('sectionStividor_0'),
    sectionStividor_1 = document.getElementById('sectionStividor_1'),
    sectionStividor_2 = document.getElementById('sectionStividor_2'),
    sectionStividor_3 = document.getElementById('sectionStividor_3'),
    sectionStividorImage_0 = document.getElementById('sectionStividorImage_0'),
    sectionStividorImage_1 = document.getElementById('sectionStividorImage_1'),
    sectionStividorImage_2 = document.getElementById('sectionStividorImage_2'),
    sectionStividorImage_3 = document.getElementById('sectionStividorImage_3'),
    sectionStividorImage_4 = document.getElementById('sectionStividorImage_4'),
    scrollMarkerStividor_0 = document.getElementById('scrollMarkerStividor_0'),
    scrollMarkerStividor_1 = document.getElementById('scrollMarkerStividor_1'),
    scrollMarkerStividor_2 = document.getElementById('scrollMarkerStividor_2'),
    scrollMarkerStividor_3 = document.getElementById('scrollMarkerStividor_3'),
    scrollMarkerStividor_4 = document.getElementById('scrollMarkerStividor_4'),
    sectionStividorInfoDescription_0 = document.getElementById('sectionStividorInfoDescription_0'),
    sectionStividorInfoDescription_1 = document.getElementById('sectionStividorInfoDescription_1'),
    sectionStividorInfoDescription_2 = document.getElementById('sectionStividorInfoDescription_2'),
    sectionStividorInfoDescription_3 = document.getElementById('sectionStividorInfoDescription_3'),
    sectionStividorInfoDescription_4 = document.getElementById('sectionStividorInfoDescription_4'),
    sectionInfoDescriptionSingle = document.querySelector('.section-info__description--single'),
    sectionInfoLine = document.querySelector('.section-info__line')
;

function sectionStividorAnimLoad() {
    sectionTopChangeContent.sectionTopWithMask(
        sectionStividor_0,
        sectionStividorImage_0,
        sectionTopTitle
    );
    sectionChangeContent.sectionSimpleInfoChange(
        sectionStividor_0,
        sectionStividorImage_0,
        sectionStividorImage_1,
        scrollMarkerStividor_0,
        sectionStividorInfoDescription_0,
        sectionStividorInfoDescription_1
    );
    sectionChangeContent.sectionSimpleInfoChange(
        sectionStividor_1,
        sectionStividorImage_1,
        sectionStividorImage_2,
        scrollMarkerStividor_1,
        sectionStividorInfoDescription_1,
        sectionStividorInfoDescription_2
    );
    sectionChangeContent.sectionSimpleInfoChange(
        sectionStividor_2,
        sectionStividorImage_2,
        sectionStividorImage_3,
        scrollMarkerStividor_2,
        sectionStividorInfoDescription_2,
        sectionStividorInfoDescription_3
    );
    sectionChangeContent.sectionSimpleInfoChange(
        sectionStividor_3,
        sectionStividorImage_3,
        sectionStividorImage_4,
        scrollMarkerStividor_3,
        sectionStividorInfoDescription_3,
        sectionStividorInfoDescription_4
    );
}

function sectionTopChangeInfoColorLoad() {
    let tl = new gsap.timeline({
        scrollTrigger: {
            trigger: sectionStividor_0,
            scroller: wrapper,
            scrub: true,
            start: "top 50vh",
            end: "100% top",
            toggleActions: "play none none reverse"
        }
    });

    tl
        .from([sectionInfoDescriptionSingle, sectionInfoLine], {
            autoAlpha: 0,
            duration: "0.3"
        })
    ;
    ScrollTrigger.refresh();
}

function sectionTopChangeInfoColorHide() {
    let tl = new gsap.timeline({
        scrollTrigger: {
            trigger: sectionStividor_3,
            scroller: wrapper,
            scrub: false,
            start: "top 30vh",
            end: "100% top",
            toggleActions: "play none none reverse"
        }
    });

    tl
        .to([sectionInfoDescriptionSingle, sectionInfoLine], {
            autoAlpha: 0,
            duration: "0.3"
        })
    ;
    ScrollTrigger.refresh();
}

function initStividor() {
    sectionStividorAnimLoad();
    sectionTopChangeInfoColorLoad();
    sectionTopChangeInfoColorHide();
}

function initStividorMobile() {

}

if (document.body.clientWidth > 820 || screen.width > 820) {
    initStividor();
} else {
    initStividorMobile();
}