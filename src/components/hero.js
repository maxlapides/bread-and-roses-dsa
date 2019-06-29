import React from "react"
import classNames from "classnames"

import "./hero.scss"

const Hero = ({ title, color }) => (
  <div className={classNames("hero", `hero--${color}`)}>
    <h1>{title}</h1>
  </div>
)

export default Hero
