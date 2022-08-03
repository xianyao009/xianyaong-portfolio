import { Box, Center, Heading } from "@chakra-ui/react";

const ProjectsContainer = () => {
  return (
    <>
      <Center>
        <Heading>My Projects</Heading>
      </Center>
      <Center>
        <Box mt={3}>404 Projects Not Found</Box>
      </Center>
    </>
  );
};

export default ProjectsContainer;
