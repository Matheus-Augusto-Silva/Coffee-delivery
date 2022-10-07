import React from 'react'
import { AllCofeeData } from './AllCoffeeData'
import { HomePrincipalContent } from './HomePrincipalContent/Index'
import { HomeContainer } from './Styled'


export const Home = () => {
  return (
    <HomeContainer>
      <HomePrincipalContent/>
      <AllCofeeData/>
    </HomeContainer>
  )
}
