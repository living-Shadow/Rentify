import React, { useState, useEffect } from 'react';
import { Container, Row, Col, Button, Card } from 'react-bootstrap';
import { fetchAllProperties } from '../services/api';
import BuyerPropertyCard from '../components/BuyerPropertyCard';
//import PropertyFilter from '../components/PropertyFilter';

const BuyerDashboard = () => {
  const [properties, setProperties] = useState([]);

  const fetchProperties = async () => {
    try {
      const response = await fetchAllProperties();
      setProperties(response.data);
    } catch (error) {
      console.error('Error fetching properties:', error);
    }
  };

  const handleFilter = async (filters) => {
    // Implement filter logic using the filters object
    // Call fetchProperties with filtered parameters
  };

  useEffect(() => {
    fetchProperties();
  }, []);

  return (
    <Container>
    <h1 className="mt-5">Buyer Dashboard</h1>
    <h2 className="mt-4">Properties</h2>
    {/* <PropertyFilter onFilter={handleFilter} /> */}
    <Row>
      {properties.map(property => (
        <Col key={property._id} md={4}>
          <BuyerPropertyCard property={property} />
        </Col>
      ))}
    </Row>
  </Container>
  );
};

export default BuyerDashboard;
