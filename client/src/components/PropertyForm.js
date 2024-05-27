import React, { useState } from 'react';

const PropertyForm = ({ property, onSubmit }) => {
  const [formData, setFormData] = useState(property || {
    place: '',
    area: '',
    bedrooms: '',
    bathrooms: '',
    propertyType: '',
    price: '',
    description: '',
    amenities: '',
    photos: '',
    contactInfo: ''
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await onSubmit(formData);
    } catch (error) {
      console.error('Error submitting property:', error);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="mb-3">
      <div className="mb-3">
        <label htmlFor="place" className="form-label">Place</label>
        <input type="text" className="form-control" id="place" name="place" value={formData.place} onChange={handleChange} required />
      </div>
      <div className="mb-3">
        <label htmlFor="area" className="form-label">Area</label>
        <input type="text" className="form-control" id="area" name="area" value={formData.area} onChange={handleChange} required />
      </div>
      <div className="mb-3">
        <label htmlFor="bedrooms" className="form-label">Bedrooms</label>
        <input type="number" className="form-control" id="bedrooms" name="bedrooms" value={formData.bedrooms} onChange={handleChange} required />
      </div>
      <div className="mb-3">
        <label htmlFor="bathrooms" className="form-label">Bathrooms</label>
        <input type="number" className="form-control" id="bathrooms" name="bathrooms" value={formData.bathrooms} onChange={handleChange} required />
      </div>
      <div className="mb-3">
        <label htmlFor="propertyType" className="form-label">Property Type</label>
        <input type="text" className="form-control" id="propertyType" name="propertyType" value={formData.propertyType} onChange={handleChange} required />
      </div>
      <div className="mb-3">
        <label htmlFor="price" className="form-label">Price</label>
        <input type="number" className="form-control" id="price" name="price" value={formData.price} onChange={handleChange} required />
      </div>
      <div className="mb-3">
        <label htmlFor="description" className="form-label">Description</label>
        <textarea className="form-control" id="description" name="description" value={formData.description} onChange={handleChange} required />
      </div>
      <div className="mb-3">
        <label htmlFor="amenities" className="form-label">Amenities</label>
        <input type="text" className="form-control" id="amenities" name="amenities" value={formData.amenities} onChange={handleChange} required />
      </div>
      <div className="mb-3">
        <label htmlFor="photos" className="form-label">Photos</label>
        <input type="text" className="form-control" id="photos" name="photos" value={formData.photos} onChange={handleChange} required />
      </div>
      <div className="mb-3">
        <label htmlFor="contactInfo" className="form-label">Contact Info</label>
        <input type="text" className="form-control" id="contactInfo" name="contactInfo" value={formData.contactInfo} onChange={handleChange} required />
      </div>
      <button type="submit" className="btn btn-primary">Submit</button>
    </form>
  );
};

export default PropertyForm;
