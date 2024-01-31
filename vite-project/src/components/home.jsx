import React, { useEffect } from "react";
import Button from "@mui/material/Button";
import DownloadSharpIcon from "@mui/icons-material/DownloadSharp";
import { useState } from "react";
import styled from "styled-components";
import Picker from "./picker";
import Filter from "./filter";
import { Grid } from "@mui/material";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
const Home = () => {
  const [filters, Setfilters] = useState("");
  const [Image, SetImage] = useState("");
  const onfilterchange = (e) => {
    Setfilters(e.target.value);
  };
  useEffect(() => {
    console.log("filters1", filters);
  }, [filters]);
  return (
    <Grid
      container
      spacing={2}
      direction="row"
      style={{
        height: "100vh",
        width: "100vw",
        margin: "0px",
      }}
    >
      <Grid
        item
        xs={10}
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Card variant="outlined">
          <Picker filter={filters} SetImage={SetImage} Image={Image} />{" "}
        </Card>
        {!Image ? (
          <h2>Uplod Image</h2>
        ) : (
          <Button variant="contained" startIcon={<DownloadSharpIcon />}>
            Downlod
          </Button>
        )}{" "}
      </Grid>

      <Grid
        item
        xs={2}
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "flex-start",
          alignItems: "flex-start",
        }}
      >
        {Image && <Filter onchangefilter={onfilterchange} />}{" "}
      </Grid>
    </Grid>
  );
};
export default Home;
