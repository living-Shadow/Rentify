import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import Navbar from '../components/NavBar';

const PropertyDetails = () => {
    const { id } = useParams();
    const [property, setProperty] = useState(null);

    useEffect(() => {
        const fetchProperty = async () => {
            try {
                const response = await axios.get(`${process.env.REACT_APP_API_URL}/api/properties/${id}`);
                setProperty(response.data);
            } catch (error) {
                console.error('Error fetching property:', error);
            }
        };

        fetchProperty();
    }, [id]);

    if (!property) {
        return <div>Loading...</div>;
    }

    return (
        <div>
            <h1>{property.place}</h1>
            <img src={property.photos[0]} alt={property.description} />
            <p>{property.description}</p>
            <p>{property.price}</p>
            <p>Bedrooms: {property.bedrooms}</p>
            <p>Bathrooms: {property.bathrooms}</p>
            <p>Area: {property.area} sq ft</p>
            <p>Property Type: {property.propertyType}</p>
            <p>Amenities: {property.amenities.join(', ')}</p>
            <p>Contact: {property.contactInfo}</p>
            <button onClick={() => window.alert(`Contact Seller: ${property.contactInfo}`)}>I'm Interested</button>
        </div>
    );
};

export default PropertyDetails;
