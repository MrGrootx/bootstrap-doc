import { IoIosSearch } from "react-icons/io";
const Search = () => {
  return (
    <>
      <div>
        <label
          htmlFor="default-search"
          className="mb-2 text-sm font-medium text-gray-900 sr-only "
        >
          Search
        </label>
        <div className="relative">
          <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
            <IoIosSearch className="text-xl" />
          </div>
          <input
            type="search"
            id="default-search"
            className="block w-full p-2 ps-10 text-sm text-gray-900 border  border-gray-700 border-opacity-40 bg-[#6529dd]"
            placeholder="Search"
          />
          <h3
            type="submit"
            className="text-white absolute end-2.5 bottom-2.5 font-medium text-sm px-4 mt-2  bg-[#4b1ea5] bg-opacity-25"
          >
            Ctrl K
          </h3>
        </div>
      </div>
    </>
  );
};

export default Search;
