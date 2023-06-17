import React from 'react'

const Header = (props) => {
  return (
    <header className='h-20'>
     <h1 className='text-3xl font-bold h-20 items-center justify-center shadow-sm bg-grey'>{props.pageHeader}</h1>
    </header>
  )
}

export default Header