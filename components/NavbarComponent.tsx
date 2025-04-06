import { MenuIcon, SearchIcon } from 'lucide-react'
import Image from 'next/image'
import React from 'react'

const NavbarComponent = () => {
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light w-screen h-full flex flex-row gap-y-4 items-center justify-between shadow-md px-4 py-5">

            <div id='LEFT' className='flex gap-x-2 pl-2 items-center'>
                <MenuIcon />
                <Image src="/Logo.svg" alt="Logo" width={150} height={250} className="navbar-brand" />
            </div>

            <div id="CENTER" className='items-center justify-center hidden lg:flex w-1/3'>
                <SearchIcon className='translate-x-10 w-8 h-5' />
                <input type="search" name="search" id="NAVBAR___SEARCH" className='border-2 border-red-800 rounded-full px-4 py-1 w-full relative top-0 left-0' placeholder='جستجو کنید' dir='rtl' />
            </div>

            <div id="RIGHT">
                <ul className="navbar-nav flex flex-row gap-x-4 pr-4 items-center">
                    <li className="nav-item gap-x-1  items-center hidden lg:flex">
                        <a className="text-sm nav-link bg-emerald-600 hover:bg-emerald-800 duration-300 text-white font-bold tracking-tight rounded px-4 py-1 lg:text-xl" href="#">ورود</a>
                        <a className="text-sm nav-link bg-sky-600 hover:bg-sky-800 duration-300 text-white font-bold tracking-tight rounded px-4 py-1 whitespace-nowrap  lg:text-xl" href="#">ثبت نام</a>
                    </li>
                    <li className="nav-item flex gap-x-2">
                        <Image src="/flag_iran.png" alt="Logo" width={50} height={250} className="scale-75 lg:scale-100 navbar-brand rounded cursor-pointer" />
                        <Image src="/flag_england.png" alt="Logo" width={50} height={250} className="scale-75 lg:scale-100 navbar-brand rounded cursor-pointer" />
                    </li>
                    <li>
                        <input type="checkbox" className="peer sr-only opacity-0" id="toggle" />
                        <label htmlFor="toggle" className="relative flex h-6 w-11 cursor-pointer items-center rounded-full bg-gray-400 px-0.5 outline-gray-400 transition-colors before:h-5 before:w-5 before:rounded-full before:bg-white before:shadow before:transition-transform before:duration-300 peer-checked:bg-slate-500 peer-checked:before:translate-x-full peer-focus-visible:outline peer-focus-visible:outline-offset-2 peer-focus-visible:outline-gray-400 peer-checked:peer-focus-visible:outline-green-500">
                            <span className="sr-only">Enable</span>
                        </label>
                    </li>
                </ul>
            </div>
        </nav>
    )
}

export default NavbarComponent