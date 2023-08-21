'use strict';

const wrapper = document.querySelector('.wrapper'),
    sectionChangeContent = new SectionAnimation(),
    sectionTopChangeContent = new SectionTopAnimation(),
    sectionTopTitle = document.querySelector('.section-top__title'),
    sectionProject_0 = document.getElementById('sectionProject_0'),
    sectionProject_1 = document.getElementById('sectionProject_1'),
    sectionProject_2 = document.getElementById('sectionProject_2'),
    sectionProject_3 = document.getElementById('sectionProject_3'),
    sectionProject_4 = document.getElementById('sectionProject_4'),
    sectionProject_5 = document.getElementById('sectionProject_5'),
    sectionProject_6 = document.getElementById('sectionProject_6'),
    sectionProject_7 = document.getElementById('sectionProject_7'),
    sectionProject_8 = document.getElementById('sectionProject_8'),
    sectionProject_9 = document.getElementById('sectionProject_9'),
    sectionProject_10 = document.getElementById('sectionProject_10'),
    sectionProject_11 = document.getElementById('sectionProject_11'),
    sectionProjectImage_0 = document.getElementById('sectionProjectImage_0'),
    sectionProjectImage_1 = document.getElementById('sectionProjectImage_1'),
    sectionProjectImage_2 = document.getElementById('sectionProjectImage_2'),
    sectionProjectImage_3 = document.getElementById('sectionProjectImage_3'),
    sectionProjectImage_4 = document.getElementById('sectionProjectImage_4'),
    sectionProjectImage_5 = document.getElementById('sectionProjectImage_5'),
    sectionProjectImage_6 = document.getElementById('sectionProjectImage_6'),
    sectionProjectImage_7 = document.getElementById('sectionProjectImage_7'),
    sectionProjectImage_8 = document.getElementById('sectionProjectImage_8'),
    sectionProjectImage_9 = document.getElementById('sectionProjectImage_9'),
    sectionProjectImage_10 = document.getElementById('sectionProjectImage_10'),
    sectionProjectImage_11 = document.getElementById('sectionProjectImage_11'),
    sectionProjectImage_12 = document.getElementById('sectionProjectImage_12'),
    scrollMarkerProject_0 = document.getElementById('scrollMarkerProject_0'),
    scrollMarkerProject_1 = document.getElementById('scrollMarkerProject_1'),
    scrollMarkerProject_2 = document.getElementById('scrollMarkerProject_2'),
    scrollMarkerProject_3 = document.getElementById('scrollMarkerProject_3'),
    scrollMarkerProject_4 = document.getElementById('scrollMarkerProject_4'),
    scrollMarkerProject_5 = document.getElementById('scrollMarkerProject_5'),
    scrollMarkerProject_6 = document.getElementById('scrollMarkerProject_6'),
    scrollMarkerProject_7 = document.getElementById('scrollMarkerProject_7'),
    scrollMarkerProject_8 = document.getElementById('scrollMarkerProject_8'),
    scrollMarkerProject_9 = document.getElementById('scrollMarkerProject_9'),
    scrollMarkerProject_10 = document.getElementById('scrollMarkerProject_10'),
    scrollMarkerProject_11 = document.getElementById('scrollMarkerProject_11'),
    scrollMarkerProject_12 = document.getElementById('scrollMarkerProject_12'),
    sectionProjectInfoDescription_0 = document.getElementById('sectionProjectInfoDescription_0'),
    sectionProjectInfoDescription_1 = document.getElementById('sectionProjectInfoDescription_1'),
    sectionProjectInfoDescription_2 = document.getElementById('sectionProjectInfoDescription_2'),
    sectionProjectInfoDescription_3 = document.getElementById('sectionProjectInfoDescription_3'),
    sectionProjectInfoDescription_4 = document.getElementById('sectionProjectInfoDescription_4'),
    sectionProjectInfoDescription_5 = document.getElementById('sectionProjectInfoDescription_5'),
    sectionProjectInfoDescription_6 = document.getElementById('sectionProjectInfoDescription_6'),
    sectionProjectInfoDescription_7 = document.getElementById('sectionProjectInfoDescription_7'),
    sectionProjectInfoDescription_8 = document.getElementById('sectionProjectInfoDescription_8'),
    sectionProjectInfoDescription_9 = document.getElementById('sectionProjectInfoDescription_9'),
    sectionProjectInfoDescription_10 = document.getElementById('sectionProjectInfoDescription_10'),
    sectionProjectInfoDescription_11 = document.getElementById('sectionProjectInfoDescription_11'),
    sectionProjectInfoDescription_12 = document.getElementById('sectionProjectInfoDescription_12'),
    sectionInfoDescriptionSingle = document.querySelector('.section-info__description--single'),
    sectionInfoLine = document.querySelector('.section-info__line')
;

function sectionProjectsAnimLoad() {
    sectionTopChangeContent.sectionTopWithMask(
        sectionProject_0,
        sectionProjectImage_0,
        sectionTopTitle
    );
    sectionChangeContent.sectionSimpleInfoChange(
      sectionProject_0,
      sectionProjectImage_0,
        sectionProjectImage_1,
        scrollMarkerProject_0,
        sectionProjectInfoDescription_0,
        sectionProjectInfoDescription_1
    );
    sectionChangeContent.sectionSimpleInfoChange(
        sectionProject_1,
        sectionProjectImage_1,
        sectionProjectImage_2,
        scrollMarkerProject_1,
        sectionProjectInfoDescription_1,
        sectionProjectInfoDescription_2
    );
    sectionChangeContent.sectionSimpleInfoChange(
        sectionProject_2,
        sectionProjectImage_2,
        sectionProjectImage_3,
        scrollMarkerProject_2,
        sectionProjectInfoDescription_2,
        sectionProjectInfoDescription_3
    );
    sectionChangeContent.sectionSimpleInfoChange(
        sectionProject_3,
        sectionProjectImage_3,
        sectionProjectImage_4,
        scrollMarkerProject_3,
        sectionProjectInfoDescription_3,
        sectionProjectInfoDescription_4
    );
    sectionChangeContent.sectionSimpleInfoChange(
        sectionProject_4,
        sectionProjectImage_4,
        sectionProjectImage_5,
        scrollMarkerProject_4,
        sectionProjectInfoDescription_4,
        sectionProjectInfoDescription_5
    );
    sectionChangeContent.sectionSimpleInfoChange(
        sectionProject_5,
        sectionProjectImage_5,
        sectionProjectImage_6,
        scrollMarkerProject_5,
        sectionProjectInfoDescription_5,
        sectionProjectInfoDescription_6
    );
    sectionChangeContent.sectionSimpleInfoChange(
        sectionProject_6,
        sectionProjectImage_6,
        sectionProjectImage_7,
        scrollMarkerProject_6,
        sectionProjectInfoDescription_6,
        sectionProjectInfoDescription_7
    );
    sectionChangeContent.sectionSimpleInfoChange(
        sectionProject_7,
        sectionProjectImage_7,
        sectionProjectImage_8,
        scrollMarkerProject_7,
        sectionProjectInfoDescription_7,
        sectionProjectInfoDescription_8
    );
    sectionChangeContent.sectionSimpleInfoChange(
        sectionProject_8,
        sectionProjectImage_8,
        sectionProjectImage_9,
        scrollMarkerProject_8,
        sectionProjectInfoDescription_8,
        sectionProjectInfoDescription_9
    );
    sectionChangeContent.sectionSimpleInfoChange(
        sectionProject_9,
        sectionProjectImage_9,
        sectionProjectImage_10,
        scrollMarkerProject_9,
        sectionProjectInfoDescription_9,
        sectionProjectInfoDescription_10
    );
    sectionChangeContent.sectionSimpleInfoChange(
        sectionProject_10,
        sectionProjectImage_10,
        sectionProjectImage_11,
        scrollMarkerProject_10,
        sectionProjectInfoDescription_10,
        sectionProjectInfoDescription_11
    );
    sectionChangeContent.sectionSimpleInfoChange(
        sectionProject_11,
        sectionProjectImage_11,
        sectionProjectImage_12,
        scrollMarkerProject_11,
        sectionProjectInfoDescription_11,
        sectionProjectInfoDescription_12
    );
}

function sectionTopChangeInfoColorLoad() {
    let tl = new gsap.timeline({
        scrollTrigger: {
            trigger: sectionProject_0,
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
            trigger: sectionProject_11,
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

function initProject() {
    sectionProjectsAnimLoad();
    sectionTopChangeInfoColorLoad();
    sectionTopChangeInfoColorHide();
}

function initProjectMobile() {

}

if (document.body.clientWidth > 820 || screen.width > 820) {
    initProject();
} else {
    initProjectMobile();
}