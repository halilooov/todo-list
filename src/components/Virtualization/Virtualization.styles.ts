import styled from 'styled-components'

interface ContainerStyledProps {
  $boxHeight: number
}

export const Container = styled('div')<ContainerStyledProps>`
  max-height: ${({ $boxHeight }) => $boxHeight}px;
  width: 80%;
  padding: 10px;
  border: 2px solid @customBlack;
  overflow-y: auto;
`

export const List = styled('ul')`
  display: flex;
  flex-direction: column;
  list-style: none;
`
