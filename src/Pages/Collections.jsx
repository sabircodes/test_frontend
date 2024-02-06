import axios from 'axios'
import React, { useEffect, useState } from 'react'
import Filter from '../components/Filter';
import Searchinput from '../components/Searchinput';
import { Link } from 'react-router-dom';
import { baseURL } from '../../url';




const Collections = () => {
    const [clothes, setClothes] = useState([]);
    const [material, setMaterial] = useState([]);
    const [yarn, setYarn] = useState([]);
    const [weight, setWeight] = useState([]);
    const [finishing, setFinishing] = useState([]);
    const [loading, setLoading] = useState(false);
    const [search, setSearch] = useState("");
    const [total, setTotal] = useState(0);
    const [page, setPage] = useState(1);
    





    const getTotal = async () => {
        try {
            const { data } = await axios.get('/product-count');
            setTotal(data?.total)

        } catch (error) {
            console.log(error);

        }
    }

    useEffect(() => {
        if (page == 1) {
            return
        }
        loadmore();
    }, [page])

    const loadmore = async () => {
        try {
            setLoading(true);
            const { data } = await axios.get(`/product-list/${page}`)
            setLoading(false);
            setClothes([...clothes, ...data.products])
        } catch (error) {
            setLoading(false);
            console.log(error);
        }
    }

    const getAllProducts = async () => {
        try {
            setLoading(true);
            const { data } = await axios.get(`/product-list/${page}`);
            setLoading(false);
            setClothes(data.products);
        } catch (error) {
            setLoading(false);
            console.log(error);
        }
    };




    // const searchData = async (value)=>{
    //     const {data} = await axios.get(`/search/${value}`)
    //     console.log(data.result);

    // }

    // const handleSearch = (value)=>{
    //     setSearch(value);
    //     searchData(value)
    // }



    const Yarn = [
        {
            _id: 0,
            title: "below 40s",
            array: [40],
        },
        {
            _id: 1,
            title: "40-50s",
            array: [50],
        },
        {
            _id: 2,
            title: "60s",
            array: [60],
        },
        {
            _id: 8,
            title: "70-90s",
            array: [70],
        },
        {
            _id: 3,
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
        { _id: '112', title: "below 100gsm", nums: [100] }, { _id: '12121', title: "100-130gsm", nums: [130] }, { _id: '22121', title: "130-150gsm", nums: [150] }, { _id: '3312', title: "150-180gsm", nums: [180] }, { _id: '41231', title: "180gsm and above", nums: [180] }
    ];

    const Finishing = [
        { _id: '3131', title: "Wrinkle Free" }, { _id: '1311331', title: "Easy to iron/Easy care" }, { _id: '2313131', title: "Super Soft" }, { _id: '331313', title: "Fabric For Garment Dipping" }, { _id: '4313211', title: "Regular Soft" }, { _id: '512323', title: "For Garment Dyeing" }, { _id: '63113', title: "Peaching" }, { _id: '7314', title: "Brushing" }, { _id: '83131331', title: "Printing" }, { _id: '931113', title: "Seersucker" }, { _id: '103111', title: "Function" }, { _id: '1133311', title: "Paper " }, { _id: '1231313', title: "Touch" }
    ];
    useEffect(() => {
        getTotal();

    })

    useEffect(() => {

        if (!material.length || !yarn.length || !weight.length || !finishing.length) getAllProducts();


    }

        , [material.length, yarn.length, weight.length, finishing.length]);

    const filterProduct = async () => {
        try {
            const { data } = await axios.post('/product-filter', {
                material, yarn, weight, finishing

            })
            console.log(data);
            setClothes(data.products)
        } catch (e) {
            console.log(e);
        }
    }

    useEffect(() => {
        if (material.length > 0 || yarn.length > 0 || weight.length > 0 || finishing.length > 0) {
            filterProduct();
        }
    }, [material, yarn, weight, finishing])






    return (
        <div className='flex flex-col mt-8 overflow-x-hidden'>


            {/*side navbar  */}
            <div className="container flex flex-col justify-center items-center gap-1 border py-4 px-2 mt-4 mb-2 rounded-xl border-black shadow-lg shadow-gray-950 ">
                <div className="flex flex-col md:flex-row items-center justify-around  gap-5">
                    <div className="w-full md:w-auto flex flex-col gap-2 text-black">
                        <h1 className="text-2xl font-semibold border text-center rounded-xl px-4 py-2 mb-2 text-white">Material</h1>
                        <select className="w-full px-4 py-2 mb-2" value={material} onChange={(e) => setMaterial(e.target.value)}>
                            <option value="">Select Material</option>
                            {Material.map(val => (
                                <option key={val._id} value={val.title}>{val.title}</option>
                            ))}
                        </select>
                    </div>

                    <div className="w-full md:w-auto flex flex-col gap-2 text-black">
                        <h1 className="text-2xl font-semibold border w-full px-4 py-2 mb-2 text-white text-center rounded-xl">Yarn Count</h1>
                        <select className="w-full px-4 py-2 mb-2" value={yarn} onChange={(e) => setYarn(e.target.value)}>
                            <option value="">Select Yarn Count</option>
                            {Yarn.map(val => (
                                <option key={val._id} value={val.array}>{val.title}</option>
                            ))}
                        </select>
                    </div>

                    <div className="w-full md:w-auto flex flex-col gap-2 text-black">
                        <h1 className="text-2xl font-semibold border w-full px-4 py-2 mb-2 text-white text-center rounded-xl">Weight</h1>
                        <select className="w-full px-4 py-2 mb-2" value={weight} onChange={(e) => setWeight(e.target.value)}>
                            <option value="">Select Weight</option>
                            {Weight.map(val => (
                                <option key={val._id} value={val.nums}>{val.title}</option>
                            ))}
                        </select>
                    </div>

                    <div className="w-full md:w-auto flex flex-col gap-2 text-black">
                        <h1 className="text-2xl font-semibold border w-full px-4 py-2 mb-2 text-white text-center rounded-xl">Finishing</h1>
                        <select className="w-full px-4 py-2 mb-2" value={finishing} onChange={(e) => setFinishing(e.target.value)}>
                            <option value="">Select Finishing</option>
                            {Finishing.map(val => (
                                <option key={val._id} value={val.title}>{val.title}</option>
                            ))}
                        </select>
                    </div>
                </div>
                <button className=" max-w-sm   text-center px-4 justify-center py-2 mt-4 bg-primary rounded-2xl" onClick={() => window.location.reload()}>
                    Reset Filters
                </button>
            </div>
            {/* products */}
            {/* ////////////////////////////////////////////////////////////////////// */}
            <div className="flex  flex-col">

                <Searchinput />

                <div className='grid grid-cols-2 lg:grid-cols-4 mx-4 gap-4 mt-2 '>
                    {
                        clothes.map(cloth => (
                            <Link to={`/collections/${cloth._id}`} key={cloth._id} className=''>
                                <div className='flex flex-col items-center border border-black rounded-xl bg-gray-950 shadow-lg shadow-gray-900 px-4 py-3 '>
                                    
                                    <div><img className='object-cover' src={cloth.photos} /></div>
                                    {console.log(cloth.photos)}
                                    <div className='sm:text-sm sm:font-extralight lg:text-xl lg:font-normal '>{cloth.name}</div>
                                </div>



                            </Link>
                        ))
                    }
                </div>
                <div className='m-2 p-3'>
                    {clothes && clothes.length < total && (
                        <button className='flex justify-center px-4 py-2 bg-primary text-white rounded-md '
                            onClick={(e) => {
                                e.preventDefault();
                                setPage(page + 1);
                            }}
                        >
                            {loading ? 'Loading...' : 'Loadmore'}

                        </button>

                    )}

                </div>
            </div>

        </div>
    )
}

export default Collections