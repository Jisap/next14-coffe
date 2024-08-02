import { motion } from "framer-motion"
import Link from "next/link"



const links = [
  { href: "/", name: "Home" },
  { href: "/", name: "Explore" },
  { href: "/", name: "About" },
  { href: "/", name: "Menu" },
  { href: "/", name: "Contact" },
];

const getLetter = (name) => {
  let letters = [];
  name.split("").forEach((letter, index) => {
    letters.push(
      <motion.span 
        key={index}
        variants={letterAnim}
        initial="initial"
        animate="enter"
        exit="exit"
        custom={[index * 0.1, (name.length - index) * 0.05]} // propiedad personalizada que define los retrasos para las animaciones de entrada y salida.
      >
        {letter}
      </motion.span>
    )
  })
  return letters;
}

const letterAnim = {
  initial: {
    y: "150%",
    opacity: 0,
  },
  enter: (i) => ({
    y: 0,
    opacity: 1,
    transition:{
      duration: 1,
      ease: [0.60,0, 0.20, 1],
      delay: i[0]
    },
  }),
  exit: (i) => ({
    y: "150%",
    opacity: 0,
    transition: {
      duration: 0.8,
      ease: [0.60, 0, 0.20, 1],
      delay: i[1]
    },
  }),
}


const NavList = () => {
  return (
    <ul className="flex flex-col gap-8 font-primary text-4xl font-semibold text-accent items-center uppercase">
      {links.map((link, index) => {
        return (
          <Link href={link.href} key={index} className="flex overflow-hidden hover:text-white transition-all">
            {getLetter(link.name)}
          </Link>
        )
      })}
    </ul>
  )
}

export default NavList