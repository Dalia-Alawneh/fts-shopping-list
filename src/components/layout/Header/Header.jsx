import headerImg from '#assets/header.png';
import headerPlant from '#assets/headImg.png';
import { Link } from 'react-router-dom';
const Header = () => {
  return (
    <header className='bg-gray px-14 dark:bg-gray-900 pt-12 min-h-screen'>
      <div className="container mx-auto relative">
        <img src={headerImg} className='w-full absolute z-10 left-0 bottom-0' alt="header background" />
        <div className="grid grid-cols-1 lg:grid-cols-2 relative z-20 justify-between gap-10 xl:gap-20">
          <div className="flex flex-col justify-center gap-6">
            <h1 className='text-4xl lg:text-6xl'>Grow <span className="text-primary-green">green</span>, Get <span className="text-primary-green">rooted</span></h1>
            <p className='w-[80%]'>Cultivate happiness, one plant at a time. Shop our collection and discover the joy of nature, indoors & out.</p>
            <Link to='/' className='btn-primary-green'>Shop Now</Link>
          </div>
          <div className='flex items-end'>
            <img
              src={headerPlant}
              alt="plant"
              className="max-h-[90%] object-contain"
            />
          </div>
        </div>
      </div>
    </header>
  )
}

export default Header
