import React from 'react'
import { 
  Container, 
  Text,
  Title,
  Button,
  Navigation,
  Lists ,
  Items,
  Menu
 } from './styles/headerStyles'
export default function Header( {children, ...restProps} ) {
  return (
    <Container {...restProps}>
      {children}
    </Container>
  )
}

Header.Logo = function HeaderLogo({ children, ...restProps }) {
  return <Logo {...restProps}>{ children }</Logo>
}

Header.Text = function HeaderText({ children, ...restProps }) {
  return <Text {...restProps}>{ children }</Text>
}

Header.Button = function HeaderButton({ children, ...restProps }) {
  return <Button {...restProps}>{ children }</Button>
}

Header.Title = function HeaderTitle({ children, ...restProps }) {
  return <Title {...restProps}>{ children }</Title>
}

Header.Navigation = function HeaderNavigation({ children, ...restProps }) {
  return <Navigation {...restProps}>{ children }</Navigation>
}

Header.Lists = function HeaderLists({ children, ...restProps }) {
  return <Lists {...restProps}>{ children }</Lists>
}

Header.Items = function HeaderItems({ children, ...restProps }) {
  return <Items {...restProps}>{ children }</Items>
}

Header.Menu = function HeaderMenu({ children, ...restProps }) {
  return <Menu {...restProps}>{ children }</Menu>
}
