import styled from "styled-components";

const StyleBar= styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  min-width: 270px;
  width: 100%;
  height: 85px;
`;

function Bar(props) {
  return (
    <StyleBar {...props}/>
  )
}

export default (Bar);