import React from 'react'
import { FaReact } from "react-icons/fa";
import { IoMenu } from 'react-icons/io5';






const Header = () => {
    return (
        <header className="fixed top-0 left-0 right-0 z-50">
            <div className="navbar bg-black/80 backdrop-blur-md border-b border-white/10 px-5 md:px-10 py-4 transition-all duration-300">

                <div className="navbar-start">
                    <a className="flex items-center gap-3 text-white hover:opacity-80 transition-opacity" href="/">
                        <div className="relative h-10 w-10 overflow-hidden rounded-full border border-white/20">
                            <img src="/inner-logo.jpg" alt="Inner Circle Logo" className="h-full w-full object-cover" />
                        </div>
                        <span className="text-xl font-light tracking-wide">Inner Circle</span>
                    </a>
                </div>

                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1 text-white/80 font-light tracking-wide">
                        <li><a className="hover:text-white hover:bg-white/10 transition-colors">Hjem</a></li>
                        <li><a className="hover:text-white hover:bg-white/10 transition-colors">Om oss</a></li>
                        <li><a className="hover:text-white hover:bg-white/10 transition-colors">Medlemskap</a></li>
                    </ul>
                </div>

                <div className="navbar-end">
                    <a className="hidden md:flex btn btn-outline btn-sm text-white hover:bg-white hover:text-black border-white/20 font-light rounded-full px-6 transition-all duration-300">
                        Logg inn
                    </a>

                    <div className="dropdown dropdown-end md:hidden">
                        <div tabIndex={0} role="button" className="btn btn-ghost btn-circle text-white">
                            <IoMenu className='w-6 h-6' />
                        </div>
                        <ul tabIndex={-1} className="dropdown-content bg-zinc-900 border border-zinc-800 p-2 menu rounded-box z-1 w-52 shadow-xl mt-4">
                            <li><a className="text-white/90 hover:bg-zinc-800">Hjem</a></li>
                            <li><a className="text-white/90 hover:bg-zinc-800">Om oss</a></li>
                            <li><a className="text-white/90 hover:bg-zinc-800">Medlemskap</a></li>
                            <div className="divider my-1 border-zinc-800"></div>
                            <li><a className="text-silver-400 hover:bg-zinc-800">Logg inn</a></li>
                        </ul>
                    </div>
                </div>
            </div>
        </header>
    )
}

export default Header