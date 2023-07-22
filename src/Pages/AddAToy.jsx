import { useContext } from "react";
import { AuthContext } from "../providers/Authprovider";
import { useForm } from "react-hook-form";
import axios from "axios";
import Swal from "sweetalert2";

const AddAToy = () => {
  const { user } = useContext(AuthContext);
  const { register, handleSubmit, reset } = useForm();
  const onSubmit = (data) => {
    const toyData = { ...data, email: user?.email, status: false };
    console.log(toyData);
    axios.post("http://localhost:5000/addToy", toyData).then((result) => {
      console.log(result.data);
       Swal.fire({
         icon: "success",
         title: "Toy added successfully!",
         showConfirmButton: false,
         timer: 1500,
       });

       reset();
    });
  };

  return (
    <>
      <div className="card w-[500px] mx-auto mt-10 shadow-lg px-6 py-4">
        <form onSubmit={handleSubmit(onSubmit)}>
          <div>
            <label className="">Toy name</label>
            <div className="relative">
              <input
                className="w-full rounded-lg p-4 pe-12 text-sm shadow-sm outline-none border border-gray-400"
                {...register("toyName")}
                placeholder="Toy Name"
              />
            </div>
          </div>
          <div>
            <label className="">Toy image url</label>
            <div className="relative">
              <input
                className="w-full rounded-lg p-4 pe-12 text-sm shadow-sm outline-none border border-gray-400"
                {...register("toyImageUrl")}
                placeholder="Toy image url"
              />
            </div>
          </div>
          <div>
            <label className="">Name</label>
            <div className="relative">
              <input
                className="w-full rounded-lg p-4 pe-12 text-sm shadow-sm outline-none border border-gray-400"
                {...register("name")}
                placeholder="Name"
              />
            </div>
          </div>
          <div>
            <label className="">Email</label>
            <div className="relative">
              <input
                className="w-full rounded-lg p-4 pe-12 text-sm shadow-sm outline-none border border-gray-400"
                readOnly
                placeholder={user?.email}
              />
            </div>
          </div>
          <div>
            <label className="">Category</label>
            <div className="relative">
              <input
                className="w-full rounded-lg p-4 pe-12 text-sm shadow-sm outline-none border border-gray-400"
                {...register("category")}
                placeholder="Category"
              />
            </div>
          </div>
          <div>
            <label className="">Sub-category</label>
            <div className="relative">
              <input
                className="w-full rounded-lg p-4 pe-12 text-sm shadow-sm outline-none border border-gray-400"
                {...register("subCategory")}
                placeholder="Sub-Category"
              />
            </div>
          </div>
          <div>
            <label className="">Price</label>
            <div className="relative">
              <input
                className="w-full rounded-lg p-4 pe-12 text-sm shadow-sm outline-none border border-gray-400"
                {...register("price")}
                placeholder="Price"
              />
            </div>
          </div>
          <div>
            <label className="">Ratings</label>
            <div className="relative">
              <input
                className="w-full rounded-lg p-4 pe-12 text-sm shadow-sm outline-none border border-gray-400"
                {...register("ratings")}
                placeholder="Ratings"
              />
            </div>
          </div>
          <div>
            <label className="">Description</label>
            <div className="relative">
              <input
                className="w-full rounded-lg p-4 pe-12 text-sm shadow-sm outline-none border border-gray-400"
                {...register("description")}
                placeholder="Description"
              />
            </div>
          </div>

          <input
            className="btn bg-green-400 hover:bg-green-600 border-0 mt-5 px-4 py-2 text-white rounded-md w-full"
            type="submit"
          />
        </form>
      </div>
    </>
  );
};

export default AddAToy;
