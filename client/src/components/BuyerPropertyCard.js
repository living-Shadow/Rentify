import React from 'react';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';

const PropertyCard = ({ property }) => {
    const navigate = useNavigate();

    return (
        <div className="card">
            <img src={property.photos[0]} alt={property.description} className="card-img-top" />
            <div className="card-body">
                <h5 className="card-title">{property.place}</h5>
                <p className="card-text">{property.description}</p>
                <p className="card-text"><strong>Price:</strong> {property.price}</p>
                <Link to={`/properties/${property._id}`} className="btn btn-primary">I am Interested</Link>
            </div>
        </div>
    );
};

export default PropertyCard;
