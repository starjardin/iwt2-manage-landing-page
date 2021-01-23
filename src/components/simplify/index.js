import React from 'react'
import { Title, Container } from './styles/simplify'

export default function Simplify ( {children, ...restProps} ) {
  return (
    <Container { ...restProps }>
      { children }
    </Container>
  )
}

Simplify.Title = function SimplifyTitle({ children, ...restProps }) {
  return <Title { ...restProps }>{ children }</Title>
}
