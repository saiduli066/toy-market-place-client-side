import  { useState } from 'react';
import AOS from "aos";
import "aos/dist/aos.css";


const NewArrivals = () => {
  const [hoveredItem, setHoveredItem] = useState(null);

  AOS.init();
  const handleMouseEnter = (item) => {
    setHoveredItem(item);
  };

  const handleMouseLeave = () => {
    setHoveredItem(null);
  };

  

  return (
    <div className="my-6 md:my-16">
      <h1
        className="text-sky-600 text-xl md:text-5xl font-[700] text-center my-8 md:my-16 "
        data-aos="fade-down"
      >
        OUR LATEST ARRIVALS
      </h1>

      <div className="grid md:grid-cols-3 place-items-center gap-8 text-center">
        <div
          className="relative"
          onMouseEnter={() => handleMouseEnter("item1")}
          onMouseLeave={handleMouseLeave}
        >
          <img
            className="w-full h-[240px] md:w-[325px] md:h-[285px] px-7 md:px-0 object-cover"
            src="https://img.freepik.com/free-psd/3d-illustration-car-icon_23-2149975033.jpg?w=2000"
            alt=""
            data-aos="fade-up"
          />
          {hoveredItem === "item1" && (
            <p className="font-[500] my-4 md:my-6 text-center ">
              Price: <small>$13.50</small>
            </p>
          )}
        </div>
        <div
          className="relative"
          onMouseEnter={() => handleMouseEnter("item2")}
          onMouseLeave={handleMouseLeave}
        >
          <img
            className="w-full h-[240px] md:w-[325px] px-7 md:px-0 md:h-[285px] object-cover"
            src="https://t4.ftcdn.net/jpg/05/97/54/85/240_F_597548574_Z2hs6NuaiG78rABWCRACeGhWuK0CKVOB.jpg"
            alt=""
            data-aos="fade-up"
            data-aos-delay="100"
          />
          {hoveredItem === "item2" && (
            <p className="font-[500] my-4 md:my-6 text-center">
              Price: <small>$17.50</small>
            </p>
          )}
        </div>
        <div
          className="relative"
          onMouseEnter={() => handleMouseEnter("item3")}
          onMouseLeave={handleMouseLeave}
        >
          <img
            className="md:w-[325px] w-full h-[240px] px-7 md:px-0 md:h-[285px] object-cover"
            src="https://img.freepik.com/premium-photo/toy-car-wooden-blocks-yellow-background-generative-ai_634053-5870.jpg?w=2000"
            alt=""
            data-aos="fade-up"
            data-aos-delay="200"
          />
          {hoveredItem === "item3" && (
            <p className="font-[500] my-4 md:my-6  text-center">
              Price: <small>$15.99</small>
            </p>
          )}
        </div>
        <div
          className="relative"
          onMouseEnter={() => handleMouseEnter("item4")}
          onMouseLeave={handleMouseLeave}
        >
          <img
            className="w-full h-[240px] md:w-[325px] px-7 md:px-0 md:h-[285px] object-cover"
            src="https://static.ticimax.cloud/37107/Uploads/UrunResimleri/buyuk/bircan-oyuncak-sarjli-spor-arababircan-6-4742.jpg"
            alt=""
            data-aos="fade-up"
            data-aos-delay="300"
          />
          {hoveredItem === "item4" && (
            <p className="font-[500] my-4 md:my-6 text-center">
              Price: <small>$23.50</small>
            </p>
          )}
        </div>
        <div
          className="relative"
          onMouseEnter={() => handleMouseEnter("item5")}
          onMouseLeave={handleMouseLeave}
        >
          <img
            className="w-full h-[240px] md:w-[325px] px-7 md:px-0 md:h-[285px] object-cover"
            src="https://ae01.alicdn.com/kf/HTB1KH0ALpXXXXX9XpXXq6xXFXXXS/development-toys-for-children-pocket-toy-hot-Cute-Q-version-of-mini-slide-Bright-color-plastic.jpg"
            alt=""
            data-aos="fade-up"
            data-aos-delay="400"
          />
          {hoveredItem === "item5" && (
            <p className="font-[500] my-4 md:my-6 text-center">
              Price: <small>$11.90</small>
            </p>
          )}
        </div>
        <div
          className="relative"
          onMouseEnter={() => handleMouseEnter("item6")}
          onMouseLeave={handleMouseLeave}
        >
          <img
            className="w-full h-[240px] md:w-[325px] px-7 md:px-0 md:h-[285px] object-cover"
            src="https://th.bing.com/th/id/OIP.On7BckQgrTD_0H1I92qWbgHaFu?pid=ImgDet&rs=1"
            alt=""
            data-aos="fade-up"
            data-aos-delay="500"
          />
          {hoveredItem === "item6" && (
            <p className="font-[500] my-4 md:my-6 text-center">
              Price: <small>$19.50</small>
            </p>
          )}
        </div>
      </div>
    </div>
  );

};

export default NewArrivals;
