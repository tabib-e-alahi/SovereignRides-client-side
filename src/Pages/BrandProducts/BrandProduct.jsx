import PropTypes from "prop-types";

const BrandProduct = ({ filterCar }) => {
  console.log(filterCar);
  const {model,image,brand_name,type,price,rating,details} = filterCar;
  return (
    <div className=" card  bg-base-100 shadow-xl">
      <figure className=" h-80">
        <img className="w-full h-full"
          src={image}
          alt="Shoes"
        />
      </figure>
      <div className="card-body">
        <h2 className="card-title">
          {model}
          <div className="badge badge-secondary">{type}</div>
        </h2>
        <p>{details}</p>
        <div className="card-actions justify-end">
          <div className="badge badge-outline">{brand_name}</div>
          <div className="badge badge-outline">{price}</div>
          <div className="badge badge-outline">{rating}</div>
        </div>
      </div>
    </div>
  );
};

BrandProduct.propTypes = {
  filterCar: PropTypes.object,
};

export default BrandProduct;