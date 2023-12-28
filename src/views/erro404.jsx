import React from 'react';
import { Link } from 'react-router-dom';
import { MdOutlineKeyboardBackspace } from 'react-icons/md';
export default function Error() {
    return (
        <div className='h-screen bg-primary'>
            <h1 style={{ fontSize: "14em", color: "white", opacity: "0.5" }}>404 </h1>
            <h3 style={{ color: "white", opacity: "0.5" }}>Oops! It seems like the page you were looking for doesn't exist or has been moved.
                We apologize for any inconvenience this may have caused. </h3>
            <div>
                <Link to={`/`}><MdOutlineKeyboardBackspace color='white' className='inline-block' /> <span className='text-white'>Go back to Dashboard</span></Link>
            </div>
        </div>
    )
}