import React from "react";
import styled from "styled-components";

const CardDiv = styled.div`
  background-color: rgb(228,234,245,0.5);
  border: 2px solid black;
  border-radius: 20px;
  width: 20%;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  margin: 10px;
  color: black;
`;
const Cards = props => {
  console.log(props);
  return (
    <CardDiv>
      <h1>{props.char.name}</h1>
      <p>Gender: {props.char.gender}</p>
      <p>Height: {props.char.height}</p>
      <p>Weight: {props.char.mass}</p>
      <p>Hair Color: {props.char.hair_color}</p>
      <p>Skin Color: {props.char.skin_color}</p>
    </CardDiv>
  );
};
export default Cards;
