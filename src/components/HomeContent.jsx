import React from 'react'
import SocialIcons from "../components/icons"

const HomeContent = () => {
  return (
    <>
      <section class="bg-gray-50 dark:bg-gray-900" id='home-section'>
        <div class="max-w-screen-xl px-4 py-16 mx-auto text-center lg:py-32 lg:px-12">
          <h1 class="text-4xl font-extrabold tracking-tight leading-none text-gray-900 dark:text-white md:text-5xl lg:text-6xl">
          Hi there! <span class="text-transparent bg-clip-text bg-gradient-to-r to-emerald-600 from-sky-400" >I'm Hassan Kaif</span> 
          </h1>
          <p class="mt-4 text-lg font-normal text-gray-500 dark:text-gray-400 sm:px-16 lg:px-48">
          A Computer Science Undergraduate Student passionate about Machine Learning, Web Development, and Blockchain Technology. 
          </p>
          <SocialIcons/>
          <a href="https://drive.google.com/file/d/1PjTJ7W8VpuWuiRrD4OtPtDliaz8PJe5t/view?usp=sharing" download="Resume_Hassan.pdf">
            <button class="relative inline-flex items-center justify-center p-0.5 mb-2 me-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-green-400 to-blue-600 group-hover:from-green-400 group-hover:to-blue-600 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-green-200 dark:focus:ring-green-800">
              <span class="relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
                Download Resume
              </span>
            </button>
          </a>

        </div>
        
      </section>


    </>
  )
}

export default HomeContent;