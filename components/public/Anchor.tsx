import { ExternalLinkIcon } from '@chakra-ui/icons';
import { Link } from '@chakra-ui/react';
import { ComponentProps, FC } from 'react';
import { anchorColor } from '../../utils/colors';

export const Anchor: FC<ComponentProps<typeof Link>> = ({ isExternal, children, ...restProps }) => {
  return (
    <Link
      isExternal={isExternal}
      color={anchorColor}
      fontWeight="bold"
      textDecoration="none"
      {...restProps}
    >
      {children}
      <ExternalLinkIcon mx="0.15em" />
    </Link>
  );
};
