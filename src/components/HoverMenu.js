import React, {useState} from 'react'

function HoverMenu(props) {
    const [showMenu, setShowMenu] = useState(false)
    return (
        <div>
            <p>props.title || 'Hello Jonathan'</p>
        </div>
    )
}

export default HoverMenu