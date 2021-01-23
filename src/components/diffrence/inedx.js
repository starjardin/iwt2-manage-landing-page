import React from 'react'

export default function Differnce( { children, ...restProps}) {
  return (
    <Container {...restProps}>
      { children }
    </Container>
  )
}

Differnce.Title = function DiffernceTitle({ children,...restProps }) {
  return <Title {...restProps}>{ children } </Title>
}

Differnce.Text = function DiffernceText({ children,...restProps }) {
  return <Text {...restProps}>{ children } </Text>
}

Differnce.Section = function DiffernceSection({ children,...restProps }) {
  return <Section {...restProps}>{ children } </Section>
}

Differnce.SectionTitle = function DiffernceSectionTitle({ children,...restProps }) {
  return <SectionTitle {...restProps}>{ children } </SectionTitle>
}