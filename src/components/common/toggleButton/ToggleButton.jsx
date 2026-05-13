export default function ToggleButton({
  toggleText = 'toggle button',
  isActive = false,
}) {
  return (
    <label className='flex items-center gap-2 cursor-pointer'>
      <input
        type='checkbox'
        defaultChecked={isActive}
        className='sr-only peer'
      />
      <div className="relative w-14 h-8 bg-white peer-focus:outline-none rounded-full peer dark:bg-azureish-White peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-1 after:start-[3px] md:after:start-1 after:bg-white after:border-white after:border after:rounded-full after:size-6 after:transition-all dark:border-azureish-White peer-checked:bg-aqua-green dark:peer-checked:bg-aqua-green"></div>
      <span className='xl:text-sm text-xs'>{toggleText}</span>
    </label>
  );
}
