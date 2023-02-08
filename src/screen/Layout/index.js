import React, { useState } from "react";
import NavBar from "../../components/Navbar";
import { SearchBarInput, WrapperChildren, WrapperInput } from "./styles";

const Layout = (props) => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <>
      <NavBar onClick={() => setIsOpen(!isOpen)} />
      {isOpen ? (
        <WrapperInput>
          <SearchBarInput
            type="text"
            value={props.valueInput}
            onChange={props.onChangeInput}
          />
        </WrapperInput>
      ) : null}
      <WrapperChildren>{props.children}</WrapperChildren>
    </>
  );
};

export default Layout;
