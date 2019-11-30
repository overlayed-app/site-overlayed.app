import React from "react"
import styled from "styled-components"

import { Section, Container } from "../global"
import ShapeDesktop from "../animation/shape-desktop"
import ShapePortfolio from "../animation/shape-portfolio"
import ShapeEditing from "../animation/shape-editing"
import ShapeWorking from "../animation/shape-working"

const Features = () => (
  <Section id="features">
    <StyledContainer>
      <Subtitle>Features</Subtitle>
      <SectionTitle>See what sets us apart</SectionTitle>
      <FeaturesGrid>
        <FeatureItem>
          <ShapeDesktop />
          <FeatureTitle>Desktop support</FeatureTitle>
          <FeatureText>
            See your overlays directly on (and above) your desktop. Pin them
            above other windows, or let them float around.
          </FeatureText>
        </FeatureItem>
        <FeatureItem>
          <ShapePortfolio />
          <FeatureTitle>Built-in VFX</FeatureTitle>
          <FeatureText>
            Use any of our built-in WebGL Visual Effects (VFX) to modify your
            overlays. Heck, you can even let chat control 'em.
          </FeatureText>
        </FeatureItem>
        <FeatureItem>
          <ShapeEditing />
          <FeatureTitle>Run-anywhere</FeatureTitle>
          <FeatureText>
            Between your favorite browser, your stream encoder, and our desktop
            app, you can run overlays just about anywhere.
          </FeatureText>
        </FeatureItem>
        <FeatureItem>
          <ShapeWorking />
          <FeatureTitle>Simple development</FeatureTitle>
          <FeatureText>
            Each overlay is a React component. If you can write software, you
            can write overlays. The customization options are endless.
          </FeatureText>
        </FeatureItem>
      </FeaturesGrid>
    </StyledContainer>
  </Section>
)

export default Features

const StyledContainer = styled(Container)`
  /* transform: skewY(5deg);
  border-radius: 4px;
  background-image: linear-gradient(to top, #fefefe 0%, #fbfbfb 100%); */
`

const SectionTitle = styled.h3`
  color: ${props => props.theme.color.primary};
  display: flex;
  justify-content: center;
  margin: 0 auto 40px;
  text-align: center;
`

const Subtitle = styled.h5`
  font-size: 16px;
  color: ${props => props.theme.color.accent};
  letter-spacing: 0px;
  margin-bottom: 12px;
  text-align: center;
`

const FeaturesGrid = styled.div`
  max-width: 670px;
  display: grid;
  grid-template-columns: 1fr 1fr;
  margin: 0px auto;
  grid-column-gap: 40px;
  grid-row-gap: 35px;
  @media (max-width: ${props => props.theme.screen.sm}) {
    grid-template-columns: 1fr;
    padding: 0 64px;
  }
`

const FeatureItem = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`

const FeatureTitle = styled.h4`
  color: ${props => props.theme.color.primary};
  letter-spacing: 0px;
  line-height: 30px;
  margin-bottom: 10px;
`

const FeatureText = styled.p`
  text-align: center;
`
