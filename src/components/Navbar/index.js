import React from "react";
import Icon from "../Icon/index.js";
import "./styles.js";
import {
  Dropdown,
  SearchBar,
  Title,
  WrapperDropdownTitle,
  WrapperNavBar,
  WrapperTitle,
  StyledLink,
  ButtonSearch,
} from "./styles.js";

const NavBar = (props) => {
  return (
    <WrapperNavBar>
      <WrapperDropdownTitle>
        <Dropdown>
          <Icon name="dropdown" />
        </Dropdown>
        <WrapperTitle>
          <StyledLink to="/">
            <Title>Frutas</Title>
          </StyledLink>
        </WrapperTitle>
      </WrapperDropdownTitle>

      <SearchBar>
        <ButtonSearch onClick={props.onClick}>
          <Icon name="search" />
        </ButtonSearch>
      </SearchBar>
    </WrapperNavBar>
  );
};

export default NavBar;
