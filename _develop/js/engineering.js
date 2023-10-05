'use strict';

const sectionChangeContent = new SectionAnimation(),
    sectionTopChangeContent = new SectionTopAnimation(),
    sectionTopTitle = document.querySelector('.section-top__title'),
    sectionEngineering_0 = document.getElementById('sectionEngineering_0'),
    sectionEngineering_1 = document.getElementById('sectionEngineering_1'),
    sectionEngineering_2 = document.getElementById('sectionEngineering_2'),
    sectionEngineering_3 = document.getElementById('sectionEngineering_3'),
    sectionEngineering_4 = document.getElementById('sectionEngineering_4'),
    sectionEngineering_5 = document.getElementById('sectionEngineering_5'),
    sectionEngineering_6 = document.getElementById('sectionEngineering_6'),
    sectionEngineering_7 = document.getElementById('sectionEngineering_7'),
    sectionEngineering_8 = document.getElementById('sectionEngineering_8'),
    sectionEngineering_9 = document.getElementById('sectionEngineering_9'),
    sectionEngineering_10 = document.getElementById('sectionEngineering_10'),
    sectionEngineering_11 = document.getElementById('sectionEngineering_11'),
    sectionEngineeringImage_0 = document.getElementById('sectionEngineeringImage_0'),
    sectionEngineeringImage_1 = document.getElementById('sectionEngineeringImage_1'),
    sectionEngineeringImage_2 = document.getElementById('sectionEngineeringImage_2'),
    sectionEngineeringImage_3 = document.getElementById('sectionEngineeringImage_3'),
    sectionEngineeringImage_4 = document.getElementById('sectionEngineeringImage_4'),
    sectionEngineeringImage_5 = document.getElementById('sectionEngineeringImage_5'),
    sectionEngineeringImage_6 = document.getElementById('sectionEngineeringImage_6'),
    sectionEngineeringImage_7 = document.getElementById('sectionEngineeringImage_7'),
    sectionEngineeringImage_8 = document.getElementById('sectionEngineeringImage_8'),
    sectionEngineeringImage_9 = document.getElementById('sectionEngineeringImage_9'),
    sectionEngineeringImage_10 = document.getElementById('sectionEngineeringImage_10'),
    sectionEngineeringImage_11 = document.getElementById('sectionEngineeringImage_11'),
    sectionEngineeringImage_12 = document.getElementById('sectionEngineeringImage_12'),
    scrollMarkerEngineering_0 = document.getElementById('scrollMarkerEngineering_0'),
    scrollMarkerEngineering_1 = document.getElementById('scrollMarkerEngineering_1'),
    scrollMarkerEngineering_2 = document.getElementById('scrollMarkerEngineering_2'),
    scrollMarkerEngineering_3 = document.getElementById('scrollMarkerEngineering_3'),
    scrollMarkerEngineering_4 = document.getElementById('scrollMarkerEngineering_4'),
    scrollMarkerEngineering_5 = document.getElementById('scrollMarkerEngineering_5'),
    scrollMarkerEngineering_6 = document.getElementById('scrollMarkerEngineering_6'),
    scrollMarkerEngineering_7 = document.getElementById('scrollMarkerEngineering_7'),
    scrollMarkerEngineering_8 = document.getElementById('scrollMarkerEngineering_8'),
    scrollMarkerEngineering_9 = document.getElementById('scrollMarkerEngineering_9'),
    scrollMarkerEngineering_10 = document.getElementById('scrollMarkerEngineering_10'),
    scrollMarkerEngineering_11 = document.getElementById('scrollMarkerEngineering_11'),
    sectionEngineeringInfoDescription_0 = document.getElementById('sectionEngineeringInfoDescription_0'),
    sectionEngineeringInfoDescription_1 = document.getElementById('sectionEngineeringInfoDescription_1'),
    sectionEngineeringInfoDescription_2 = document.getElementById('sectionEngineeringInfoDescription_2'),
    sectionEngineeringInfoDescription_3 = document.getElementById('sectionEngineeringInfoDescription_3'),
    sectionEngineeringInfoDescription_4 = document.getElementById('sectionEngineeringInfoDescription_4'),
    sectionEngineeringInfoDescription_5 = document.getElementById('sectionEngineeringInfoDescription_5'),
    sectionEngineeringInfoDescription_6 = document.getElementById('sectionEngineeringInfoDescription_6'),
    sectionEngineeringInfoDescription_7 = document.getElementById('sectionEngineeringInfoDescription_7'),
    sectionEngineeringInfoDescription_8 = document.getElementById('sectionEngineeringInfoDescription_8'),
    sectionEngineeringInfoDescription_9 = document.getElementById('sectionEngineeringInfoDescription_9'),
    sectionEngineeringInfoDescription_10 = document.getElementById('sectionEngineeringInfoDescription_10'),
    sectionEngineeringInfoDescription_11 = document.getElementById('sectionEngineeringInfoDescription_11'),
    sectionEngineeringInfoDescription_12 = document.getElementById('sectionEngineeringInfoDescription_12'),
    sectionInfoDescriptionDark = document.querySelector('.section-info__description--dark'),
    sectionInfoLine = document.querySelector('.section-info__line')
;

function sectionEngineeringAnimLoad() {
    sectionTopChangeContent.sectionTopChangeInfoColor(
        sectionEngineering_0,
        sectionEngineeringImage_0,
        sectionTopTitle
    );
    sectionChangeContent.sectionInfoChangeWithoutMask(
        sectionEngineering_0,
        sectionEngineeringImage_0,
        sectionEngineeringImage_1,
        scrollMarkerEngineering_0,
        sectionEngineeringInfoDescription_0,
        sectionEngineeringInfoDescription_1
    );
    sectionChangeContent.sectionInfoChangeWithoutMask(
        sectionEngineering_1,
        sectionEngineeringImage_1,
        sectionEngineeringImage_2,
        scrollMarkerEngineering_1,
        sectionEngineeringInfoDescription_1,
        sectionEngineeringInfoDescription_2
    );
    sectionChangeContent.sectionInfoChangeWithoutMask(
        sectionEngineering_2,
        sectionEngineeringImage_2,
        sectionEngineeringImage_3,
        scrollMarkerEngineering_2,
        sectionEngineeringInfoDescription_2,
        sectionEngineeringInfoDescription_3
    );
    sectionChangeContent.sectionInfoChangeWithoutMask(
        sectionEngineering_3,
        sectionEngineeringImage_3,
        sectionEngineeringImage_4,
        scrollMarkerEngineering_3,
        sectionEngineeringInfoDescription_3,
        sectionEngineeringInfoDescription_4
    );
    sectionChangeContent.sectionInfoChangeWithoutMask(
        sectionEngineering_4,
        sectionEngineeringImage_4,
        sectionEngineeringImage_5,
        scrollMarkerEngineering_4,
        sectionEngineeringInfoDescription_4,
        sectionEngineeringInfoDescription_5
    );
    sectionChangeContent.sectionInfoChangeWithoutMask(
        sectionEngineering_5,
        sectionEngineeringImage_5,
        sectionEngineeringImage_6,
        scrollMarkerEngineering_5,
        sectionEngineeringInfoDescription_5,
        sectionEngineeringInfoDescription_6
    );
    sectionChangeContent.sectionInfoChangeWithoutMask(
        sectionEngineering_6,
        sectionEngineeringImage_6,
        sectionEngineeringImage_7,
        scrollMarkerEngineering_6,
        sectionEngineeringInfoDescription_6,
        sectionEngineeringInfoDescription_7
    );
    sectionChangeContent.sectionInfoChangeWithoutMask(
        sectionEngineering_7,
        sectionEngineeringImage_7,
        sectionEngineeringImage_8,
        scrollMarkerEngineering_7,
        sectionEngineeringInfoDescription_7,
        sectionEngineeringInfoDescription_8
    );
    sectionChangeContent.sectionInfoChangeWithoutMask(
        sectionEngineering_8,
        sectionEngineeringImage_8,
        sectionEngineeringImage_9,
        scrollMarkerEngineering_8,
        sectionEngineeringInfoDescription_8,
        sectionEngineeringInfoDescription_9
    );
    sectionChangeContent.sectionInfoChangeWithoutMask(
        sectionEngineering_9,
        sectionEngineeringImage_9,
        sectionEngineeringImage_10,
        scrollMarkerEngineering_9,
        sectionEngineeringInfoDescription_9,
        sectionEngineeringInfoDescription_10
    );
    sectionChangeContent.sectionInfoChangeWithoutMask(
        sectionEngineering_10,
        sectionEngineeringImage_10,
        sectionEngineeringImage_11,
        scrollMarkerEngineering_10,
        sectionEngineeringInfoDescription_10,
        sectionEngineeringInfoDescription_11
    );
    sectionChangeContent.sectionInfoChangeWithoutMask(
        sectionEngineering_11,
        sectionEngineeringImage_11,
        sectionEngineeringImage_12,
        scrollMarkerEngineering_11,
        sectionEngineeringInfoDescription_11,
        sectionEngineeringInfoDescription_12
    );
}

function sectionTopChangeInfoColorLoad() {
    let tl = new gsap.timeline({
        scrollTrigger: {
            trigger: sectionEngineering_0,
            scroller: wrapper,
            scrub: true,
            start: "top 50vh",
            end: "100% top",
            toggleActions: "play none none reverse"
        }
    });

    tl
        .from([sectionInfoDescriptionDark, sectionInfoLine], {
            autoAlpha: 0,
            duration: "0.3"
        })
    ;
    ScrollTrigger.refresh();
}

function sectionTopChangeInfoColorHide() {
    let tl = new gsap.timeline({
        scrollTrigger: {
            trigger: sectionEngineering_11,
            scroller: wrapper,
            scrub: false,
            start: "top 30vh",
            end: "100% top",
            toggleActions: "play none none reverse"
        }
    });

    tl
        .to([sectionInfoDescriptionDark, sectionInfoLine], {
            autoAlpha: 0,
            duration: "0.3"
        })
    ;
    ScrollTrigger.refresh();
}

function initEngineering() {
    sectionEngineeringAnimLoad();
    sectionTopChangeInfoColorLoad();
    sectionTopChangeInfoColorHide();
}

function initEngineeringMobile() {

}

if (document.body.clientWidth > 820 || screen.width > 820) {
    initEngineering();
} else {
    initEngineeringMobile();
}