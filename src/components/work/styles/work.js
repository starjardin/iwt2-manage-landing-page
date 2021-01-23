import styled from 'styled-components'

export const Container = styled.div`
  text-align : center;
  background-color : hsl(0, 0%, 100%);
  padding : 2rem 0;
`
export const Title = styled.h3`
  font-size : 34px;
  line-height : 63px;
  font-weight : 700;
  color : hsl(228, 39%, 23%);
`
export const Text = styled.p`
  background-color : hsl(0, 0%, 98%);
  padding : 5rem 2rem 3rem 2rem;
  position : relative;
`
export const Profile = styled.img`
  position : absolute;
  top : -50%;
  transform : translate(-50%);
  left : 50%;
`