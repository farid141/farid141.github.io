import { motion } from "framer-motion";

// 1. Wrapper untuk Grid (Parent)
export const StaggerContainer = ({ children }) => (
  <motion.div
    initial="hidden"
    whileInView="visible"
    viewport={{ margin: "-50px" }}
    variants={{
      hidden: { opacity: 0 },
      visible: {
        opacity: 1,
        transition: { staggerChildren: 0.15 } // Jeda antar kartu
      }
    }}
  >
    {children}
  </motion.div>
);

// 2. Wrapper untuk tiap Kartu (Child)
export const SkillCardAnim = ({ children }) => (
  <motion.div
    variants={{
      hidden: { opacity: 0, y: 20 },
      visible: { opacity: 1, y: 0, transition: { duration: 0.5 } }
    }}
    whileHover={{ y: -5 }} // Efek melayang saat kursor di atasnya
  >
    {children}
  </motion.div>
);

// 3. Wrapper untuk Ikon Logo (Pop-in effect)
export const LogoAnim = ({ children }) => (
  <motion.div
    whileHover={{ scale: 1.2, rotate: 5 }}
    whileTap={{ scale: 0.9 }}
    transition={{ type: "spring", stiffness: 400, damping: 17 }}
  >
    {children}
  </motion.div>
);