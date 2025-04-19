import React from 'react'
import { greenHouseBook } from '#Components/constants/index.js';
import Card from '#Components/shared/Card';
import cycleImage from '#assets/tips/cycleImage.png';
const TipsSection = () => {
  return (
    <section>
      <div className="container mx-auto py-12 px-3">
        <h2 className='text-3xl font-bold mb-10'>Greenhouse <span className='text-primary-green'>Tips</span></h2>
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 lg:gap-12">
          <div className="">
            <Card {...greenHouseBook} />
          </div>
          <div className="col-span-2 px-10">
            <img src={cycleImage} className="w-full" alt="cycleImage" />
          </div>
        </div>
      </div>
    </section>
  )
}

export default TipsSection