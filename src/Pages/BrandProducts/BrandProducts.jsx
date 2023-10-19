import { useLoaderData, useParams } from "react-router-dom";
import BrandProduct from "./BrandProduct";

const BrandProducts = () => {
  const { brand_name } = useParams();

  const cars = useLoaderData();

  const filteredCars = cars.filter(
    (car) => car.brand_name.toUpperCase() === brand_name
  );
  console.log(filteredCars);

  return (
    <div>
      {filteredCars?.length > 0 ? (
        <div>
          <div className="max-w-7xl mx-auto my-10">
            <div className="carousel w-full">
              <div id="slide1" className="carousel-item relative w-full">
                <img
                  src={filteredCars[0].image}
                  className="w-full h-[600px] rounded-2xl"
                />
                <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                  <a href="#slide4" className="btn btn-circle">
                    ❮
                  </a>
                  <a href="#slide2" className="btn btn-circle">
                    ❯
                  </a>
                </div>
              </div>
              <div id="slide2" className="carousel-item relative w-full">
                <img
                  src={filteredCars[1].image}
                  className="w-full h-[600px] rounded-2xl"
                />
                <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                  <a href="#slide1" className="btn btn-circle">
                    ❮
                  </a>
                  <a href="#slide3" className="btn btn-circle">
                    ❯
                  </a>
                </div>
              </div>
              <div id="slide3" className="carousel-item relative w-full">
                <img
                  src={filteredCars[2].image}
                  className="w-full h-[600px] rounded-2xl"
                />
                <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                  <a href="#slide2" className="btn btn-circle">
                    ❮
                  </a>
                  <a href="#slide1" className="btn btn-circle">
                    ❯
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-10">
            {filteredCars.map((filterCar, idx) => (
              <BrandProduct key={idx} filterCar={filterCar}></BrandProduct>
            ))}
          </div>
        </div>
      ) : (
        <div>
          <h1>No data found</h1>
        </div>
      )}
    </div>
  );
};

BrandProducts.propTypes = {};

export default BrandProducts;
