import { useState } from 'react'
import { AiFillFacebook, AiFillGithub, AiFillLinkedin } from 'react-icons/ai'
import {BsInstagram} from 'react-icons/bs'

const Footer = () => {

    const year = new Date().getFullYear;

    const [subscribe, setSubscribe] = useState("");

    const submit = (e) => {
        e.preventDefault()
    };

  return (
    <div className='pt-[150vh]'>
      <div className='w-full mt-24 bg-slate-900 text-gray-300 py-2 px-2'>
        <div className='max-w-[1240px] mx-auto grid grid-cols-2 md:grid-cols-5 border-b-2 border-gray-600 py-8'>

            <div>
                <h6 className='font-bold uppercase pt-2'>Solution</h6>
                <ul>
                    <li className='py-1'>Marketing</li>
                    <li className='py-1'>Analystics</li>
                    <li className='py-1'>Commerce</li>
                    <li className='py-1'>Data</li>
                    <li py-1>Cloud</li>
                </ul>
            </div>

            <div>
                <h6 className='font-bold uppercase pt-2'>Support</h6>
                <ul>
                    <li className='py-1'>Pricing</li>
                    <li className='py-1'>Marketing</li>
                    <li className='py-1'>Analystics</li>
                    <li className='py-1'>Commerce</li>
                    <li className='py-1'>Data</li>
                    <li py-1>Cloud</li>
                </ul>
            </div>

            <div>
                <h6 className='font-bold uppercase pt-2'>Support</h6>
                <ul>
                    <li className='py-1'>Pricing</li>
                    <li className='py-1'>Marketing</li>
                    <li className='py-1'>Analystics</li>
                    <li className='py-1'>Commerce</li>
                    <li className='py-1'>Data</li>
                    <li py-1>Cloud</li>
                </ul>
            </div>

            <div>
                <h6 className='font-bold uppercase pt-2'>Support</h6>
                <ul>
                    <li className='py-1'>Pricing</li>
                    <li className='py-1'>Marketing</li>
                    <li className='py-1'>Analystics</li>
                    <li className='py-1'>Commerce</li>
                    <li className='py-1'>Data</li>
                    <li py-1>Cloud</li>
                </ul>
            </div>

            <div>
                <h6 className='font-bold uppercase pt-2'>Support</h6>
                <ul>
                    <li className='py-1'>Pricing</li>
                    <li className='py-1'>Marketing</li>
                    <li className='py-1'>Analystics</li>
                    <li className='py-1'>Commerce</li>
                    <li className='py-1'>Data</li>
                    <li py-1>Cloud</li>
                </ul>
            </div>

            <div className='col-span-2 pt-8 mt-8 md:pt-2'>
                <p className='font-bold uppercase'>Subcribe to our newsletter</p>
                <p className='py-4'>The letest news, articles, and resources, sent to inbox weekly</p>

                <form className='flex flex-col sm:flex-row' onSubmit={{submit}}>
                    <input
                     type="email"
                     placeholder='Enter Email..'
                     className='w-full p-2 mr-4 rounded-md mb-4 text-black font-bold'
                     value={subscribe}
                     onChange={(e) =>setSubscribe(e.target.value)}
                      />
                      <button className='p-2 mb-4 bg-[#090f1f] rounded-2xl py-4' type='submit'>Subscribe</button>
                </form>
            </div>
            

        </div>

        <div className='-flex flex-col max-w-[1240px] px-2 py-4 mx-auto justify-between sm:flex-row text-center text-gray-500'>
             <p className='py-4'>@{year} workflow, CLL. All rights reserved</p>
             <div className='flex justify-between sm:w-[300px] pt-4 text-2xl'>
             <a href="https://www.linkedin.com/in/onuegbu-confidence-24109628a/" target='blank' rel='noopener noreferrer'> <AiFillLinkedin/> </a>
             <a href="https://github.com/confidence011" target='blank' rel='noopener noreferrer'> <AiFillGithub/> </a>
             <a href="https://www.linkedin.com/in/onuegbu-confidence-24109628a/" target='blank' rel='noopener noreferrer'> <AiFillFacebook/> </a>
             <a href="https://www.linkedin.com/in/onuegbu-confidence-24109628a/" target='blank' rel='noopener noreferrer'> <BsInstagram/> </a>
       
        </div>

        </div>

      </div>
    </div>
  )
}

export default Footer
 