import styled from "styled-components";

const StyleGrid = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  width: 90%;
  padding: 20px 0px 20px 0px;
  margin: auto;
`;

function Grid(props) {
  return (
    <StyleGrid {...props} />
  )
}

export default (Grid);