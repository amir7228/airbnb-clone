import { useRouter } from "next/dist/client/router";
import Header from "../components/Header";
import InfoCard from "../components/InfoCard";

function Search({ searchResults }) {
  const router = useRouter();
  console.log(searchResults);
  const { location, startDate, endDate, noOfGuests } = router.query;

  return (
    <div>
      <Header placeholder={`${location} | ${noOfGuests}`} />
      <main className="flex">
        <section className="flex-grow pt-14 ml-5">
          <p className="text-xs mt-10">
            300+ Stays - for {noOfGuests} guests.{" "}
          </p>
          <h1 className="text-3xl font-semibold mt-2 mb-6">
            Stays in {location}
          </h1>
          <div className="hidden lg:inline-flex mb-5 space-x-2 text-gray-500 whitespace-nowrap">
            <p className="px-4 py-2 border rounded-full cursor-pointer hover:shadow-lg active:scale-95 active:bg-gray-500 transition transform duration-150 ease-out ">
              Cancelation Flexibility
            </p>
            <p className="px-4 py-2 border rounded-full cursor-pointer hover:shadow-lg active:scale-95 active:bg-gray-500 transition transform duration-150 ease-out ">
              Price
            </p>
            <p className="px-4 py-2 border rounded-full cursor-pointer hover:shadow-lg active:scale-95 active:bg-gray-500 transition transform duration-150 ease-out ">
              Type of Place
            </p>
            <p className="px-4 py-2 border rounded-full cursor-pointer hover:shadow-lg active:scale-95 active:bg-gray-500 transition transform duration-150 ease-out ">
              Rooms&beds
            </p>
            <p className="px-4 py-2 border rounded-full cursor-pointer hover:shadow-lg active:scale-95 active:bg-gray-500 transition transform duration-150 ease-out ">
              More Filters
            </p>
          </div>
          {searchResults.map(
            ({ img, location, title, description, star, price, total }) => {
              <InfoCard
                key={img}
                img={img}
                location={location}
                title={title}
                description={description}
                star={star}
                price={price}
                total={total}
              />;
            }
          )}
        </section>
      </main>
    </div>
  );
}

export default Search;

export async function getServerSideProps() {
  const searchResults = await fetch("https://links.papareact.com/isz").then(
    (res) => res.json()
  );

  return {
    props: {
      searchResults,
    },
  };
}
