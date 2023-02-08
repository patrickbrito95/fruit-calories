import React from "react";
import {
  Image,
  Name,
  WrapperButton,
  WrapperCard,
  WrapperImage,
} from "./styles";

const CardItem = (props) => {
  return (
    <WrapperCard>
      <WrapperImage>
        <Image src={props.img} />
      </WrapperImage>
      <div>
        <Name>{props.name}</Name>
        <WrapperButton>{props.children}</WrapperButton>
      </div>
    </WrapperCard>
  );
};

export default CardItem;
