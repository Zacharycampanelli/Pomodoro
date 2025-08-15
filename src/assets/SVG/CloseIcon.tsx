import type { SVGProps } from 'react';

const CloseIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={14} height={14} {...props}>
    <path
      fill="#1E213F"
      fillRule="evenodd"
      d="m11.95.636 1.414 1.414L8.414 7l4.95 4.95-1.414 1.414L7 8.414l-4.95 4.95L.636 11.95 5.586 7 .636 2.05 2.05.636 7 5.586l4.95-4.95z"
      opacity={0.5}
    />
  </svg>
)
export default CloseIcon