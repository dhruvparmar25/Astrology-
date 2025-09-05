import React from 'react'
import Card from '../comonent/Card'

function HomePage() {
  return (
    <div>
      <section className="banner">
        <img src="https://static.joonsite.com/storage/46059/media/2412121159221956.png" className="w-full h-[533px]" />
      </section>
      <section>
        <div className="title">Explore Your Free Astrology Services</div>
        <div className="crads flex gap-10 justify-center items-center"><Card /></div>
      </section>
    </div>
  )
}

export default HomePage