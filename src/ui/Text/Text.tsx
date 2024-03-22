import { CSSProperties, ReactNode } from 'react'
import styled from 'styled-components'

interface TextProps {
  children?: ReactNode
  $sx?: CSSProperties
  fontSize?: CSSProperties['fontSize']
  fontWeight?: CSSProperties['fontWeight']
  color?: CSSProperties['color']
}

export default styled.p<TextProps>`
  font-size: ${({ fontSize }) => fontSize};
  font-weight: ${({ fontWeight }) => fontWeight};
  color: ${({ color }) => color};
  ${({ $sx }) =>
    $sx &&
    Object.entries($sx)
      .map(
        ([key, value]) =>
          `${key.replace(/([A-Z])/g, '-$1').toLowerCase()}: ${value};`
      )
      .join('\n')}
`

// export default (props: TextProps) => <Text $sx />
