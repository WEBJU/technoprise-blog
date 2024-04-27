interface PaginationProps {
  totalPosts: number;
  currentPage: number;
  setCurrentPage: (pageNumber: number) => void;
}

const Pagination: React.FC<PaginationProps> = ({
  totalPosts,
  currentPage,
  setCurrentPage,
}) => {
  const pagesCount = Math.ceil(totalPosts / 10); 

  const handlePageChange = (pageNumber: number) => {
    if (pageNumber < 1 || pageNumber > pagesCount) return; // Handle invalid pages
    setCurrentPage(pageNumber);
  };

  return (
    <div className="flex justify-center mt-4">
      {currentPage > 1 && (
        <button
          className="px-2 py-1 text-gray-700 hover:text-indigo-500 rounded-md focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
          onClick={() => handlePageChange(currentPage - 1)}
        >
          Previous
        </button>
      )}
      {Array.from({ length: pagesCount }, (_, i) => i + 1).map((pageNumber) => (
        <button
          key={pageNumber}
          className={`px-2 py-1 text-gray-700 hover:text-indigo-500 rounded-md focus:outline-none focus:ring-2 focus:ring-offset-2 ${
            currentPage === pageNumber
              ? 'bg-indigo-100 text-indigo-700 font-bold'
              : ''
          }`}
          onClick={() => handlePageChange(pageNumber)}
        >
          {pageNumber}
        </button>
      ))}
      {currentPage < pagesCount && (
        <button
          className="px-2 py-1 text-gray-700 hover:text-indigo-500 rounded-md focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
          onClick={() => handlePageChange(currentPage + 1)}
        >
          Next
        </button>
      )}
    </div>
  );
};

export default Pagination;
