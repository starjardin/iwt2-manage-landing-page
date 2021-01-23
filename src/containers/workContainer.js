import React from 'react'
import { Work, Header } from "../components"

export default function WorkContainer() {
  return (
    <Work>
      <Work.Title> What they've said</Work.Title>
      <Work.Text>
        “We have been able to cancel so many other subscriptions since using Manage. There is no more cross-channel confusion and everyone is much more focused.”
        <Work.Profile src='../../images/avatar-ali.png' />
      </Work.Text>
      <Header.Button color="#fff" bg="hsl(12, 88%, 59%)">Get Started</Header.Button>
    </Work>
  )
}
