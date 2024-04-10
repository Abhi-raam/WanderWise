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
            <div className="card w-[20rem] shadow-xl border border-yellow-600 rounded-sm hover:-translate-y-2 transition hover:shadow-md text-slate-300">
                <div className="card-body">
                    <h2 className="card-title">{news?.news_heading}</h2>
                    <p>{truncateText(news?.news_description, 15)}</p>
                    {/* <p>{news?.news_description}</p> */}
                    <div className="card-actions justify-end">
                        <button className="btn btn-sm bg-yellow-600 text-slate-200 hover:bg-slate-200 hover:text-yellow-600 border-none">View More</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default NewsCard