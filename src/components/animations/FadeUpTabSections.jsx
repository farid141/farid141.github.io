import { motion } from "framer-motion";

const FadeUpTabSection = ({ children, animKey }) => {
  return (
    <motion.div
      key={animKey} // PENTING: Untuk mentrigger ulang animasi
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
    >
      {children}
    </motion.div>
  );
};

export default FadeUpTabSection;