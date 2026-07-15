import * as React from 'react'
import { SVGProps } from 'react'
const ArchitecteSi = (props: SVGProps<SVGSVGElement>) => {
  return (
    <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='none' {...props}>
      <g stroke={props.color} strokeWidth={1.6} strokeLinecap='round' strokeLinejoin='round'>
        <rect x='3' y='4' width='18' height='11' rx='1.5' />
        <path d='M1.5 19h21' />
        <circle cx='12' cy='9.5' r='2' />
        <path d='M12 6V4.6M12 14.4V13M15.5 9.5H17M7 9.5H5.5M14.5 7l1-1M8.5 12l-1 1M14.5 12l1 1M8.5 7l-1-1' />
      </g>
    </svg>
  )
}
export default ArchitecteSi
