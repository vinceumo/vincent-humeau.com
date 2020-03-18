import React from "react"

const About = ({ copy }) => copy.map((paragraph, i) => (<p key={i} >{paragraph}</p>))

export default About
