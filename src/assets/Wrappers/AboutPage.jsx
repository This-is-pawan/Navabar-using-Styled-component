// import React from 'react'
import styled from 'styled-components'
const Pragarph = styled.p`
font-family:Georgia, 'Times New Roman', Times, serif;
letter-spacing:1px;
padding:10px;
text-align:justify;
`
;
const Heading = styled.h3`

letter-spacing:1px;
padding:10px;
text-align:justify;
`
;

const AboutPage = () => {
  return (
    <>
    <Heading>
    <h3>AboutPage</h3>

    </Heading>
    <Pragarph>
    <p>Introducing MixMasters, the ultimate parrty sidekick app that  fetches cocktails from the hilarious cocktails DB API .With a flick of your finger,you will unlock a treasure trove of enchanting drink recipes that will make your taste buds dance and your friends jump with joy.Get ready to shake yp your mixology game ,one fantastical mocktail at  a time , and let the laughter and giggles flow!</p>
    </Pragarph>
    </>

  )
}

export default AboutPage