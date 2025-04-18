import React from 'react'
import headerClasses from './style.module.css';
const PageHeader = ({ title }) => {
  return (
    <header className={headerClasses.header}>
      <div className="container mx-auto">
        <h1 className='text-white px-5 text-4xl mt-10 font-bold'>{title}</h1>
      </div>
    </header>
  )
}

export default PageHeader
