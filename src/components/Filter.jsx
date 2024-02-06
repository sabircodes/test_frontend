import axios from 'axios';
import React, { useEffect, useState } from 'react'




const Yarn = [
    {
      _id:0,
      title: "below 40s",
      array: [40],
    },
    {
      _id:1,
      title: "40-50s",
      array: [40, 50],
    },
    {
      _id:2,
      title: "60s",
      array: [60],
    },
    {
      _id:3,
      title: "70-90s",
      array: [70,90],
    },
    {
      _id:3,
      title: "80/2",
      array: [80],
    },
    {
      _id:4,
      title: "100/2",
      array: [100],
    },
    {
      _id:5,
      title: "120/2",
      array: [120],
    },
    {
      _id:6,
      title: "140/2",
      array: [140],
    },
    {
      _id:7,
      title: "160/3",
      array: [160],
    },
  ];
  
const Material = [
    {_id:0, title: "Cotton Colection" }, {_id:1, title: "100%Rayon" }, {_id:2, title: "100% Linen" }, { _id:3,title: " With Linen" }, {_id:4, title: "With Tencel" }, {_id:5, title: "With Wool " }, { _id:6,title: "With RayonFrom Bamboo" }, {_id:7, title: " With Nylon " }, { _id:8,title: "With Acrylic " }, {_id:9, title: "With Spandex" }, { _id:10,title: "With Polyester" }, { _id:11,title: "With Lurex Modal" }
];

const Weight = [
    {_id:0, title: "below 100gsm" }, {_id:1, title: "100-130gsm" }, {_id:2, title: "130-150gsm" }, { _id:3,title: "150-180gsm" }, { _id:4,title: "180gsm and above" }
];

const Finishing = [
    {_id:0, title: "Wrinkle Free" }, { _id:1,title: "Easy to iron/Easy care" }, { _id:2,title: "Super soft" }, { _id:3,title: "Fabric For Garment Dipping" }, {_id:4, title: "Regular Soft" }, { _id:5,title: "For Garment Dyeing" }, { _id:6,title: "Peaching" }, { _id:7,title: "Brushing" }, { _id:8,title: "Printing" }, { _id:9,title: "Seersucker" }, {_id:10, title: "Function" }, { _id:11,title: "Paper " }, {_id:12, title: "Touch" }
];

const Filter = () => {
    const [material , setMaterial ] = useState([]);
    const [yarn , setYarn] =useState([]);
    const [weight , setWeight] =useState([]);
    const [finishing , setFinishing] = useState([]);
    


  





    // filtering function 
    // const handlefilter = (value, isChecked) => {
    //     let all = [...checked];
    //     if (isChecked) {
    //         all.push(value);
    //     } else {
    //         all = all.filter((c) => c !== value);
    //     }
    //     setChecked(all);
    // }


    return (
        <div className="w-full border px-6 py-4">
            {JSON.stringify(material,null,4)}

            <div className='flex flex-col gap-4 mt-4'>
                <h1 className='text-2xl font-semibold border'>Material</h1>
                {Material.map(val => (
                    <div className="flex gap-2" key={val}>
                       <input type="radio" value={val.title} onChange={(e) => setMaterial(e.target.value)}></input>
                        <label>{val.title}</label>
                    </div>
                ))}
            </div>

            <div className='flex flex-col gap-4 mt-4'>
                <h1 className='text-2xl font-semibold border w-full'>Yarn Count</h1>
                {Yarn.map(val => (
                    <div className="flex gap-2" key={val}>
                       <input type="radio" value={val.array} onChange={(e) => setYarn(e.target.value)} ></input>
                        <label>{val.title}</label>
                    </div>
                ))}
            </div>

            <div className='flex flex-col gap-4 mt-4'>
                <h1 className='text-2xl font-semibold border w-full'>Weight</h1>
                {Weight.map(val => (
                    <div className="flex gap-2" key={val}>
                       <input type="radio" onChange={(e) => setWeight(e.target.value)}></input>
                        <label>{val.title}</label>
                    </div>
                ))}
            </div>
            <div className='flex flex-col gap-4 mt-4'>
                <h1 className='text-2xl font-semibold border w-full'>Finishing</h1>
                {Finishing.map((val,index) => (
                    <div className="flex gap-2" key={index}>
                       <input type="radio"  value={val.title} onChange={(e) => setFinishing(e.target.value)}></input>
                        <label>{val.title}</label>
                    </div>
                ))}
            </div>







        </div>
    )
}

export default Filter