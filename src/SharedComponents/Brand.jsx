import PropTypes from "prop-types";
import { useContext } from "react";
import { Link} from "react-router-dom";
import { AuthContext } from "../providers/AuthProvider";

const Brand = ({ brand }) => {
  const { brand_image, brand_name } = brand;
  const {dark} = useContext(AuthContext)

  return (
    <Link to={`/${brand_name}`}>

      <div className={`card rounded-lg py-2 shadow-2xl border   ${dark ? 'bg-[#37415b] border-[#37415b]' : 'bg-white border-0'}`}>
        <figure className="p-8">
          <img className="w-60 h-48" src={brand_image} alt="brand_image" />
        </figure>
        <div className="card-body">
          <h2 className="w-full  text-center text-2xl font-bold">
            {brand_name}
          </h2>
        </div>
      </div>

    </Link>
  );
};

Brand.propTypes = {
  brand: PropTypes.object,
};

export default Brand;
