import { useLoaderData } from "react-router-dom";
import toyota from "../../assets/toyota_4-removebg-preview.png";

// bg-[#182033]

const CarDetails = () => {
  const params = useLoaderData();
  console.log(params._id);
  const { image, model, brand_name, type, price, rating, details } = params;
  return (
    <div className="card lg:card-side bg-base-100 shadow-xl max-w-7xl mx-auto my-16">
      <figure>
        <img src={image} alt="Album" />
      </figure>
      <div className="card-body w-3/5">
        <div className="flex flex-col gap-4 flex-1">
          <h2 className="text-2xl ">
            Model: <span className="text-4xl font-semibold">{model}</span>
          </h2>
          <p className="text-xl">
            Brand:{" "}
            <span className="text-2xl font-medium">
              {brand_name.toUpperCase()}
            </span>
          </p>
          <p className="text-lg">
            Car Type: <span className="text-xl font-medium">{type}</span>
          </p>
          <div className="flex gap-6 justify-center items-center">
            <p className="text-lg">
              Price: <span className="text-xl font-medium">{price}</span>
            </p>
            <p className="text-lg">
              Rating: <span className="text-xl font-medium">{rating}</span>
            </p>
          </div>
          <p className="text-lg">
            About this car:{" "}
            <span className="text-xl font-medium">{details}</span>
          </p>
        </div>

        <div className="card-actions justify-end">
          <button className="btn btn-primary">Listen</button>
        </div>
      </div>
    </div>
  );
};

export default CarDetails;
