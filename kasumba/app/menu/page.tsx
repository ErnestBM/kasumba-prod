"use client";
import Image from 'next/image';
import menuData from './kasumbasSpecial.json';
import { useState } from 'react';
import Footer from '../components/Footer';
import "./menu.css";

export default function Menu() {
  const [category, setCategory] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('ALL MENU');

  const handleCategoryChange = (category: string) => {
    setCategory(category === 'ALL MENU' ? '' : category);
    setSelectedCategory(category);
  };

  const filteredMenu = menuData.items.filter(
    (item) => item.category === category || category === ''
  );

  return (
    <body>
      <div className="relative shadow-xl sm:overflow-hidden">
        <div className="absolute inset-0">
          <Image
            priority
            fill
            className="h-full w-full object-cover"
            src={`/assets/Hero.jpeg`}
            alt="Coffee grinder"
          />
          <div className="absolute inset-0 bg-orange-100 mix-blend-multiply" />
        </div>
        <div className="relative px-4 py-16 sm:px-6 sm:py-24 lg:py-32 lg:px-8">
          <p className="relative left-0 right-0 mx-auto mt-5 max-w-xl text-center text-xl  font-semibold uppercase tracking-wide text-orange-600">
            Kasumba Coffee
          </p>
          <h1 className="mt-1 text-center font-bold uppercase text-gray-900 sm:text-5xl sm:tracking-tight lg:text-7xl">
            <span className="block text-white">Life is better with</span>
            <span className="block text-orange-500">coffee</span>
          </h1>
          {/* <div className="mx-auto mt-10 max-w-xs sm:flex sm:max-w-none sm:justify-center">
            <button
              className="flex items-center justify-center rounded-md border border-transparent bg-white px-4 py-3 text-base font-medium text-orange-600 shadow-sm hover:bg-orange-100 sm:px-8"
              onClick={() => handleCategoryChange('')}>
              Shop coffees
            </button>
          </div> */}
        </div>
      </div>
      
      <div className='categories-container'>
        <div className='categories'>
          <button onClick={() => handleCategoryChange('ALL MENU')}>
            <p className={`lpl ${selectedCategory === "ALL MENU" ? 'highlighted' : ''}`}>ALL MENU</p>
          </button>
          <button onClick={() => handleCategoryChange("KASUMBA'S SPECIAL")}>
            <p className={`lpl ${selectedCategory === "KASUMBA'S SPECIAL" ? 'highlighted' : ''}`}>KASUMBA'S SPECIAL</p>
          </button>
          <button onClick={() => handleCategoryChange('KASUMBA X YKAKI')}>
            <p className={`lpl ${selectedCategory === "KASUMBA X YKAKI" ? 'highlighted' : ''}`}>KASUMBA X YKAKI</p>
          </button>
          <button onClick={() => handleCategoryChange('MATCHA SERIES')}>
            <p className={`lpl ${selectedCategory === "MATCHA SERIES" ? 'highlighted' : ''}`}>MATCHA SERIES</p>
          </button>
          <button onClick={() => handleCategoryChange('KASUMBA COFFEE')}>
            <p className={`lpl ${selectedCategory === "KASUMBA COFFEE" ? 'highlighted' : ''}`}>KASUMBA COFFEE</p>
          </button>
          <button onClick={() => handleCategoryChange('KASUMBA PASTRY')}>
            <p className={`lpl ${selectedCategory === "KASUMBA PASTRY" ? 'highlighted' : ''}`}>KASUMBA PASTRY</p>
          </button>
        </div>
      </div>
      <div className='menu-container'>
        <div className='menu-grid'>
          {filteredMenu.map((item) => (
            <div className="menu-card">
              <Image
                alt={item.name}
                className="image-card"
                src={`/assets/${item.name}.jpeg`}
                width={560}
                height={640}
              />
              <p className='pl mt-2'>{item.name}</p>
              <p className='pl'>Rp {item.price}</p>
              <p className="text-gray">{item.rating}</p>
            </div>
          ))}
        </div>
      </div>
      <Footer/>
    </body>
  )
}
