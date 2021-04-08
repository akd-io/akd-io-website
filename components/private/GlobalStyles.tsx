import { css, Global } from '@emotion/react';
import React, { FC } from 'react';
import { lightGrey } from '../../utils/colors';

const globalCss = css`
  * {
    box-sizing: border-box;
  }

  body {
    display: flex;
    flex-direction: column;
    align-items: center;
    background: ${lightGrey};
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Helvetica, Arial, sans-serif,
      'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol';
    word-break: break-word;
  }
`;

const GlobalStyles: FC = () => <Global styles={globalCss} />;

export default GlobalStyles;
