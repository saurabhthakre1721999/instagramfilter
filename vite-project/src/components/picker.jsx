import React from "react";
import Input from "./input";
import { useState } from "react";
import styled from "styled-components";

const Picker = ({ filters, Image, SetImage }) => {
  const img = Image ? URL.createObjectURL(Image) : null;
  console.log("pecker", filters);
  return (
    <Uploder>
      {Image ? (
        <span style={{}}>
          {Image && <Photo className={filters} src={img} alt="" />}
        </span>
      ) : (
        <span>
          <Input SetImage={SetImage} Image={Image} />
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
