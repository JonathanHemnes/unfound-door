import React from "react"
import styleStandards from "../styleStandards"
import { css } from "glamor"
import { useStaticQuery, graphql } from "gatsby"

export default () => {
  const data = useStaticQuery(graphql`
    query getHeadshot {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  const title = css({
    position: "absolute",
    color: styleStandards.colors.yellow,
    fontSize: "3rem",
    zIndex: 99,
    marginTop: "10px",
    left: '40%'
  })

  const headshot = css({
    width: '60%'
  })

  const biography = css({
    paddingTop: '100px'
  })

  const bioContainer = css({
    display: 'flex',
    margin: '0 20% 0 20%'
  })

  return (
    <div>
      <h2 {...title}>About Ely</h2>
      <div {...bioContainer}>
        <div {...headshot}> {data.site.siteMetadata.title}</div>
        <div {...biography}>
          Those two men, the assassins. I believe I was their prime target, but
          that somehow they were steered away from me to my brother-in-law.
          Because of this 'intervention' I am alive. And yet, I think that this
          person was playing a much deeper game. He made that phone call because
          he wanted a shootout not a silent assassination.
        </div>
      </div>
    </div>
  )
}
