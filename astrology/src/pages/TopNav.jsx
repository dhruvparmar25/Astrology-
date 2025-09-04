import React from 'react'

function TopNav() {
    return (
        <div className='bg-[#e87731] p-1'>
            <section>
                <div className='topNav flex justify-between px-[32px] font-roboto'>
                    <h1 className="livesupport font-roboto">💬 Live Support (9:30 AM – 8:00 PM IST)</h1>
                    <h1 className='contact-top flex justify-center items-center gap-2'>
                       <i className="fa-solid fa-phone  text-white"></i><span className="call-tn .font-roboto">+91 9911251511</span>
                       <i className="fa-regular  fa-envelope"></i><span className="mail-tn .font-roboto">support@bestjyotish.com</span>
                    </h1>
                </div>
            </section>
        </div>
    )
}

export default TopNav