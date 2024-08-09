import React from "react";

import "./App.css";
import styled from "styled-components";
import { Krutilka, StyledBtn } from "./Componenst/Button.styled";
import { Link } from "./Componenst/Link.styled";
import { Menu } from "./Componenst/Menu.styled";
import { myThema } from "./styles/Thema.styled";

// as Делает ссылку  по компоненте
function App() {
  return (
    <div className="App">
      <Menu>
        <ul>
          <li>
            <a href="">menu item 1</a>
          </li>
          <li>
            <a href="">menu item 2</a>
          </li>
          <li>
            <a href="">menu item 3</a>
          </li>
        </ul>
      </Menu>
      <Box>
        <StyledBtn as={Link} href="#">
          LinkComponent
        </StyledBtn>
        <StyledBtn as="a" href="#" fontSize="20px">
          Link
        </StyledBtn>
        <StyledBtn color="green" fontSize="30px">
          Hello My good sfss
        </StyledBtn>
        {/*<input type="text" />
        <input type="submit" />
        <input type="radio" />
        */}

        <Krutilka fontSize="70px">SuperButton</Krutilka>
        <StyledBtn primary color={myThema.colors.primary}>
          Обама
        </StyledBtn>
        <StyledBtn outline color={myThema.colors.secondary}>
          Я свободен
        </StyledBtn>
      </Box>
    </div>
  );
}

export default App;

// Стилизованные компоненты  , ну CSS тільки не дуже зручний як на мене

//  button {} Обращаешься ко всем тегам в стилизованной компоненте.\ ВЛОЖЕНОСТЬ

// @media screen and (max-width: 800px) { flex-direction: column;}  - медиа запрос, тут нету синтаксиса класса

const Box = styled.div`
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 20px;
  button {
    cursor: pointer;
  }
  ${Link} {
    cursor: zoom-in;
  }
  @media ${myThema.media.tablet} {
    flex-direction: column;
  }
`;
