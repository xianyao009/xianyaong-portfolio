import SocialMediaIcon from "../ui/SocialMediaIcon";
import { FaGithub } from "react-icons/fa";
import {
  Card,
  CardBody,
  CardFooter,
  Center,
  Divider,
  Link,
  Heading,
  Stack,
  SimpleGrid,
  Text,
  useBreakpointValue,
} from "@chakra-ui/react";

const ProjectsContainer = () => {
  const gridColumns = useBreakpointValue({ base: 1, md: 2 });

  return (
    <>
      <Center>
        <Heading>My Projects</Heading>
      </Center>
      <SimpleGrid columns={gridColumns}>
        <Card maxW="250" m={10}>
          <CardBody>
            <Stack>
              <Link href="https://xianyaong.com" isExternal>
                <Heading>Portfolio Website</Heading>
              </Link>
              <Text>
                A personal portfolio website showcasing my projects, skills, and
                experiences, built with React, Next.js, and Chakra UI.
              </Text>
            </Stack>
          </CardBody>
          <Divider />
          <CardFooter>
            <SocialMediaIcon
              href="https://github.com/xianyao009/xianyaong-portfolio"
              label="github"
              icon={FaGithub}
              iconSize="1.25rem"
            />
          </CardFooter>
        </Card>

        <Card maxW="250" m={10}>
          <CardBody>
            <Stack>
              <Heading>Taskdone To-do List</Heading>
              <Text>
                A simple and intuitive to-do list web application, built with
                React, Next.js and Chakra UI.
              </Text>
            </Stack>
          </CardBody>
          <Divider />
          <CardFooter>
            <SocialMediaIcon
              href="https://github.com/xianyao009/taskdone"
              label="github"
              icon={FaGithub}
              iconSize="1.25rem"
            />
          </CardFooter>
        </Card>
      </SimpleGrid>
    </>
  );
};

export default ProjectsContainer;
