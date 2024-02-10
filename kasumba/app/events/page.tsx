"use client";
import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import Footer from '../components/Footer';
import Navbar from '../components/navigation/navbar';
import '../typography.css';

export default function Events() {
    const navHeight = 1 / 9 * 100;
    const [isSmallScreen, setIsSmallScreen] = useState(false);

    useEffect(() => {
        const handleResize = () => {
        setIsSmallScreen(window.innerWidth <= 768);
        };

        handleResize(); 

        window.addEventListener('resize', handleResize);

        return () => {
        window.removeEventListener('resize', handleResize);
        };
    }, []);


    return (
        <body style={{ height: '100vh', overflow: 'auto' }}>
            <Navbar />

            <div className="relative shadow-xl sm:overflow-hidden" style={{ width: '100%', height: '85vh' }}>
                <div className="absolute inset-0 flex items-center justify-center">
                    <Image
                        priority
                        fill
                        className="h-full w-full object-cover"
                        src={`/assets/singers-singing-studio.jpg`}
                        alt="Events Cover"
                    />
                    <div className="absolute inset-0 bg-orange-100 mix-blend-multiply" />
                </div>
                <div className="absolute inset-0 flex items-center justify-center">
                    <h1 className="text-center font-bold uppercase text-gray-900 sm:text-5xl sm:tracking-tight lg:text-7xl " style={{ opacity: '0.6' }}>
                        <span className="block text-white">EVENTS</span>
                    </h1>
                </div>
            </div>

            <div className="container mx-auto px-4 mt-8">
                <div className="flex flex-wrap">
                <div className={`w-full ${isSmallScreen ? 'order-2' : 'md:w-3/5 order-1'}`} style={{ paddingRight: '20px', paddingTop: '5px', textAlign: 'right' }}>
                        <div className="mb-8">
                            <h2 className="h2 text-black mb-2" >LIVE FROM KASUMBA</h2>
                            <p className="pli text-black">Little did you know that inside our joglo-inspired Eatery and Sunset Bar, there&#8217;s a hidden Jazz Club that opens twice a month, showcasing Jazz musicians from varied backgrounds and dynamic performances over colorful cocktails, small bites, and creative conversations. Keeping it New York style &mdash;our 2nd set is often an open jam session for those who try out their solos on our tropical alcove.</p>
                            <br />
                            <p>
                                <em className="plit text-black">It&#8217;s every second Friday 6 to 8 PM.
                                </em>
                            </p>
                        </div>
                        <div className="mb-8">
                            <h2 className="h2 text-black mb-2">KASUMBA LIVE</h2>
                            <p className="pli text-black">Rice fields through the horizon, lounge sofas, the ever-changing colours of the skies &mdash;we have prepared the perfect setting for your sunset-to-twilight downtime with any kinds of companions. Live Brazilian Bossa Nova tunes will become your weekly background music as the extended Golden Hour deals lets you get the best of our cocktails, both in flavours and price.</p>
                            <br />
                            <p><em className="plit text-black">Every Wednesday, 5 to 7 PM.</em></p>
                        </div>
                    </div>
                    <div className={`w-full ${isSmallScreen ? 'order-1 text-right' : 'md:w-2/5 order-2 text-left'}`} style={{ paddingLeft: '20px'}}>
                        <div className="mb-8">
                            <h1 className="h1 text-black">LIVE MUSIC</h1>
                        </div>
                    </div>
                </div>
            </div>

            <div className="rounded-[80px] mx-auto mt-8 bg-yellow-50 sm:overflow-hidden" style={{ width: '100%', height: '85vh' }}>
                <div className='w-full text-left' style={{ paddingTop: '60px', paddingLeft: '150px', fontSize: '1.5rem'}}>
                    <h1 className='h1 text-black' style={{ color: '#32520E' }}>
                        RECENT EVENTS
                    </h1>

                </div>
            </div>

            <Footer />
        </body>
    );
}