import React from 'react';
import './GoogleMap.css'

const GoogleMap = () => {
    return (
        <div className='my-10'>
            <h1 className='text-4xl font-bold text-center text-[#B8860B] mb-6 italic'>Get Our Location...</h1>
            <div className='map-responsive'>
                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3637.678397293497!2d90.15748248094216!3d24.25302451344211!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x37560f75692ce119%3A0x430a7304fac94475!2sNalua%20Bazar!5e0!3m2!1sen!2sbd!4v1699337522756!5m2!1sen!2sbd" width="600" height="450" title='Responsive google map' allowFullScreen loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
            </div>
        </div>
    );
};

export default GoogleMap;