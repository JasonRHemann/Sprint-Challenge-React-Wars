import React, { useEffect, useState } from "react";
import "./App.css";
import axios from "axios";
import Cards from "./components/Cards";
import styled from "styled-components";

const App = props => {
  const [characters, setCharacters] = useState([]);
  const [pageNumber, setPageNumber] = useState(1);
  const nextPage = e => {
    setPageNumber(pageNumber + 1);
  };
  const previousPage = e => {
    setPageNumber(pageNumber - 1);
  };

  useEffect(() => {
    console.log(pageNumber);
    axios

      .get(`https://swapi.co/api/people?search=a&page= + ${pageNumber}`)

      .then(response => {
        setCharacters(response.data.results);
      })
      .catch(error => {
        console.log("Sorry Error", error);
      });
  }, [pageNumber]);

  const Rapper = styled.div`
    // border: 2px solid black;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-evenly;
  `;
  const Button = styled.button`
    border: 2px solid black;
    background-color: rgb(228,234,245,0.5);
    margin: 10px;
    border-radius: 20px;
    width: 250px;
    font-size: 30px;

  `;

  const Header = styled.h1`
  font-size: 50px;
  color: black;
  text-decoration: overline;
  font-weight: bold;

  
  `

  return (
    <div className="App">
      <Header className="Header">React Wars</Header>
      <Button onClick={previousPage}>Previous Page</Button>
      <Button onClick={nextPage}>Next Page</Button>

      <Rapper>
        {characters.map((char, index) => (
          <Cards char={char} key={index} />
        ))}
      </Rapper>
    </div>
  );
};

export default App;
