import React, { useState } from "react"
import { css } from "glamor"
import Link from "gatsby-link"
import styleStandards from "../styleStandards"

function HoverMenu(props) {
  const [showMenu, setShowMenu] = useState(false)

  const handleOnMouseEnter = () => {
    setShowMenu(true)
  }

  const handleOnMouseLeave = () => {
    setShowMenu(false)
  }

  const title = css({
    color: styleStandards.colors.lightGrey,
    ':hover': {
      color: styleStandards.colors.blue
    }
  })

  const menuItems = css({
    position: 'absolute',
    backgroundColor: styleStandards.colors.yellow,
    borderRadius: '10px'
  })

  const menuItem = css({
    padding: '5px',
    ':hover': {
      backgroundColor: styleStandards.colors.blue
    }
  })

  return (
    <div {...props.style} onMouseEnter={handleOnMouseEnter} onMouseLeave={handleOnMouseLeave}>
      <div {...title}>{props.meta.title}</div>
      <div {...menuItems}>
        {showMenu
          ? props.meta.items.map((item, key) => {
            return (
              <div key={key} {...menuItem}>
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
