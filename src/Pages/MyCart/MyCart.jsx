import { useLoaderData } from "react-router-dom";
import Cart from "./Cart";
import { useState } from "react";


const MyCart = () => {
    const loadedCarts = useLoaderData()
    const [carts, setCarts] = useState(loadedCarts)
    console.log(loadedCarts);


    return (
        <div>
            <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-10 my-10">
            {
                carts.map(cart => <Cart key={cart._id} cart={cart} carts={carts} setCarts={setCarts}></Cart>)
            }
        </div>
        </div>
    );
};

export default MyCart;