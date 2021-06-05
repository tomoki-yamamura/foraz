document.addEventListener('DOMContentLoaded', function () {
    const hero = new HeroSlider('.swiper-container');
    hero.start();


    const cb = function (el, inview) {
        if(inview) {
            const ta = new TweenTextAnimation(el);
            ta.animate();
        }
    }

    const so = new ScrollObserver('.tween-animate-title', cb);


    const _inviewAnimation = function(el, inview) {
        if(inview) {
            el.classList.add('inview'); 
        } else {
            el.classList.remove('inview');
        }
    }

    // const so2 = new ScrollObserver('.cover-slide', _inviewAnimation);

    new MobileMenu();
    new Main();
});

class Main{
    constructor(){
        this.header = document.querySelector('.header');
        this._observers = [];
        this._init();
    }

    _textAnimation(el, inview) {
        if(inview) {
            const ta = new TweenTextAnimation(el);
            ta.animate();
        }
    }

    _init(){
        const hero = new HeroSlider('.swiper-container');
        this._scrollInit();
    }

    _scrollInit(){
        this._observers.push(
            new ScrollObserver('.nav-trigger', this._navAmination.bind(this), {once: false}),
            new ScrollObserver('.cover-slide', this._inviewAnimation),
            new ScrollObserver('.tween-animate-title', this._textAnimation),
            new ScrollObserver('.swiper-container', _textAnimation.bind(this), )
        );
    };

    _toggleSlideAnimation(el, inview) {
        if(inview) {
            this.hero.start();
        } else {
            this.hero.stop();
        }
    }

    _navAmination(el, inview) {
        if(inview) {
            this.header.classList.remove('triggered');
        } else {
            this.header.classList.add('triggered');
        }
    }
    
}



