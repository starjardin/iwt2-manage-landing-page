import React from 'react'
import { 
  Navigation,
  ListContainer,
  Items,
  Anchor,
  Button,
  Container,
  Icons
 } from "./styles/footerStyles"
export default function Footer ( { children, ...restProps } ) {
  return (
    <Container { ...restProps }>
      { children }
    </Container>
  )
}

Footer.Navigation = function FooterNavigation({ children,...restProps }) {
  return <Navigation { ...restProps }>{ children }</Navigation>
}

Footer.ListContainer = function FooterListContainer({ children,...restProps }) {
  return <ListContainer { ...restProps }>{ children }</ListContainer>
}

Footer.Items = function FooterItems({ children,...restProps }) {
  return <Items { ...restProps }>{ children }</Items>
}

Footer.Button = function FooterButton({ color="white",children,...restProps }) {
  return <Button { ...restProps }>{ children }</Button>
}

Footer.Anchor = function FooterAnchor({ children,...restProps }) {
  return <Anchor { ...restProps }>{ children }</Anchor>
}

Footer.Icons = function FooterIcons({ children,...restProps }) {
  return <Icons { ...restProps }>{ children }</Icons>
}
