declare module '*.less' {
  const resource: Record<string, string>
  export default resource
}

declare module '*.svg?react' {
  import React from 'react'

  const SVG: React.VFC<React.SVGProps<SVGSVGElement>>
  export default SVG
}
