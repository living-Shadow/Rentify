import React, { useState, useEffect } from 'react';
import { fetchSellerProperties, createProperty, deleteProperty } from '../services/api';
import PropertyForm from '../components/PropertyForm';
import PropertyList from '../components/PropertyList';

const SellerDashboard = () => {
  const [properties, setProperties] = useState([]);

  const fetchProperties = async () => {
    try {
      const response = await fetchSellerProperties();
      setProperties(response.data);
    } catch (error) {
      console.error('Error fetching properties:', error);
    }
  };

  const handleAddProperty = async (formData) => {
    try {
      await createProperty(formData);
      fetchProperties();
    } catch (error) {
      console.error('Error adding property:', error);
    }
  };

  const handleDeleteProperty = async (id) => {
    try {
      await deleteProperty(id);
      fetchProperties();
    } catch (error) {
      console.error('Error deleting property:', error);
    }
  };

  useEffect(() => {
    fetchProperties();
  }, []);

  return (
    <div className="container">
      <h1 className="my-4">Seller Dashboard</h1>
      <h2 className="my-4">Add Property</h2>
      <PropertyForm onSubmit={handleAddProperty} />
      <h2 className="my-4">Your Properties</h2>
      <PropertyList properties={properties} onDelete={handleDeleteProperty} />
    </div>
  );
};

export default SellerDashboard;
