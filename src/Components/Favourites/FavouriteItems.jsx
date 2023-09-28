import PropTypes from "prop-types"
import { useNavigate } from "react-router-dom";
const FavouriteItems = ({favItems}) => {
    const navigate = useNavigate()
    const handleBtn=()=>{
        navigate(-1)
    }
    const {image, phone_name, brand_name, rating, price} = favItems
    return (
        <div className="">
        <div className="relative flex w-full max-w-[48rem] flex-row rounded-xl bg-white bg-clip-border text-gray-700 shadow-md">
    <div className="relative m-0 w-2/5 shrink-0 overflow-hidden rounded-xl rounded-r-none bg-white bg-clip-border text-gray-700">
      <img
        src={image}
        alt="image"
        className="h-[300px] w-full object-cover p-2"
      />
    </div>
    <div className="p-6">
      <h6 className="mb-4 block font-sans text-base font-semibold uppercase leading-relaxed tracking-normal text-pink-500 antialiased">
       {brand_name}
      </h6>
      <h4 className="mb-2 block font-sans text-2xl font-semibold leading-snug tracking-normal text-blue-gray-900 antialiased">
        {phone_name}
      </h4>
      <p className="mb-2 block font-sans text-base font-normal leading-relaxed text-gray-700 antialiased">
        ${price}
      </p>
      {/* <Rating value={newRating} /> */}
      <p className="mb-8 block font-sans text-base font-normal leading-relaxed text-gray-700 antialiased"> Rating: {rating}</p>
      
      <a className="inline-block" href="#">
        <button
          className="flex select-none items-center gap-2 rounded-lg py-3 px-6 text-center align-middle font-sans text-xs font-bold uppercase text-pink-500 transition-all hover:bg-pink-500/10 active:bg-pink-500/30 disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
          type="button" onClick={handleBtn}
        >
         Go Back
         
        </button>
      </a>
    </div>
  </div>
    </div>
    );
};
FavouriteItems.propTypes ={
    favItems: PropTypes.object.isRequired
}

export default FavouriteItems;