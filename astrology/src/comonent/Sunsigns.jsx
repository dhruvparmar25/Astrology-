import React from 'react'

function Sunsigns() {
    const signs = [
        {
            img: "https://static.joonsite.com/storage/46059/media/2412121358173596.png?class=thumb",
            eng: "Aries",
            hin: "(मेष)"
        },
           {
            img: "https://static.joonsite.com/storage/46059/media/2412121358521396.png?class=thumb",
            eng: "Taurus",
            hin: "(वृषभ)"
        },
        
           {
            img: "https://static.joonsite.com/storage/46059/media/2412121359206118.png?class=thumb",
            eng: "Gemini",
            hin: "(मिथुन)"
        }
        ,
           {
            img: "https://static.joonsite.com/storage/46059/media/2412121359547396.png?class=thumb",
            eng: "Cancer",
            hin: "(कर्क)"
        }
        ,
           {
            img: "https://static.joonsite.com/storage/46059/media/2412121508459063.png?class=thumb",
            eng: "Leo",
            hin: "(सिंह)"
        }
        ,
           {
            img: "https://static.joonsite.com/storage/46059/media/2412121508561985.png?class=thumb",
            eng: "Virgo",
            hin: "(कन्या)"
        },
           {
            img: "https://static.joonsite.com/storage/46059/media/2412121509085464.png?class=thumb",
            eng: "Libra",
            hin: "(तुला)"
        }
        ,
           {
            img: "https://static.joonsite.com/storage/46059/media/2412121509197840.png?class=thumb",
            eng: "Scorpio",
            hin: "(वृश्चिक)"
        },
           {
            img: "https://static.joonsite.com/storage/46059/media/2412121509304971.png?class=thumb",
            eng: "Sagittarius",
            hin: "(धनु)"
        }
        ,
           {
            img: "https://static.joonsite.com/storage/46059/media/2412121509506889.png?class=thumb",
            eng: "Capricorn",
            hin: "(मकर)"
        },
           {
            img: "https://static.joonsite.com/storage/46059/media/2412121510004773.png?class=thumb",
            eng: "Aquarius",
            hin: "(कुम्भ)"
        }
        ,
           {
            img: "https://static.joonsite.com/storage/46059/media/2412121510109404.png?class=thumb",
            eng: "Pisces",
            hin: "(मीन)"
        }
    ]
    return (
        <div className='grid  grid-cols-6 grid-rows-2 gap-4 m-auto text-center mb-4 '>
            {signs.map((item, i) => (
                <div className="sun m-auto  " key={i} >
                    <div className="image-container  w-[90px] h-[90px] border-dotted border-2  border-zinc-200 p-2 rounded mt-6 transition-transform duration-300 hover:rotate-90

">
                        <img src={item.img} alt={item.eng} className='h-[-webkit-fill-available] m-auto'/>
                    </div>
                    <h1 className='mt-4 text-[20px] leading-[26px] text-[#212329]'>{item.eng}</h1>
                    <h1 className='mt-2 text-[16px] leading-[22.4px] text-[#e87731]'>{item.hin}</h1>
                </div>
            ))
            }
        </div>
    )
}

export default Sunsigns