import * as React from 'react'
import { SVGProps } from 'react'
const AiExecutiveInsight = (props: SVGProps<SVGSVGElement>) => {
  return (
    <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='none' {...props}>
      <g stroke={props.color} strokeWidth={1.6} strokeLinecap='round' strokeLinejoin='round'>
        <path d='M12 2.5a6.5 6.5 0 0 0-4 11.6V17a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1v-2.9a6.5 6.5 0 0 0-4-11.6Z' />
        <path d='M9 19h6' />
        <circle cx='12' cy='9' r='2.3' />
        <path d='M12 11.3v1.5M10.7 12.8h2.6' />
      </g>
    </svg>
  )
}
export default AiExecutiveInsight
