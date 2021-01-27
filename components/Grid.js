import styled from "styled-components";

const StyleGrid = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  width: 90%;
  padding: 40px;
  margin: auto;
`;

function Grid(props) {
  return (
    <StyleGrid {...props} />
  )
}

export default (Grid);