import PropTypes from 'prop-types';
import { cn } from '../../../utils/common';

export default function Avatar({
  src = '',
  alt = '',
  variation = 'default',
  className = '',
}) {
  const variations = {
    default: 'lg:size-15 md:size-11 size-9 ',
    small: 'lg:size-11 sm:size-9 size-5',
    large: 'size-20 lg:size-16 sm:size-12',
  };

  return (
    <img
      className={cn(
        'size-15 inline-block rounded-full lg:size-11 sm:size-9 max-sm:size-13 object-cover',
        variations[variation],
        className
      )}
      src={src}
      alt={alt}
    />
  );
}

Avatar.propTypes = {
  src: PropTypes.string.isRequired,
  alt: PropTypes.string.isRequired,
  variation: PropTypes.oneOf(['small', 'default', 'large']),
  className: PropTypes.string,
};

Avatar.defaultProps = {
  src: '',
  alt: '',
  variation: 'default',
  className: '',
};
