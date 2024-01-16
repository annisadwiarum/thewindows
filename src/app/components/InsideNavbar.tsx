import Link from 'next/link'
import React from 'react'

function InsideNavbar({fixed = true, scrolled}: any) {
    return (
      <>
      
      <div  className={`${
          fixed
            ? 'fixed left-0 z-[9999] shadow transition-all duration-500 ease-in-out border-none pt-4 text-sm'
            : ''
        } ${
          fixed ? (scrolled ? 'shadow -top-4' : 'shadow-none  -top-6') : ''
        } w-full bg-yellow-500`}
            >
                <div   className={`flex justify-between px-6 py-4 mx-auto max-w-7xl  ${
            fixed ? 'sm:px-6 lg:px-20' : 'lg:px-0'
          }`}>
                    <div className='flex justify-between'>
                        <div className='relative items-center flex'>
                            <Link href="/">test</Link>
                            <Link href="/">test</Link>
                            <Link href="/">test</Link>
                            <Link href="/">test</Link>
                        </div>
                    </div>
            </div>
            </div>
      </>
  )
}

export default InsideNavbar