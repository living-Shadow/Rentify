import React, { useState, useEffect } from 'react';
import axios from 'axios';
import PropertyCard from './PropertyCard';

const PropertyList = ({ properties, onDelete }) => {
    return (
        <div className="row">
            {properties.map(property => (
                <div key={property._id} className="col-md-4 mb-4">
                    <PropertyCard property={property} onDelete={onDelete} />
                </div>
            ))}
        </div>
    );
};

export default PropertyList;
