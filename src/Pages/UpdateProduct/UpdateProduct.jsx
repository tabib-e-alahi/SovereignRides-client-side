import { useLoaderData } from "react-router-dom";

const UpdateProduct = () => {
  const params = useLoaderData();
  console.log(params);
  const {model,image,brand_name,type,price,rating,details} = params;

  return (
    <div className="  bg-[#c7cddd] py-4 lg:py-10">
      <h1 className="text-center text-5xl font-bold text-[#f60] ">
        Update a Product
      </h1>
      <form className="max-w-6xl mx-auto flex flex-col gap-10 lg:gap-16 lg:p-10">
        {/* model name and image ======================== */}
        <div className="w-full flex flex-col lg:flex-row  lg:gap-20">
          <div className="form-control w-full">
            <label className="input-group input-group-vertical">
              <span className="font-semibold text-lg py-1 text-white bg-[#39435c]">
                Name(Model Name)
              </span>
              <input
                type="text"
                name="model"
                placeholder="Enter Model Name"
                className="input " defaultValue={model}
                required
              />
            </label>
          </div>

          <div className="form-control w-full">
            <label className="input-group input-group-vertical">
              <span className="font-semibold text-lg py-1 text-white bg-[#39435c]">
                Image(URL)
              </span>
              <input
                type="text"
                name="image"
                placeholder="Enter image url here"
                className="input " defaultValue={image}
                required
              />
            </label>
          </div>
        </div>

        {/* brand name and type ======================================= */}
        <div className="w-full flex flex-col lg:flex-row  lg:gap-20">
          <div className="form-control w-full">
            <label className="input-group input-group-vertical">
              <span className="font-semibold text-lg py-1 text-white bg-[#39435c]">
                Brand(Brand Name)
              </span>
              <input
                type="text"
                name="brand"
                placeholder="Enter brand Name"
                className="input " defaultValue={brand_name}
                required
              />
            </label>
          </div>

          <div className="form-control w-full">
            <label className="input-group input-group-vertical">
              <span className="font-semibold text-lg py-1 text-white bg-[#39435c]">
                Type(Car Type)
              </span>
              <select className="select " name="type">
                <option  defaultValue={type}>
                    {type}
                </option>
                <option value="Sedan">Sedan</option>
                <option value="SUV (Sports Utility Vehicle)">
                  SUV (Sports Utility Vehicle)
                </option>
                <option value="Convertible">Convertible</option>
                <option value="Coupe">Coupe</option>
                <option value="Hatchback">Hatchback</option>
                <option value="Minivan">Minivan</option>
                <option value="Pickup Truck">Pickup Truck</option>
                <option value="Electric Vehicle (EV)">
                  Electric Vehicle (EV)
                </option>
                <option value="Crossover">Crossover</option>
                <option value="Luxury Car">Luxury Car</option>
              </select>
            </label>
          </div>
        </div>

        {/* price and rating ======================== */}
        <div className="w-full flex flex-col lg:flex-row  lg:gap-20">
          <div className="form-control w-full">
            <label className="input-group input-group-vertical">
              <span className="font-semibold text-lg py-1 text-white bg-[#39435c]">
                Price
              </span>
              <input
                type="number"
                name="price"
                placeholder="Enter price"
                className="input " defaultValue={price}
                required
              />
            </label>
          </div>

          <div className="form-control w-full">
            <label className="input-group input-group-vertical">
              <span className="font-semibold text-lg py-1 text-white bg-[#39435c]">
                Rating(0-5)
              </span>
              <input
                type="number"
                name="rating"
                placeholder="Rating"
                className="input " defaultValue={rating}
                required
              />
            </label>
          </div>
        </div>

        {/* short description======================== */}
        <div className="form-control w-full">
          <label className="input-group input-group-vertical">
            <span className="font-semibold text-lg py-1 text-white bg-[#39435c]">
              Short Description
            </span>
            <textarea
              name="details"
              placeholder="give a short description about your product"
              required
              className="textarea  textarea-xs " defaultValue={details}
            ></textarea>
          </label>
        </div>

        <button
          type="submit"
          className="btn btn-wide bg-[#f60] hover:bg-[#f60] text-white mx-auto normal-case text-lg border-0"
        >
          Add Product
        </button>
      </form>
    </div>
  );
};

// UpdateProduct.propTypes = {
//     filterCar: PropTypes.object
// };

export default UpdateProduct;
