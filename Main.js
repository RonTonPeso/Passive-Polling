import React, { useState } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const MainContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
  font-family: 'Roboto', sans-serif; /* Apply the new font */
`;

const TopSection = styled.div`
  width: 100%;
  background-color: lightgreen;
  padding: 20px 0;
  text-align: center;
`;

const BottomSection = styled.div`
  width: 100%;
  background-color: lightgreen;
  padding: 20px 0;
  text-align: center;
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
    background-color: rgb(4, 67, 135);
  }
`;

const AnalyzeButton = styled.button`
  margin-top: 20px;
  padding: 10px 20px;
  font-size: 1.1em;
  color: white;
  background-color: #007bff;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  &:hover {
    background-color: rgb(4, 67, 135);
  }
`;

const Instructions = styled.div`
  margin-top: 20px;
  text-align: left;
  max-width: 600px;
  color: darkgreen; /* Change text color to dark green */
`;

const MainText = styled.p`
  color: darkgreen; /* Change text color to dark green */
`;

const MainTitle = styled.h1`
  color: darkgreen; /* Change text color to dark green */
`;

const MainImage = styled.img`
  max-width: 15%;
  height: auto;
  margin-bottom: 20px;
`;

const InputField = styled.input`
  margin-top: 20px;
  padding: 10px;
  font-size: 1em;
  width: 100%;
  max-width: 600px;
  border: 1px solid #ccc;
  border-radius: 5px;
`;

const OutputContainer = styled.div`
  margin-top: 20px;
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 5px;
  max-width: 600px;
  width: 100%;
  background-color: #f9f9f9;
`;

const Main = () => {
  const [inputValue, setInputValue] = useState('');
  const [output, setOutput] = useState('');

  const handleInputChange = (event) => {
    setInputValue(event.target.value);
  };

  const handleSubmit = () => {
    console.log('User input:', inputValue);
    // Handle the input value as needed
    const fillerOutput = `This is a filler output for the input: ${inputValue}`;
    setOutput(fillerOutput);
  };

  return (
    <MainContainer>
      <TopSection>
        <MainTitle>Main Page</MainTitle>
        <MainText>This is the main page of our project.</MainText>
      </TopSection>
      <MainImage src="https://upload.wikimedia.org/wikipedia/commons/c/c9/WikiTeam_1%2B3_GIF_logo.gif?20200506133129" alt="Wiki Team 1 + 3 editorial contests GIF logo organized by Wikimedia Armenia." />
      <Instructions>
        <h2>Instructions</h2>
        <p>Follow these steps to get started:</p>
        <ol>
          <li>First type in a prompt or current event that you would like to know what the public thinks!</li>
          <li>Then click the "Analyze" button to see the results.</li>
          <li>You will receive a score based on the sentiment of the responses.</li>
        </ol>
      </Instructions>
      <InputField
        type="text"
        placeholder="Type your prompt or current event here..."
        value={inputValue}
        onChange={handleInputChange}
      />
      <AnalyzeButton onClick={handleSubmit}>Analyze</AnalyzeButton>
      {output && (
        <OutputContainer>
          <h3>Output</h3>
          <p>{output}</p>
        </OutputContainer>
      )}
      
        <BackButton to="/">Back to Home</BackButton>
      
    </MainContainer>
  );
};

export default Main;