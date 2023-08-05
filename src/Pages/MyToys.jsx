import axios from "axios";
import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../providers/Authprovider";
import Swal from "sweetalert2";

const MyToys = () => {
  const { user } = useContext(AuthContext);

  const [myToys, setMyToys] = useState([]);

  useEffect(() => {
    axios
      .get(
        `https://toy-marketplace-server-side-beryl.vercel.app/my-toys?email=${user.email}`
      )
      .then((result) => {
        console.log(result.data);
        setMyToys(result.data);
      });
  }, [user.email]);


    // delete action

//     const handleDelete = (id) => {
//         Swal.fire({
//   title: 'Are you sure?',
//   text: "You won't be able to revert this!",
//   icon: 'warning',
//   showCancelButton: true,
//   confirmButtonColor: '#3085d6',
//   cancelButtonColor: '#d33',
//   confirmButtonText: 'Yes, delete it!'
//         }).then((result) => {
       
//   if (result.isConfirmed) {
//     Swal.fire(
//       'Deleted!',
//       'Your file has been deleted.',
//       'success'
//     )
//   }
// })
//     }

    const handleDelete = (id) => {
    console.log(id);
    Swal.fire({
        title: 'Are you sure?',
        text: "You won't be able to revert this!",
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Yes, delete it!'
    }).then((result) => {
        if (result.isConfirmed) {
            const url = `https://toy-marketplace-server-side-beryl.vercel.app/my-toys/${id}`;
            console.log(url);
            axios.delete(url)
                .then(response => {
                    console.log(response);
                    if (response.data.deletedCount > 0) {
                      Swal.fire(
                        "Deleted!",
                        "Your file has been deleted.",
                        "success"
                      );
                    }
                    // update the state to reflect the deletion
                    const remaining = myToys.filter((toy) => toy._id !== id);
                    setMyToys(remaining);
                })
                .catch(error => {
                    console.error(error);
                });
        }
    })
}

  return (
    <div className="overflow-x-auto w-full my-6 lg:my-10 ">
      <table className="table mx-auto">
        {/* head */}
        <thead>
          <tr>
            <th>#</th>
            <th>Image</th>
            <th>Name</th>
            <th>User Name</th>
            <th>Price</th>
            <th>Available Quantity</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {/* row */}
          {myToys.map((myToy, index) => (
            <tr key={myToy._id}>
              <th>{index + 1}</th>
              <td>
                <div className="avatar">
                  <div className="mask mask-squircle w-12 h-12">
                    <img src={myToy.toyImageUrl} alt="" />
                  </div>
                </div>
              </td>
              <td>
                <div className="">
                  <div>
                    <div className="font-bold">{myToy.toyName}</div>
                  </div>
                </div>
              </td>
              <td>
                <h2 className="font-[500]">{myToy.name}</h2>
              </td>
              <td className="font-[500]">${myToy.price}</td>
              <td className="font-[500]">{myToy.availableQuantity}</td>
              <td>
                <button onClick="" className="btn btn-info mr-3">
                  Update
                </button>
                <button onClick={()=>handleDelete(myToy._id)} className="btn btn-warning ">
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default MyToys;
