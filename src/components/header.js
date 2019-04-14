import React from "react"
import { css } from "glamor"
import HoverMenu from "./HoverMenu"

const headerStyle = css({
  width: `100vw`,
  // height: `30px`,
  position: `fixed`,
  zIndex: 400,
})

const headerLinks = css({
  margin: 0,
  paddingRight: `50px`,
  paddingTop: `10px`,
  display: `flex`,
  flexDirection: `row`,
  listStyle: `none`,
  justifyContent: `flex-end`,
  alignItems: `center`,
  textTransform: "uppercase",
})

const headerLink = css({
  paddingRight: '20px',
})

const menuItems = {
  about: {
    title: "About",
    items: [
      {
        to: "/our-story/",
        name: "Our Story",
      },
      {
        to: "/about-ely/",
        name: "About Ely",
      },
      {
        to: "/faq/",
        name: "FAQ",
      },
    ],
  },
  services: {
    title: "Services",
    items: [
      {
        to: "/photography/",
        name: "Photography",
      },
      {
        to: "/videography/",
        name: "Videography",
      },
    ],
  },
  contact: {
    title: "Contact",
    items: [
      {
        to: "/contact/",
        name: "Contact Us",
      },
    ],
  },
}

const Header = () => (
  <div {...headerStyle}>
    <div {...headerLinks}>
      <HoverMenu style={headerLink} meta={menuItems.about} />
      <HoverMenu style={headerLink} meta={menuItems.services} />
      <HoverMenu style={headerLink} meta={menuItems.contact} />
    </div>
  </div>
)

export default Header
