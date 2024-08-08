import styled, { css } from "styled-components";
import { MyAnimation } from "../styles/animations/Animations";

// &: Чтото пишешь

type StyledBtnPropsType = {
  color?: string;
  fontSize?: string;
  primary?: boolean;
  outline?: boolean;
};

export const StyledBtn = styled.button<StyledBtnPropsType>`
  border: none;

  background-color: ${(props) => props.color || "red"};
  padding: 10px 20px;

  color: Snow;

  font-size: ${(props) => props.fontSize || "2rem"};

  font-weight: bold;

  &: hover {
    background-color: orange;
  }

  ${(props) =>
    props.outline &&
    css<StyledBtnPropsType>`
      border: 2px solid ${(props) => props.color || "gold"};
      color: ${(props) => props.color || "Yellow"};
      background-color: transparent;
      &:hover {
        border-color: gray;
        color: gray;
        background-color: transparent;
      }
    `};

  ${(props) =>
    props.primary &&
    css<StyledBtnPropsType>`
      background-color: ${(props) => props.color || "red"};
      color: snow;
      &: hover {
    background-color: violet;
    `};
`;

// styled(StyledBtn) такое написание присваивает все CSS стили (РОДИТЕЛЯ) и добавляет `НОВЫЕ`

export const Krutilka = styled(StyledBtn)`
  border-radius: 5px;
  background-color: green;
  color: yellow;

  &:hover {
    animation: ${MyAnimation} 2s ease-in-out infinite;
  }
`;
