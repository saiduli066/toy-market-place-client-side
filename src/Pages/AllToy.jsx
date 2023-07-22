import axios from 'axios';
import  { useEffect, useState } from 'react';

const AllToy = () => {

  const [allToys, setAllToys] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:5000/allToys").then((result) => {
      console.log(result.data);
      setAllToys(result.data);
    });
  },[])
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
              {allToys.map((allToy, index) => (
                <tr key={allToy._id}>
                  <th>{index + 1}</th>
                  <td>
                    <div className="">
                      <div>
                        <div className="font-bold">{allToy.toyName}</div>
                      </div>
                    </div>
                  </td>
                  <td>
                    <h2 className="font-[500]">{allToy.name}</h2>
                  </td>
                  <td className="font-[500]">${allToy.price}</td>
                  <td className="font-[500]">{allToy.availableQuantity}</td>
                  <td>
                    <button className="btn btn-ghost btn-xs">View Details</button>
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