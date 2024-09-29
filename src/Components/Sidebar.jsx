import React from 'react'
import { Link } from 'react-router-dom'

const Sidebar = () => {
  return (
    <div className='fixed top-1/3 right-0 bg-white/10 w-14 h-32 flex flex-col items-center justify-around gap-4 p-3 px-8 rounded-l-lg shadow-md border border-gray-200 z-50'>
        
        {/* Instagram */}
        <div className='group'>
            <Link to="https://www.instagram.com/myvisapoint6" target="_blank">
                <div className="w-10 h-10 flex items-center justify-center rounded-full bg-gradient-to-tr from-yellow-400 via-pink-500 to-purple-500 shadow-sm group-hover:shadow-md transition-shadow duration-300">
                    <i className="fa-brands fa-instagram fa-lg text-white"></i>
                </div>
            </Link>
        </div>
        
        {/* WhatsApp */}
        <div className='group'>
            <Link to="https://wa.me/918146880060
" target="_blank">
                <div className="w-10 h-10 flex items-center justify-center rounded-full bg-[#25D366] shadow-sm group-hover:shadow-md transition-shadow duration-300">
                    <i className="fa-brands fa-whatsapp fa-lg text-white"></i>
                </div>
            </Link>
        </div>
    </div>
  )
}

export default Sidebar
