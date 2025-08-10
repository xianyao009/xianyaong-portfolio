import { motion } from "framer-motion";
import {
  Box,
  Center,
  Divider,
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
            <Tab>AlphaSense</Tab>
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
                    <Text fontSize={14}>January 2025 - Present</Text>
                    <Text fontSize={14}>
                      Vancouver, British Columbia, Canada
                    </Text>
                    <List styleType="disc" spacing={2} mt={5}>
                      <ListItem>
                        Developed and maintained data pipelines to provide
                        accurate and timely financial data as a vendor, enabling
                        other teams within the company to efficiently consume
                        and utilize this data for their services
                      </ListItem>
                      <ListItem>
                        Designed and built a full-stack internal application for
                        analysts to interact with and analyze financial filings,
                        enhancing data accessibility and workflow efficiency.
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
                    <Heading size="md">Software Engineer I</Heading>
                    <Text fontSize={14}>March 2024 - January 2025</Text>
                    <Text fontSize={14}>
                      Vancouver, British Columbia, Canada
                    </Text>
                    <List styleType="disc" spacing={2} mt={5}>
                      <ListItem>
                        Focus on managing and optimizing backend entity data
                        using Python to support various applications and
                        services
                      </ListItem>
                      <ListItem>
                        Improved data integrity and quality using PostgreSQL by
                        implementing data validation checks and monitoring
                      </ListItem>
                      <Box as="br" />
                      <Divider w="100%" borderColor="gray.400" mt={40} />
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
                      <Box as="br" />
                      <Divider w="100%" borderColor="gray.400" mt={40} />
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
                      <Box as="br" />
                      {/* <Divider w="100%" borderColor="gray.400" mt={40} /> */}
                      <Text as="i" fontSize={12}>
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
                    <Heading size="md">Junior Software Developer Co-op</Heading>
                    <Text fontSize={14}>January 2022 - April 2022</Text>
                    <Text fontSize={14}>
                      Prince George, British Columbia, Canada
                    </Text>
                    <List styleType="disc" spacing={2} mt={5}>
                      <ListItem>
                        Learned and utilized CityReporter for project tasks and
                        development
                      </ListItem>
                      <ListItem>
                        Worked with the development team on a range of projects,
                        including:
                        <List styleType="circle" spacing={1} mt={2} ml={4}>
                          <ListItem>
                            Creating and updating reports using Jasper Studio.
                          </ListItem>
                          <ListItem>
                            Developing and maintaining Grails applications.
                          </ListItem>
                          <ListItem>
                            Enhancing Flex-based applications.
                          </ListItem>
                          <ListItem>
                            Working on jQuery and Leaflet-based web
                            applications.
                          </ListItem>
                          <ListItem>
                            Developing Xamarin-based mobile applications.
                          </ListItem>
                        </List>
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
