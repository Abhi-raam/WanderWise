import React, { useEffect, useState } from 'react'
import axios from '../../Axios'
import { useNavigate, useParams } from 'react-router-dom'
function EditTraditionalNews() {
    const { newsId } = useParams()
    const navigate = useNavigate()
    const [newsHeading, setNewsHeading] = useState('');
    const [description, setDescription] = useState('');
    const [image, setImage] = useState();
    const [time, setTime] = useState(Date.now());

    useEffect(() => {
        axios.get(`/api/admin/get-traditional-news/${newsId}`).then((response)=>{
            setNewsHeading(response.data.news_heading)
            setDescription(response.data.news_description)
            // setImage(response.data.file_name)
        })
    }, [newsId])

    const handleSave = (e) => {
        e.preventDefault()
        axios.put(`/api/admin/update-traditional-news/${newsId}`,{newsHeading,description,image,time},
        {
            "headers": { "Content-Type": "multipart/form-data" }
        }
    ).then((response)=>{
            if(response.status === 200){
                alert("Updated successful")
                navigate('/admin/traditional-news')
            }
        })
    };
  return (
    <div className='pt-20 p-6 lg:h-screen'>
            <div>
                <h2 className='text-2xl lg:text-3xl font-semibold'>Edit Traditional News</h2>
            </div>
            <div className='flex justify-center bg-white mt-10 pb-5 rounded-md'>
                <form onSubmit={handleSave} action="" className='w-full space-y-5 p-3'>
                    <label className="form-control">
                        <div className="label">
                            <span className="label-text">Traditional News Heading</span>
                        </div>
                        <input
                            type="text"
                            placeholder="Type here"
                            className="input input-bordered"
                            value={newsHeading}
                            onChange={(e) => setNewsHeading(e.target.value)}
                        />
                    </label>
                    <label className="form-control">
                        <div className="label">
                            <span className="label-text">Traditional News details</span>
                        </div>
                        <textarea
                            className="textarea textarea-bordered h-[10rem] lg:h-[10rem]"
                            placeholder="Details"
                            value={description}
                            onChange={(e) => setDescription(e.target.value)}
                        />
                    </label>
                    <label className="form-control">
                        <div className="label">
                            <span className="label-text">Traditional News Image</span>
                        </div>
                        <input onChange={(e) => setImage(e.target.files[0])} type="file" className="file-input file-input-bordered w-full " />
                    </label>
                    <div className='flex justify-center pt-10'>
                        <button
                            type="submit"
                            className='btn btn-sm px-6 btn-primary'>
                            Save
                        </button>
                    </div>
                </form>
            </div>
        </div>
  )
}

export default EditTraditionalNews