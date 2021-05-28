import styled from 'styled-components'
import Link from 'next/link'
import { typography, space, color } from 'styled-system'

export const SLink = styled(Link)`
  color: ${(props) => props.theme.colors.blue};

  :hover,
  :focus {
    cursor: pointer;
    text-decoration: none;
    transition: 0.3s;
    opacity: 0.8;
  }

  ${typography}
  ${space}
  ${color}
`
