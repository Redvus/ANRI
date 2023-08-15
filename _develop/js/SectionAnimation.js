class SectionAnimation {

    sectionChange(sectionID, sectionChangeImage, sectionNextImage, sectionScrollMarker) {
        const sectionTopImage = document.querySelector('.section-top__image');
        let tl = new gsap.timeline({
            scrollTrigger: {
                trigger: sectionID,
                scroller: wrapper,
                scrub: false,
                // pin: true,
                start: "top top",
                end: "100% top",
                toggleActions: "play none none reverse"
            },
            delay: "-1.3",
            onStart: () => {
                tl.set(sectionScrollMarker, {
                    backgroundColor: '#f2a07c'
                })
            }
        });

        tl
            .fromTo(sectionNextImage,
                {
                    left: "3vw",
                    autoAlpha: 0
                },
                {
                    left: "0",
                    autoAlpha: 1,
                    ease: "sine.inOut"
                }
            )
            .to(sectionChangeImage, {
                left: "-=3vw",
                autoAlpha: 0,
                ease: "sine.inOut",
                delay: "-0.6"
            })
        // .to(sectionTitle_1,
        //     {
        //         right: '15vw',
        //         autoAlpha: 0,
        //         duration: "0.4",
        //         delay: "-0.4",
        //         ease: "sine.inOut"
        //     }
        // )
        // .fromTo(sectionTitle_2,
        //     {
        //         right: '0',
        //         autoAlpha: 0,
        //         delay: "-0.4"
        //     },
        //     {
        //         right: '11vw',
        //         autoAlpha: 1,
        //         duration: "0.3",
        //         delay: "-0.4"
        //     }
        // )
        ;

        ScrollTrigger.refresh();
    }
}