import React from 'react'

const Portfolio = () => {



  
  
  return (
    <div name= "Portfolio" className='bg-gradient-to-b from-black to-gray-800 w-full text-white md:h-screen'>
      <div className='max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full'>

        <div className='pb-8'>
          <p className='text-4xl font-bold inline border-b-4 border-gray-500'>Portfolio</p>
          <p className='py-6 font-medium'> Check some of my work here</p>
        </div>


        <div className='grid sm:grid-cols-2 md:grid-cols-3 gap-8'>
      
      
      <div className='shadow-md shadow-gray-500 rounded-md duration-200 hover:scale-105'>

        <img className='rounded-md duration-200 hover:scale-105' src="/web-Mymudra.png" alt="" />
        <div className='flex items-center justify-center'>
          <button className='w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105'>
          <ul>
              <li>
                <a target='_blank' href="https://website-mymudra.vercel.app/">Demo</a>
              </li>
            </ul>
          </button>
          <button className='w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105'>
          <ul>
              <li>
                <a target='_blank' href="https://github.com/mudit088/website-Mymudra.git">Code</a>
              </li>
            </ul>
          </button>
        </div>

      </div>
      


   
      
      
      <div className='shadow-md shadow-gray-500 rounded-md duration-200 hover:scale-105'>

        <img className='rounded-md duration-200 hover:scale-105' src="/CRM-Mymudra.png" alt="" />
        <div className='flex items-center justify-center'>
          <button className='w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105'>
            <ul>
              <li>
                <a target='_blank' href="https://my-mudra-crm-table.vercel.app/">Demo</a>
              </li>
            </ul>
          </button>
          <button className='w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105'>
          <ul>
              <li>
                <a target='_blank' href="https://github.com/mudit088/My-Mudra.git">Code</a>
              </li>
            </ul>
          </button>
        </div>

      </div>
      


      
      
      
      <div className='shadow-md shadow-gray-500 rounded-md duration-200 hover:scale-105'>

        <img className='rounded-md duration-200 hover:scale-105' src="/RPS-jsgame.png" alt="" />
        <div className='flex items-center justify-center'>
          <button className='w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105'>
          <ul>
              <li>
                <a target='_blank' href="https://mudit088.github.io/RockPaperScisssor/game.html">Demo</a>
              </li>
            </ul>
          </button>
          <button className='w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105'>
          <ul>
              <li>
                <a target='_blank' href="https://mudit088.github.io/RockPaperScisssor/game.html">Code</a>
              </li>
            </ul>

          </button>
        </div>

      </div>
      


     
      
      
      <div className='shadow-md shadow-gray-500 rounded-md duration-200 hover:scale-105'>

        <img className='rounded-md duration-200 hover:scale-105' src="/Form.png" alt="" />
        <div className='flex items-center justify-center'>
          <button className='w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105'>
          <ul>
              <li>
                <a target='_blank' href="https://e-vault-tau.vercel.app/">Demo</a>
              </li>
            </ul>
          </button>
          <button className='w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105'>
          <ul>
              <li>
                <a target='_blank' href="https://github.com/mudit088/E-vault.git">Code</a>
              </li>
            </ul>
          </button>
        </div>

      </div>
      



      </div>
      </div>
    </div>
  )
}

export default Portfolio