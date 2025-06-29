import { SVGProps } from 'react';

const ArrowDown = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" {...props}>
    <path fill="none" stroke="#1E213F" strokeOpacity={0.25} strokeWidth={2} d="m1 1 6 4 6-4" />
  </svg>
);
export default ArrowDown;
