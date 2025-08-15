import type { SVGProps } from 'react';
import { useState } from 'react';

const ArrowDown = (props: SVGProps<SVGSVGElement>) => {
  const [hovered, setHovered] = useState(false);
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      onMouseLeave={() => setHovered(false)}
      onMouseEnter={() => setHovered(true)}
      width="1em"
      height="1em"
      {...props}
    >
      <path fill="none" stroke="#1E213F" strokeOpacity={hovered ? 1 : 0.25} strokeWidth={2} d="m1 1 6 4 6-4" />
    </svg>
  );
};
export default ArrowDown;
