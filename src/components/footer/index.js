import React from 'react'
import { 
  Navigation,
  ListContainer,
  Items,
  Anchor,
  Button,
  Container,
  Icons,
  Pane,
  Logo
 } from "./styles/footerStyles"
export default function Footer({
  color = "white",
  children,
  bg="hsl(12, 88%, 59%)",
  ...restProps
}) {
  return (
    <Container { ...restProps }>
      { children }
    </Container>
  )
}

Footer.Navigation = function FooterNavigation({ children,...restProps }) {
  return <Navigation { ...restProps }>{ children }</Navigation>
}

Footer.Logo = function FooterLogo({ children,...restProps }) {
  return <Logo { ...restProps }>{ children }</Logo>
}

Footer.Pane = function FooterPane({ children,...restProps }) {
  return <Pane { ...restProps }>{ children }</Pane>
}

Footer.ListContainer = function FooterListContainer({ children,...restProps }) {
  return <ListContainer { ...restProps }>{ children }</ListContainer>
}

Footer.Items = function FooterItems({ children,...restProps }) {
  return <Items { ...restProps }>{ children }</Items>
}

Footer.Button = function FooterButton({ children,...restProps }) {
  return <Button { ...restProps }>{ children }</Button>
}

Footer.Anchor = function FooterAnchor({ children,...restProps }) {
  return <Anchor { ...restProps }>{ children }</Anchor>
}

Footer.Icons = function FooterIcons({ children,...restProps }) {
  return <Icons { ...restProps }>{ children }</Icons>
}
