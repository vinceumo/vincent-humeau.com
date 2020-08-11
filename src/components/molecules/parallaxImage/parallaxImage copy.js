import imagesLoaded from "imagesloaded";

const parallaxImage = () => {
  const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)")
    .matches;
  if (reducedMotion) {
    return;
  }
  const imgEls = document.querySelectorAll(".parallax-img");
  let windowSize;
  let docScroll;
  const utilities = {
    math: {
      // map number x from range [a, b] to [c, d]
      map: (x, a, b, c, d) => ((x - a) * (d - c)) / (b - a) + c,
      // linear interpolation
      lerp: (a, b, n) => (1 - n) * a + n * b,
    },
    getPageYScroll: () =>
      (docScroll = window.pageYOffset || document.documentElement.scrollTop),
    calcWindowSize: () =>
      (windowSize = { width: window.innerWidth, height: window.innerHeight }),
  };

  const setSmoothScroll = (el) => {
    const imgEl = el.querySelector(".img");
    let isVisible = false;
    let isLoaded = false;
    let props = {
      top: null,
      height: null,
    };
    const renderedStyles = {
      innerTranslationY: {
        previous: 0,
        current: 0,
        ease: 0.1,
        maxValue: parseInt(
          getComputedStyle(imgEl).getPropertyValue("--ImgOverflow"),
          10
        ),
        setValue: () => {
          const maxValue = parseInt(
            getComputedStyle(imgEl).getPropertyValue("--ImgOverflow"),
            10
          );
          const minValue = -1 * maxValue;
          return Math.max(
            Math.min(
              utilities.math.map(
                props.top - docScroll,
                windowSize.height,
                -1 * props.height,
                minValue,
                maxValue
              ),
              maxValue
            ),
            minValue
          );
        },
      },
      // innerTranslationX: {}
    };

    const getSize = () => {
      const rect = el.getBoundingClientRect();
      props = {
        height: rect.height,
        top: docScroll + rect.top,
      };
    };

    const layout = () => {
      imgEl.style.transform = `translate3d(0,${renderedStyles.innerTranslationY.previous}px,0)`;
    };

    const update = () => {
      getSize();
      for (const key in renderedStyles) {
        renderedStyles[key].current = renderedStyles[
          key
        ].previous = renderedStyles[key].setValue();
      }
      layout();
    };

    const render = () => {
      for (const key in renderedStyles) {
        const current = renderedStyles[key].setValue();
        renderedStyles[key].current = current ? current : 0;
        const previous = utilities.math.lerp(
          renderedStyles[key].previous,
          renderedStyles[key].current,
          renderedStyles[key].ease
        );
        renderedStyles[key].previous = previous ? previous : 0;
      }
      layout();
      if (isVisible) {
        requestAnimationFrame(() => render());
      }
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        isVisible = entry.intersectionRatio > 0;
        imagesLoaded(el, () => {
          isLoaded = true;
          update();
        });
        if (isVisible && isLoaded) {
          render();
        }
      });
    });

    update();
    observer.observe(el);
    window.addEventListener("resize", () => update());
  };

  utilities.calcWindowSize();
  window.addEventListener("resize", utilities.calcWindowSize);
  window.addEventListener("scroll", utilities.getPageYScroll);
  imgEls.forEach((el) => setSmoothScroll(el));
};

export default parallaxImage;
