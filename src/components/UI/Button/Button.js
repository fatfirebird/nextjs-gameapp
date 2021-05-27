import styled from 'styled-components'
import { space } from 'styled-system'

import r from '../../../utils/toRem'

export const Button = styled.button`
  padding: ${r(15)} ${r(32)};
  margin: 0;
  font-size: ${r(16)};
  font-weight: 600;
  border: none;
  background-color: ${(props) => props.theme.colors.black};
  color: ${(props) => props.theme.colors.white};
  text-align: center;
  transition: 0.3s;
  cursor: pointer;

  :hover,
  :focus {
    opacity: 0.8;
  }

  ${space}
`
