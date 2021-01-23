import React from 'react'
import { Header } from '../components'

export default function HeaderContainer() {
  return (
    <Header>
      <Header.Title>
        Bring everyone totgether to build better products.
      </Header.Title>
      <Header.Menu>
        Menu
      </Header.Menu>
      <Header.Text>
        Manage makes it simple for software teams to plan day-to-day tasks while keeping the larger team goals in view.
      </Header.Text>
      <Header.Button>
        Get started
      </Header.Button>
    </Header>
  )
}
