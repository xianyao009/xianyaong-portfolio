import axios from "axios";
import SocialMediaIcon from "../ui/SocialMediaIcon";
import { FaGithub, FaLinkedin, FaFacebook } from "react-icons/fa";
import { ArrowForwardIcon } from "@chakra-ui/icons";
import { useForm } from "react-hook-form";
import {
  Button,
  Box,
  ButtonGroup,
  Wrap,
  WrapItem,
  Heading,
  FormControl,
  FormLabel,
  Input,
  Stack,
  Text,
  Textarea,
  useColorModeValue,
  useToast,
} from "@chakra-ui/react";

const Form = () => {
  const {
    handleSubmit,
    register,
    formState: { errors, isSubmitting },
  } = useForm();

  const toast = useToast();

  async function onSubmit(values) {
    const url = "/api/contact";
    await axios.post(url, values).then((response) => {
      if (isSubmitting === false && response.status === 200) {
        toast({
          title: "Message sent.",
          description: "Thanks!",
          status: "success",
          duration: 5000,
          position: "top",
          isClosable: true,
        });
      }
    });
  }

  return (
    <>
      <Box color={useColorModeValue("gray.800", "whiteAlpha.900")}>
        <Wrap spacing={{ base: 20, sm: 5, md: 5, lg: 20 }}>
          <WrapItem>
            <Box>
              <Heading>Get In Touch</Heading>
              <Text color="gray.400" mt={{ sm: 3, md: 3, lg: 5 }}>
                Fill up the form to contact me
              </Text>
              <Box mt={12} align="center">
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
            <Stack as="form" spacing={3} onSubmit={handleSubmit(onSubmit)}>
              <FormControl isRequired>
                <FormLabel>Name</FormLabel>
                <Input
                  variant="filled"
                  focusBorderColor={useColorModeValue("gray.800", "gray.400")}
                  type="text"
                  placeholder="John Doe"
                  _placeholder={{ opacity: 0.3, color: "inherit" }}
                  {...register("name")}
                />
              </FormControl>
              <FormControl isRequired>
                <FormLabel>Email</FormLabel>
                <Input
                  variant="filled"
                  focusBorderColor={useColorModeValue("gray.800", "gray.400")}
                  type="email"
                  placeholder="john.doe@gmail.com"
                  _placeholder={{ opacity: 0.3, color: "inherit" }}
                  {...register("email")}
                />
              </FormControl>
              <FormControl isRequired>
                <FormLabel>Subject</FormLabel>
                <Input
                  variant="filled"
                  focusBorderColor={useColorModeValue("gray.800", "gray.400")}
                  type="text"
                  placeholder="Subject"
                  _placeholder={{ opacity: 0.3, color: "inherit" }}
                  {...register("subject")}
                />
              </FormControl>
              <FormControl isRequired>
                <FormLabel>Message</FormLabel>
                <Textarea
                  variant="filled"
                  focusBorderColor={useColorModeValue("gray.800", "gray.400")}
                  placeholder="Type your message here"
                  _placeholder={{ opacity: 0.3, color: "inherit" }}
                  {...register("message")}
                />
              </FormControl>
              <FormControl>
                <Button
                  mt={2}
                  variant="outline"
                  rightIcon={<ArrowForwardIcon />}
                  type="submit"
                  isLoading={isSubmitting}
                >
                  Send
                </Button>
              </FormControl>
            </Stack>
          </WrapItem>
        </Wrap>
      </Box>
    </>
  );
};

export default Form;
