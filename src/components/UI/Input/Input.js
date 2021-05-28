import styled from 'styled-components'
import { space, layout } from 'styled-system'

import r from '../../../utils/toRem'

export const SInput = styled.input`
  position: relative;
  overflow: hidden;
  background-color: white;
  border: 1px solid #ccc;
  border-radius: 2px;
  box-sizing: border-box;
  color: #333;
  cursor: default;
  outline: none;
  padding: ${r(8)} ${r(10)};

  ${space}
  ${layout}
`
