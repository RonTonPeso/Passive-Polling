import React from 'react';
import styled from 'styled-components';
import Button from '../components/Button';

const HomeContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
`;

const Title = styled.h1`
  font-size: 2.5em;
  margin-bottom: 20px;
`;

const Description = styled.p`
  font-size: 1.2em;
  text-align: center;
  max-width: 600px;
`;

const FeaturesList = styled.ul`
  list-style-type: none;
  padding: 0;
`;

const FeatureItem = styled.li`
  font-size: 1.1em;
  margin: 10px 0;
`;

const Home = () => (
    <HomeContainer>
        <Title>Welcome to My Hackathon Project</Title>
        <Description>
            Our project probes the political space to better find ways in order to acclimate to this new political environment. We aim to provide tools and insights that help users navigate the complexities of modern politics, leveraging technology to foster informed and engaged communities.
        </Description>
        <FeaturesList>
            <FeatureItem>📱 Seamless social media integration</FeatureItem>
            <FeatureItem>🔒 Privacy-focused features</FeatureItem>
            <FeatureItem>📊 Advanced analytics for engagement</FeatureItem>
        </FeaturesList>
        <Button to="/about">Learn More About Us</Button>
        <Button to="/main">Go to Main Page</Button>
    </HomeContainer>
);

export default Home;