import React from 'react';

const ServiceCard = ({ service }) => {
    const { price, img, title } = service;
    return (
        <div className="card card-compact p-6 bg-base-100 shadow-xl border-2 border-gray-200">
            <figure><img className='h-52 w-80 rounded-lg' src={img} alt="Shoes" /></figure>
            <div className="card-body">
                <h2 className="card-title">{title}</h2>
                <div className='flex items-center'>
                    <p className='text-2xl text-orange-600 font-semibold'>Price : ${price}</p>
                    <div className="card-actions justify-end">
                        <button className="btn btn-primary">Details</button>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default ServiceCard;