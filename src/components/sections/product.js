import React from "react"
import styled from "styled-components"

import { Section, Container } from "../global"

const Product = () => (
  <Section id="product">
    <StyledContainer>
      <Subtitle>Product</Subtitle>
      <SectionTitle>What you'd expect, and more</SectionTitle>
      <FeaturesGrid>
        <FeatureItem>
          <FeatureTitle>Notifications</FeatureTitle>
          <FeatureText>
            Visualize follower, subscription, and donation notifications.
          </FeatureText>
        </FeatureItem>
        <FeatureItem>
          <FeatureTitle>Audio Support</FeatureTitle>
          <FeatureText>
            Create overlays that react to your system audio.
          </FeatureText>
        </FeatureItem>
        <FeatureItem>
          <FeatureTitle>Camera Support</FeatureTitle>
          <FeatureText>
            Create overlays that use your camera feeds in new and creative ways.
          </FeatureText>
        </FeatureItem>
        <FeatureItem>
          <FeatureTitle>Quick layouts</FeatureTitle>
          <FeatureText>
            Easily create and manage different overlay layouts.
          </FeatureText>
        </FeatureItem>
        <FeatureItem>
          <FeatureTitle>Inside OBS</FeatureTitle>
          <FeatureText>
            Load your overlays from{" "}
            <a
              href="//obsproject.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              OBS
            </a>
            , or any broadcasting tool that supports web content.
          </FeatureText>
        </FeatureItem>
        <FeatureItem>
          <FeatureTitle>Standalone</FeatureTitle>
          <FeatureText>
            Run overlays right on your desktop - so both you and the viewers can
            see and interact with them.
          </FeatureText>
        </FeatureItem>
      </FeaturesGrid>
    </StyledContainer>
  </Section>
)

export default Product

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
