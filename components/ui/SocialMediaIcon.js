import { IconButton } from "@chakra-ui/react";

const SocialMediaIcon = (props) => {
  return (
    <IconButton
      as="a"
      href={props.href}
      target="_blank"
      aria-label={props.label}
      icon={<props.icon fontSize={props.iconSize} />}
    />
  );
};

export default SocialMediaIcon;
