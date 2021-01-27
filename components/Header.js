import styled from "styled-components";
import Bar from './Bar';

const StyleHeader = styled.div`
${({ theme }) => `background-color: ${theme.background.primary};`}
  margin-top: auto;
  width: 100%;
`;

function Header() {
  return (
    <StyleHeader>
      <Bar>hola soy el Header</Bar>
    </StyleHeader>
  )
}

export default (Header);