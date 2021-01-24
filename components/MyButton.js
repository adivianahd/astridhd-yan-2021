import styled from "styled-components";

const StyleMyButton = styled.button`
  color: ${p => p.theme.background};
  width: ${p => p.theme.unit(20)};
  height: 50px;
`;

function MyButton() {
  return (
    <StyleMyButton>
      Destroy
    </StyleMyButton>
  )
}

export default (MyButton);