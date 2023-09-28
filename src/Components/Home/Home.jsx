import { useState } from "react";
import { useLoaderData } from "react-router-dom";
import Banner from "./Banner";
import Phones from "./Phones";

const Home = () => {
  const [searchInput, setSearchInput] = useState("");
  const phones = useLoaderData();

  // Function to update search input
  const handleSearchInputChange = (value) => {
    setSearchInput(value);
  };

  // Filter phones based on search input
  const filteredPhones = phones.filter((phone) =>
    phone.brand_name.toLowerCase().includes(searchInput.toLowerCase())
  );
  

  return (
    <div>
      <div>
        <Banner
          searchInput={searchInput}
          handleSearchInputChange={handleSearchInputChange}
        />
      </div>
      <div>
        <h1 className="text-3xl font-semibold text-center my-5">
          Our Phone Collections
        </h1>
        <h1 className="text-2xl font-medium text-center my-5">
          Total Phone: {filteredPhones.length}
        </h1>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 p-5">
        {filteredPhones.length === 0 ? (
          <div className="text-center w-full   md:ml-[180px] lg:ml-80 xl:ml-[440px]">
            <p className="text-3xl font-bold text-pink-600 text-center">
              No Match
            </p>
          </div>
        ) : (
          filteredPhones?.map((phone) => (
            <Phones key={phone.id} phone={phone} />
          ))
        )}
      </div>
    </div>
  );
};

export default Home;
