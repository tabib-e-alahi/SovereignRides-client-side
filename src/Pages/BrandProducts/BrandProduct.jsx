import PropTypes from "prop-types";
import { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../providers/AuthProvider";

const BrandProduct = ({ filterCar }) => {
  // console.log(filterCar);
  const { _id, model, image, brand_name, type, price, rating } = filterCar;
  const { dark } = useContext(AuthContext);

  return (
    <div className=" card     text-black ">
      <figure className="h-full ">
        <img className="w-full h-full" src={image} alt="Shoes" />
      </figure>
      <div
        className={`card-body rounded-b-2xl ${
          dark ? "bg-[#222732] text-white" : "bg-white text-black"
        }`}
      >
        <h2 className="text-xl lg:text-2xl font-bold flex justify-between">
          {model}
          <div className="">
            <Link to={`/:brand_name/${_id}`}>
              <button className="badge mr-2">View Details</button>
            </Link>
            <Link to={`/updateProduct/${_id}`}>
              <button className="badge">Update</button>
            </Link>
          </div>
        </h2>
        <div></div>
        <div className="my-2">
          <hr className="w-full border border-gray-700" />
        </div>
        <div className="card-actions flex justify-between items-center">
          <div className="flex gap-2 items-center">
            <div className="mr-2 btn text-white bg-[#f60] hover:bg-[#f60] text-SM  border-0 py-0.5 px-1.5">
              {brand_name.toUpperCase()}
            </div>
            <div className="text-lg font-medium mr-4 text-gray-400">{type}</div>
            <div className="text-base font-medium text-gray-400">
              Rating: {rating}/5
            </div>
          </div>
          <div
            className={`text-2xl ${
              dark ? "text-white " : "text-black"
            } font-bold`}
          >
            ${price}
          </div>
        </div>
      </div>
    </div>
  );
};

BrandProduct.propTypes = {
  filterCar: PropTypes.object,
};

export default BrandProduct;
