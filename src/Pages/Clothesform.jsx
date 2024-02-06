import axios from 'axios';
import React from 'react'
import { useState } from 'react';
import { Navigate } from 'react-router-dom';
import { baseURL } from '../../url';
import {Cloudinary} from "@cloudinary/url-gen";



const Clothesform = () => {
    const [title, setTitle] = useState('DP00');
    const [Material, setMaterial] = useState(['100% Cotton']);
    
    const [photolink, setPhotoLink] = useState('');
    const [addedPhoto, setAddedPhoto] = useState([]);
    const [finish, setfinish] = useState('Super Soft');
    const [Yarn, setYarn] = useState(100);
    const [Width1, setWidth1] = useState(57);
    const [Width2, setWidth2] = useState(58);
    const [Weight, setWeight] = useState(122);
    const [price, setPrice] = useState(5);
    const [redirect , setRedirect] = useState(false);
    const cloud_name='dikrf4hki';
    

    
    async function addphotobylink(e) {
        e.preventDefault();
        const { data: filename } = await axios.post('/upload-by-link', { link: photolink });
        setAddedPhoto(prev => {
            return [...prev, filename];
        });
        setPhotoLink('');



    }

    function uploadPhoto(ev) {
    const files = ev.target.files;
    const data = new FormData();

    for (let i = 0; i < files.length; i++) {
        data.append('file', files[i]); // Use 'file' instead of 'photos' as the key
    }
    
    data.append('upload_preset', 'fabeeno_fabrics');
    data.append('cloud_name', cloud_name);

    fetch(`https://api.cloudinary.com/v1_1/${cloud_name}/upload`, {
        method: 'POST',
        body: data
    })
    .then(res => {
        if (!res.ok) {
            throw new Error(`Upload failed with status: ${res.status}`);
        }
        return res.json();
    })
    .then(data => {
        console.log('Upload successful:', data);
        setAddedPhoto(prev=>{
            return [...prev,data.secure_url];
        })
        // Do something with the response data if needed
    })
    .catch(err => {
        console.error('Error uploading photo:', err);
    });
}
   
    // axios.post('/upload', data, {
    //     headers: { 'Content-type': 'multipart/form-data' }
    // }).then(response => {
    //     const { data: filenames } = response;
    //     const extractedFilenames = filenames.map(filename => {
    //         return filename.includes('src/uploads/') ? filename.substring(filename.indexOf('src/uploads/') + 12) : filename;
    //     });
    //     setAddedPhoto(prev => {
    //         return [...prev, ...extractedFilenames];
    //     });
    // });
// }


    async function submitFabric(e){
        e.preventDefault();
        const data = {title,Material,addedPhoto,finish,Yarn,Width1,Width2,Weight,price};
        await axios.post('/clothes',data);
        setRedirect(true)
    }

    if(redirect){
        return <Navigate to={'/account/places'}/>
    }

  return (
    <div>
    <form className='flex flex-col px-20 py-8 border mt-8 mx-10 rounded-lg' onSubmit={submitFabric} >
    {/* content */}
        <h2 className="text-4xl font-bold mt-4 p-2">Name</h2>
        <p className='p-2 text-gray-500'>eg:DP0001MBU etc. </p>
        <input type="text" placeholder="" value={title} onChange={e => setTitle(e.target.value)} />

        {/* material */}
        <h2 className="text-4xl font-bold mt-4 p-2">Content</h2>
        <p className='p-2 text-gray-500'>Add the content of the fabric</p>

        <input type="text" placeholder="eg: 100% cotton" value={Material} onChange={e => setMaterial(e.target.value)} />

        {/* price */}
        <h2 className="text-4xl font-bold mt-4 p-2">Price</h2>
        <p className='p-2 text-gray-500'>Add the price for your product</p>

        <input type="number" placeholder="eg: 100% cotton" value={price} onChange={e => setPrice(e.target.value)} />
        
         {/* yarn etc */}
         <h2 className="text-4xl font-bold mt-4 p-2">Yarn ,Width & Weight</h2>
        <p className='p-2 text-gray-500'>Yarn ,Width & Weight</p>
        <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap- 2 px-2 ">
            <div className="p-2">
                <h3>Yarn</h3>
                <input type='number' placeholder='60*60' value={Yarn} onChange={e => setYarn(e.target.value)} />
            </div>
            <div className="p-2">
                <h3>Width1</h3>
                <input type='number' placeholder='57' value={Width1} onChange={e => setWidth1(e.target.value)} />
                <h3>Width2</h3>
                <input type='number' placeholder='58' value={Width2} onChange={e => setWidth2(e.target.value)} />
            </div>
            <div className="p-2">
                <h3>Weight</h3>
                <input type='number' placeholder='134' value={Weight} onChange={e => setWeight(e.target.value)} />
            </div>
        </div>
        
    
       

        {/* extra info */}
        <h2 className="text-4xl font-bold mt-4 p-2 text-black">Finishing</h2>
        <p className='p-2 text-gray-500'>eg: Easy to iron</p>
        <input className="w-full border p-4 rounded-lg text-black" value={finish} onChange={e => setfinish(e.target.value)} />


    {/* photos */}
    <h2 className="text-4xl font-bold mt-4 p-2">Photos</h2>
        <p className='p-2 text-gray-500'>more = better</p>
        <div className='flex gap-2'>
            <input type="text" placeholder="Add someinteresting photos...." value={photolink} onChange={e => setPhotoLink(e.target.value)} />
            <button className="bg-primary px-5 rounded-2xl text-white" onClick={addphotobylink}>Add Photo</button>
        </div>
        {/* this is what help u to display photos */}
        <div className='mt-2 grid grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-2'>
            {addedPhoto.length > 0 &&
                addedPhoto.map((link) => (
                    <div key={link}  >
                    <div className='h-32 flex '>
                        <img className="w-full object-contain" src={link}/>
                    </div>
                    </div>
                ))
            }
            <label className="border bg-transparent rounded-2xl items-center text-lg text-gray-700 flex justify-center gap-1 ">
                {/* upload icon */}
                <input type="file" className="hidden" onChange={uploadPhoto}/>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 8.25H7.5a2.25 2.25 0 0 0-2.25 2.25v9a2.25 2.25 0 0 0 2.25 2.25h9a2.25 2.25 0 0 0 2.25-2.25v-9a2.25 2.25 0 0 0-2.25-2.25H15m0-3-3-3m0 0-3 3m3-3V15" />
                </svg>

                upload </label>
        </div>
       

        {/* button */}
        <div className="flex justify-center mt-10 py-4">
            <button className="bg-primary w-full rounded-lg py-2 text-white max-w-sm ">Save</button>
        </div>

    </form>
</div>
  )
}

export default Clothesform