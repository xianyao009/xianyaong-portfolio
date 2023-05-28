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

  const onSubmit = async (values) => {
    const url = "/api/contact";
    try {
      await axios.post(url, values);
      toast({
        title: "Message sent.",
        description: "Thank you for reaching out!",
        status: "success",
        duration: 5000,
        position: "top",
        isClosable: true,
      });
    } catch (error) {
      console.error(error);
      toast({
        title: "Error sending message.",
        description: "Please try again later.",
        status: "error",
        duration: 5000,
        position: "top",
        isClosable: true,
      });
    }
  };

  return (
    <Box color={useColorModeValue("gray.800", "whiteAlpha.900")} align="center">
      <Wrap spacing={{ base: 6, md: 12 }} justify="center">
        <WrapItem>
          <Box>
            <Heading>Contact Me</Heading>
            <Text color="gray.400" mt={4}>
              Have any questions? Fill up the form.
            </Text>
            <ButtonGroup variant="ghost" mt={8}>
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
            </ButtonGroup>
          </Box>
        </WrapItem>
        <WrapItem>
          <Stack as="form" spacing={4} onSubmit={handleSubmit(onSubmit)}>
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
            <FormControl>
              <FormLabel>Company</FormLabel>
              <Input
                variant="filled"
                focusBorderColor={useColorModeValue("gray.800", "gray.400")}
                type="text"
                {...register("company")}
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
  );
};

export default Form;
