import { useEffect, useState } from "react";
import TopCar from "./TopCar";


const TopCars = () => {
    const [topCars, setTopCars] = useState([])

    useEffect( () =>{
        fetch('https://brand-shop-server-side-assignment-10-qwerci4rz-tabib-e-alahi.vercel.app/car')
        .then(res => res.json())
        .then(data => setTopCars(data))
      },[])

      const filteredTopCars = topCars.filter(topCar => topCar.price > 50000);
    //   console.log(filteredTopCars);
    
    return (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 px-4 lg:px-10 mb-10">
           {
            filteredTopCars.map(filteredTopCar => <TopCar key={filteredTopCar._id} car={filteredTopCar}></TopCar>)
           }
        </div>
    );
};

export default TopCars;