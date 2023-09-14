import Link from 'next/link';
import { ComponentProps, FC } from 'react';
import { RxExternalLink } from 'react-icons/rx';

type AnchorProps = ComponentProps<typeof Link> & {
  isExternal?: boolean;
};
export const Anchor: FC<AnchorProps> = ({ isExternal, children, ...restProps }) => {
  return (
    <Link
      className="inline-flex items-center font-bold text-blue-500 hover:underline"
      {...restProps}
    >
      <span>{children}</span>
      {isExternal && <RxExternalLink className="ml-0.5 inline" />}
    </Link>
  );
};
