import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import ToyDetails from "./ToyDetails";

const AllToy = () => {
  const [allToys, setAllToys] = useState([]);

  useEffect(() => {
    axios
      .get("https://toy-marketplace-server-side-beryl.vercel.app/allToys")
      .then((result) => {
        console.log(result.data);
        setAllToys(result.data);
      });
  }, []);

  return (
    <div>
      <div className="overflow-x-auto ">
        <table className="table mx-auto">
          {/* head */}
          <thead>
            <tr>
              <th>#</th>
              <th>Name</th>
              <th>User Name</th>
              <th>Price</th>
              <th>Available Quantity</th>
              <th>View details</th>
            </tr>
          </thead>
          <tbody>
            {/* row */}
            {allToys.map((singleToy, index) => (
              <tr key={singleToy._id}>
                <th>{index + 1}</th>
                <td>
                  <div className="">
                    <div>
                      <div className="font-bold">{singleToy.toyName}</div>
                    </div>
                  </div>
                </td>
                <td>
                  <h2 className="font-[500]">{singleToy.name}</h2>
                </td>
                <td className="font-[500]">${singleToy.price}</td>
                <td className="font-[500]">{singleToy.availableQuantity}</td>
                <td>
                  <Link
                    to={`/view-details/${singleToy._id}`}
                    className="btn btn-ghost "
                  >
                    View Details
                  </Link>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default AllToy;
