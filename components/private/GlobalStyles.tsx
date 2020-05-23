import { css, Global } from '@emotion/core';
import React, { FC } from 'react';

const GlobalStyles: FC = () => (
  <Global
    styles={css`
      * {
        box-sizing: border-box;
      }

      body {
        font-family: 'Segoe UI', Helvetica, Arial, sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji',
          'Segoe UI Symbol';
        word-break: break-word;
      }
    `}
  />
);

export default GlobalStyles;
