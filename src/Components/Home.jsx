import React from 'react'


const Home = () => {
  return (
    <div name="Home" className='h-screen w-full bg-gradient-to-b from-black via-black to-gray-800'>
        <div className='max-w-screen-lg mx-auto flex flex-col items-center justify-center h-full px-4 md:flex-row text-white'>
            <div className='flex flex-col justify-center h-full'>
                <h2 className='text-4xl sm:text-7xl font-bold text-white'>A Web Developer :)</h2>
                <p className='text-gray-500 py-4 max-w-md '>Seeking opportunities to collaborate within a team, leveraging strong problem-solving skills and a proactive attitude to tackle new challenges..</p>
                <div>
                <button className='text-white w-fit px-6 py-3 flex items-center rounded-md bg-gradient-to-r from-cyan-500 to-blue-500 cursor-pointer  '>Portfolio</button>
                </div>
            </div>
            
           

            <div className=''>
            <img src="/Mudit-bg.png" alt="my profile"className='rounded-2xl mx-auto  w-max md:w-full ' />

            
        </div>
        </div>
       
    </div>
  )
}

export default Home