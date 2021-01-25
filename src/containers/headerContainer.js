import React, { useState } from 'react'
import { Header } from '../components'

export default function HeaderContainer() {
  const [ isMenuOpen,setIsMenuOpen ] = useState(false)
  console.log(isMenuOpen);
  return (
    <Header>
      <Header.Frame>
        <Header.Logo src="../../images/logo.svg" />
        <Header.Menu
          onClick={()=> setIsMenuOpen(!isMenuOpen)}
        >
          Menu
        </Header.Menu>
      </Header.Frame>
        {
        isMenuOpen &&
        <Header.Navigation>
        </Header.Navigation>
        }
      <Header.Title>
        Bring everyone totgether to build better products.
      </Header.Title>
      <Header.Text>
        Manage makes it simple for software teams to plan day-to-day tasks while keeping the larger team goals in view.
      </Header.Text>
      <Header.Button color="#fff" bg="hsl(12, 88%, 59%)" fw="700">
        Get started
      </Header.Button>
    </Header>
  )
}
