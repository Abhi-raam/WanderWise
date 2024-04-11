import React, { useState } from 'react'
import axios from '../../Axios'
import { useNavigate } from 'react-router-dom'

function CreateBanner() {
    const navigate = useNavigate()

    const [image, setImage] = useState({})
    const [time, setTime] = useState(Date.now())

    const handleSubmit =async (e) => {
        e.preventDefault()
        setTime(Date.now())
        const result = await axios.post('/api/admin/upload-banner', { image, time },
            {
                "headers": { "Content-Type": "multipart/form-data" }
            }
        )
        console.log(result);
        if(result.status === 200){
            navigate('/admin/home-banner')
        }
    }

  return (
    <div className='pt-20 p-6 lg:h-screen'>
    <div>
        <h2 className='text-2xl lg:text-3xl font-semibold'>Create Banner</h2>
    </div>
    <div className='flex justify-center bg-white mt-10 pb-5 rounded-md'>
        <form onSubmit={handleSubmit} action="" className='w-full space-y-5 p-3'>
            <label className="form-control">
                <div className="label">
                    <span className="label-text">Home banner image</span>
                </div>
                <input onChange={(e) => setImage(e.target.files[0])} type="file" className="file-input file-input-bordered w-full " />
            </label>
            <div className='flex justify-center pt-10'>
                <button
                    type="submit"
                    className='btn btn-sm px-6 btn-primary' >
                    Save
                </button>
            </div>
        </form>
    </div>
</div>
  )
}

export default CreateBanner