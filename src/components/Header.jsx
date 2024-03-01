import images from '../images/applogo.png'
import { Link } from 'react-router-dom'
import { BadgePercent, Home, Store, Contact, ShoppingCart } from 'lucide-react';



export const Header = () => {
    return (
        <div className='overflow-hidden flex justify-between items-center m-2
          max-sm:block max-md:px-1 
      shadow-lg shadow-gray-300 px-32'>

            <div className='flex justify-center'>
                <img src={images} alt="logo" className='w-36 ' />
            </div>

            <ul className='flex items-center justify-center'>
                <Link to={'/home'}>
                    <li className=' flex justify-center items-center outline-none mx-4 text-lg text-gray-500 font-semibold max-sm:text-sm max-sm:text-md max-sm:mx-[0.4em] hover:text-[#fe8f23] '>

                        <Home className='mx-1 text-gray-500 hover:text-[#fe8f23] w-[22px]' />
                        Home</li></Link>
                <Link to={'/about'}> <li
                    className=' flex justify-center items-center outline-none mx-4 text-lg text-gray-500 font-semibold max-sm:text-sm max-sm:text-md max-sm:mx-[0.4em] hover:text-[#fe8f23] '>

                    <Store className='mx-1 text-gray-500 hover:text-[#fe8f23] w-[22px]' />
                    About</li></Link>
                <Link className='flex items-center mx-2' to={'/contact'}>
                    <li
                        className=' flex justify-center items-center mx-2 outline-none text-lg text-gray-500 font-semibold max-sm:text-md max-sm:text-sm max-sm:mx-[0.4em] hover:text-[#fe8f23]' >

                        <Contact className='mx-1 text-gray-500 hover:text-[#fe8f23] w-[22px]' />
                        Contact us</li></Link>
                <Link
                    to={'/offers'}>
                    <li
                        className='flex justify-center items-center outline-none text-lg text-gray-500 font-semibold max-sm:text-md max-sm:text-sm max-sm:mx-[0.4em] hover:text-[#fe8f23]'>
                        <BadgePercent className='mx-1 text-gray-500 hover:text-[#fe8f23] w-[22px]' />
                        Offers</li></Link>
                <Link to={'/carts'}> <li
                    className=' flex justify-center items-center outline-none  mx-4 text-lg text-gray-500 max-sm:text-sm font-semibold max-sm:text-md max-sm:mx-[0.4em] hover:text-[#fe8f23]'>

                    <ShoppingCart className='mx-1 text-gray-500 hover:text-[#fe8f23] w-[22px]' />
                    Carts</li></Link>
            </ul>
        </div >
    )
}
