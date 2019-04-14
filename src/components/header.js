import React from "react"
import { css } from "glamor"
import HoverMenu from './HoverMenu'

const headerStyle = css({
  width: `100vw`,
  height: `30px`,
  position: `fixed`,
  zIndex: 400,
})

const headerLinks = css({
  margin: 0,
  paddingTop: `10px`,
  display: `flex`,
  flexDirection: `row`,
  listStyle: `none`,
  justifyContent: `flex-end`,
  alignItems: `center`,
  textTransform: "uppercase",
})

const menuItems = {
  about: {
    title: 'About',
    items: [
      {
        to: '/our-story/',
        name: 'Our Story'
      }, {
        to: '/about-ely/',
        name: 'About Ely'
      }, {
        to: '/faq/',
        name: 'FAQ'
      }
    ]
  },
  services: {
    title: 'Services',
    items: [
      {
        to: '/photography/',
        name: 'Photography'
      },
      {
        to: '/videography/',
        name: 'Videography'
      }
    ]
  },
    contact: {
        title: 'Contact',
        items: [
            {
                to: '/contact/',
                name: 'Contact Us'
            }
        ]
    }
}

const Header = () => (
  <div {...headerStyle}>
    <HoverMenu {...headerLinks} meta={menuItems.about} />
    <HoverMenu {...headerLinks}meta={menuItems.services} />
    <HoverMenu {...headerLinks}meta={menuItems.contact} />
  </div>
)

export default Header
