// Map number x from range [a, b] to [c, d]
const map = (x, a, b, c, d) => ((x - a) * (d - c)) / (b - a) + c

const lerp = (a, b, n) => (1 - n) * a + n * b

const calcWinSize = () => {
  return { width: window.innerWidth, height: window.innerHeight }
}

const getMousePos = e => {
  let posx = 0
  let posy = 0
  if (!e) e = window.event
  if (e.pageX || e.pageY) {
    console.log(e.pageY)
    posx = e.pageX
    posy = e.pageY
  } else if (e.clientX || e.clientY) {
    posx =
      e.clientX +
      document.querySelector("body").scrollLeft +
      document.documentElement.scrollLeft
    posy =
      e.clientY +
      document.querySelector("body").scrollTop +
      document.documentElement.scrollTop
  }

  return { x: posx, y: posy }
}

const getPageYScroll = () =>
  window.pageYOffset || document.documentElement.scrollTop

export { map, lerp, calcWinSize, getMousePos, getPageYScroll }
