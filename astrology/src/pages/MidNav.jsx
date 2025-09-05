import React from 'react'

function MidNav() {
  return (
    <>
        <section className='flex justify-between items-center p-6 border-b-[#e0e0e0] border-b-2 border-b-red '>
            <div className="social-icon flex list-none gap-5    ">
                <li><a href="https://www.facebook.com"><i class="fa-brands fa-facebook"></i></a></li>
                <li><a href="https://www.instagram.com"><i class="fa-brands fa-instagram"></i></a></li>
                <li><a href="https://www.youtube.com"><i class="fa-brands fa-youtube"></i></a></li>
                <li><a href="https://www.linkedin.com"><i class="fa-brands fa-linkedin"></i></a></li>
            </div>
            <div className="logo">
                <a href='/' className="logo"><img src="https://static.joonsite.com/storage/46059/media/2508292359034570.png"width={329} height={65} /></a>
            </div>
            <div className="srch flex justify-center items-center gap-5">
                <div className="srch"><i class="fa-solid fa-magnifying-glass"></i></div>
                <div className="cart"><i class="fa-solid fa-cart-shopping"></i></div>
                <div className="profile"><i class="fa-solid fa-user"></i> Log In / Sign up</div>
            </div>
        </section>

    </>
  )
}

export default MidNav