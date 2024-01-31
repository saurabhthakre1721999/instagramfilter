import React from "react";
import { Select } from "@mui/material";
import MenuItem from "@mui/material/MenuItem";
import InputLabel from "@mui/material/InputLabel";
import FormControl from "@mui/material/FormControl";
import { filterValues } from "../assets/filtersvalue";
import "../assets/insta.css";
const Filter = ({ onchangefilter, filters }) => {
  return (
    <FormControl sx={{ m: 1, minWidth: 120 }}>
      <InputLabel>filters</InputLabel>
      <Select
        name="Filters"
        id=""
        label="filters"
        value={filters}
        onChange={(e) => onchangefilter(e)}
      >
        {filterValues.map((filters) => {
          return (
            <MenuItem value={filters.class} key={filters.class}>
              {filters.name}
            </MenuItem>
          );
        })}
      </Select>
    </FormControl>
  );
};
export default Filter;
