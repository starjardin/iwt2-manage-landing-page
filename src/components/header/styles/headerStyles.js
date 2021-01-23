import styled from 'styled-components'

export const Container = styled.div`
  padding : 1rem;
`
export const Text = styled.p``
export const Title = styled.h2``
export const Button = styled.button`
  color : ${({ color }) => color};
  background-color : ${({ bg }) => bg};
  padding: 1rem 1.8rem;
  border-radius : 26px;
  border : none;
  font-weight : ${({ fw }) => fw};
  z-index : 2;
`
export const Navigation = styled.nav``
export const Lists = styled.ul``
export const Items = styled.li``
export const Logo = styled.img``
export const Menu = styled.span``