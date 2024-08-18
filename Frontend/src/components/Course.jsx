import React from 'react'
import Navbar from './Navbar'
import Footer from './Footer'
import List from '../../public/list.json'
import Cards from './cards'
import { Link } from 'react-router-dom'

function Course() {
  return (
    <>
    <div className='max-w-screen-2xl container mx-auto md:px-20 px-4 '>
        <div className='mt-20 items-center justify-center text-center'>
            <h1 className='text-2xl  md:text-4xl '>
                we're delighted to have you <span className='text-pink-500'>Here!!</span>
            </h1>
                <p className='mt-12 text-center'>
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
                </p>
                <Link to={'/'}>
                <button className='bg-pink-500 text-white px-4 py-2 rounded-md hover:bg-pink-700 duration-200 mt-4'>Back</button>
                </Link>
        </div>
        <div className='mt-12 grid grid-cols-1 md:grid-cols-3  my-3'>
        {List.map((item)=>( 
            <Cards item={item} key={item.id} keys={item.image="https://img.freepik.com/free-vector/book-logo-collection-flat-design_23-2148818904.jpg?t=st=1721310026~exp=1721313626~hmac=14da1c5618c3873ae94714db9fc2d7e4cf896fec6e9240567e1ea9a0da34aac6&w=740"}/>
        )) }
        </div>
    </div>
    </>
  )
}

export default Course