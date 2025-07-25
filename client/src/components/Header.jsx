import React, { useRef } from 'react'
import { assets } from '../assets/assets'
import { useAppContext } from '../context/AppContext'

function Header() {
  const {setInput, input} = useAppContext();
  const inputRef = useRef();

  const onSubmitHandler = async (e) => {
    e.preventDefault();
    setInput(inputRef.current.value);

  }

  const onClear = () => {
    setInput('');
    inputRef.current.value = '';
  }
  return (
    <div className='mx-8 sm:mx-16 xl:mx-24 relative'>
      <div className='text-center mt-20 mb-8'>
        {/* Announcement Badge with Glow */}
        <div className="relative z-10 inline-flex items-center justify-center gap-4 px-6 py-1.5 mb-4 border border-primary/40 bg-primary/10 rounded-full text-sm text-primary before:content-[''] before:absolute before:inset-0 before:rounded-full before:blur-lg before:bg-primary/20 before:-z-10">
          <p>New: AI feature integrated</p>
          <img src={assets.star_icon} alt="star-icon" className='w-2.5' />
        </div>

        {/* Hero Title */}
        <h1 className='text-3xl sm:text-5xl lg:text-6xl font-semibold leading-snug sm:leading-[4.5rem] text-gray-700'>
          Your own <span className='text-primary'>blogging</span> <br /> platform.
        </h1>

        {/* Subheading */}
        <p className='my-6 sm:my-8 max-w-2xl m-auto max-sm:text-xs text-gray-600'>
          This is your space to think out loud, to share what matters, and to write without filters. Whether it's one word or a thousand, your story starts right here.
        </p>

        {/* Search Bar */}
        <form onSubmit={onSubmitHandler} className='flex justify-between max-w-lg max:sm:scale-75 mx-auto border border-gray-300 bg-white rounded overflow-hidden shadow-sm hover:shadow-md transition-shadow duration-300'>
          <input
          ref={inputRef}
            type="text"
            placeholder='Search for blogs'
            required
            className='w-full pl-5 py-2 text-sm text-gray-700 placeholder:text-gray-400 outline-none'
          />
          <button
            type='submit'
            className='bg-primary text-white px-8 py-2 m-1.5 rounded hover:scale-105 transition-all cursor-pointer'
          >
            Search
          </button>
        </form>
      </div>
      <div className="text-center">
  {input && (
    <button
      onClick={onClear}
      className="border font-light text-xs py-1 px-3 rounded-sm shadow-custom-sm cursor-pointer"
    >
      Clear Search
    </button>
  )}
</div>


      {/* Decorative Background */}
      <img
        src={assets.gradientBackground}
        alt="gradient"
        className='absolute top-[-5rem] -z-10 opacity-50 blur-md scale-110'
      />
    </div>
  )
}

export default Header
