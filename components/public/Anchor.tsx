import { ExternalLinkIcon } from '@chakra-ui/icons';
import { Link } from '@chakra-ui/react';
import { ComponentProps, FC } from 'react';

export const Anchor: FC<ComponentProps<typeof Link>> = ({ isExternal, children, ...restProps }) => {
  return (
    <Link
      isExternal={isExternal}
      color="#319bff"
      fontWeight="bold"
      textDecoration="none"
      {...restProps}
    >
      {children}
      <ExternalLinkIcon mx="0.15em" />
    </Link>
  );
};
