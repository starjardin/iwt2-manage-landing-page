import React from 'react'
import { Difference, Header } from "../components"
import differenceData from '../data//differences'

export default function DifferencesContainer() {
  return (
    <Difference>
      <Difference.TextAlign textAl="center" display="block">
        <Difference.Title>
          What's diffrent about Manager?
        </Difference.Title>
        <Difference.Text>
          Manage provides all the functionality your team needs, without the complexity. Our software is tailor-made for modern digital product teams.
        </Difference.Text>
      </Difference.TextAlign>
      {
        differenceData.map((item, index) => (
          <Difference.Section key={item.id}>
            <Difference.TextAlign textAl="start" display="flex">
              <Header.Button color="#fff" bg="hsl(12, 88%, 59%)">
                0{ index + 1 }
              </Header.Button>
              <Difference.SectionTitle>
                {item.title}
              </Difference.SectionTitle>
            </Difference.TextAlign>
            <Difference.Text>{item.text}</Difference.Text>
          </Difference.Section>
        ))
      }
    </Difference>
  )
}
