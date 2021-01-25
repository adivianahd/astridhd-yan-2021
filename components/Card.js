import styled from "styled-components";
import Text from "./Text";

const StyleCard = styled.div`
  margin-left: auto;
  margin-right: auto;
  min-width: 250px;
  border-radius: 25px;
  box-shadow: 1px 1px 6px 0px rgba(50, 50, 50, 0.44);
`;

function Card(props) {
  return (
    <StyleCard {...props}/> 
  )
}

export default (Card);