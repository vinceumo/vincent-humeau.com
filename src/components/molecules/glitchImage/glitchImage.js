import React from "react"
import "./_glitchImage.scss"

const GlitchImage = ({ url, name }) => {
  return (
    <div className="glitch">
      <img src={url} alt={name} />
      {[1, 2, 3, 4].map(n => (
        <img
          key={n}
          className="img-fluid"
          src={url}
          alt=""
          aria-hidden="true"
        />
      ))}
    </div>
  )
}

export default GlitchImage
