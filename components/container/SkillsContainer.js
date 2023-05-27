import {
  Box,
  Center,
  SimpleGrid,
  Icon,
  Text,
  Heading,
  useBreakpointValue,
} from "@chakra-ui/react";
import { motion } from "framer-motion";
import { DiJsBadge, DiReact, DiGit, DiNodejs, DiMongodb } from "react-icons/di";
import { SiCsharp, SiNextdotjs, SiChakraui, SiHtml5 } from "react-icons/si";

const SkillsContainer = () => {
  const gridColumns = useBreakpointValue({ base: 2, md: 4 });

  return (
    <>
      <Center>
        <Heading>My Skills</Heading>
      </Center>
      <SimpleGrid columns={gridColumns} spacing={14} mt={10}>
        <Box
          as={motion.div}
          whileHover={{ scale: 1.1 }}
          align="center"
          w="100px"
        >
          <Icon as={DiJsBadge} boxSize={24} />
          <Text>JavaScript</Text>
        </Box>
        <Box
          as={motion.div}
          whileHover={{ scale: 1.1 }}
          align="center"
          w="100px"
        >
          <Icon as={SiCsharp} boxSize={24} />
          <Text>C#</Text>
        </Box>
        <Box
          as={motion.div}
          whileHover={{ scale: 1.1 }}
          align="center"
          w="100px"
        >
          <Icon as={SiHtml5} boxSize={24} />
          <Text>HTML5</Text>
        </Box>
        <Box
          as={motion.div}
          whileHover={{ scale: 1.1 }}
          align="center"
          w="100px"
        >
          <Icon as={DiReact} boxSize={24} />
          <Text>React</Text>
        </Box>
        <Box
          as={motion.div}
          whileHover={{ scale: 1.1 }}
          align="center"
          w="100px"
        >
          <Icon as={DiNodejs} boxSize={24} />
          <Text>Node.js</Text>
        </Box>
        <Box
          as={motion.div}
          whileHover={{ scale: 1.1 }}
          align="center"
          w="100px"
        >
          <Icon as={DiGit} boxSize={24} />
          <Text>Git</Text>
        </Box>
        <Box
          as={motion.div}
          whileHover={{ scale: 1.1 }}
          align="center"
          w="100px"
        >
          <Icon as={DiMongodb} boxSize={24} />
          <Text>MongoDB</Text>
        </Box>
        <Box
          as={motion.div}
          whileHover={{ scale: 1.1 }}
          align="center"
          w="100px"
        >
          <Icon as={SiNextdotjs} boxSize={24} />
          <Text>Next.js</Text>
        </Box>
        <Box
          as={motion.div}
          whileHover={{ scale: 1.1 }}
          align="center"
          w="100px"
        >
          <Icon as={SiChakraui} boxSize={24} />
          <Text>Chakra UI</Text>
        </Box>
      </SimpleGrid>
    </>
  );
};

export default SkillsContainer;
