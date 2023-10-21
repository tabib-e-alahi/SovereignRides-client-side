import PropTypes from "prop-types";
import Swal from "sweetalert2";

const Cart = ({ cart, carts, setCarts }) => {
  const { _id, model, image, brand_name, type, price, rating, details } = cart;

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
        fetch(`https://brand-shop-server-side-assignment-10-qwerci4rz-tabib-e-alahi.vercel.app/carCart/${_id}`, {
          method: "DELETE",
        })
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
    <div className=" card  bg-base-100 shadow-xl">
      <figure className=" h-80">
        <img className="w-full h-full" src={image} alt="Shoes" />
      </figure>
      <div className="card-body">
        <h2 className="card-title">
          {model}
          <div className="badge badge-secondary">{type}</div>
        </h2>
        <p>{details}</p>
        <div className="card-actions justify-end">
          <div className="badge badge-outline">{brand_name}</div>
          <div className="badge badge-outline">{price}</div>
          <div className="badge badge-outline">{rating}</div>
          <button onClick={() => handleDelete(_id)}>Delete</button>
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
