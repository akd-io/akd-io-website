import styled from '@emotion/styled';

const Button = styled.a`
  transform: translate3d(0, 0, 0);

  margin: 0.5em;
  border-radius: 0.5em;
  padding: 0.75em 1em;

  display: inline-block;
  background: white;
  color: black;

  box-shadow: 0px 4px 15px 0px rgba(0, 0, 0, 0.1);

  transition: box-shadow 0.15s, margin 0.15s, padding 0.15s;

  &,
  &:link,
  &:visited,
  &:hover,
  &:active {
    text-decoration: none;
  }

  &:hover,
  &:active {
    box-shadow: 0px 6px 18px 0px rgba(0, 0, 0, 0.1);
    margin: 0.25em;
    padding: 1em 1.25em;
  }
`;

export default Button;
