import { useLoaderData } from "react-router-dom";
import Banner from "./Banner";
import Phones from "./Phones";

const Home = () => {
    const phones = useLoaderData()
    return (
        <div>
          <div><Banner></Banner></div>
          <div>
            <h1 className="text-3xl font-semibold text-center my-5">Our Phone Collections</h1>
            <h1 className="text-2xl font-medium text-center my-5">Total Phone: {phones.length}</h1>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 p-5">
            {
                phones?.map(phone => <Phones key={phone.id} phone={phone}></Phones> )
            }
          </div>
        </div>
    );
};

export default Home;