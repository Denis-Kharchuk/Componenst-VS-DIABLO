// li+ li  ТЕГ li который будет идти перед li , читаеться это так

import styled from "styled-components";

export const Menu = styled.nav`
  ul {
    display: flex;
    list-style: none;
    padding: 0;
    li > a {
      color: green;
    }
    li + li {
      margin-left: 20px;
    }
  }
`;
