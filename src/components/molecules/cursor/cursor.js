import React, { useRef, useEffect } from "react"
import CursorEvent from "./cursorEvent"
import "./_cursor.scss"

const Cursor = () => {
  let cursorRef = useRef(null)

  useEffect(() => {
    const cursorEl = new CursorEvent(cursorRef.current);

    [...document.querySelectorAll('a')].forEach(el => {
        el.addEventListener('mouseenter', () => cursorEl.emit('enter'));
        el.addEventListener('mouseleave', () => cursorEl.emit('leave'));
    });
  }, [])

  return (
    <div className="cursor-container ">
      <svg
        className="cursor"
        width={150}
        height={150}
        viewBox="0 0 220 220"
        ref={cursorRef}
      >
        <defs>
          <filter
            id="filter-1"
            x="-50%"
            y="-50%"
            width="200%"
            height="200%"
            filterUnits="objectBoundingBox"
          >
            <feTurbulence
              type="fractalNoise"
              baseFrequency={0}
              numOctaves={1}
              result="warp"
            />
            <feOffset dx={-30} result="warpOffset" />
            <feDisplacementMap
              xChannelSelector="R"
              yChannelSelector="G"
              scale={30}
              in="SourceGraphic"
              in2="warpOffset"
            />
          </filter>
        </defs>
        <circle className="cursor__inner" cx={110} cy={110} r={60} />
      </svg>
    </div>
  )
}

export default Cursor
