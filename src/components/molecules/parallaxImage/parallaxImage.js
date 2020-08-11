import React, { useRef, useEffect } from "react"
import { map, lerp, getPageYScroll, calcWindowSize } from "../../../utils"
import imagesLoaded from "imagesloaded"
import "./_parallaxImg.scss"

const ParallaxImage = ({ overflow, children }) => {
  let parallaxImgRef = useRef(null)
  let imgRef = useRef(null)

  useEffect(() => {
    const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)")
      .matches
    if (reducedMotion) {
      return
    }
    let windowSize
    let docScroll
    let isVisible = false
    let isLoaded = false
    let properties = {
      top: null,
      height: null,
    }

    const renderedStyles = {
      innerTranslationY: {
        previous: 0,
        current: 0,
        ease: 0.1,
        maxValue: parseInt(
          getComputedStyle(imgRef.current).getPropertyValue("--ImgOverflow"),
          10
        ),
        // maxValue: overflow,
        setValue: () => {
          const maxValue = overflow
          const minValue = -1 * maxValue
          return Math.max(
            Math.min(
              map(
                properties.top - docScroll,
                windowSize.height,
                -1 * properties.height,
                minValue,
                maxValue
              ),
              maxValue
            ),
            minValue
          )
        },
      },
    }

    const getSize = () => {
      const rect = parallaxImgRef.current.getBoundingClientRect()
      properties = {
        height: rect.height,
        top: docScroll + rect.top,
      }
    }

    const layout = () => {
      imgRef.current.style.transform = `translate3d(0,${renderedStyles.innerTranslationY.previous}px,0)`
    }

    const update = () => {
      getSize()
      for (const key in renderedStyles) {
        renderedStyles[key].current = renderedStyles[
          key
        ].previous = renderedStyles[key].setValue()
      }
      layout()
    }

    const render = () => {
      for (const key in renderedStyles) {
        const current = renderedStyles[key].setValue()
        renderedStyles[key].current = current ? current : 0
        const previous = lerp(
          renderedStyles[key].previous,
          renderedStyles[key].current,
          renderedStyles[key].ease
        )
        renderedStyles[key].previous = previous ? previous : 0
      }
      layout()
      if (isVisible) {
        requestAnimationFrame(() => render())
      }
    }

    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        isVisible = entry.intersectionRatio > 0
        imagesLoaded(parallaxImgRef.current, () => {
          isLoaded = true
          update()
        })
        if (isVisible && isLoaded) {
          render()
        }
      })
    })

    windowSize = calcWindowSize()
    window.addEventListener("resize", () => {
      windowSize = calcWindowSize
      update()
    })
    window.addEventListener("scroll", () => {
      docScroll = getPageYScroll
    })
    update()
    observer.observe(parallaxImgRef.current)
  }, [overflow])

  return (
    <div className="parallax-img" ref={parallaxImgRef}>
      <div className="img" ref={imgRef}>
        {children}
      </div>
    </div>
  )
}

export default ParallaxImage
