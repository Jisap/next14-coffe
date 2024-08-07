"use client"

import Image from "next/image"
import Link from "next/link"
import { FaFacebook, FaTwitter, FaInstagram, FaYoutube } from 'react-icons/fa'
import { Link as ScrollLink } from "react-scroll";

// const links = [
//   { href: "/", name: "Home" },
//   { href: "/", name: "Explore" },
//   { href: "/", name: "About" },
//   { href: "/", name: "Menu" },
//   { href: "/", name: "Contact" },
// ];

const links = [
  { name: 'Home', target: 'hero', offset: -100 },
  { name: 'Explore', target: 'explore', offset: -80 },
  { name: 'About', target: 'about', offset: -40 },
  { name: 'Menu', target: 'menu', offset: 0 },
]


const Footer = () => {
  return (
    <footer className='bg-footer bg-cover bg-no-repeat pt-16 relative'>
      {/* overlay */}
      <div className="absolute w-full h-full bg-black/[0.90] z-10 top-0"></div>
      <div className="container mx-auto z-20 relative">
        <div className="flex flex-col items-center justify-center gap-14">
          {/* logo */}
          <Link href='/' className="relative w-[120px] h-[50px] mx-auto">
            <Image 
              src='/assets/logo.svg'
              fill
              alt=''
              className="objecto-contain"
            />
          </Link>
          {/* nav */}
          <nav className="flex flex-col xl:flex-row gap-8 xl:gap-12 justify-center items-center">
            
            {/* {links.map((link, index) => {
              return (
                <Link href={link.href} key={index} className="uppercase text-white tracking-widest hover:text-accent transition-all">
                  {link.name}
                </Link>
              )
            })} */}

            {
              links.map((link, index) => {
                return (
                  <ScrollLink
                    offset={link.offset}
                    to={link.target}
                    smooth
                    spy
                    activeClass='active'
                    key={index}
                    className="uppercase text-white tracking-widest hover:text-accent transition-all"
                  >
                    {link.name}
                  </ScrollLink>
                )
              })
            }

          </nav>
          {/* social */}
          <ul className="flex text-white text-xl gap-4">
            <Link 
              href='/'
              className="w-[54px] h-[54px] text-secondary border border-white/[0.15] rounded-full flex items-center justify-center hover:text-accent transition-all"  
            >
              <FaYoutube />
            </Link>
            <Link
              href='/'
              className="w-[54px] h-[54px] text-secondary border border-white/[0.15] rounded-full flex items-center justify-center hover:text-accent transition-all"
            >
              <FaFacebook />
            </Link>
            <Link
              href='/'
              className="w-[54px] h-[54px] text-secondary border border-white/[0.15] rounded-full flex items-center justify-center hover:text-accent transition-all"
            >
              <FaYoutube />
            </Link>
            <Link
              href='/'
              className="w-[54px] h-[54px] text-secondary border border-white/[0.15] rounded-full flex items-center justify-center hover:text-accent transition-all"
            >
              <FaTwitter />
            </Link>
            <Link
              href='/'
              className="w-[54px] h-[54px] text-secondary border border-white/[0.15] rounded-full flex items-center justify-center hover:text-accent transition-all"
            >
              <FaInstagram />
            </Link>
          </ul>
          {/* copyright */}
          <div className="border-t border-white/10 text-[15px] text-white/70 font-light w-full flex items-center justify-center py-6">
            <p>
              &copy; Copyright 2024 - Zenbrew. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer