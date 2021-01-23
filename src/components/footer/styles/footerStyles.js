import styled from 'styled-components'

export const Container = styled.div`
  background-color: hsl(228, 39%, 23%);
  padding: 4rem 2rem;
`
export const Navigation = styled.nav`
  padding: 0;
  margin: 0;
`
export const ListContainer = styled.ul`
  padding: 0;
  margin: 0;
`
export const Items = styled.li`
  list-style : none;
`
export const Anchor = styled.a`
  display : inline-block;
  text-decoration : none;
`
export const Button = styled.button`
  color : ${({color}) => color}
`

export const Icons = styled.a`
  display : inline-block;
  text-decoration : none;
`