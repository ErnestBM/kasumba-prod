import Link from 'next/link';

export default function Menu() {
  return (
    <div>
      <div className='categories-container'>
        <div className='categories'>
          <button>
            <Link href="/menu" className='h4'>ALL MENU</Link>
          </button>
          <button>
            <Link href="/menu" className='h4'>KASUMBA'S SPECIAL</Link>
          </button>
          <button>
            <Link href="/menu" className='h4'>KASUMBA X YKAKI</Link>
          </button>
          <button>
            <Link href="/menu" className='h4'>MATCHA SERIES</Link>
          </button>
          <button>
            <Link href="/menu" className='h4'>KASUMBA COFFEE</Link>
          </button>
          <button>
            <Link href="/menu" className='h4'>KASUMBA PASTRY</Link>
          </button>
        </div>
      </div>
      <div>
        <p className='h1'>Abby</p>
      </div>
    </div>
  )
}
