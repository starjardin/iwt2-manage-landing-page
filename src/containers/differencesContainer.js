import React from 'react'
import { Difference } from "../components"
import differenceData from '../data//differences'

export default function DifferencesContainer() {
  return (
    <Difference>
      <Difference.Title>
        Hello word
      </Difference.Title>
      {
        differenceData.map(item => (
          <Difference.Section key={item.id}>
            <Difference.SectionTitle>
              {item.title}
            </Difference.SectionTitle>
            <Difference.Text>{item.text}</Difference.Text>
          </Difference.Section>
        ))
      }
    </Difference>
  )
}
