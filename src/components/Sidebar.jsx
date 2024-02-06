import React, { useState } from 'react';

const Sidebar = ({ setMaterial, setYarn, setWeight, setFinishing }) => {
  const [isOpen, setIsOpen] = useState(false);
  const Yarn = [
    {
        _id: 0,
        title: "below 40s",
        array: [40],
    },
    {
        _id: 1,
        title: "40-50s",
        array: [40, 50],
    },
    {
        _id: 2,
        title: "60s",
        array: [60],
    },
    {
        _id: 3,
        title: "70-90s",
        array: [70, 90],
    },
    {
        _id: 8,
        title: "80/2",
        array: [80],
    },
    {
        _id: 4,
        title: "100/2",
        array: [100],
    },
    {
        _id: 5,
        title: "120/2",
        array: [120],
    },
    {
        _id: 6,
        title: "140/2",
        array: [140],
    },
    {
        _id: 7,
        title: "160/3",
        array: [160],
    },
];

const Material = [
    { _id: '0', title: "100% Cotton" }, { _id: '1', title: "100%Rayon" }, { _id: '2', title: "100% Linen" }, { _id: '3', title: " With Linen" }, { _id: '4', title: "With Tencel" }, { _id: '5', title: "With Wool " }, { _id: '6', title: "With RayonFrom Bamboo" }, { _id: '7', title: " With Nylon " }, { _id: '8', title: "With Acrylic " }, { _id: '9', title: "With Spandex" }, { _id: '10', title: "With Polyester" }, { _id: '11', title: "With Lurex Modal" }
];

const Weight = [
    { _id: '112', title: "below 100gsm", nums: [100] }, { _id: '12121', title: "100-130gsm", nums: [100, 130] }, { _id: '22121', title: "130-150gsm", nums: [130] }, { _id: '3312', title: "150-180gsm", nums: [150] }, { _id: '41231', title: "180gsm and above", nums: [180] }
];

const Finishing = [
    { _id: '3131', title: "Wrinkle Free" }, { _id: '1311331', title: "Easy to iron/Easy care" }, { _id: '2313131', title: "Super Soft" }, { _id: '331313', title: "Fabric For Garment Dipping" }, { _id: '4313211', title: "Regular Soft" }, { _id: '512323', title: "For Garment Dyeing" }, { _id: '63113', title: "Peaching" }, { _id: '7314', title: "Brushing" }, { _id: '83131331', title: "Printing" }, { _id: '931113', title: "Seersucker" }, { _id: '103111', title: "Function" }, { _id: '1133311', title: "Paper " }, { _id: '1231313', title: "Touch" }
];

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className={`lg:hidden ${isOpen ? 'block' : 'hidden'}`}>
      <button
        onClick={toggleSidebar}
        className="text-gray-500 hover:text-gray-700 focus:outline-none focus:text-gray-700"
      >
    


      </button>
      <div className="fixed top-0 left-0 w-full h-full bg-black bg-opacity-75 z-50">
        <div className="border p-5 absolute top-0 left-0 h-full bg-black">
          <h1 className="text-2xl font-semibold border px-4 py-2 mb-2">Material</h1>
          <div className="flex flex-col gap-2">
           
             {Material.map((val) => (
              <div className="flex items-center gap-2" key={val._id}>
                <input
                  type="checkbox"
                  value={val.title}
                  onChange={(e) => setMaterial(e.target.value)}
                ></input>
                <label>{val.title}</label>
              </div>
            ))} 
          </div>
          <h1 className="text-2xl font-semibold border w-full px-4 py-2 mb-2">Yarn Count</h1>
          <div className="flex flex-col gap-2">
            
             {Yarn.map((val) => (
              <div className="flex items-center gap-2" key={val._id}>
                <input
                  type="radio"
                  value={val.array}
                  onChange={(e) => setYarn(e.target.value)}
                ></input>
                <label>{val.title}</label>
              </div>
            ))}
          </div>
          <h1 className="text-2xl font-semibold border w-full px-4 py-2 mb-2">Weight</h1>
          <div className="flex flex-col gap-2">
            
             {Weight.map((val) => (
              <div className="flex items-center gap-2" key={val._id}>
                <input
                  type="radio"
                  value={val.nums}
                  onChange={(e) => setWeight(e.target.value)}
                ></input>
                <label>{val.title}</label>
              </div>
            ))} 
          </div>
          <h1 className="text-2xl font-semibold border w-full px-4 py-2 mb-2">Finishing</h1>
          <div className="flex flex-col gap-2">
          
            {Finishing.map((val) => (
              <div className="flex items-center gap-2" key={val._id}>
                <input
                  type="radio"
                  value={val.title}
                  onChange={(e) => setFinishing(e.target.value)}
                ></input>
                <label>{val.title}</label>
              </div>
            ))} 
          </div>
          <button
            className="border w-full py-2 mt-4 bg-gray-200 hover:bg-gray-300"
            onClick={() => {
              toggleSidebar();
              window.location.reload();
            }}
          >
            Reset Filters
          </button>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
