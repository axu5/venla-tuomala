export default function LandingPage() {
  return (
    <>
      {/* Container so on larger screens there is always padding on the sides */}
      <div className='flex flex-col max-w-screen-xl mx-auto'>
        {/* Venlas big ass name */}
        <div className='flex items-center justify-center min-h-36'>
          <h1 className='pt-serif-bold uppercase tracking-widest text-3xl'>
            Venla Tuomala
          </h1>
        </div>
        {/* Nav */}
        <div>
          <nav className='border-t-2 border-b-2 py-2 border-black'>
            <ul className='flex flex-row justify-around'>
              <li className='uppercase text-2xl font-bold'>About</li>
              <li className='uppercase text-2xl font-bold'>
                Portfolio
              </li>
              <li className='uppercase text-2xl font-bold'>
                Contact
              </li>
            </ul>
          </nav>
        </div>
        {/* TODO scroll bar animation thing */}
      </div>
    </>
  );
}
