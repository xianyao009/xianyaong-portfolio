import { Box, Button, Heading, Text, Stack, Link } from "@chakra-ui/react";
import { FaGithub, FaLinkedin } from "react-icons/fa";

const HomeContainer = () => {
  return (
    <Stack spacing={2} alignItems="center" mt={16}>
      <Heading size="md" fontWeight="light">
        Hi, I&apos;m
      </Heading>
      <Heading size="3xl">Xian Yao</Heading>
      <Box w="80%">
        <Text pt={4}>
          I&apos;m currently working as a Software Engineer Co-op at{" "}
          <Link
            as="a"
            href="https://www.canalyst.com"
            color="blue.400"
            isExternal
          >
            Canalyst
          </Link>
          . I&apos;m also a final year Computer Science student at{" "}
          <Link as="a" href="https://www.uvic.ca" color="blue.400" isExternal>
            University of Victoria
          </Link>
          , Canada.
        </Text>
      </Box>
      <Stack direction="row" pt={7}>
        <Button
          as="a"
          size="lg"
          href="https://www.linkedin.com/in/xianyaong"
          target="_blank"
          leftIcon={<FaLinkedin />}
          colorScheme="messenger"
        >
          LinkedIn
        </Button>
        <Button
          as="a"
          size="lg"
          href="https://www.github.com/xianyao009"
          target="_blank"
          leftIcon={<FaGithub />}
        >
          GitHub
        </Button>
      </Stack>
    </Stack>
  );
};

export default HomeContainer;
