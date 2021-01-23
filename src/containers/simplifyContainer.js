import React from 'react'
import { Simplify, Header } from "../components"

export default function SimplifyContainer() {
  return (
    <Simplify>
      <Simplify.Title>
        Simplify how your team works today.
      </Simplify.Title>
      <Header.Button
        bg="hsl(0, 0%, 98%)"
        color="hsl(12, 88%, 59%)"
        fw="700"
      >
        Get started
      </Header.Button>
    </Simplify>
  )
}
