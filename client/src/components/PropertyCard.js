import React from 'react';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';

const PropertyCard = ({ property, onDelete }) => {
    const navigate = useNavigate();

    const handleDelete = async () => {
        try {
            await onDelete(property._id);
        } catch (error) {
            console.error("Error deleting property:", error);
        }
    };

    return (
        <div className="card">
            <img src={property.photos[0]} alt={property.description} className="card-img-top" />
            <div className="card-body">
                <h5 className="card-title">{property.place}</h5>
                <p className="card-text">{property.description}</p>
                <p className="card-text"><strong>Price:</strong> {property.price}</p>
                <Link to={`/properties/${property._id}`} className="btn btn-primary">View Details</Link>
                <button onClick={handleDelete} className="btn btn-danger ms-2">Delete</button>
            </div>
        </div>
    );
};

export default PropertyCard;
