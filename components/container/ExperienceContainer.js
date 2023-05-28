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
                    <Heading size="sm">Software Engineer Co-op</Heading>
                    <Text fontSize={14}>September 2022 - December 2022</Text>
                    <Text fontSize={14}>May 2023 - August 2023</Text>
                    <List styleType="disc" spacing={2} mt={5}>
                      <ListItem>
                        Developed and maintained C# and Node.js application for
                        financial analysts to ensure consistency and accuracy
                        across public equity models.
                      </ListItem>
                      <ListItem>
                        Used HTML, CSS and Typescript to create an Excel Office
                        Add-in with custom functions for clients to pull
                        financial information from Tegus’s proprietary API
                      </ListItem>
                      <ListItem>
                        Refactored original functionalities to accommodate
                        software design changes and added unit tests
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
                    <Heading size="sm">Software Engineer Co-op</Heading>
                    <Text fontSize={14}>May 2022 - August 2022</Text>
                    <List styleType="disc" spacing={2} mt={5}>
                      <ListItem>
                        Developed and maintained C# and Node.js application for
                        financial analysts to ensure consistency and accuracy
                        across public equity models.
                      </ListItem>
                      <ListItem>
                        Used HTML, CSS and Typescript to create an Excel Office
                        Add-in with custom functions for clients to pull
                        financial information from Canalyst’s proprietary API
                      </ListItem>
                      <ListItem>
                        Refactored original functionalities to accommodate
                        software design changes and added unit tests
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
                    <Heading size="sm">Software QA Developer Co-op</Heading>
                    <Text fontSize={14}>January 2022 - April 2022</Text>
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
