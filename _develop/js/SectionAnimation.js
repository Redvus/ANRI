class SectionAnimation {

    sectionChange(sectionID,
                  sectionChangeImage,
                  sectionNextImage,
                  sectionScrollMarker,
                  sectionInfoTitleChange,
                  sectionInfoTitleNext,
                  sectionInfoImageChange,
                  sectionInfoImageNext,
                  sectionInfoDescriptionChange,
                  sectionInfoDescriptionNext) {
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
                    backgroundColor: '#f2a07c',
                    delay: "-0.3"
                })
            }
        });

        tl
            .fromTo(sectionNextImage,
                {
                    left: "5rem",
                    autoAlpha: 0
                },
                {
                    left: "2rem",
                    autoAlpha: 1,
                    ease: "sine.inOut"
                }
            )
            .to(sectionChangeImage, {
                left: "-=3rem",
                autoAlpha: 0,
                ease: "sine.inOut",
                delay: "-0.6"
            })
            .fromTo(sectionInfoTitleNext,
                {
                    right: "2rem",
                    autoAlpha: 0
                },
                {
                    right: "3rem",
                    autoAlpha: 1,
                    ease: "sine.inOut",
                    delay: "-0.6"
                }
            )
            .to(sectionInfoTitleChange, {
                right: "+=1rem",
                autoAlpha: 0,
                ease: "sine.inOut",
                delay: "-0.6"
            })
            // .fromTo(sectionInfoImageNext,
            //     {
            //         right: "-5vw",
            //         autoAlpha: 0
            //     },
            //     {
            //         right: "-2.5vw",
            //         autoAlpha: 1,
            //         ease: "sine.inOut",
            //         delay: "-0.6"
            //     }
            // )
            // .to(sectionInfoImageChange, {
            //     right: "+=2.5vw",
            //     autoAlpha: 0,
            //     ease: "sine.inOut",
            //     delay: "-0.6"
            // })
            .fromTo(sectionInfoDescriptionNext,
                {
                    right: "0",
                    autoAlpha: 0
                },
                {
                    right: "2.5vw",
                    autoAlpha: 1,
                    ease: "sine.inOut",
                    delay: "-0.6"
                }
            )
            .to(sectionInfoDescriptionChange, {
                right: "+=2.5vw",
                autoAlpha: 0,
                ease: "sine.inOut",
                delay: "-0.6"
            })
        ;

        ScrollTrigger.refresh();
    }

    sectionSimpleInfoChange(sectionID,
                  sectionChangeImage,
                  sectionNextImage,
                  sectionScrollMarker,
                  sectionInfoDescriptionChange,
                  sectionInfoDescriptionNext) {
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
                    backgroundColor: '#f2a07c',
                    delay: "-0.3"
                })
            }
        });

        tl
            .fromTo(sectionNextImage,
                {
                    left: "-6rem",
                    autoAlpha: 0
                },
                {
                    left: "-9rem",
                    autoAlpha: 1,
                    ease: "sine.inOut"
                }
            )
            .to(sectionChangeImage, {
                left: "-=3rem",
                autoAlpha: 0,
                ease: "sine.inOut",
                delay: "-0.6"
            })
            .fromTo(sectionInfoDescriptionNext,
                {
                    right: "0",
                    autoAlpha: 0
                },
                {
                    right: "2.5vw",
                    autoAlpha: 1,
                    ease: "sine.inOut",
                    delay: "-0.6"
                }
            )
            .to(sectionInfoDescriptionChange, {
                right: "+=2.5vw",
                autoAlpha: 0,
                ease: "sine.inOut",
                delay: "-0.6"
            })
        ;

        ScrollTrigger.refresh();
    }

    sectionSimpleChange(sectionID,
                            sectionChangeImage,
                            sectionNextImage,
                            sectionScrollMarker) {
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
                    backgroundColor: '#f2a07c',
                    delay: "-0.3"
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
        ;

        ScrollTrigger.refresh();
    }

    sectionInfoChangeWithoutMask(sectionID,
                            sectionChangeImage,
                            sectionNextImage,
                            sectionScrollMarker,
                            sectionInfoDescriptionChange,
                            sectionInfoDescriptionNext) {
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
                    backgroundColor: '#f2a07c',
                    delay: "-0.3"
                })
            }
        });

        tl
            .fromTo(sectionNextImage,
                {
                    left: "5rem",
                    autoAlpha: 0
                },
                {
                    left: "2rem",
                    autoAlpha: 1,
                    ease: "sine.inOut"
                }
            )
            .to(sectionChangeImage, {
                left: "-=3rem",
                autoAlpha: 0,
                ease: "sine.inOut",
                delay: "-0.6"
            })
            .fromTo(sectionInfoDescriptionNext,
                {
                    right: "0",
                    autoAlpha: 0
                },
                {
                    right: "2.5vw",
                    autoAlpha: 1,
                    ease: "sine.inOut",
                    delay: "-0.6"
                }
            )
            .to(sectionInfoDescriptionChange, {
                right: "+=2.5vw",
                autoAlpha: 0,
                ease: "sine.inOut",
                delay: "-0.6"
            })
        ;

        ScrollTrigger.refresh();
    }
}