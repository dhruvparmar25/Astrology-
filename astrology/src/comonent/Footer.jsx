import React from 'react'

function Footer() {
    const data = [
        {
            title: "Horoscope Sun Signs 2025",
            links: [
                { label: "Aries 2025", href: "/aries-2025" },
                { label: "Taurus 2025", href: "/taurus-2025" },
                { label: "Gemini 2025", href: "/gemini-2025" },
                { label: "Cancer 2025", href: "/cancer-2025" },
                { label: "Leo 2025", href: "/leo-2025" },
                { label: "Virgo 2025", href: "/virgo-2025" },
                { label: "Libra 2025", href: "/libra-2025" },
                { label: "Scorpio 2025", href: "/scorpio-2025" },
                { label: "Sagittarius 2025", href: "/sagittarius-2025" },
                { label: "Capricorn 2025", href: "/capricorn-2025" },
                { label: "Aquarius 2025", href: "/aquarius-2025" },
                { label: "Pisces 2025", href: "/pisces-2025" }
            ]
        },
        {
            title: "Personalised Astrology Solutions",
            links: [
                { label: "Love Astrology", href: "/love-astrology" },
                { label: "Marriage Astrology", href: "/marriage-astrology" },
                { label: "Career Astrology", href: "/career-astrology" },
                { label: "Health Astrology", href: "/health-astrology" },
                { label: "Business Astrology", href: "/business-astrology" },
                { label: "Child Astrology", href: "/child-astrology" },
                { label: "Property Astrology", href: "/property-astrology" },
                { label: "Finance Astrology", href: "/finance-astrology" },
                { label: "All About Vastu", href: "/vastu" },
                { label: "Foreign Settlement Astrology", href: "/foreign-settlement-astrology" },
                { label: "Horoscope 2025", href: "/horoscope-2025" }
            ]
        },
        {
            title: "Corporate Info",
            links: [
                { label: "About Us", href: "/about-us" },
                { label: "Contact", href: "/contact" },
                { label: "Privacy Policy", href: "/privacy-policy" },
                { label: "Terms and Conditions", href: "/terms-and-conditions" },
                { label: "Shipping and Delivery Policy", href: "/shipping-delivery-policy" },
                { label: "Cancellation and Refund Policy", href: "/cancellation-refund-policy" },
                { label: "Disclaimer", href: "/disclaimer" }
            ]
        },
        {
            title: "Free Astrology",
            links: [
                { label: "Love Compatibility", href: "/love-compatibility" },
                { label: "Kundli Doshas", href: "/kundli-doshas" },
                { label: "Nakshatra", href: "/nakshatra" },
                { label: "Planetary Transit", href: "/planetary-transit" },
                { label: "Astrology Houses", href: "/astrology-houses" },
                { label: "Astrology Yogas", href: "/astrology-yogas" },
                { label: "Astrology Dasha", href: "/astrology-dasha" },
                { label: "Shubh Muhurat", href: "/shubh-muhurat" }
            ]
        }

    ]

    return (
        <div className='bg-[#F2F2F2] mt-4 mb-1'>
            <section className='flex justify-between p-8 text-black'>
                <div className="logo w-[350px]">
                    <img src="https://static.joonsite.com/storage/46059/media/2508292359034570.png" alt="" width={219} />
                    <h1 className='mt-4'>BestJyotish is the one-stop for online astrology prediction. It provides the most correct guidance and also suggests remedies that are simple and easy.</h1>    </div>

                {
                    data.map((item, i) => (
                        <div key={i}>
                            <h1 className='text-[18px] font-bold mb-4'>{item.title}</h1>
                            <div className="link grid text-[15px] mt-1">
                                {item.links.map((linkItem, t) => (
                                    <a href={linkItem.href} key={t}>{linkItem.label}</a>
                                ))}
                            </div>
                        </div>
                    ))
                }
                <div className="contact-info">
                    <label className='text-[18px] font-bold ' >Contact Info</label>
                    <div className="social-icon flex list-none gap-5 mt-4">
                        <li><a href="https://www.facebook.com"><i class="fa-brands fa-facebook"></i></a></li>
                        <li><a href="https://www.instagram.com"><i class="fa-brands fa-instagram"></i></a></li>
                        <li><a href="https://www.youtube.com"><i class="fa-brands fa-youtube"></i></a></li>
                        <li><a href="https://www.linkedin.com"><i class="fa-brands fa-linkedin"></i></a></li>
                    </div>
                    <h1 className='contact-top mt-2 '>
                        <i class="fa-solid fa-phone"></i><span className="call-tn ml-2">+91 9911251511</span><br />
                        <i className="fa-regular  fa-envelope mt-2"></i><span className="mail-tn ml-2">support@bestjyotish.com</span>
                    </h1>
                </div>

            </section>
            <section className='w-[95%] h-auto m-auto bg-amber-600'>
                <div className="ftr flex justify-between items-center p-2 m-auto">
                    <div className="copyright text-[15px] leading-[19.5px] text-white">Copyright © 2022 - 2025 Best Jyotish All Rights Reserved Made with ❤️ in India</div>
                    <div className="scured ">
                        <img src="https://static.joonsite.com/storage/46059/media/2505141601490576.svg" width={500} alt=""></img>
                    </div>

                </div>
            </section>
        </div>
    )
}

export default Footer