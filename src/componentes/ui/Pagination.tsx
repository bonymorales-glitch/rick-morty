interface PaginationProps {
  currentPage: number;
  totalPages: number;
  setCurrentPage: (pgae: number) => void;
}
const Pagination = ({currentPage, totalPages, setCurrentPage,}: PaginationProps) => {
  return (
    <nav className="bg-amber-500 flex justify-center">
      <button
      disabled={currentPage === 1} 
      onClick={()=> setCurrentPage(currentPage-1)}
      className="px-3 py-1 rounded-md bg-slate-700 hover:bg-slate-600 disabled:opacity-50 font-semibold"
      > ← </button>
      <span className="text-gry-950 font-semibold">
        Page {currentPage} of {totalPages}
      </span>
      <button
      disabled={currentPage === totalPages}
      onClick={()=> setCurrentPage(currentPage+1)}
      className="px-3 py-1 rounded-md bg-slate-700 hover:bg-slate-600 disabled:opacity-50 font-semibold">
      →</button>
    </nav>
  );
};
export default Pagination;
