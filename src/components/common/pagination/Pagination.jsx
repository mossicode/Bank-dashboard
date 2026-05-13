import { ArrowLeftIcon, ArrowRightIcon } from '../../icons';

function Pagination({ currentPage, totalPages, onPageChange }) {
  function goPage(n) {
    onPageChange(Math.min(Math.max(1, n), totalPages));
  }

  return (
    <div className='flex justify-end items-center mt-4 space-x-0'>
      <button
        onClick={() => goPage(currentPage - 1)}
        disabled={currentPage === 1}
        className={`px-1 py-1 rounded-md text-sm flex items-center cursor-pointer ${
          currentPage === 1 ? 'text-gray-400' : 'text-blue-600 hover:underline'
        }`}
      >
        <div className='mt-1 px-3 cursor-pointer'>
          <ArrowLeftIcon />
        </div>
        Previous
      </button>

      {Array.from({ length: totalPages }).map((_, i) => {
        const page = i + 1;
        return (
          <button
            key={page}
            onClick={() => goPage(page)}
            className={`px-4 max-sm:px-2 max-md:px-3 py-1 rounded-md text-sm ${
              currentPage === page
                ? 'bg-blue-600 text-white'
                : 'text-blue-600 hover:bg-blue-100'
            }`}
          >
            {page}
          </button>
        );
      })}

      <button
        onClick={() => goPage(currentPage + 1)}
        disabled={currentPage === totalPages}
        className={`px-3 max-sm:px-1 cursor-pointer py-1 rounded-md text-sm flex items-center space-x-3 ${
          currentPage === totalPages
            ? 'text-gray-400'
            : 'text-blue-600 hover:underline'
        }`}
      >
        <span className='cursor-pointer'>Next</span>
        <div className='mt-1'>
          <ArrowRightIcon />
        </div>
      </button>
    </div>
  );
}

export default Pagination;
