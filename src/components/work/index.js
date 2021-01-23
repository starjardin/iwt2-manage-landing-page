import React from 'react'

import {
  Container,
  Title,
  Text,
  Profile,
} from "./styles/work"

export default function Work({ children,...restProps }) {
  return <Container {...restProps}> 
    {children}
  </Container>
}

Work.Title = function WorkTitle({ children,...restProps }) {
  return <Title { ...restProps }>{ children }</Title>
}

Work.Text = function WorkText({ children,...restProps }) {
  return <Text { ...restProps }>{ children }</Text>
}

Work.Profile = function WorkProfile({ children,...restProps }) {
  return <Profile { ...restProps }>{ children }</Profile>
}