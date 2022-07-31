import { motion } from "framer-motion";

const variants = {
  hidden: { opacity: 0, x: 0, y: -20 },
  enter: { opacity: 1, x: 0, y: 0 },
};

const Content = (props) => {
  return (
    <>
      <motion.div
        initial="hidden"
        animate="enter"
        variants={variants}
        transition={{ duration: 0.4, delay: 0.2, type: "easeInOut" }}
      >
        {props.content}
      </motion.div>
    </>
  );
};

export default Content;
