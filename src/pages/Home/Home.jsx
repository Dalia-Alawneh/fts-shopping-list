import React from 'react'
import Header from './components/Header/index.js'
import TipsSection from './components/TipsSection/index.js'
import ProductTabsSection from './components/ProductTabsSection/ProductTabsSection.jsx'
import { products } from '../../components/constants/index.js'

const Home = () => {
  return (
    <>
      <Header />
      <ProductTabsSection products={products} />
      <TipsSection />
    </>
  )
}

export default Home
