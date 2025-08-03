import React from 'react'
import loading from '/loading.gif'

const Loading = () => {
  return (
    <div className='w-full h-screen bg-black flex justify-center items-center'>
        <img className='h-[30%]' src={loading} alt="" />
    </div>
  )
}

export default Loading