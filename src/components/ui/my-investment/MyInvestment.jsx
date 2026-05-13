function InvestmentCard({
  data,
  bgColor = 'var(--color-light-rose)',
  icon: Icon,
}) {
  return (
    <div className='flex justify-between items-center p-4 rounded-2xl shadow-lg bg-white'>
      {/* Icon with background */}
      <div
        className='flex items-center justify-center w-12 h-12 rounded-full'
        style={{ backgroundColor: bgColor }}
      >
        {Icon ? <Icon /> : null}
      </div>

      {/* Name and data */}
      <div className='flex-1 flex justify-between items-center ml-4'>
        <div className='name font-semibold text-gray-800'>
          {data.name || 'Name'}
        </div>
        <div className='flex gap-4'>
          <div className='money font-bold text-royalBlue'>
            {data.money || 432}
          </div>
          <div className='percent font-semibold text-softRed'>
            {data.percent || 57}%
          </div>
        </div>
      </div>
    </div>
  );
}

export default InvestmentCard;
