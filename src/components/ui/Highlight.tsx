
import { motion } from "framer-motion"

function Highlight({children} : {children : string}) {
  return (
    
      <motion.span
     initial={{ backgroundSize: "0% 100%" }}
     animate={{ backgroundSize: "100% 100%" }}
     transition={{ duration: 0.8 }}
     className="bg-gradient-to-r from-red-300 to-yellow-300 bg-no-repeat px-2">
  <span>{children}</span>
</motion.span> 
    
  )
}

export default Highlight
