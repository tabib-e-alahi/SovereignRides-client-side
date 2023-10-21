
import PropTypes from 'prop-types';
import { useContext } from 'react';
import { AuthContext } from '../../providers/AuthProvider';

const TopCar = ({car}) => {
    console.log(car);


    const { model, image, brand_name, type, price, rating } = car;
  const { dark } = useContext(AuthContext);


    return (
        <div className=" card  text-black ">
      <figure className="h-full ">
        <img className="w-full h-full" src={image} alt="Shoes" />
      </figure>
      <div
        className={`card-body rounded-b-2xl ${
          dark ? "bg-[#222732] text-white" : "bg-white text-black"
        }`}
      >
        <h2 className="text-xl  font-bold flex justify-between">
          {model}
          <div>
            ${price}
          </div>
        </h2>
        <div></div>
        <div className="">
          <hr className="w-full border border-gray-700" />
        </div>
        <div className="card-actions flex justify-between items-center">
          <div className="flex gap-2 items-center">
            <div className="mr-2 btn text-white bg-[#f60] hover:bg-[#f60] text-SM  border-0 py-0.5 px-1.5">
              {brand_name}
            </div>
            <div className="text-lg font-medium mr-4 text-gray-400">{type}</div>
            <div className="text-base font-medium text-gray-400">
              Rating: {rating}/5
            </div>
          </div>
          
        </div>
      </div>
    </div>
    );
};

TopCar.propTypes = {
    car:PropTypes.object
};

export default TopCar;