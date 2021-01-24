import styled from "styled-components";

const Sizes = {
  "XXS": '12px',
  "XS": '14px',
  "SM": '16px',
  "MD": '18px',
  "LG": '20px',
  "XL": '34px',
  "XXL": '40px',
};

const Weights = {
  "EXTRABOLD": '800',
  "REGULAR": '500',
  "BOLD": '600',
  "LIGHT": '100',
};

const ColorStyle = {
  "BLACK": '#000',
  "COLOR": '#E05F14',
  "MUTED": '#888888',
  "WHITE": '#fff',
  "ERROR": '#f00',
  "GRAY": '#9b9b9b',
  "DARKGRAY": '#474b4e',
};

export const TextStyled = styled.div`
  ${props => `font-size: ${Sizes[props.size]};` }
  ${props => `font-weight: ${Weights[props.weight]};` }
  ${props => `color: ${ColorStyle[props.color]};` }
`;


function Text (props) {
  return(
    <TextStyled {...props} style={props.style}>
      {props.children}
    </TextStyled>
  )
};

export default Text;