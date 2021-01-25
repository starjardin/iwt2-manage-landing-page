import styled from 'styled-components'

export const Container = styled.div`
  padding : 1rem;
  text-align : center;
`
export const Text = styled.p`
  color : hsl(227, 12%, 61%);
  font-size : 16px;
`
export const Title = styled.h2`
  color : hsl(228, 39%, 23%);
  font-weight : bolder;
  font-size : 54px;
  line-height : 72px;
`
export const Button = styled.button`
  color : ${({ color }) => color};
  background-color : ${({ bg }) => bg};
  padding: 1rem 1.8rem;
  border-radius : 26px;
  border : none;
  font-weight : ${({ fw }) => fw};
  z-index : 2;
  cursor : pointer;
`
export const Navigation = styled.nav``
export const Lists = styled.ul``
export const Items = styled.li``
export const Logo = styled.img``
export const Menu = styled.span`
  cursor: pointer;
`
export const Frame = styled.div`
  display: flex;
  justify-content : space-between;
  align-items : center;
  background-image : 
    url('../../../../images/illustration-intro.svg'),
    url('../../../../images/bg-tablet-pattern.svg');
  padding-bottom : 28rem;
  background-position-y : 50% 50%;
  background-repeat : no-repeat;
  background-size : contain;
`