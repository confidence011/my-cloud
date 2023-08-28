import React from 'react'

const Homepage2 = () => {
  return (
    <div className='w-full m-8'>
      <div className='max-w-[1240px] mx-auto'>

        <div className='text-center py-8'> 
            <h2 className='text-5xl font-bold py-4'>Trusted by all developers across the world</h2>
            <p className='text-3xl py-6 text-gray-600'>Transform immages and videos to load faster with no visual degradation, automatically generate image and videos variant, and deliver high quality responsive experiences to increase conversation.</p>
        </div>

        <div className='grid grid-cols-1 text-center sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-4'>
            <div className='border py-8 rounded-xl shadow-2xl'>
                <p className='text-6xl font-bold text-indigo-600'>100%</p>
                <p className='text-gray-400 mt-2 font-bold'>Completion</p>
            </div>
            <div className='border py-8 rounded-xl shadow-2xl'>
                <p className='text-6xl font-bold text-indigo-600'>24/7</p>
                <p className='text-gray-400 mt-2 font-bold'>Delivery</p>
            </div>
            <div className='border py-8 rounded-xl shadow-2xl'>
                <p className='text-6xl font-bold text-indigo-600'>100k</p>
                <p className='text-gray-400 mt-2 font-bold'>Transactions</p>
            </div>

        </div>

      </div>
    </div>
  )
}

export default Homepage2
