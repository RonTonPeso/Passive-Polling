import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const AboutContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
`;

const BackButton = styled(Link)`
  margin-top: 20px;
  padding: 10px 20px;
  font-size: 1.1em;
  color: white;
  background-color: #007bff;
  text-decoration: none;
  border-radius: 5px;
  &:hover {
    background-color: #0056b3;
  }
`;

const About = () => (
  <AboutContainer>
    <h1>About Us</h1>
    <p>This is the about page of our project.</p>
    <BackButton to="/">Back to Home</BackButton>
  </AboutContainer>
);

export default About;