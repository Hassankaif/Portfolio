import { useEffect, useRef, useState } from 'react';
import { Academicdata } from '../utils/database';

const Academics = () => {
    const { hsc, sslc, cgpa } = Academicdata;

    // States to track progress animation
    const [hscProgress, setHscProgress] = useState(0);
    const [sslcProgress, setSslcProgress] = useState(0);
    const [cgpaProgress, setCgpaProgress] = useState(0);

    // Refs for progress bars
    const hscRef = useRef(null);
    const sslcRef = useRef(null);
    const cgpaRef = useRef(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        if (entry.target === hscRef.current) {
                            setHscProgress(hsc);
                        } else if (entry.target === sslcRef.current) {
                            setSslcProgress(sslc);
                        } else if (entry.target === cgpaRef.current) {
                            setCgpaProgress((cgpa / 10) * 100);
                        }
                    }
                });
            },
            { threshold: 0.5 }
        );

        if (hscRef.current) observer.observe(hscRef.current);
        if (sslcRef.current) observer.observe(sslcRef.current);
        if (cgpaRef.current) observer.observe(cgpaRef.current);

        return () => observer.disconnect();
    }, [hsc, sslc, cgpa]);

    return <>
    <section id='academics-section'>
        <div className='bg-gradient-to-tr from-emerald-300 via-gray-50 to-red-200'>
            <div className="flex flex-col md:flex-row items-center md:items-start justify-center p-8 md:p-20 gap-8">
                <h1 className="max-w-xl text-center md:text-justify text-3xl md:text-4xl font-bold text-gray-800">
                    Academic Excellence
                </h1>
            </div>

            {/* HSC Section */}
            <div>
                <h4 className="text-2xl text-gray-950 mt-8 ml-16">HSC Percentage</h4>
                <div className="w-3/5 bg-gray-300 rounded-full dark:bg-gray-700 mt-2 ml-12" ref={hscRef}>
                    <div
                        className="bg-blue-600 text-xs font-medium text-blue-100 text-center p-1 leading-none rounded-full transition-all duration-1000"
                        style={{ width: `${hscProgress}%` }}
                    >
                        {hscProgress}%
                    </div>
                </div>
            </div>

            {/* SSLC Section */}
            {/* <div>
                <h4 className="text-2xl text-gray-950 mt-16 ml-16">SSLC Percentage</h4>
                <div className="w-3/5 bg-gray-300 rounded-full dark:bg-gray-700 mt-2 ml-12" ref={sslcRef}>
                    <div
                        className="bg-green-600 text-xs font-medium text-green-100 text-center p-1 leading-none rounded-full transition-all duration-1000"
                        style={{ width: `${sslcProgress}%` }}
                    >
                        {sslcProgress}%
                    </div>
                </div>
            </div> */}

            {/* CGPA Section */}
            <div>
                <h4 className="text-2xl text-gray-950 mt-16 ml-16">CGPA</h4>
                <div className="w-3/5 bg-gray-300 rounded-full dark:bg-gray-700 mt-2 ml-12" ref={cgpaRef}>
                    <div
                        className="bg-purple-600 text-xs font-medium text-purple-100 text-center p-1 leading-none rounded-full transition-all duration-1000"
                        style={{ width: `${cgpaProgress}%` }}
                    >
                        {cgpa.toFixed(1)}
                    </div>
                </div>
            </div>
        </div>
    </section>
    </>
};

export default Academics;
