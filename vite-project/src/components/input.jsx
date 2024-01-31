import React from "react";
import styled from "styled-components";
import uplod from "../assets/uplod.png";
import { useRef } from "react";

const Input = ({ SetImage, Image }) => {
  const oninputchange = (e) => {
    if (e.target.files.length > 0) {
      SetImage(e.target.files[0]);
    }
  };
  const inputref = useRef();
  const imageclick = (event) => {
    inputref.current.click();
  };
  return (
    <Uplodfile>
      <Img src={uplod} onClick={imageclick} />
      <Inputag
        type="file"
        accept="image/*"
        name=""
        id=""
        value={Image}
        ref={inputref}
        onChange={oninputchange}
      />
    </Uplodfile>
  );
};
export default Input;

const Uplodfile = styled.div``;
const Img = styled.img`
  width: 200px;
  height: 200px;
`;
const Inputag = styled.input`
  display: none;
`;
