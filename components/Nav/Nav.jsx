import { motion } from "framer-motion"
import NavList from "./NavList"



const heightAnimation = {
  initial: {
    height: 0,
    opacity: 0,
  },
  open: {
    height: "85vh",
    opacity: 1,
    transition: {
      height: { duration:1.2, ease: [0.76, 0, 0.24, 1]},
      opacity: {duration: 0.8, delay: 0.4 }
    }
  },
  close: {
    height: 0,
    opacity: 0,
    transition: {
      height: { duration: 1, ease:[0.75, 0, 0.23, 1]},
      opacity: { duration: 0.6}
    }
  }
}

const Nav = () => {
  return (
    <motion.div
      variants={heightAnimation}
      initial="initial"
      animate="open"
      exit="close"
      className="bg-primary overflow-hidden absolute z-[50] -top-full w-full"
    >
      <motion.div 
        initial={{ y: 50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.8, duration: 0.5 }}
        className="container mx-auto h-full flex items-center justify-center">
        <NavList />

      </motion.div>
    </motion.div>
  )
}

export default Nav