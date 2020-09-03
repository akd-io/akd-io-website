import { css, Global } from '@emotion/core';
import React, { FC } from 'react';
import { lightGrey } from '../../utils/colors';

const GlobalStyles: FC = () => (
  <Global
    styles={css`
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
    `}
  />
);

export default GlobalStyles;
