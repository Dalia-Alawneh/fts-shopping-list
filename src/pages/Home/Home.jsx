import React from 'react'
import Header from './Components/Header'
import TipsSection from './Components/TipsSection'
import ProductTabsSection from './Components/ProductTabsSection/ProductTabsSection.jsx'
import { products } from '../../Components/constants'

const Home = () => {
  return (
    <>
      <Header />
      <ProductTabsSection products={products}/>
      <TipsSection />
    </>
  )
}

export default Home
