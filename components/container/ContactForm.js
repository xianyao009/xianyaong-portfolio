import SocialMediaIcon from "../ui/SocialMediaIcon";
import { FaGithub, FaLinkedin, FaFacebook } from "react-icons/fa";
import { ArrowForwardIcon } from "@chakra-ui/icons";
import {
  Container,
  Center,
  Button,
  Box,
  ButtonGroup,
  IconButton,
  Flex,
  Wrap,
  WrapItem,
  Heading,
  FormControl,
  FormLabel,
  Input,
  InputGroup,
  Stack,
  Text,
  Textarea,
  useColorModeValue,
} from "@chakra-ui/react";

const Form = () => {
  return (
    <>
      <Container mt={10} maxW="full" centerContent>
        <Center>
          <Box color={useColorModeValue("gray.800", "whiteAlpha.900")}>
            <Wrap spacing={{ base: 20, sm: 3, md: 5, lg: 20 }}>
              <WrapItem>
                <Box>
                  <Heading>Get In Touch</Heading>
                  <Text color="gray.400" mt={{ sm: 3, md: 3, lg: 5 }}>
                    Fill up the form to contact me
                  </Text>
                  <Box mt={{ lg: 12, md: 10 }} align="center">
                    <ButtonGroup variant="ghost">
                      <SocialMediaIcon
                        href="https://www.linkedin.com/in/xianyaong"
                        label="linkedin"
                        icon={FaLinkedin}
                        iconSize="2rem"
                      />
                      <SocialMediaIcon
                        href="https://www.github.com/xianyao009"
                        label="github"
                        icon={FaGithub}
                        iconSize="2rem"
                      />
                      <SocialMediaIcon
                        href="https://www.facebook.com/xianyao009"
                        label="facebook"
                        icon={FaFacebook}
                        iconSize="2rem"
                      />
                    </ButtonGroup>
                  </Box>
                </Box>
              </WrapItem>
              <WrapItem>
                <Stack spacing={3}>
                  <FormControl id="name" isRequired>
                    <FormLabel>Name</FormLabel>
                    <InputGroup>
                      <Input
                        variant="filled"
                        focusBorderColor={useColorModeValue(
                          "gray.800",
                          "gray.400"
                        )}
                        type="text"
                        name="name"
                        placeholder="John Doe"
                        _placeholder={{ opacity: 0.3, color: "inherit" }}
                      />
                    </InputGroup>
                  </FormControl>
                  <FormControl id="email" isRequired>
                    <FormLabel>Email</FormLabel>
                    <InputGroup>
                      <Input
                        variant="filled"
                        focusBorderColor={useColorModeValue(
                          "gray.800",
                          "gray.400"
                        )}
                        type="email"
                        name="email"
                        placeholder="john.doe@gmail.com"
                        _placeholder={{ opacity: 0.3, color: "inherit" }}
                      />
                    </InputGroup>
                  </FormControl>
                  <FormControl id="subject" isRequired>
                    <FormLabel>Subject</FormLabel>
                    <InputGroup>
                      <Input
                        variant="filled"
                        focusBorderColor={useColorModeValue(
                          "gray.800",
                          "gray.400"
                        )}
                        type="text"
                        name="subject"
                        placeholder="Subject"
                        _placeholder={{ opacity: 0.3, color: "inherit" }}
                      />
                    </InputGroup>
                  </FormControl>
                  <FormControl id="message" isRequired>
                    <FormLabel>Message</FormLabel>
                    <Textarea
                      variant="filled"
                      focusBorderColor={useColorModeValue(
                        "gray.800",
                        "gray.400"
                      )}
                      name="message"
                      placeholder="Type your message here"
                      _placeholder={{ opacity: 0.3, color: "inherit" }}
                    />
                  </FormControl>
                  <FormControl id="sendButton">
                    <Button
                      mt={2}
                      variant="outline"
                      rightIcon={<ArrowForwardIcon />}
                    >
                      Send
                    </Button>
                  </FormControl>
                </Stack>
              </WrapItem>
            </Wrap>
          </Box>
        </Center>
      </Container>
    </>
  );
};

export default Form;
