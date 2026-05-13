import Avatar from '../common/avatar/Avatar';
import RuleLable from '../common/ruleLable/RuleLable';
export default function Profile({
  src,
  alt,
  variation,
  titleChild,
  titleClassName,
  subChild,
  subClassName,
}) {
  return (
    <div className='flex flex-col items-center gap-2 '>
      <Avatar src={src} className='w-32 rounded-full h-20' variation={variation} alt={alt} />
      <RuleLable
        titleClassName={titleClassName}
        subClassName={subClassName}
        titleChild={titleChild}
        subChild={subChild}
        className='hover:font-bold'
      />
    </div>
  );
}
