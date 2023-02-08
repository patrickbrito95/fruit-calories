import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Icon from "../Icon";
import {
  BackButton,
  Details,
  Image,
  NameFruit,
  StyledSpan,
  WrapperCardDetails,
  WrapperImage,
} from "./styles";

const CardDetails = () => {
  const [fruits, setFruits] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const { data: response } = await axios.get(
          "http://pocs.digitalpages.com.br/mock/api/fruits-api/fruits.json"
        );
        setFruits(response);
      } catch (error) {
        console.error(error.message);
      }
    };

    fetchData();
  }, []);

  const { name } = useParams();

  const fruit = fruits.find((p) => p.name === name);

  return (
    <div>
      <WrapperCardDetails>
        <BackButton to="/fruits">
          <Icon name="back" />
        </BackButton>
        <WrapperImage>
          <Image src={fruit?.photo} />
        </WrapperImage>
        <Details>
          <NameFruit>
            <h1>{fruit?.name}</h1>
          </NameFruit>
          <StyledSpan>Porção: {fruit?.portion}</StyledSpan>
          <StyledSpan>Calorias Totais: {fruit?.calories}</StyledSpan>
          <StyledSpan>Carboidratos: {fruit?.carbohydrates}</StyledSpan>
          <StyledSpan>Proteínas: {fruit?.protein}</StyledSpan>
          <StyledSpan>Fibras: {fruit?.fiber}</StyledSpan>
          <StyledSpan>Gorduras: {fruit?.blubber}</StyledSpan>
        </Details>
      </WrapperCardDetails>
    </div>
  );
};

export default CardDetails;
