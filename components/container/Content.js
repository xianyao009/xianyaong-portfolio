import { motion } from "framer-motion";
import { Container } from "@chakra-ui/react";

const variants = {
  hidden: { opacity: 0, x: 0, y: -20 },
  enter: { opacity: 1, x: 0, y: 0 },
};

const Content = (props) => {
  return (
    <>
      <Container mt={10} centerContent maxW="2xl">
        <motion.div
          initial="hidden"
          animate="enter"
          variants={variants}
          transition={{ duration: 0.4, delay: 0.2, type: "easeInOut" }}
        >
          {props.content}
        </motion.div>
      </Container>
    </>
  );
};

export default Content;
