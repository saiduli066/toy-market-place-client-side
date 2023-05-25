// import React from 'react';

// const NewArrivals = () => {
//     return (
//       <div>
//         <h1 className="text-sky-600 text-xl  md:text-5xl font-[700] text-center my-8 md:my-16 ">
//           OUR LATEST ARRIVALS
//         </h1>
//         <div className="flex md:flex-row flex-col justify-evenly gap-8 text-center">
//           <div>
//             <img
//               className=" w-full h-[240px] md:w-[325px] md:h-[285px] px-7 md:px-0 object-cover"
//               src="https://img.freepik.com/free-psd/3d-illustration-car-icon_23-2149975033.jpg?w=2000"
//               alt=""
//             />
//             <p className="font-[500] my-4 md:my-6">
//               Price:<small>$13.50</small>
//             </p>
//           </div>
//           <div>
//             <img
//               className=" w-full h-[240px] md:w-[325px] px-7 md:px-0 md:h-[285px] object-cover"
//               src="https://t4.ftcdn.net/jpg/05/97/54/85/240_F_597548574_Z2hs6NuaiG78rABWCRACeGhWuK0CKVOB.jpg"
//               alt=""
//             />
//             <p className="font-[500] my-4 md:my-6">
//               Price:<small>$17.50</small>
//             </p>
//           </div>
//           <div>
//             <img
//               className=" md:w-[325px]  w-full h-[240px] px-7 md:px-0 md:h-[285px] object-cover"
//               src="https://img.freepik.com/premium-photo/toy-car-wooden-blocks-yellow-background-generative-ai_634053-5870.jpg?w=2000"
//               alt=""
//             />
//             <p className="font-[500] my-4 md:my-6">
//               Price:<small>$15.99</small>
//             </p>
//           </div>
//         </div>
//       </div>
//     );
// };

// export default NewArrivals;

import React, { useState } from 'react';

const NewArrivals = () => {
  const [hoveredItem, setHoveredItem] = useState(null);

  const handleMouseEnter = (item) => {
    setHoveredItem(item);
  };

  const handleMouseLeave = () => {
    setHoveredItem(null);
  };

  return (
    <div className='my-6 md:my-16'>
      <h1 className="text-sky-600 text-xl md:text-5xl font-[700] text-center my-8 md:my-16 ">
        OUR LATEST ARRIVALS
      </h1>
      <div className="flex md:flex-row flex-col justify-evenly gap-8 text-center">
        <div
          className="relative"
          onMouseEnter={() => handleMouseEnter('item1')}
          onMouseLeave={handleMouseLeave}
        >
          <img
            className="w-full h-[240px] md:w-[325px] md:h-[285px] px-7 md:px-0 object-cover"
            src="https://img.freepik.com/free-psd/3d-illustration-car-icon_23-2149975033.jpg?w=2000"
            alt=""
          />
          {hoveredItem === 'item1' && (
            <p className="font-[500] my-4 md:my-6 text-center ">
              Price: <small>$13.50</small>
            </p>
          )}
        </div>
        <div
          className="relative"
          onMouseEnter={() => handleMouseEnter('item2')}
          onMouseLeave={handleMouseLeave}
        >
          <img
            className="w-full h-[240px] md:w-[325px] px-7 md:px-0 md:h-[285px] object-cover"
            src="https://t4.ftcdn.net/jpg/05/97/54/85/240_F_597548574_Z2hs6NuaiG78rABWCRACeGhWuK0CKVOB.jpg"
            alt=""
          />
          {hoveredItem === 'item2' && (
            <p className="font-[500] my-4 md:my-6 text-center">
              Price: <small>$17.50</small>
            </p>
          )}
        </div>
        <div
          className="relative"
          onMouseEnter={() => handleMouseEnter('item3')}
          onMouseLeave={handleMouseLeave}
        >
          <img
            className="md:w-[325px] w-full h-[240px] px-7 md:px-0 md:h-[285px] object-cover"
            src="https://img.freepik.com/premium-photo/toy-car-wooden-blocks-yellow-background-generative-ai_634053-5870.jpg?w=2000"
            alt=""
          />
          {hoveredItem === 'item3' && (
            <p className="font-[500] my-4 md:my-6  text-center">
              Price: <small>$15.99</small>
            </p>
          )}
        </div>
      </div>
    </div>
  );
};

export default NewArrivals;
