import { Link } from "react-router-dom";
import styled from "styled-components";

export const MoreInformation = styled(Link)`
  text-decoration: none;
  &:focus,
  &:hover,
  &:visited,
  &:link,
  &:active {
    text-decoration: none;
    color: black;
  }
  border-radius: 15px;
  background-color: #54e29e;
  padding: 5px 15px;
  font-size: 15px;
  font-weight: 500;
`;
