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
import {
  DiJava,
  DiGithubBadge,
  DiReact,
  DiGit,
  DiNodejs,
  DiPython,
  DiDjango,
} from "react-icons/di";
import {
  SiVisualstudio,
  SiVisualstudiocode,
  SiPostgresql,
  SiMongodb,
  SiJavascript,
  SiTypescript,
  SiCsharp,
  SiNextdotjs,
  SiChakraui,
  SiHtml5,
  SiCss3,
  SiIntellijidea,
} from "react-icons/si";
import { AiFillGitlab } from "react-icons/ai";

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
          <Icon as={DiPython} boxSize={24} />
          <Text>Python</Text>
        </Box>
        <Box
          as={motion.div}
          whileHover={{ scale: 1.1 }}
          align="center"
          w="100px"
        >
          <Icon as={DiDjango} boxSize={24} />
          <Text>Django</Text>
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
          <Icon as={SiPostgresql} boxSize={24} />
          <Text>PostgreSQL</Text>
        </Box>
        <Box
          as={motion.div}
          whileHover={{ scale: 1.1 }}
          align="center"
          w="100px"
        >
          <Icon as={SiJavascript} boxSize={24} />
          <Text>JavaScript</Text>
        </Box>
        <Box
          as={motion.div}
          whileHover={{ scale: 1.1 }}
          align="center"
          w="100px"
        >
          <Icon as={SiTypescript} boxSize={24} />
          <Text>TypeScript</Text>
        </Box>
        <Box
          as={motion.div}
          whileHover={{ scale: 1.1 }}
          align="center"
          w="100px"
        >
          <Icon as={DiJava} boxSize={24} />
          <Text>Java</Text>
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
          <Icon as={SiCss3} boxSize={24} />
          <Text>CSS3</Text>
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
          <Icon as={SiMongodb} boxSize={24} />
          <Text>MongoDB</Text>
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
          <Icon as={AiFillGitlab} boxSize={24} />
          <Text>GitLab</Text>
        </Box>

        <Box
          as={motion.div}
          whileHover={{ scale: 1.1 }}
          align="center"
          w="100px"
        >
          <Icon as={DiGithubBadge} boxSize={24} />
          <Text>GitHub</Text>
        </Box>
        <Box
          as={motion.div}
          whileHover={{ scale: 1.1 }}
          align="center"
          w="100px"
        >
          <Icon as={SiVisualstudio} boxSize={24} />
          <Text>Visual Studio</Text>
        </Box>
        <Box
          as={motion.div}
          whileHover={{ scale: 1.1 }}
          align="center"
          w="100px"
        >
          <Icon as={SiVisualstudiocode} boxSize={24} />
          <Text>VS Code</Text>
        </Box>
        <Box
          as={motion.div}
          whileHover={{ scale: 1.1 }}
          align="center"
          w="100px"
        >
          <Icon as={SiIntellijidea} boxSize={24} />
          <Text>IntelliJ IDEA</Text>
        </Box>
      </SimpleGrid>
    </>
  );
};

export default SkillsContainer;
