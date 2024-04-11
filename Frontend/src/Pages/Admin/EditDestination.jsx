import React, { useEffect, useState } from 'react';
import axios from '../../Axios'
import { useNavigate,useParams } from 'react-router-dom'

function EditDestination() {
    const {destId} = useParams()
    const navigate = useNavigate()
    const [destinationName, setDestinationName] = useState()
    const [description, setDescription] = useState('');
    const [location, setLocation] = useState('');
    const [image, setImage] = useState('');
    const [time, setTime] = useState(Date.now());


    useEffect(() => {
        axios.get(`/api/admin/get-destination/${destId}`).then((response)=>{
            console.log(response.data);
            setDestinationName(response.data.name)
            setDescription(response.data.details)
            setLocation(response.data.location)
            // setImage(response.data.file_name)
        })
    }, [destId])

    // Function to handle button click
    const handleSave = async(e) => {
        e.preventDefault()
        setTime(Date.now())
        const result = await axios.put(`/api/admin/update-destination/${destId}`, {destinationName,description,location, image, time },
            {
                "headers": { "Content-Type": "multipart/form-data" }
            }
        )
        if(result.status === 200){
            alert(result.data)
            navigate('/admin/destinations')
        }
    };
  return (
    <div className='pt-20 p-6 lg:h-screen'>
    <div>
        <h2 className='text-2xl lg:text-3xl font-semibold'>Edit Destination</h2>
    </div>
    <div className='flex justify-center bg-white mt-10 pb-5 rounded-md'>
        <form action="" onSubmit={handleSave} className='w-full space-y-5 p-3'>
            <label className="form-control">
                <div className="label">
                    <span className="label-text">Destination Name</span>
                </div>
                <input type="text" placeholder="Type here" className="input input-bordered"
                    value={destinationName} onChange={(e) => setDestinationName(e.target.value)} />
            </label>
            <label className="form-control">
                <div className="label">
                    <span className="label-text">Destination image</span>
                </div>
                <input onChange={(e) => setImage(e.target.files[0])} type="file" className="file-input file-input-bordered w-full " />
            </label>
            <div className='lg:flex gap-3'>
                <label className="form-control lg:w-1/2">
                    <div className="label">
                        <span className="label-text">Destination details</span>
                    </div>
                    <textarea className="textarea textarea-bordered h-[10rem] lg:h-[10rem]" placeholder="Details"
                        value={description} onChange={(e) => setDescription(e.target.value)} />
                </label>
                <label className="form-control lg:w-1/2">
                    <div className="label">
                        <span className="label-text">Location details</span>
                    </div>
                    <textarea className="textarea textarea-bordered h-[10rem] lg:h-[10rem]" placeholder="Details"
                        value={location} onChange={(e) => setLocation(e.target.value)} />
                </label>
            </div>
            <div className='flex justify-center pt-10'>
                <button type="submit" className='btn btn-sm px-6 btn-primary' >
                    Save
                </button>
            </div>
        </form>
    </div>
</div>
  )
}

export default EditDestination