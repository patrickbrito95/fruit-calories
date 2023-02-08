import { Link } from "react-router-dom";
import styled from "styled-components";

export const WrapperCardDetails = styled.div`
  display: flex;
  justify-content: center;
  width: 60%;
  margin: auto;
  border-radius: 30px;
  padding: 50px;
  box-shadow: 1px 1px 300px 0px rgba(0, 0, 0, 0.75);

  @media (max-width: 1250px) {
    display: block;
  }
`;

export const NameFruit = styled.div`
  display: flex;
  justify-content: center;
`;

export const WrapperImage = styled.div`
  display: flex;
  justify-content: center;
`;

export const Image = styled.img`
  max-width: 100%;
  max-height: 100%;
  min-width: 100%;
  min-height: 100%;
`;

export const Details = styled.div``;

export const StyledSpan = styled.div`
  font-size: 25px;
  font-weight: 500;
  padding: 20px;

  @media (max-width: 500px) {
    font-size: 20px;
    font-weight: 500;
    padding: 10px;
  }
`;

export const BackButton = styled(Link)`
  height: 25px;
`;
