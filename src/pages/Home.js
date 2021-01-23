import React from 'react'

import HeaderContainer from '../containers/headerContainer'
import DifferencesContainer from '../containers/differencesContainer'
import WorkContainer from '../containers/workContainer'
import SimplifyContainer from "../containers/simplifyContainer"
import FooterContainer from '../containers/footerContainer'

export default function Home() {
  return (
    <>
      <HeaderContainer />  
      <DifferencesContainer />
      <WorkContainer />
      <SimplifyContainer />
      <FooterContainer />
    </>
  )
}