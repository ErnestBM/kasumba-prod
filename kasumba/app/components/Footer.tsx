import React from 'react'
import "./components.css"

function Footer() {
  return (
    <div className='footer-container'>
      <div className='footer-row'>
        <div className='footer-logo'>
          <img src="/assets/logo-white.svg"
            className="logo-card"
            alt="Logo"
          />
          <p className='pl text-white'>©2024 Kasumba Coffee</p>
        </div>
      </div>
      <div className='footer-row'>
        <div className='footer-address'>
          <p className='h2 text-white tracking-widest'>ADDRESS</p>
          <div className='address-detail'>
            <img src="/assets/location.svg"
              alt="Logo"
              className='p-1'
            />
            <p className=''>Jl. Bahureksa No.1, Citarum, Kec. Bandung Wetan, Kota Bandung, Jawa Barat 40115</p>
          </div>
          <div className='address-detail'>
            <img src="/assets/email.svg"
              alt="svg"
              className='p-1'
            />
            <p className=''>kasumskrtt@gmail.com</p>
          </div>
        </div>
      </div>
      <div className='footer-row'>
        <div className='footer-address'>
          <p className='h2 text-white tracking-widest'>CONTACT US!</p>
          <div className='flex flex-row gap-3'>
            <img src="/assets/instagram.svg"
              alt="svg"
              className='p-1'
            />
            <img src="/assets/whatsapp.svg"
              alt="svg"
              className='p-1'
            />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Footer