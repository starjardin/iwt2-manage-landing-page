import React from 'react'
import {
  Container,
  Title,
  Text,
  Section,
  SectionTitle,
  Masthead
} from './styles/differenceStyles'

export default function Difference( { children, ...restProps}) {
  return (
    <Container {...restProps}>
      { children }
    </Container>
  )
}

Difference.Title = function DifferenceTitle({ children,...restProps }) {
  return <Title {...restProps}>{ children } </Title>
}

Difference.Text = function DifferenceText({ children,...restProps }) {
  return <Text {...restProps}>{ children } </Text>
}

Difference.Section = function DifferenceSection({ children,...restProps }) {
  return <Section {...restProps}>{ children } </Section>
}

Difference.Masthead = function DifferenceMasthead({ children,...restProps }) {
  return <Masthead {...restProps}>{ children } </Masthead>
}

Difference.SectionTitle = function DifferenceSectionTitle({ children,...restProps }) {
  return <SectionTitle {...restProps}>{ children } </SectionTitle>
}