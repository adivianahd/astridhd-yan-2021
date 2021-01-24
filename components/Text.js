import styled from "styled-components";

export const TextStyled = styled.div`
  ${({theme ,size}) => `font-size: ${theme.text.size[size]};`}
  ${({theme ,color}) => `color: ${theme.text.colors[color]};`}
  ${({theme ,weight}) => `font-weight: ${theme.text.weights[weight]};`}
`;

function Text (props) {
  return(
    <TextStyled {...props} style={props.style}>
      {props.children}
    </TextStyled>
  )
};

export default Text;