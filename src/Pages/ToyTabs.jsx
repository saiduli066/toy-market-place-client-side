import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import { useEffect, useState } from "react";
import axios from "axios";

const ToyTabs = () => {
  const [toyData, setToyData] = useState({});
  console.log(toyData);
  useEffect(() => {
    axios
      .get("https://toy-marketplace-server-side-beryl.vercel.app/toys")
      .then((res) => {
        const toyData = res.data.reduce((result, toy) => {
          if (!result[toy.subCategory]) {
            result[toy.subCategory] = [];
          }
          result[toy.subCategory].push(toy);
          return result;
        }, {});
        setToyData(toyData);
      });
  }, []);

  return (
    <Tabs>
      <TabList className="lg:w-[50%]  mx-2 lg:mx-auto flex">
        <Tab className="w-[33%] mx-auto border-2 border-orange-400 text-lg font-bold text-white bg-sky-400  p-2 rounded">
          Taxi
        </Tab>
        <Tab className="w-[33%] mx-auto border-2 border-orange-400 text-lg font-bold text-white bg-sky-400  p-2 rounded">
          Jeep
        </Tab>
        <Tab className="w-[33%] mx-auto border-2 border-orange-400 text-lg font-bold text-white bg-sky-400 p-2 rounded">
          Convertible
        </Tab>
      </TabList>

      <TabPanel className="my-6 lg:my-10">
        <div className="flex flex-col flex-col lg:flex-row justify-center  gap-4 mx-auto w-[90%]">
          {toyData["Taxi"]?.map((toy) => (
            <div key={toy._id}>
              <div className="card card-compact lg:w-96 bg-base-100 shadow-xl">
                <figure>
                  <img src={toy.image} alt="" />
                </figure>
                <div className="card-body">
                  <h2 className="card-title">{toy.toyName}</h2>
                  <p className="font-normal">{toy.price}</p>
                  <p className="font-normal">
                    Available Quantity:{toy.availableQuantity}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </TabPanel>
      <TabPanel className="my-6 lg:my-10">
        <div className="flex flex-col lg:flex-row justify-center  gap-4 mx-auto w-[90%]">
          {toyData["Jeep"]?.map((toy) => (
            <div key={toy._id}>
              <div className="card card-compact lg:w-96 bg-base-100 shadow-xl">
                <figure>
                  <img src={toy.image} alt="" />
                </figure>
                <div className="card-body">
                  <h2 className="card-title">{toy.toyName}</h2>
                  <p className="font-normal">{toy.price}</p>
                  <p className="font-normal">
                    Available Quantity:{toy.availableQuantity}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </TabPanel>
      <TabPanel className="my-6 lg:my-10">
        <div className="flex flex-col  lg:flex-row justify-center  gap-4 mx-auto w-[90%]">
          {toyData["Convertible"]?.map((toy) => (
            <div key={toy._id}>
              <div className="card card-compact lg:w-96 bg-base-100 shadow-xl">
                <figure>
                  <img className="" src={toy.image} alt="" />
                </figure>
                <div className="card-body">
                  <h2 className="card-title">{toy.toyName}</h2>
                  <p className="font-normal">{toy.price}</p>
                  <p className="font-normal">
                    Available Quantity:{toy.availableQuantity}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </TabPanel>
    </Tabs>
  );
};

export default ToyTabs;
