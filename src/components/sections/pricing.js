import React from "react"
import styled from "styled-components"
import Currency from "react-currency-formatter"

import { Section, Container } from "../global"
import ShapeLaunch from "../animation/shape-launch"

const Pricing = () => {
  return (
    <Section id="pricing">
      <StyledContainer>
        <Subtitle>Pricing</Subtitle>
        <Flex>
          <HeaderTextGroup>
            <h1>
              Free during early access.
              <br />
              <Currency quantity={5} currency="USD" /> at launch.
            </h1>
            <h2>Because sometimes things that are expensive, are worse.</h2>
          </HeaderTextGroup>
          <Text>
            <ShapeLaunch />
            <br />
          </Text>
        </Flex>
      </StyledContainer>
    </Section>
  )
}

export default Pricing

const StyledContainer = styled(Container)`
  /* transform: skewY(5deg);
  border-radius: 4px;
  background-image: linear-gradient(to top, #fefefe 0%, #fbfbfb 100%); */
`

const Subtitle = styled.h5`
  text-align: center;
  font-size: 16px;
  color: ${props => props.theme.color.accent};
  letter-spacing: 0px;
  margin-bottom: 16px;
`

const HeaderTextGroup = styled.div`
  margin: 0;

  h1 {
    margin: 0 0 24px;
    color: ${props => props.theme.color.primary};
  }

  h2 {
    margin-bottom: 24px;
    ${props => props.theme.font_size.regular}
  }

  p {
    margin-bottom: 48px;
  }
`

const Flex = styled.div`
  display: grid;
  justify-content: space-between;
  align-content: center;
  grid-template-columns: 1fr 1fr;
  @media (max-width: ${props => props.theme.screen.md}) {
    grid-template-columns: 1fr;
    grid-gap: 64px;
  }
`

const Text = styled.div`
  justify-self: end;
  align-self: center;
  @media (max-width: ${props => props.theme.screen.md}) {
    justify-self: center;
  }
`
