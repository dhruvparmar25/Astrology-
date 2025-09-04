import React from 'react'
import { Link } from 'react-router-dom'

function NavBar() {
  return (
    <>
      <nav className='flex justify-center items-center gap-4 p-4 text-[16px] text-[rgb(0, 0, 0)]'>
        <Link to='/'>Home</Link>
        <Link to='/ask'>Ask Best Jyotishs</Link>
        <Link to='/freek'>Free Kundli</Link>
        <Link to='/kundlimatching'>Kundali Matching</Link>
        <Link to='/horoscope'>Horoscope 2025</Link>
        <Link to='/love'>Love</Link>
        <Link to='mairrage'>Mairrage</Link>
        <Link to='career'>Career</Link>
        <Link to='astrology'>Free Astrology</Link>
        <Link to='blog'>Blog</Link>
        <Link to='more'>More</Link>
      </nav>
    </>
  )
}

export default NavBar