import styled from "styled-components";

const StyleHeader= styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  background-color: #ccc;
  min-width: 270px;
  width: 100%;
  height: 80px;
  border-radius: 0px 0px 8px 8px;
`;

function Header(props) {
  return (
    <StyleHeader {...props}/>
  )
}

export default (Header);