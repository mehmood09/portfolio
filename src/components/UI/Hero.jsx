import React from 'react'
import heroImg from '../../assets/images/hero.svg'
import CountUp from 'react-countup';

const Hero = () => {
    return (

        <section className='pt-0' id='about'>
            <div className='container pt-14'>
                <div className='md:flex items-center justify-between sm:flex-col md:flex-row'>
                    {/* ===================== hero left content ====================== */}
                    <div className='w-full md:basis-1/2'>
                        <h5 data-aos='fade-right' data-aos-duration='1500'
                            className='text-headingColor font-[600] text-[16px]'>
                            Hello Welcome
                        </h5>
                        <h1 data-aos='fade-up' data-aos-duration='1500'
                            className='text-headingColor font-[800] text-[1.8rem] sm:text-[40px] leading-[35px] sm:leading-[46px] mt-5'>
                            I'm MEHMOOD QADIR <br /> MERN Stack Developer </h1>

                            <div data-aos='fade-up' data-aos-duration='1800' data-aos-delay='200'
                            className='flex items-center gap-6 mt-7' >
                            <a href='#contact'>
                             <button className='bg-primaryColor text-white font-[500] flex items-center gap-2 
                             hover:bg-smallTextColor ease-in duration-300 py-2 px-4 rounded-[8px]'>
                            <i className='ri-mail-line'></i>
                              Hire me</button>
                            </a>
                            <a href='#portfolio' className='text-smallTextColor font-[600] text-[16px] border-b border-solid
                            border-primaryColor'>See portfolio </a>
                            </div>
                            
                        <div className='flex items-center gap-9 mt-1'>
                        <p data-aos='fade-left' data-aos-duration='1500'
                                className='flex gap-2 text-headingColor mt-12 text-justify font-[600] text-[15px] leading-7 sm:pl-14 sm:pr-10'>
                                <span>
                                    <i className='ri-apps-2-line'></i>
                                </span>
                                Certified Self-taught NextJs / React.js developer with proficiency in the entire Software Development Life Cycle. Skilled in utilizing Next.js, MongoDB, Express, React.js, NodeJs, JavaScript, Tailwind, Bootstrap, HTML and CSS to design and deploy highly effective user interfaces in Web Applications.
                            </p>

                            </div>
                            <div className='flex items-center gap-9 mt-1'>
                        <p data-aos='fade-right' data-aos-duration='1500'
                                className='flex gap-2 text-headingColor mt-12 text-justify font-[600] text-[15px] leading-7 sm:pl-14 sm:pr-10'>
                                <span>
                                    <i className='ri-apps-2-line'></i>
                                </span>
                                'I am Problem Solver, Code Reviewer, Committed and Trustworthy individual. I well work in a team but also enjoy an individual challenge. I have strong communication skills and have the ability to build effective working relationships with a wide range of people.'
                            </p>

                            </div>
                    </div>
                    
                    {/* ===================== hero left content End====================== */}
                    {/* ===================== hero Image====================== */}
                    <div className='basis-1/3 mt-10 sm:mt-0'>
                        <figure className='flex items-center justify-center'>
                            <img src={heroImg} alt='' />
                        </figure>
                    </div>
                    {/* ===================== hero Image End====================== */}
                    {/* ===================== Content Right====================== */}
                    <div className='md:basis-1/5 flex justify-between text-center mt-10 flex-wrap gap-3 md:mt-0
                     md:flex-col md:justify-end md:text-end'>
                        <div className='mb-10'>
                            <h2 className='text-headingColor font-[700] text-[32px]'>
                                <CountUp start={0} end={2} duration={2} suffix='+' />
                            </h2>
                            <h4 className='text-headingColor font-[600] text-[18px]'>Years of Experience</h4>
                        </div>
                        <div className='mb-10'>
                            <h2 className='text-headingColor font-[700] text-[32px]'>
                                <CountUp start={0} end={100} duration={2} suffix='%' />
                            </h2>
                            <h4 className='text-headingColor font-[600] text-[18px]'>Success Rate</h4>
                        </div>
                        <div className='mb-10'>
                            <h2 className='text-headingColor font-[700] text-[32px]'>
                                <CountUp start={0} end={15} duration={2} suffix='+' />
                            </h2>
                            <h4 className='text-headingColor font-[600] text-[18px]'>Happy Clients</h4>
                        </div>
                        <div className='mb-10'>
                            <h2 className='text-headingColor font-[700] text-[32px]'>
                                <CountUp start={0} end={6} duration={25} suffix='+' />
                            </h2>
                            <h4 className='text-headingColor font-[600] text-[18px]'>Project Completed</h4>
                        </div>
                    </div>
                    {/* ===================== Content Right End====================== */}
                </div>
            </div>
        </section>

    )
}
export default Hero