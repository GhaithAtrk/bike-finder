import { Dispatch, SetStateAction } from "react";

const SearchFilter = ({
  setQuery,
  getStolenBikes,
  totalReports,
}: {
  setQuery: Dispatch<SetStateAction<string>>;
  getStolenBikes: Function;
  totalReports: number;
}) => {
  return (
    <div>
      <div
        className={"mx-auto w-full text-center"}
        style={{ maxWidth: "800px", marginBottom: "100px" }}
      >
        <h2 className="mb-4 text-3xl font-bold !leading-tight text-black dark:text-white sm:text-4xl md:text-[45px]">
          Search for stolen bikes in Munich
        </h2>
        <form
          className="my-4 w-full"
          onSubmit={(e) => {
            e.preventDefault();
            getStolenBikes();
          }}
        >
          <input
            name="query"
            className="my-2 h-12 w-full border-4 border-gray-200 dark:border-gray-dark p-2  focus:outline-none"
            onChange={(e) => setQuery(e.target.value)}
          />
          <button
            type="submit"
            className="transform rounded-md bg-blue-600 px-4 py-3 text-white shadow-lg outline-none transition-transform focus:ring-4 active:scale-75"
          >
            Search
          </button>
        </form>
      </div>
      <div className="bg-red-30 0 mb-10 w-full">
        <div className="w-fit rounded-md bg-gray-200 p-2 text-end text-lg dark:bg-gray-dark ">
          Munich Number Of Cases: {totalReports}
        </div>
      </div>
    </div>
  );
};

export default SearchFilter;
