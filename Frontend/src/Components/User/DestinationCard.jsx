import React from 'react'
import destination from '../../assets/destination.jpg'
function DestinationCard() {
    return (
        <div>
            <div className="card card-compact w-[20rem] bg-base-100 shadow-xl rounded-sm hover:-translate-y-2 transition hover:shadow-md border border-yellow-600 text-slate-300">
                <figure><img src={destination} alt="Shoes" /></figure>
                <div className="card-body bg-slate-900">
                    <h2 className="card-title">Destination Name</h2>
                    <p>If a dog chews shoes whose shoes does he choose?</p>
                    <div className="card-actions justify-end">
                        <button className="btn btn-sm bg-yellow-600 text-slate-200 hover:bg-slate-200 hover:text-yellow-600 border-none">View</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default DestinationCard