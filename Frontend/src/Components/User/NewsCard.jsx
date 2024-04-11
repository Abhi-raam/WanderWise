import React from 'react'

function NewsCard({news}) {

    const truncateText = (text, numWords) => {
        if (!text) {
            return ''; // Return an empty string if text is undefined or null
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
            <div className="card card-compact h-[25rem] w-[20rem] bg-base-100 shadow-xl rounded-sm hover:-translate-y-2 transition hover:shadow-md border border-yellow-600 text-slate-300">
                <figure><img src={`http://localhost:3000/${news?.file_name}`} className='' alt="image" /></figure>
                <div className="card-body bg-slate-900">
                    <h2 className="card-title">{news?.news_heading}</h2>
                    <p>{truncateText(news?.news_description, 15)}</p>
                    <div className="card-actions justify-end items-center">
                        <button className="btn btn-sm bg-yellow-600 text-slate-200 hover:bg-slate-200 hover:text-yellow-600 border-none">View</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default NewsCard