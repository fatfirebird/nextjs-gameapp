import React from 'react'
import styled from 'styled-components'
import r from '../../utils/toRem'
import { Box } from '../UI/Box'

const SGenre = styled(Box)`
  background-color: ${(props) => props.theme.colors.black};
  border-radius: ${r(20)};
  padding: ${r(10)} ${r(12)};
  color: ${(props) => props.theme.colors.white};
  cursor: pointer;

  :last-of-type {
    margin-right: 0;
  }
`

export const Genre = ({ name }) => {
  console.log(name)
  return (
    <SGenre display="inline-block" mr={r(10)}>
      {name}
    </SGenre>
  )
}
