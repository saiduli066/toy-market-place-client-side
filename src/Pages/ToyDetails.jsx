import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const ToyDetails = () => {
 const { toyId } = useParams();
  console.log(toyId);
  
   const [allToys, setAllToys] = useState([]);

   useEffect(() => {
     axios
       .get("https://toy-marketplace-server-side-beryl.vercel.app/allToys")
       .then((result) => {
         setAllToys(result.data);
       });
   }, []);
  
  const toy = allToys.find((toy) => toy._id === toyId);
  console.log(toy);

   if (!toy) {
     return <div>Loading...</div>;
  }
  
  const { toyImageUrl, toyName, description, price, subCategory } = toy;
  console.log(toyImageUrl);
  return (
    <div className="py-16">
      <div className="card w-[70%] mx-auto bg-base-100 shadow-xl">
        <figure>
          <img className="w-[full] h-[30em] object-cover" src={toyImageUrl} alt="" />
        </figure>
        <div className="card-body">
          <h2 className="card-title">{toyName}</h2>
          <p>{description}</p>
          <p>{subCategory}</p>
          <p>${price}</p>
        </div>
      </div>
    </div>
  );
};

export default ToyDetails;