import axios from 'axios';
import React, { useContext, useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import { UserContext } from '../UserContext';
import { baseURL } from '../../url';

const Product = () => {
    const { user } = useContext(UserContext);
    const [card, setCard] = useState();
    const { id } = useParams();

    useEffect(() => {
        if (!id) return;
        else {
            axios.get(`/collections/${id}`).then(response => {
                setCard(response.data);
            })
            // console.log(user.id);

        }

    }, [id]);

    if (!card) return '';
    

    return (
        <div className='text-white grid lg:grid-cols-2 px-4 py-8 mt-8 justify-evenly gap-5   '>

            <div className='flex items-center max-w-md'><img className='object-cover' src={card.photos} /></div>
            <div className='flex flex-col gap-2  px-4  justify-center   '>
                <h1 className='px-4 font-bold text-2xl mb-4 mt-2'>Specification</h1>
                <div className='grid grid-cols-2 gap-5 '>
                    <div className='flex flex-col gap-2 items-center px-4  font-normal text-primary text-lg  bg-white rounded-full '><span className='font-bold text-primary font-sans'>Art no:</span>{card.name}</div>
                    <div className='flex flex-col gap-2 items-center px-4  font-normal text-primary text-lg  bg-white rounded-full '><span className='font-bold text-primary font-sans'>Content:</span>  {card.content}</div>
                    <div className='flex flex-col gap-2 items-center px-4  font-normal text-primary text-lg  bg-white rounded-full '><span className='font-bold text-primary font-sans'>Yarn: </span>{card.yarn}/2 *{card.yarn}/2</div>
                    <div className='flex flex-col gap-2 items-center px-4  font-normal text-primary text-lg  bg-white rounded-full '><span className='font-bold text-primary font-sans'>Width:</span> {card.width1}/{card.width2}</div>
                    <div className='flex flex-col gap-2 items-center px-4  font-normal text-primary text-lg  bg-white rounded-full'><span className='font-bold text-primary font-sans'>Weight:</span> {card.weight} GSM</div>
                    <div className='flex flex-col gap-2 items-center px-4  font-normal text-primary text-lg  bg-white rounded-full'><span className='font-bold text-primary font-sans'>Finishing:</span> {card.finishing}</div>

                </div>
                <div className='px-4'>
                    <p>The Price depends on Quantity for any help <Link to={'/contact'} className='text-gray-600'>Contact us</Link></p>
                    <div className='flex gap-2 items-center   font-normal text-white text-lg mt-2 mb-2'><span className='font-bold text-primary font-sans'>MOQ 1M/COLOR PRICE ≤:</span>${card.cost}</div>

                </div>
            </div>


            {user && user.id && (
                <Link className=" w-32 text-center py-2 mx-4 bg-primary  rounded-xl" to={`/collections/edit/${id}` }>Edit</Link>
            )}

        </div>
    );
}

export default Product;
