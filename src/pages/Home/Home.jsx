import React from 'react'
import Header from './Components/Header'
import TipsSection from './Components/TipsSection'
import ProductTabsSection from './Components/ProductTabsSection/ProductTabsSection.jsx'

const Home = () => {
  return (
    <>
      <Header />
      <ProductTabsSection />
      <TipsSection />
    </>
  )
}

export default Home
