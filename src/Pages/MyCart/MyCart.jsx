import { useLoaderData } from "react-router-dom";
import Cart from "./Cart";


const MyCart = () => {
    const carts = useLoaderData()
    console.log(carts);
    return (
        <div>
            <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-10">
            {
                carts.map(cart => <Cart key={cart._id} cart={cart}></Cart>)
            }
        </div>
        </div>
    );
};

export default MyCart;