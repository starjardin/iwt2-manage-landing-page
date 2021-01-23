import React from 'react'
import { Footer,Header } from "../components"

const links = [
  "Home",
  "Pricing",
  " Products",
  "About us",
  "Careers",
  "community",
  "privacy policy"
]

const icons = [
  "facebook",
  "Youtube",
  "twitter",
  "laskfasd",
  "instagram"
]

export default function FooterContainer({ color }) {
  return (
    <Footer>
      <Footer.Button>Updates in your inbox...</Footer.Button>
      <Footer.Button color={"red"}>Go</Footer.Button>
      <Footer.Navigation>
        <Footer.ListContainer>
          { links.map((item,index) => (
            <Footer.Items key={index}>
              <Footer.Anchor href={`/${item}`}>{ item }</Footer.Anchor>
            </Footer.Items>
          ))}
        </Footer.ListContainer>
        <Footer.ListContainer>
          { icons.map((item,index) => (
            <Footer.Items key={index}>
              <Footer.Icons href={`/${item}`}>{ item }</Footer.Icons>
            </Footer.Items>
          ))}
        </Footer.ListContainer>
      </Footer.Navigation>
      <Header.Logo src='../../images/logo.svg' />
    </Footer>
  )
}
