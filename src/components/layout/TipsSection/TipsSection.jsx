import React from 'react'
import { greenHouseBook } from '#components/constants/index.js';
import Card from '#components/ui/Card/Card.jsx';
import cycleImage from '#assets/tips/cycleImage.png';
const TipsSection = () => {
  return (
    <section>
      <div className="container mx-auto py-12 px-3">
        <h2 className='text-3xl font-bold mb-10'>Greenhouse <span className='text-primary-green'>Tips</span></h2>
        <div className="grid grid-cols-12 gap-12">
          <div className="col-span-12 lg:col-span-4">
            <Card {...greenHouseBook} />
          </div>
          <div className='col-span-12 lg:col-span-8'>
            <img src={cycleImage} className='w-full' alt="cycleImage" />
          </div>
        </div>
      </div>

    </section>
  )
}

export default TipsSection
