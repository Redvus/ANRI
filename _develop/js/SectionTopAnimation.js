class SectionTopAnimation {

    sectionTopChange(sectionID, sectionChangeImage, sectionTitle) {
        const sectionTopMaskRed = document.querySelector('.section-top__mask_red'),
            sectionTopMask = document.querySelector('.section-top__mask'),
            sectionTopImage = document.querySelector('.section-top__image')
        ;
        let tl = new gsap.timeline({
            scrollTrigger: {
                trigger: sectionID,
                scroller: wrapper,
                scrub: true,
                // pin: true,
                start: "top 104px",
                end: "100% top",
                toggleActions: "play none none reverse"
            },
            // onStart: () => {
            //     // tl.set(scrollMarkerTop, {
            //     //     backgroundColor: '#f2a07c'
            //     // })
            // }
        });

        tl
            .to(sectionTopImage, {
                left: "-10vw",
                width: "127vw",
                delay: "-0.2"
            })
            .to(sectionTopMaskRed, {
                autoAlpha: 0,
                duration: "1",
                delay: "-0.6",
                ease: 'power3.out'
            })
            .to(sectionTopMask, {
                // width: "40vw",
                // autoAlpha: 0,
                left: "-17vw",
                duration: 1,
                delay: "-0.9",
                ease: 'power3.out'
            })
            .to(sectionChangeImage, {
                // left: "-11vw",
                // autoAlpha: 1,
                duration: "1",
                delay: "-1"
            })
            .to(sectionTitle, {
                autoAlpha: 0,
                delay: "-1"
            })
        ;

        ScrollTrigger.refresh();
    }

    sectionTopWithMask(sectionID, sectionChangeImage, sectionTitle) {
        const sectionTopMaskRed = document.querySelector('.section-top__mask_red'),
            sectionTopMask = document.querySelector('.section-top__mask'),
            sectionTopImage = document.querySelector('.section-top__image')
        ;
        let tl = new gsap.timeline({
            scrollTrigger: {
                trigger: sectionID,
                scroller: wrapper,
                scrub: true,
                // pin: true,
                start: "top 104px",
                end: "100% top",
                toggleActions: "play none none reverse"
            }
        });

        tl
            // .to(sectionTopImage, {
            //     left: "-7vw",
            //     width: "127vw",
            //     delay: "-0.2"
            // })
            .to(sectionTopMaskRed, {
                autoAlpha: 0,
                duration: "1",
                delay: "-0.6",
                ease: 'power3.out'
            })
            // .to(sectionTopMask, {
            //     // width: "40vw",
            //     // autoAlpha: 0,
            //     left: "-17vw",
            //     duration: 1,
            //     delay: "-0.9",
            //     ease: 'power3.out'
            // })
            .to(sectionChangeImage, {
                // left: "-11vw",
                // autoAlpha: 1,
                duration: "1",
                delay: "-1"
            })
            .to(sectionTitle, {
                autoAlpha: 0,
                delay: "-1",
                right: "0"
            })
        ;

        ScrollTrigger.refresh();
    }

    sectionTopChangeInfoColor(sectionID, sectionChangeImage, sectionTitle) {
        const sectionTopMaskRed = document.querySelector('.section-top__mask_red'),
            sectionInfoDescriptionSingle = document.querySelector('.section-info__description--single'),
            sectionTopMask = document.querySelector('.section-top__mask'),
            sectionTopImage = document.querySelector('.section-top__image')
        ;
        let tl = new gsap.timeline({
            scrollTrigger: {
                trigger: sectionID,
                scroller: wrapper,
                scrub: true,
                // pin: true,
                start: "top 104px",
                end: "100% top",
                toggleActions: "play none none reverse"
            },
            // onStart: () => {
            //     tl.to(sectionInfoDescriptionSingle, {
            //         backgroundColor: '#292765',
            //         duration: "0.4",
            //         delay: "-0.2"
            //     })
            // }
        });

        tl
            .to(sectionTopImage, {
                left: "-10vw",
                width: "127vw",
                delay: "-0.2"
            })
            .to(sectionTopMaskRed, {
                autoAlpha: 0,
                duration: "1",
                delay: "-0.6",
                ease: 'power3.out'
            })
            .to(sectionTopMask, {
                // width: "40vw",
                // autoAlpha: 0,
                left: "-17vw",
                duration: 1,
                delay: "-0.9",
                ease: 'power3.out'
            })
            .to(sectionChangeImage, {
                // left: "-11vw",
                // autoAlpha: 1,
                duration: "1",
                delay: "-1"
            })
            .to(sectionTitle, {
                autoAlpha: 0,
                delay: "-1"
            })
        ;

        ScrollTrigger.refresh();
    }
}