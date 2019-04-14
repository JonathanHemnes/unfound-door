import React from "react"
import { css } from "glamor"
import styleStandards from "../styleStandards"

function CreativityEfficiency() {
  const title = css({
    position: 'absolute',
    color: styleStandards.colors.yellow,
    fontSize: "3rem",
    marginLeft: "-10%",
    zIndex: 99,
    marginTop: '10px'
  })

  const colorContainer = css({
    height: "100%",
    width: "100%",
    display: "flex",
    justifyContent: "center",
    marginBottom: "20px"
  })

  const colorBox = css({
    backgroundColor: styleStandards.colors.blue,
    width: "60%",
    padding: "90px 20px 50px 20px",
  })

  return (
    <div>
      <div {...colorContainer}>
      <h2 {...title}>Creativity Meets Efficiency</h2>
        <div {...colorBox}>
          Spicy jalapeno bacon ipsum dolor amet spare ribs commodo shankle
          meatball rump capicola. Exercitation dolore deserunt porchetta flank.
          Hamburger doner brisket short loin commodo sirloin ea venison irure.
          Ea sausage sed dolor picanha, landjaeger frankfurter ut voluptate est
          aute sirloin qui elit labore. Sint velit ham hock commodo jerky minim
          laborum aliqua ea. Quis pig officia ham hock salami kielbasa et tongue
          capicola flank ex.
        </div>
      </div>
    </div>
  )
}

export default CreativityEfficiency
