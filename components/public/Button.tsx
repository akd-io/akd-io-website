import styled from '@emotion/styled';

const Button = styled.a`
  transform: scale(0.95);

  margin: 0.5em;
  border-radius: 0.5em;
  padding: 0.75em 1em;

  display: inline-block;
  background: white;
  color: black;
  text-decoration: none;

  box-shadow: 0px 4px 15px 0px rgba(0, 0, 0, 0.1);

  transition: transform 0.15s, box-shadow 0.15s;

  &:link,
  &:visited,
  &:hover,
  &:active {
    text-decoration: none;
  }

  &:hover,
  &:active {
    transform: scale(1);
    box-shadow: 0px 6px 18px 0px rgba(0, 0, 0, 0.1);
  }
`;

export default Button;
