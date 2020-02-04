import { css, Global } from '@emotion/core';
import React, { FC } from 'react';

const GlobalStyles: FC = () => (
  <Global
    styles={css`
      body {
        font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Helvetica, Arial, sans-serif,
          'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol';
      }
    `}
  ></Global>
);

export default GlobalStyles;
