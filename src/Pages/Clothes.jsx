import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'

import Clothesform from './Clothesform';
import axios from 'axios';

const Clothes = () => {
    const { action } = useParams();
  



    return (
        <div>
            {action != 'new' && (
                <div className="text-center mt-10">
                    <Link to={'/account/places/new'} className="flex bg-primary py-2 px-6 text-white rounded-full max-w-sm mx-auto justify-center">
                        {/* icon svg */}
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
                            <path fillRule="evenodd" d="M12 3.75a.75.75 0 0 1 .75.75v6.75h6.75a.75.75 0 0 1 0 1.5h-6.75v6.75a.75.75 0 0 1-1.5 0v-6.75H4.5a.75.75 0 0 1 0-1.5h6.75V4.5a.75.75 0 0 1 .75-.75Z" clipRule="evenodd" />
                        </svg>
                        Add Fabric
                    </Link>
                </div>
            )
            }
            {
                action === 'new' && (
                   <Clothesform/>
                )
            }

        </div>
    )
}

export default Clothes