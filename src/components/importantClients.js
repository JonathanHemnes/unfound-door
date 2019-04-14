import React from "react"
import { css } from "glamor"
import PhotoLink from "./photoLink"
import photo from "../img/PhotographyHeader-Option2-TheUnfoundDoor.jpg"

const clients = [
  { src: photo, to: "https://googlecom" },
  { src: photo, to: "https://googlecom" },
  { src: photo, to: "https://googlecom" },
  { src: photo, to: "https://googlecom" },
  { src: photo, to: "https://googlecom" },
  { src: photo, to: "https://googlecom" },
]

const photoArray = css({
  display: `flex`,
  flexDirection: `row`,
  flexWrap: "wrap",
})

const center = css({
  textAlign: "center",
})

const ImportantClients = () => (
  <div>
    <h2 {...center}>The Company You'll Keep</h2>
    <div {...photoArray}>
      {clients.map((client, i) => {
        return <PhotoLink key={i} src={client.src} to={client.to} />
      })}
    </div>
  </div>
)

export default ImportantClients
