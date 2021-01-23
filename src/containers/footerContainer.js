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
  "youtube",
  "twitter",
  "pinterest",
  "instagram"
]

export default function FooterContainer() {
  return (
    <Footer>
      <Footer.Pane>
        <Footer.Button bg="hsl(0, 0%, 98%)" color="hsl(227, 12%, 61%)">Updates in your inbox...</Footer.Button>
        <Footer.Button color="white" bg="hsl(12, 88%, 59%)">Go</Footer.Button>
      </Footer.Pane>
      <Footer.Navigation>
        <Footer.ListContainer>
          { links.map((item,index) => (
            <Footer.Items key={index}>
              <Footer.Anchor href={`/${item}`}><span>{ item }</span></Footer.Anchor>
            </Footer.Items>
          ))}
        </Footer.ListContainer>
        <Footer.ListContainer>
          { icons.map((item,index) => (
            <Footer.Items key={index}>
              <Footer.Icons href={`/${item}`} className={`${item}`}><span>{ item }</span></Footer.Icons>
            </Footer.Items>
          ))}
        </Footer.ListContainer>
      </Footer.Navigation>
      <Footer.Logo>
        <Header.Logo src='../../images/logo-footer.svg' />
      </Footer.Logo>
    </Footer>
  )
}
