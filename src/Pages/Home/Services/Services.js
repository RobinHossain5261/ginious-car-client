import React, { useEffect, useState } from 'react';
import ServiceCard from './ServiceCard';

const Services = () => {

    const [services, setServices] = useState([]);
    useEffect(() => {
        fetch('services.json')
            .then(res => res.json())
            .then(data => setServices(data))
    }, []);

    return (
        <div>
            <div className='text-center'>
                <p className="text-orange-600 font-bold">SERVICES</p>
                <h2 className='text-5xl font-bold '>Our Services Area</h2>
                <p>the majority have suffered alteration in some form, by injected humour, or randomised <br /> words which don't look even slightly believable. </p>
            </div>
            <div className='grid gap-8 md:grid-cols-2 lg:grid-cols-3 my-12'>
                {
                    services.map(service => <ServiceCard
                        key={service._id}
                        service={service}
                    ></ServiceCard>)
                }
            </div>
            <div className=' mb-12 text-center'>
                <button className="btn btn-outline btn-warning">more service</button>
            </div>
        </div>
    );
};

export default Services;