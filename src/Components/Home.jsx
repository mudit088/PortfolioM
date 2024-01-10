import React from 'react'
import {Link} from "react-scroll";


const Home = () => {
  return (
    <div name="Home" className='h-screen w-full bg-gradient-to-b from-black via-black to-gray-800'>
        <div className='max-w-screen-lg mx-auto flex flex-col items-center justify-center h-full px-4 md:flex-row text-white'>
            <div className='flex flex-col justify-center h-full'>
                <h2 className=' mt-14 font-signature pl-2 sm:pl-0  text-5xl sm:text-7xl font-bold sm:font-Roboto text-blue-500 '>Mudit Srivastava</h2>
                <p className='text-2xl font-Roboto pt-3 pl-16 sm:pl-0 text-white'>A Web Develepor</p>
                <p className='text-gray-500 py-4 max-w-md '>Seeking opportunities to collaborate within a team, leveraging strong problem-solving skills and a proactive attitude to tackle new challenges..</p>
                <div className='flex ml-8 sm:ml-0 '>
                <Link to="Portfolio" smooth duration={500} className='text-white w-fit m-2 px-6 py-3 flex items-center rounded-md bg-gradient-to-r from-cyan-500 to-blue-500 cursor-pointer  '>Portfolio</Link>

                <button  className='text-white w-fit m-2 px-6 py-3 flex items-center rounded-md bg-gradient-to-r from-cyan-500 to-blue-500 cursor-pointer '>
                  <ul>
                    <a href='/Resume.pdf' download ='Mudit-Resume'> Resume</a>
                  </ul>
                </button>
                </div>
            </div>
                         
            <div className=''>
  <img
    src="/expicons/Mudit-pic2.jpeg"
    alt="my profile"
    className='mx-auto rounded-full border-4 border-red-500 sm:ml-20 w-96'
    style={{
      boxShadow: '8px 8px 96px 8px rgb(33, 150, 243)',
    }}
  />
</div>
        </div>
    </div>
  )
}

export default Home