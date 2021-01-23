import styled from 'styled-components'


export const Container = styled.div`
  background-color : hsl(0, 0%, 98%);
`
export const Title = styled.h3`
  color : hsl(228, 39%, 23%);
  font-size: 37px;
  font-weight: 700;
  line-height: 63px;
`

export const TextAlign = styled.div`
  text-align : ${({ textAl }) => textAl};
  display : ${({display}) => display};
`
export const Text = styled.p`
  margin-bottom : 3rem;
  font-size : 16px;
  font-weight : 500;
`

export const Section = styled.section``

export const SectionTitle = styled.h4`
  font-size : 23px;
  color : hsl(228, 39%, 23%);
  background-color : hsl(13, 100%, 96%);
  font-weight: 700;
  margin: 0;
  padding-left : 3rem;
  transform : translateX(-20px);
  width : 100%;
`
export const Masthead = styled.div``