import { useState } from "react";

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);

  const toggleMenu = () => {
    setIsMenuOpen((prev) => !prev);
  };

  return (
    <header className='px-4 py-2 flex items-center justify-between border border-solid'>
      <div>My Next App</div>
      <button onClick={toggleMenu} className='md:hidden'>
        {/* Hamburger Icon */}
        <svg
          xmlns='http://www.w3.org/2000/svg'
          className='h-6 w-6'
          fill='none'
          viewBox='0 0 24 24'
          stroke='currentColor'>
          <path
            strokeLinecap='round'
            strokeLinejoin='round'
            strokeWidth={2}
            d='M4 6h16M4 12h16m-7 6h7'
          />
        </svg>
      </button>
      <nav
        className={`${
          isMenuOpen ? "block" : "hidden"
        } md:flex md:items-center md:justify-center`}>
        <a href='/' className='px-2'>
          Home
        </a>
        <a href='/about' className='px-2'>
          About
        </a>
        <a href='/experts' className='px-2'>
          Experts
        </a>
        <a href='/contact' className='px-2'>
          Contact
        </a>
      </nav>
    </header>
  );
};

export default Header;
