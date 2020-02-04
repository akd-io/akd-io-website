import { css, Global } from '@emotion/core';
import { NextComponentType } from 'next';
import React from 'react';

const GlobalStyles: NextComponentType = () => (
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
