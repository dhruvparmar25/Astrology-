import React from 'react'

function Card() {
  const data = [
    {
      img: "https://static.joonsite.com/storage/46059/media/2502181123002715.jpeg?class=thumb",
      title: "Personalized Kundli Generation",
      detail: "Generate your free online kundli from bestjyotish.",
      button: "Generate Now"
    },
    {
      img: "https://static.joonsite.com/storage/46059/media/2502201533271058.jpeg?class=thumb",
      title: "Find Your Perfect Match",
      detail: "Generate your free kundli Matching from bestjyotish.",
      button: "Generate Now"
    },
    {
      img: "https://static.joonsite.com/storage/46059/media/2502181123468183.jpeg?class=thumb",
      title: "Daily Panchang Insights",
      detail: "Get the detailed panchang from Bestjyotish.",
      button: "Check Now"
    },
    {
      img: "https://static.joonsite.com/storage/46059/media/2502181124066024.jpeg?class=thumb",
      title: "Upcoming Indian Festivals",
      detail: "Indian Festivals in 2025: List of festivals in India",
      button: "Read Now"
    },
  ]

  return (
    <div >
      <div className="cards flex justify-center items-center gap-5 min-h-full   text-center mt-[1rem] mb-2 ">     {data.map((item, index) => (
        <div key={index} className=' border-1 border-zinc-200 p-8 pt-0 w-[440px]'>
          <img src={item.img} alt={item.title} className='w-[242px] m-auto' />
          <h1 className="text-[20px] text-[#212529] leading-[26px] mt-2">{item.title}</h1>
          <p className="text-[16px] text-[#212529] leading-[22.4px] mt-2">{item.detail}</p>
          <button className="mt-6 text-[16px] bg-[#E97730] text-white rounded-md p-2 ">
            {item.button}
          </button>
        </div>
      ))}
      </div>
    </div>

  )
}

export default Card
