import styled, { css } from "styled-components";

const light_purple = "#b183fa";
const blue = "#4db7fe";
const white = "#fff";
const gray = "#757575";
const light_gray = "#dddddd";

export const Wapper = styled.div`
  padding: 4rem;
  max-width: 98rem;
  margin: auto;
`;

export const FormGroup = styled.div`
  background-color: ${light_purple};
  border-radius: 0.4rem;
  padding: 0.8rem;
`;

export const Button = styled.button<{ color?: "blue"; size?: "lg" }>`
  border-radius: 0.4rem;
  border: none;
  background-color: transparent;
  cursor: pointer;

  ${(props) =>
    props.size === "lg" &&
    css`
      padding: 0 2rem;
      font-size: 1.6rem;
    `}

  ${(props) =>
    props.color === "blue" &&
    css`
      background-color: ${blue};
      color: ${white};
    `}
`;

export const Textbox = styled.input`
  width: 100%;
  height: 5rem;
  border: none;
  border-radius: 0.4rem;
  padding: 1rem;
  font-size: 1.6rem;
`;

export const ButtonGroup = styled.div`
  display: flex;
  width: 100%;
  & :first-child {
    border-top-right-radius: 0;
    border-bottom-right-radius: 0;
  }

  & :last-child {
    border-top-left-radius: 0;
    border-bottom-left-radius: 0;
  }
`;

export const Border = styled.hr`
  border: none;
  background-color: ${light_purple};
  height: 0.2rem;
  opacity: 1;
  width: 8rem;
  margin: 3rem auto;
`;

export const ListGroup = styled.ul`
  width: 100%;
  background-color: ${white};
  color: ${gray};
  list-style: none;
  border-radius: 0.4rem;
  padding: 1rem;
  font-size: 1.6rem;
`;

export const ListGroupItem = styled.li`
  display: flex;
  border-bottom: 1px solid ${light_gray};

  &:last-of-type {
    border-bottom: 0;
  }
`;

export const Label = styled.label`
  width: 100%;
  display: block;
  padding: 1rem;
  cursor: pointer;
`;

export const CheckBox = styled.input`
  margin-right: 2rem;
`;
