import { useEffect, useState } from "react";
import Banner from "./Banner";
import Brand from "../../SharedComponents/Brand";
import TopCars from "./TopCars";
import WhyChooseUs from "./WhyChooseUs";

const Home = () => {
  const [brands, setBrands] = useState([]);
 


  useEffect( () =>{
    fetch('https://brand-shop-server-side-assignment-10-qwerci4rz-tabib-e-alahi.vercel.app/brands')
    .then(res => res.json())
    .then(data => setBrands(data))
  },[])



  return (
    <>
      <Banner></Banner>
      <h1 className="text-4xl lg:text-6xl mt-10 lg:mt-16 font-bold text-center">Our Brands</h1>
      <div className="max-w-5xl mx-auto my-10  grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 px-4 lg:px-0 gap-10">
      {
        brands.map(brand => <Brand key={brand.brand_id} brand={brand} ></Brand>)
      }
      </div>
      <div>
        <h1 className="text-4xl lg:text-6xl mt-10 lg:mt-16 font-bold my-10 text-center">Top Cars</h1>
        <TopCars></TopCars>
      </div>
      <WhyChooseUs></WhyChooseUs>
    </>
  );
};

export default Home;
