import React, { useState } from "react"
import { css } from "glamor"
import Link from "gatsby-link"

function HoverMenu(props) {
  const [showMenu, setShowMenu] = useState(false)

  const handleOnMouseEnter = () => {
    setShowMenu(true)
  }

  const handleOnMouseLeave = () => {
    setShowMenu(false)
  }

  const menuItems = css({
    position: 'absolute'
  })

  return (
    <div {...props.style} onMouseEnter={handleOnMouseEnter} onMouseLeave={handleOnMouseLeave}>
      <div>{props.meta.title}</div>
      <div {...menuItems}>
        {showMenu
          ? props.meta.items.map((item, key) => {
            return (
              <div key={key}>
                <Link  to={`${item.to}`}>
                  {item.name}
                </Link>
              </div>
            )
          })
          : null}
        </div>
      </div>
  )
}

export default HoverMenu
