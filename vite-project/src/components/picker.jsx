import React from "react";
import Input from "./input";
import { useState } from "react";
import styled from "styled-components";

const Picker = ({ filter, Image, SetImage }) => {
  const img = Image ? URL.createObjectURL(Image) : null;

  return (
    <Uploder>
      {Image ? (
        <span style={{}}>
          {Image && <Photo src={img} alt="" style={{ filter: filter }} />}
        </span>
      ) : (
        <span>
          <Input SetImage={SetImage} />
        </span>
      )}
    </Uploder>
  );
};
export default Picker;
const Photo = styled.img`
  width: 600px;
  height: 500px;
`;
const Uploder = styled.div``;
