import { cn } from '../../utils/common';

function ArrowUpIcon({ className = '', ...props }) {
  return (
    <svg
      height='12'
      width='12'
      viewBox='0 0 8 8'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
      className={cn('', className)}
      {...props}
    >
      <path
        clipRule='evenodd'
        d='M0.4645 3.82818L3.64648 0.646202C3.84174 0.45094 4.15832 0.45094 4.35359 0.646202L7.53557 3.82818C7.73083 4.02344 7.73083 4.34003 7.53557 4.53529C7.34031 4.73055 7.02372 4.73055 6.82846 4.53529L4.50003 2.20686L4.50003 7.99976L3.50003 7.99976L3.50003 2.20686L1.17161 4.53529C0.976345 4.73055 0.659763 4.73055 0.464501 4.53529C0.269238 4.34003 0.269238 4.02345 0.4645 3.82818Z'
        fill='CurrentColor'
      />
    </svg>
  );
}

export default ArrowUpIcon;
