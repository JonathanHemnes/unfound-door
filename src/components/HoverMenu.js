import React, { useState } from 'react'
import Link from "gatsby-link"

function HoverMenu(props) {
    const [showMenu, setShowMenu] = useState(false)

    const handleOnMouseEnter = () => {
        setShowMenu(true)
    }

    const handleOnMouseLeave = () => {
        setShowMenu(false)
    }

    return (
        <div onMouseEnter={handleOnMouseEnter} onMouseLeave={handleOnMouseLeave}>
            <p>{props.meta.title}</p>
            {showMenu ? props.meta.items.map((item, key) => {
                return (<Link key={key} to={`${item.to}`}>{item.name}</Link>)
            }) : (null)}
        </div>
    )
}

export default HoverMenu