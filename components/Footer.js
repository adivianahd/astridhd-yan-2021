import styled from "styled-components";
import Bar from './Bar';

const StyleFooter = styled.div`
${({ theme }) => `background-color: ${theme.background.primary};`}
  margin-top: auto;
  width: 100%;
`;

function Footer() {
  return (
    <StyleFooter>
      <Bar>hola soy el footer</Bar>
    </StyleFooter>
  )
}

export default (Footer);