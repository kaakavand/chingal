import React from 'react'
import logo from './../assets/images/chingal-logo.svg'
interface propsType {
    children : any
}

const Layout = ({children} : propsType) => {
  return (
    <>
        <header className='bg-surface-100 border-b-2 border-surface-300 py-4'>
            <div className="container flex justify-between  mx-auto">
            <figure className='w-40'>
                <img src={logo} alt="logo" />
            </figure>
            <div>
                <input className='p-1 rounded-full' type="text" />
                <button>Dark</button>
            </div>
            </div>
        </header>
        <div className='container mx-auto'>
            {children}
        </div>
    </>
  )
}

export default Layout