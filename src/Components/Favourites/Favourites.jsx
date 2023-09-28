import { useEffect, useState } from "react";
import FavouriteItems from "./FavouriteItems";

const Favourites = () => {
    const [favItem, setItem] = useState([]);
    const [noData, setData] = useState("");
    const [isShow, setShow] = useState(false);
    const [total, setTotal] = useState(0);

    useEffect(() => {
        const favList = JSON.parse(localStorage.getItem("favourite"));
        if (favList) {
            const totalPrice = favList.reduce((prePrice, currentValue )=> prePrice + currentValue.price, 0)
            setTotal(totalPrice)
            setItem(favList);
        } else {
            setData("No Data Found");
        }
    }, []);
    const handleDelete = () => {
        localStorage.clear();
        setItem([]);
        setData("No Data Found");
    };

    return (
        <div>
            {noData ? (
                <p className="text-pink-600 text-3xl font-bold text-center my-60">
                    {noData}
                </p>
            ) : (
                <div>
                    <div className="text-2xl font-medium">Total: {total}$ </div>
                    {favItem.length > 0 && (
                        <button
                            className="btn bg-pink-600 text-white block mx-auto my-10 uppercase"
                            onClick={handleDelete}
                        >
                            Delete All
                        </button>
                    )}
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 justify-items-center gap-10 my-12">
                        {isShow
                            ? favItem.map((fav) => (
                                <FavouriteItems key={fav.id} favItems={fav}></FavouriteItems>
                            ))
                            : favItem
                                .slice(0, 2)
                                .map((fav) => (
                                    <FavouriteItems
                                        key={fav.id}
                                        favItems={fav}
                                    ></FavouriteItems>
                                ))}
                    </div>
                    <div>
                        {favItem.length > 2 && (
                            <button
                                className={`btn bg-pink-600 text-white block mx-auto my-10 uppercase`}
                                onClick={() => setShow(!isShow)}
                            >
                                {isShow ? "See Less" : "see more"}
                            </button>
                        )}
                        {/* ${isShow? "hidden" : '' } */}
                    </div>
                </div>
            )}
        </div>
    );
};

export default Favourites;
