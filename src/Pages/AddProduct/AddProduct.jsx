const AddProduct = () => {

const handleAddProduct = event =>{
    event.preventDefault();
    const form = new FormData(event.currentTarget);

    const model = form.get("model");
    const image = form.get("image");
    const brand = form.get("brand");
    const type = form.get("type");
    const price = form.get("price");
    const rating = form.get("rating");
    const details = form.get("details");
    if(rating > 5){
        alert('rate with 0 50 5')
        event.target.rating.value = ''
        return
    }

    console.log(model,image, brand, type , price, rating, details);
    event.target.reset()
}


  return (
    <div className="my-20">
      <form
        className="max-w-6xl mx-auto flex flex-col gap-10 lg:gap-16"
        onSubmit={handleAddProduct}
      >
        {/* model name and image ======================== */}
        <div className="w-full flex flex-col lg:flex-row  lg:gap-20">
          <div className="form-control w-full">
            <label className="input-group input-group-vertical">
              <span className="font-semibold text-lg py-1">
                Name(Model Name)
              </span>
              <input
                type="text"
                name="model"
                placeholder="Enter Model Name"
                className="input "
              />
            </label>
          </div>

          <div className="form-control w-full">
            <label className="input-group input-group-vertical">
              <span className="font-semibold text-lg py-1">Image(URL)</span>
              <input
                type="text"
                name="image"
                placeholder="Enter image url here"
                className="input "
              />
            </label>
          </div>
        </div>

        {/* brand name and type ======================================= */}
        <div className="w-full flex flex-col lg:flex-row  lg:gap-20">
          <div className="form-control w-full">
            <label className="input-group input-group-vertical">
              <span className="font-semibold text-lg py-1">
                Brand(Brand Name)
              </span>
              <input
                type="text"
                name="brand"
                placeholder="Enter brand Name"
                className="input "
              />
            </label>
          </div>

          <div className="form-control w-full">
            <label className="input-group input-group-vertical">
              <span className="font-semibold text-lg py-1">Type(Car Type)</span>
              <select className="select " name="type">
                <option disabled defaultValue='selected'>
                  Select Types
                </option>
                <option value='T-shirts'>T-shirts</option>
                <option value={'Mugs'}>Mugs</option>
              </select>
            </label>
          </div>
        </div>

        {/* price and rating ======================== */}
        <div className="w-full flex flex-col lg:flex-row  lg:gap-20">
          <div className="form-control w-full">
            <label className="input-group input-group-vertical">
              <span className="font-semibold text-lg py-1">
                Price
              </span>
              <input
                type="number"
                name="price"
                placeholder="Enter price"
                className="input "
              />
            </label>
          </div>

          <div className="form-control w-full">
            <label className="input-group input-group-vertical">
              <span className="font-semibold text-lg py-1">Rating(0-5)</span>
              <input
                type="number"
                name="rating"
                placeholder="Rating"
                className="input "
              />
            </label>
          </div>
        </div>

{/* short description======================== */}
        <div className="form-control w-full">
            <label className="input-group input-group-vertical">
              <span className="font-semibold text-lg py-1">Short Description</span>
              <textarea name="details" placeholder="give a short description about your product" className="textarea  textarea-xs " ></textarea>
            </label>
          </div>

          <button type="submit" className="btn btn-wide bg-[#f60] hover:bg-[#f60] text-white mx-auto normal-case text-lg">Add Product</button>
      </form>
    </div>
  );
};

export default AddProduct;
