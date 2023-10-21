import {  useState } from "react";
import Swal from "sweetalert2";
// import { AuthContext } from "../../providers/AuthProvider";

const AddProduct = () => {
  const [ratingError, setRatingError] = useState('')
  const [priceError, setPriceError] = useState('')

  // const {dark} = useContext(AuthContext);


  const handleAddProduct = (event) => {
    event.preventDefault();
    const form = new FormData(event.currentTarget);

    setRatingError('');
    setPriceError('')
    const model = form.get("model");
    const image = form.get("image");
    const brand = form.get("brand");
    const type = form.get("type");
    const price = form.get("price");
    const rating = form.get("rating");
    const details = form.get("details");
    if (rating > 5) {
      setRatingError('Rating value must be between 0 to 5')
      return;
    }
    if (rating < 0) {
      setRatingError('Rating value must be between 0 to 5')
      return;
    }
    if(price < 0){
setPriceError('Price value can not be negative');
return
    }

    const newCar = {model, image, brand, type, price, rating, details}
    // console.log(newCar);

    fetch('https://brand-shop-server-side-assignment-10-qwerci4rz-tabib-e-alahi.vercel.app/car',{
      method: 'POST',
      headers: {
        'content-type' : 'application/json'
      },
      body: JSON.stringify(newCar)
    })
    .then(res => res.json())
    .then(data => {
      // console.log(data)
      if(data.insertedId){
        Swal.fire("Product Added Successfully", "Thanks for contributing", "success");
      }
    })

    event.target.reset();
  };

  return (
    <div className={`py-4 lg:py-10`}>
      <h1 className="text-center my-8 text-3xl lg:text-5xl font-bold text-[#f60] ">
        Add a Product
      </h1>
      <form
        className="max-w-6xl mx-auto mb-10 flex flex-col gap-10 lg:gap-16 px-4 lg:p-10"
        onSubmit={handleAddProduct}
      >
        {/* model name and image ======================== */}
        <div className="w-full flex flex-col lg:flex-row  gap-8 lg:gap-20">
          <div className="form-control w-full">
            <label className="input-group input-group-vertical">
              <span className="font-semibold text-lg py-1 text-white bg-[#39435c]">
                Name(Model Name)
              </span>
              <input
                type="text"
                name="model"
                placeholder="Enter Model Name"
                className="input text-black"
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
                className="input text-black"
                required
              />
            </label>
          </div>
        </div>

        {/* brand name and type ======================================= */}
        <div className="w-full flex flex-col lg:flex-row gap-8 lg:gap-20">
          <div className="form-control w-full">
            <label className="input-group input-group-vertical">
              <span className="font-semibold text-lg py-1 text-white bg-[#39435c]">
                Brand(Brand Name)
              </span>
              <input
                type="text"
                name="brand"
                placeholder="Enter brand Name"
                className="input text-black"
                required
              />
            </label>
          </div>

          <div className="form-control w-full">
            <label className="input-group input-group-vertical">
              <span className="font-semibold text-lg py-1 text-white bg-[#39435c]">
                Type(Car Type)
              </span>
              <select className="select text-black" name="type">
                <option disabled defaultValue="selected">
                  Select Types
                </option>
                <option value="Sedan">Sedan</option>
                <option value="SUV (Sports Utility Vehicle)">SUV (Sports Utility Vehicle)</option>
                <option value="Convertible">Convertible</option>
                <option value="Coupe">Coupe</option>
                <option value="Hatchback">Hatchback</option>
                <option value="Minivan">Minivan</option>
                <option value="Pickup Truck">Pickup Truck</option>
                <option value="Electric Vehicle (EV)">Electric Vehicle (EV)</option>
                <option value="Crossover">Crossover</option>
                <option value="Luxury Car">Luxury Car</option>
              </select>
            </label>
          </div>
        </div>

        {/* price and rating ======================== */}
        <div className="w-full flex flex-col lg:flex-row gap-8  lg:gap-20">
          <div className="form-control w-full">
            <label className="input-group input-group-vertical">
              <span className="font-semibold text-lg py-1 text-white bg-[#39435c]">
                Price
              </span>
              <input
                type="number"
                name="price"
                placeholder="Enter price"
                className="input text-black"
                required
              />
              {
                priceError && <p className="text-lg text-red-600 font-medium">{priceError}</p>
              }
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
                className="input text-black"
                required
              />
              {
                ratingError && <p className="text-lg text-red-600 font-medium">{ratingError}</p>
              }
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
              className="textarea  textarea-xs text-black"
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

export default AddProduct;
