import styled from "styled-components";
import Text from "./Text";
import Card from "./Card";

const StyleGrid = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  width: 90%;
  padding: 20px 0px 20px 0px;
  margin: auto;
`;

function Grid() {
  return (
    <StyleGrid>
      <Card>
        <Text size={'XXXL'} color={'primary'} weight={'extrabold'}>Astrid Hernandez</Text>
      </Card>
    </StyleGrid>
  )
}

export default (Grid);