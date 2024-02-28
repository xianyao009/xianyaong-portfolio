import { motion } from "framer-motion";
import {
  Box,
  Center,
  Heading,
  List,
  ListItem,
  Text,
  Tab,
  Tabs,
  TabList,
  TabPanels,
  TabPanel,
} from "@chakra-ui/react";

const ExperienceContainer = () => {
  return (
    <>
      <Center>
        <Heading>Where I&apos;ve Worked</Heading>
      </Center>

      <Box mt={10}>
        <Tabs colorScheme="gray" isFitted isLazy>
          <TabList>
            <Tab>Tegus</Tab>
            <Tab>Canalyst</Tab>
            <Tab>Noratek Solutions Inc</Tab>
          </TabList>
          <Box mt={3}>
            <Center>
              <TabPanels ml={3} maxW="90%">
                <TabPanel>
                  <motion.div
                    initial={{ opacity: 0, x: 0, y: -20 }}
                    animate={{ opacity: 1, x: 0, y: 0 }}
                    transition={{
                      duration: 0.5,
                      type: "easeInOut",
                    }}
                  >
                    <Heading size="md">Software Engineer I</Heading>
                    <Text fontSize={14}>March 2024 - Present</Text>
                    <Text fontSize={14}>
                      Vancouver, British Columbia, Canada
                    </Text>
                    <List styleType="disc" spacing={2} mt={5}>
                      <ListItem>
                        Developed and maintained C#/.NET application for clients
                        to update their customized financial models
                      </ListItem>
                      <ListItem>
                        Ensured code quality by participating in code reviews,
                        adding unit tests and refactoring
                      </ListItem>
                    </List>
                    <Box as="br" />
                    <Heading size="md">Software Engineer Co-op</Heading>
                    <Text fontSize={14}>May 2023 - August 2023</Text>
                    <Text fontSize={14}>
                      Vancouver, British Columbia, Canada
                    </Text>
                    <List styleType="disc" spacing={2} mt={5}>
                      <ListItem>
                        Developed and maintained C#/.NET application for clients
                        to update their customized financial models
                      </ListItem>
                      <ListItem>
                        Ensured code quality by participating in code reviews,
                        adding unit tests and refactoring
                      </ListItem>
                      <ListItem>
                        Collaborated with a senior software engineer to develop
                        a robust smoke testing runner for the C# updater
                        application
                      </ListItem>
                    </List>
                    <Box as="br" />
                    <Heading size="md">Software Engineer Co-op</Heading>
                    <Text fontSize={14}>August 2022 - December 2022</Text>
                    <Text fontSize={14}>
                      Vancouver, British Columbia, Canada
                    </Text>
                    <List styleType="disc" spacing={2} mt={5}>
                      <ListItem>
                        Developed and maintained C#/.NET application for clients
                        to update their customized financial models
                      </ListItem>
                      <ListItem>
                        Ensured code quality by participating in code reviews,
                        adding unit tests and refactoring
                      </ListItem>
                    </List>
                  </motion.div>
                </TabPanel>
                <TabPanel>
                  <motion.div
                    initial={{ opacity: 0, x: 0, y: -20 }}
                    animate={{ opacity: 1, x: 0, y: 0 }}
                    transition={{
                      duration: 0.5,
                      type: "easeInOut",
                    }}
                  >
                    <Heading size="md">Software Engineer Co-op</Heading>
                    <Text fontSize={14}>May 2022 - August 2022</Text>
                    <Text fontSize={14}>
                      Vancouver, British Columbia, Canada
                    </Text>
                    <List styleType="disc" spacing={2} mt={5}>
                      <ListItem>
                        Developed and maintained both an executable application
                        and VSTO using C# to automate financial model
                        customizations and updating for investors as earnings
                        are released
                      </ListItem>
                      <ListItem>
                        Used React, TypeScript to create an Excel Office Add-in
                        with custom functions for clients to pull financial
                        information from Canalyst&apos;s proprietary API
                      </ListItem>
                      <ListItem>
                        Completed code reviews to ensure code quality and
                        correctness of code
                      </ListItem>
                      <Text as="i" fontSize={14}>
                        * Canalyst was acquired by Tegus in August 2022
                      </Text>
                    </List>
                  </motion.div>
                </TabPanel>
                <TabPanel>
                  <motion.div
                    initial={{ opacity: 0, x: 0, y: -20 }}
                    animate={{ opacity: 1, x: 0, y: 0 }}
                    transition={{
                      duration: 0.5,
                      type: "easeInOut",
                    }}
                  >
                    <Heading size="md">Software QA Developer Co-op</Heading>
                    <Text fontSize={14}>January 2022 - April 2022</Text>
                    <Text fontSize={14}>
                      Prince George, British Columbia, Canada
                    </Text>
                    <List styleType="disc" spacing={2} mt={5}>
                      <ListItem>
                        Performing functional, regression, and integration
                        testing of web applications
                      </ListItem>
                      <ListItem>
                        Executing manual and automated testing based on the
                        understanding of the requirements
                      </ListItem>
                      <ListItem>
                        Design automated tests using TestComplete.
                      </ListItem>
                    </List>
                  </motion.div>
                </TabPanel>
              </TabPanels>
            </Center>
          </Box>
        </Tabs>
      </Box>
    </>
  );
};

export default ExperienceContainer;
