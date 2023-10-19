import PropTypes from "prop-types";

const Brand = ({ brand }) => {
  const { brand_image, brand_name } = brand;
  return (
    <div className="card py-2 shadow-2xl bg-emerald-50">
      <figure className="p-5">
        <img className="w-52 h-48" src={brand_image} alt="brand_image" />
      </figure>
      <div className="card-body">
        <h2 className="w-full  text-center text-2xl font-bold">{brand_name}</h2>
      </div>
    </div>
  );
};

Brand.propTypes = {
  brand: PropTypes.object,
};

export default Brand;
