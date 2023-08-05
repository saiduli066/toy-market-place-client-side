/* eslint-disable react/prop-types */
import axios from "axios";
import  { useEffect } from "react";
import { useForm } from "react-hook-form";
import Modal from "react-modal";
import Swal from "sweetalert2";

const customStyles = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
  },
};

Modal.setAppElement("#root"); 




const UpdateToy = ({ myToy, setSelectedToy }) => {
  

    console.log(myToy._id);

  const { register, handleSubmit, setValue, reset } = useForm();

  useEffect(() => {
    Modal.defaultStyles.overlay.backgroundColor = "rgba(0,0,0,0.5)";
    openModal();
  }, []);

  const openModal = () => {
    Modal.setAppElement("body");
  };

  const closeModal = () => {
    setSelectedToy(null);
  };

  useEffect(() => {
    if (myToy) {
      setValue("toyName", myToy.toyName);
      setValue("price", myToy.price);
      setValue("availableQuantity", myToy.availableQuantity);
    }
  }, [myToy, setValue]);

    const handleUpdate = (data) => {
     console.log(data);
     axios
       .put(
         `https://toy-marketplace-server-side-beryl.vercel.app/my-toys/${myToy._id}`,
         data
       )
       .then((response) => {
         console.log(response);
         if (response.data.message === "Toy updated successfully" ) {
           Swal.fire("Updated!", "Your toy has been updated.", "success");
         } else {
           Swal.fire({
             icon: "error",
             title: "Oops...",
             text: "Something went wrong!",
           });
         }
       })
       .catch((error) => {
         console.error(error);
         Swal.fire({
           icon: "error",
           title: "Oops...",
           text: "Something went wrong!",
         });

         closeModal();
         reset();
       });
 };

  return (
    <Modal isOpen={true} onRequestClose={closeModal} style={customStyles}>
      <button className="btn btn-warning" onClick={closeModal}>
        Close
      </button>
      <form onSubmit={handleSubmit(handleUpdate)}>
        <input
          className="border-2 border-gray-900 m-2"
          {...register("toyName")}
          placeholder="Toy Name"
          defaultValue={myToy.toyName}
        />
        <input
          className="border-2 border-gray-900 m-2"
          {...register("price")}
          defaultValue={myToy.price}
          placeholder="Price"
        />
        <input
          className="border-2 border-gray-900 m-2"
          {...register("availableQuantity")}
          defaultValue={myToy.availableQuantity}
          placeholder="Available Quantity"
        />
        <button className="btn btn-info-outline" type="submit">
          Update
        </button>
      </form>
    </Modal>
  );
};

export default UpdateToy;
