import React from 'react'
function DestinationCard({ destination }) {
    const truncateText = (text, numWords) => {
        if (!text) {
            return '';
        }
        const words = text.split(' ');

        if (words.length <= numWords) {
            return text;
        }
        const truncatedText = words.slice(0, numWords).join(' ');
        return `${truncatedText} . . .`;
    };
    return (
        <div>
            <div className="card card-compact w-[20rem] bg-base-100 shadow-xl rounded-sm hover:-translate-y-2 transition hover:shadow-md border border-yellow-600 text-slate-300">
                <figure><img src={`http://localhost:3000/${destination.file_name}`} alt="Shoes" /></figure>
                <div className="card-body bg-slate-900">
                    <h2 className="card-title">{destination?.name}</h2>
                    <p>{truncateText(destination.details, 15)}</p>
                    <div className="card-actions justify-end items-center">
                        <button className="btn btn-sm bg-yellow-600 text-slate-200 hover:bg-slate-200 hover:text-yellow-600 border-none">View</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default DestinationCard