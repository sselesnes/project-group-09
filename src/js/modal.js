document.addEventListener('DOMContentLoaded', () => {
    try {
        const burgerMenu = document.querySelector('.burger-menu');
        const mobileMenu = document.querySelector('.mobile-menu');
        const mobileClose = document.querySelector('.mobile-close');
        const body = document.body;

        if (!burgerMenu || !mobileMenu || !mobileClose) {
            console.warn('Not all mobile menu elements found');
            return;
        }

        // particles
        function initParticles() {
            try {
                if (typeof particlesJS === 'undefined') {
                    console.error('particlesJS is not loaded');
                    return;
                }

                const particlesContainer = document.getElementById('particles-js');
                if (!particlesContainer) {
                    console.error('particles-js container not found');
                    return;
                }

                particlesJS('particles-js', {
                    particles: {
                        number: {
                            value: 80,
                            density: {
                                enable: true,
                                value_area: 800
                            }
                        },
                        color: {
                            value: ['#00B068', '#14c57c', '#009156']
                        },
                        shape: {
                            type: 'circle'
                        },
                        opacity: {
                            value: 0.5,
                            random: true
                        },
                        size: {
                            value: 3,
                            random: true
                        },
                        line_linked: {
                            enable: true,
                            distance: 150,
                            color: '#00B068',
                            opacity: 0.4,
                            width: 1
                        },
                        move: {
                            enable: true,
                            speed: 2,
                            direction: 'none',
                            random: true,
                            straight: false,
                            out_mode: 'out',
                            bounce: false
                        }
                    },
                    interactivity: {
                        detect_on: 'canvas',
                        events: {
                            onhover: {
                                enable: true,
                                mode: 'grab'
                            },
                            onclick: {
                                enable: true,
                                mode: 'push'
                            },
                            resize: true
                        },
                        modes: {
                            grab: {
                                distance: 140,
                                line_linked: {
                                    opacity: 1
                                }
                            },
                            push: {
                                particles_nb: 4
                            }
                        }
                    },
                    retina_detect: true
                });
            } catch (error) {
                console.error('Error initializing particles:', error);
            }
        }

        function destroyParticles() {
            try {
                if (typeof pJSDom !== 'undefined' && pJSDom.length > 0) {
                    pJSDom[0].pJS.fn.vendors.destroypJS();
                    pJSDom = [];
                }
            } catch (error) {
                console.error('Error destroying particles:', error);
            }
        }

        burgerMenu.addEventListener('click', () => {
            try {
                mobileMenu.classList.add('is-open');
                burgerMenu.classList.add('is-open');
                body.classList.add('menu-open');
                initParticles();
            } catch (error) {
                console.error('Error opening menu:', error);
            }
        });

        mobileClose.addEventListener('click', () => {
            try {
                mobileMenu.classList.remove('is-open');
                burgerMenu.classList.remove('is-open');
                body.classList.remove('menu-open');
                destroyParticles();
            } catch (error) {
                console.error('Error closing menu:', error);
            }
        });

        const mobileLinks = mobileMenu.querySelectorAll('.nav-link');
        mobileLinks.forEach(link => {
            link.addEventListener('click', () => {
                try {
                    mobileMenu.classList.remove('is-open');
                    burgerMenu.classList.remove('is-open');
                    body.classList.remove('menu-open');
                    destroyParticles();
                } catch (error) {
                    console.error('Error closing menu on link click:', error);
                }
            });
        });

        document.querySelectorAll('a[href^="#"]').forEach(anchor => {
            anchor.addEventListener('click', function (e) {
                try {
                    e.preventDefault();
                    const targetId = this.getAttribute('href');
                    const targetElement = document.querySelector(targetId);
                    
                    if (targetElement) {
                        targetElement.scrollIntoView({
                            behavior: 'smooth',
                            block: 'start'
                        });
                    } else {
                        console.warn(`Element with id ${targetId} not found`);
                    }
                } catch (error) {
                    console.error('Error during smooth scroll:', error);
                }
            });
        });

    } catch (error) {
        console.error('Critical error in mobile menu initialization:', error);
    }
}); 