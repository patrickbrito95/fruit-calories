import { Link } from "react-router-dom";
import styled from "styled-components";

export const WrapperNavBar = styled.div`
  display: flex;
  justify-content: space-between;
  flex-direction: row;
  height: 70px;
  background-color: #54e29e;
`;

export const WrapperDropdownTitle = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  align-items: center;
`;

export const Dropdown = styled.div`
  margin-left: 50px;
`;

export const WrapperTitle = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  width: 100%;
`;

export const Title = styled.h1`
  color: #ffffff;
  text-decoration: none;
`;

export const StyledLink = styled(Link)`
  text-decoration: none;
  &:focus,
  &:hover,
  &:visited,
  &:link,
  &:active {
    text-decoration: none;
  }
`;

export const SearchBar = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  margin-right: 50px;
  width: auto;
`;

export const ButtonSearch = styled.button`
  border: none;
  background-color: transparent;
  cursor: pointer;
`;
