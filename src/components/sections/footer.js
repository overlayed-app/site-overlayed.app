import React from "react"
import styled from "styled-components"

import { Container } from "../global"

const Footer = () => (
  <FooterWrapper id="footer">
    <FooterColumnContainer>
      <FooterColumn>
        <span>Resources</span>
        <ul>
          <li>
            <a href="//dev.to/bengreenier/introducing-overlayed-streamer-overlays-powered-by-react-17ja">Blog</a>
          </li>
        </ul>
      </FooterColumn>
      <FooterColumn>
        <span>Company</span>
        <ul>
          <li>
            <a href="//github.com/orgs/overlayed-app/people">About Us</a>
          </li>
        </ul>
      </FooterColumn>
      <FooterColumn>
        <span>Social</span>
        <ul>
          <li>
            <a href="//github.com/orgs/overlayed-app">GitHub</a>
          </li>
          <li>
            <a href="//twitch.tv/ben_greenier">Twitch</a>
          </li>
        </ul>
      </FooterColumn>
    </FooterColumnContainer>
  </FooterWrapper>
)

const FooterWrapper = styled.footer`
  background-color: white;
  margin: 80px 0 0;
  padding: 0 0 80px;
`

const FooterColumnContainer = styled(Container)`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-column-gap: 32px;
  justify-content: center;
  @media (max-width: ${props => props.theme.screen.sm}) {
    grid-template-columns: 1fr 1fr;
    grid-gap: 32px;
  }
`
const FooterColumn = styled.div`
  text-align: center;
  span {
    font-size: 16px;
    font-family: ${props => props.theme.font.bold};
    color: ${props => props.theme.color.primary};
  }
  ul {
    list-style: none;
    margin: 16px 0;
    padding: 0;
    color: ${props => props.theme.color.black.regular};
    li {
      margin-bottom: 12px;
      font-family: ${props => props.theme.font.normal};
      font-size: 15px;
    }
  }
`

export default Footer
