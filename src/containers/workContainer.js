import React from 'react'
import { Work, Header } from "../components"

export default function WorkContainer() {
  return (
    <Work>
      <Work.Title> What they've said</Work.Title>
      <Work.Text>
        “We have been able to cancel so many other subscriptions since using Manage. There is no more cross-channel confusion and everyone is much more focused.”
      </Work.Text>
      <Header.Button>Get Started</Header.Button>
    </Work>
  )
}
