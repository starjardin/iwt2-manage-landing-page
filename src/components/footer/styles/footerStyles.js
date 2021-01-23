import styled from 'styled-components'

export const Container = styled.div`
  background-color: hsl(228, 39%, 23%);
  padding: 4rem 2rem;
  font-style: 16px;
`
export const Navigation = styled.nav`
  padding: 0;
  margin: 0;
`
export const ListContainer = styled.ul`
  padding: 0;
  margin: 0;
  &:first-child {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
  }
  
  &:nth-child(2) {
    display: flex;
    flex-direction : row;
    gap : 3rem;
    justify-content : space-between;
    padding : 3rem 0;
  }
`
export const Items = styled.li`
  list-style : none;
`
export const Anchor = styled.a`
  display : inline-block;
  text-decoration : none;
  color: hsl(0, 0%, 98%);
  font-style: 16px;
  font-weight: 400;
  padding: 8px;
  text-transform :capitalize;
  border : 3px solid hsl(228, 39%, 23%);
  
  &:hover {
    background-color : hsl(227, 12%, 61%);
    border-radius : 6px;
    transition : .3s;
  }
`
export const Button = styled.button`
  color : ${({ color }) => color};
  background-color : ${({ bg }) => bg};
  padding : 1rem 2rem;
  border-radius : 30px;
  border: none;
  border : 4px solid hsl(228, 39%, 23%);
  cursor: pointer;
  &:hover {
    border : 4px solid ${({ bg }) => bg};
  }
`

export const Icons = styled.a`
  display : inline-block;
  text-decoration : none;
  span {
    visibility: hidden;
  }
  background-repeat : no-repeat;
  width :2rem;
  height: 2rem;
  background-size : contain;
  &.facebook {
    background-image : url('../../../../images/icon-facebook.svg');
  }
  &.youtube {
    background-image : url('../../../../images/icon-youtube.svg');
  }
  &.twitter {
    background-image : url('../../../../images/icon-twitter.svg');
  }
  &.pinterest {
    background-image : url('../../../../images/icon-pinterest.svg');
  }
  &.instagram {
    background-image : url('../../../../images/icon-instagram.svg');
  }
`
export const Pane = styled.div`
  display: flex;
  gap : 1rem;
  padding: 0 0 3rem 0;
`

export const Logo = styled.div`
  text-align : center;
`