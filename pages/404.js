import { Heading } from "@chakra-ui/react";
import Content from "../components/container/Content";

const NotFound = () => {
  const notFoundText = <Heading>404 NOT FOUND!!!</Heading>;
  return (
    <>
      <Content content={notFoundText} />
    </>
  );
};

export default NotFound;
