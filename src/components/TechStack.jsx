import React from 'react'
import { Domaindata } from '../utils/database'

const DomainofInterest = () => {

  return <>
    <section id='domain-section'> </section>
        <div className='bg-gradient-to-tr from-blue-300 via-gray-50 to-gray-50'>
            {/* heading */}
            <div className="flex flex-col md:flex-row items-center md:items-start justify-center p-6 md:p-12 gap-8 ">
                <h1 className="max-w-2xl text-center md:text-justify text-3xl md:text-4xl font-bold text-gray-800">
                Domain Of Interest
                </h1>
            </div>
            {/* domain cards */}
            <section className="dark:bg-gray-900 py-8">
                <div className="container max-w-full p-6">
                    <div className="flex flex-wrap md:flex-nowrap gap-2">
                        {Domaindata.map(({id,title,desc,logo})=>(
                                        <a key={id} className="flex flex-col justify-center bg-white border border-gray-200 rounded-lg shadow md:flex-row md:max-w-fit hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700">
                                            <img className=" w-80 p-4 rounded-t-lg h-40 md:h-auto md:w-48 md:rounded-none md:rounded-s-lg" src={logo} alt="ml logo"></img>
                                            <div className="flex flex-col justify-center leading-6 p-4">
                                                <h5 className="text-2xl font-bold  text-gray-900 dark:text-white">{title}</h5>
                                                <p className=" font-extralight text-gray-700 dark:text-gray-400">{desc}</p>
                                            </div>
                                        </a>
                        ))}
                    </div>
                </div>
            </section>
        </div>
    </>
}

export default DomainofInterest;
