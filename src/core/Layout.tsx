import React from 'react'

interface propsType {
    children : any
}

const Layout = ({children} : propsType) => {
  return (
    <>
        <header className='bg-surface-100  border-b-2 border-surface-300 py-4'>
            {/* <figure> */}
                {/* <img src={} alt="logo" /> */}
            {/* </figure>
            <div>
                <input className='p-1 rounded-full' type="text" />
                <button>Dark</button>
            </div> */}
            adfasdf
        </header>
        <div className='container mx-auto'>
            {children}
        </div>
    </>
  )
}

export default Layout