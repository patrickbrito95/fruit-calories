import styled from "styled-components";

export const WrapperCard = styled.div`
  width: 250px;
  height: 320px;
  flex-basis: auto;
  background-color: #ffffff;
  border-radius: 20px;
  margin: 15px;
  padding: 15px;
  box-shadow: 1px 1px 28px -8px rgba(0, 0, 0, 0.73);
`;

export const WrapperImage = styled.div`
  display: flex;
  justify-content: center;
`;

export const Image = styled.img`
  max-width: 150px;
  max-height: 150px;
  min-width: 150px;
  min-height: 150px;
`;

export const Name = styled.div`
  font-size: 25px;
  font-weight: bold;
  display: flex;
  justify-content: center;
  text-align: center;
`;

export const WrapperButton = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 30px;
`;
