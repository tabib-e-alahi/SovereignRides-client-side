import PropTypes from "prop-types";
import { useContext } from "react";
import Swal from "sweetalert2";
import { AuthContext } from "../../providers/AuthProvider";
import { AiFillDelete } from "react-icons/ai";

const Cart = ({ cart, carts, setCarts }) => {
  const { _id, model, image, brand_name, type, price} = cart;

  const { dark } = useContext(AuthContext);

  const handleDelete = (_id) => {
    // console.log(_id);
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(
          `https://brand-shop-server-side-assignment-10-qwerci4rz-tabib-e-alahi.vercel.app/carCart/${_id}`,
          {
            method: "DELETE",
          }
        )
          .then((res) => res.json())
          .then((data) => {
            console.log(data);
            if (data.deletedCount > 0) {
              Swal.fire(
                "Deleted!",
                "Your product has been deleted.",
                "success"
              );
              const remaining = carts.filter((crt) => crt._id !== _id);
              setCarts(remaining);
            }
          });
      }
    });
  };

  return (
    <div className=" card card-side text-black relative  px-3 lg:px-0">
      <button onClick={() => handleDelete(_id)} className="absolute right-0 lg:-right-3 -top-4"><AiFillDelete 
      className={`w-10 h-10  border ${dark ? 'text-[#f50] border-[#f40] bg-white' : 'text-white border-[#f40] bg-[#f50]'} rounded-full p-2`}></AiFillDelete> </button>
      <figure className="h-full rounded-sm">
        <img className="rounded-l-xl h-full" src={image} alt="Shoes" />
      </figure>
      <div
        className={`card-body rounded-r-xl ${
          dark ? "bg-[#222732] text-white" : "bg-white text-black"
        }`}
      >
        <h2 className="text-xl lg:text-2xl font-bold flex justify-between">
          {model}
        </h2>
        <div></div>
        <div className="my-2">
          <hr className="w-full border border-gray-700" />
        </div>
        <div className="card-actions">

          <div className="flex gap-2 justify-between items-center">
            <div className="mr-2 btn text-white bg-[#f60] hover:bg-[#f60] text-sm  border-0 py-0 px-3">
              {brand_name}
            </div>
            <div className="text-lg font-medium  text-gray-400">{type}</div>
            
          </div>
          <div
            className={`text-xl lg:text-2xl ${
              dark ? "text-white " : "text-black"
            } font-medium lg:font-bold`}
          >
            Price: ${price}
          </div>
        </div>
      </div>
    </div>
  );
};

Cart.propTypes = {
  cart: PropTypes.array,
  carts: PropTypes.array,
  setCarts: PropTypes.array,
};

export default Cart;
