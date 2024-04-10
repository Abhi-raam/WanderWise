import React, { useState } from 'react';
import axios from '../../Axios'
import { useNavigate } from 'react-router-dom'

function CreateNews() {
    // State variables for input fields
    const navigate = useNavigate()
    const [newsHeading, setNewsHeading] = useState('');
    const [description, setDescription] = useState('');
    const [time, setTime] = useState(Date.now());


    // Function to handle button click
    const handleSave = () => {
        axios.post('/api/admin/create-news',{newsHeading,description,time}).then((response)=>{
            if(response.status === 200){
                console.log("noerror");
                navigate('/admin/news')
            }
        })
    };


    return (
        <div className='pt-20 p-6 lg:h-screen'>
            <div>
                <h2 className='text-2xl lg:text-3xl font-semibold'>Create New News</h2>
            </div>
            <div className='flex justify-center bg-white mt-10 pb-5 rounded-md'>
                <form action="" className='w-full space-y-5 p-3'>
                    <label className="form-control">
                        <div className="label">
                            <span className="label-text">News Heading</span>
                        </div>
                        <input 
                            type="text" 
                            placeholder="Type here" 
                            className="input input-bordered" 
                            value={newsHeading} 
                            onChange={(e)=>setNewsHeading(e.target.value)} 
                        />
                    </label>
                    <label className="form-control">
                        <div className="label">
                            <span className="label-text">News details</span>
                        </div>
                        <textarea 
                            className="textarea textarea-bordered h-[10rem] lg:h-[20rem]" 
                            placeholder="Details" 
                            value={description} 
                            onChange={(e)=>setDescription(e.target.value)} 
                        />
                    </label>
                    <div className='flex justify-center pt-10'>
                        <button 
                            type="button" 
                            className='btn btn-sm px-6 btn-primary' 
                            onClick={handleSave}
                        >
                            Save
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
}

export default CreateNews;
