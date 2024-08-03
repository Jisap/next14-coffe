import { motion } from "framer-motion"
import Link from "next/link"



const links = [
  { href: "/", name: "Home" },
  { href: "/", name: "Explore" },
  { href: "/", name: "About" },
  { href: "/", name: "Menu" },
  { href: "/", name: "Contact" },
];

const getLetter = (name) => {                               // getLetter recibe un nombre (name), 
  let letters = [];
  name.split("").forEach((letter, index) => {               // lo divide en letras, y devuelve un array de elementos motion.span con animaciones.
    letters.push(
      <motion.span 
        key={index}
        variants={letterAnim}
        initial="initial"
        animate="enter"
        exit="exit"
        custom={[                                           // Propiedad personalizada que define los retrasos para las animaciones de entrada y salida.
          index * 0.1,                                      // retraso para la animación de entrada
          (name.length - index) * 0.05                      // retraso para la animación de salida.
        ]} 
      >
        {letter}
      </motion.span>
    )
  })
  return letters;
}

const letterAnim = {                                          // Define las animaciones para los estados initial, enter y exit de las letras.
  
  initial: {                                                  // Estado inicial        
    y: "150%",                                                // (fuera de la vista hacia abajo)
    opacity: 0,                                               // (transparente)
  },
  enter: (i) => ({                                            // Cuando comienza la animación se toma el array custom
    y: 0,                                                     // Se muestra la letra
    opacity: 1,
    transition:{                                              // Con su transición
      duration: 1,
      ease: [0.60,0, 0.20, 1],
      delay: i[0]                                             // y su retraso (primer valor del array custom)
    },
  }),
  exit: (i) => ({                                             // Cuando termina la animación
    y: "150%",                                                // se vuelve a ocultar
    opacity: 0,
    transition: {                                             // usando su transición
      duration: 0.8,
      ease: [0.60, 0, 0.20, 1],
      delay: i[1]                                             // y su retrado (segundo valor del array custom)
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