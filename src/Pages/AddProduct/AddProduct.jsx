import Swal from "sweetalert2";

const AddProduct = () => {
  const handleAddProduct = (event) => {
    event.preventDefault();
    const form = new FormData(event.currentTarget);

    const model = form.get("model");
    const image = form.get("image");
    const brand = form.get("brand");
    const type = form.get("type");
    const price = form.get("price");
    const rating = form.get("rating");
    const details = form.get("details");
    if (rating > 5) {
      alert("rate with 0 50 5");
      event.target.rating.value = "";
      return;
    }

    const newCar = {model, image, brand, type, price, rating, details}
    console.log(newCar);

    fetch('http://localhost:5000/car',{
      method: 'POST',
      headers: {
        'content-type' : 'application/json'
      },
      body: JSON.stringify(newCar)
    })
    .then(res => res.json())
    .then(data => {
      console.log(data)
      if(data.insertedId){
        Swal.fire("Product Added Successfully", "Thanks for contributing", "success");
      }
    })

    // event.target.reset();
  };

  return (
    <div className="  bg-[#c7cddd] py-4 lg:py-10">
      <h1 className="text-center text-5xl font-bold text-[#f60] ">
        Add a Product
      </h1>
      <form
        className="max-w-6xl mx-auto flex flex-col gap-10 lg:gap-16 lg:p-10"
        onSubmit={handleAddProduct}
      >
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
                className="input "
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
                className="input "
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
                className="input "
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
                <option disabled defaultValue="selected">
                  Select Types
                </option>
                <option value="T-shirts">T-shirts</option>
                <option value={"Mugs"}>Mugs</option>
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
                className="input "
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
                className="input "
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
              className="textarea  textarea-xs "
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
