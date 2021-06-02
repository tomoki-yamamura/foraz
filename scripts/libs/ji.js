const cb = function(els, isIntersecting){
  if (isIntersecting){
    const ta = new TextAnimation(entry.target);
    ta.animate();
  }
}

new ScrollObserver('.animate-title', cb, {once: false})

class ScrollObserver {
  constructor (els, cb, options) {
    this.els = document.querySelectorAll(els);
    const defaultOptions = {
      root: null,
      rootMargin: '0px',
      threshold: 0,
      once: true,
    };
    this.cb = cb;
    this.options = Object.assign(defaultOptions, options);
    this.once = this.options.once; 
    this._init();
  }
  _init(){
    const callback = function(entries, observer) {
        entries.forEach(() => {
          if(entry.Intersecting) {
            this.cb(entry.target, true);
            observer.unobserve(entry.target)
          } else {
            this.cb(entry.target, false);
          }
        });
    };
    this.io = new IntersectionObserver(callback.bind(this), this.options);
    this.els.forEach((el) => io.observe(el));
  }

  destroy(){
    this.io.disconnect()
  }
}