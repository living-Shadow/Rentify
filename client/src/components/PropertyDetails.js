import { useParams, useNavigate } from "react-router-dom";
import React, { useState, useEffect } from "react";
import { fetchProperty, deleteProperty, updateProperty, fetchUserDetail } from "../services/api";
import PropertyForm from "../components/PropertyForm";

const PropertyDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [property, setProperty] = useState(null);
  const [isEditing, setIsEditing] = useState(false);
  const [userType, setUserType] = useState('');

  useEffect(() => {
    const fetchUserType = async () => {
      try {
        const token = localStorage.getItem('token');
        const userDetails = await fetchUserDetail(token);
        const userType = userDetails.user.userType;
        setUserType(userType);
      } catch (error) {
        console.error('Error fetching user type:', error);
      }
    };

    fetchUserType();
  }, []);

  useEffect(() => {
    const fetchPropertyDetails = async () => {
      try {
        const response = await fetchProperty(id);
        setProperty(response.data);
      } catch (error) {
        console.error("Error fetching property details:", error);
      }
    };

    fetchPropertyDetails();
  }, [id]);

  const handleDeleteProperty = async () => {
    try {
      await deleteProperty(id);
      navigate("/seller"); // Redirect to seller dashboard after deletion
    } catch (error) {
      console.error("Error deleting property:", error);
    }
  };

  const handleUpdateProperty = async (updatedData) => {
    try {
      await updateProperty(id, updatedData);
      setIsEditing(false);
      const response = await fetchProperty(id);
      setProperty(response.data);
    } catch (error) {
      console.error("Error updating property:", error);
    }
  };

  return (
    <div className="container">
      {property && !isEditing && (
        <div className="card">
          <div className="card-body">
            <h1 className="card-title">{property.place}</h1>
            <img src={property.photos[0]} alt={property.description} className="card-img-top" />
            <p className="card-text">{property.description}</p>
            <p className="card-text"><strong>Price:</strong> {property.price}</p>
            <p className="card-text"><strong>Bedrooms:</strong> {property.bedrooms}</p>
            <p className="card-text"><strong>Bathrooms:</strong> {property.bathrooms}</p>
            <p className="card-text"><strong>Area:</strong> {property.area} sq ft</p>
            <p className="card-text"><strong>Property Type:</strong> {property.propertyType}</p>
            <p className="card-text"><strong>Amenities:</strong> {property.amenities.join(", ")}</p>
            <p className="card-text"><strong>Contact:</strong> {property.contactInfo}</p>
            {userType === 'seller' && (
              <>
                <button onClick={handleDeleteProperty} className="btn btn-danger me-2">Delete Property</button>
                <button onClick={() => setIsEditing(true)} className="btn btn-warning">Update Property</button>
              </>
            )}
          </div>
        </div>
      )}

      {isEditing && (
        <div>
          <h2>Update Property</h2>
          <PropertyForm property={property} onSubmit={handleUpdateProperty} />
        </div>
      )}
    </div>
  );
};

export default PropertyDetails;
