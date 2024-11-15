"use client"

import { Box, TextField, MenuItem } from "@mui/material";
import React, { useState } from "react";

const MuiSelect = () => {
  const [country, setCountry] = useState("");
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setCountry(event.target.value as string);
  };

  return (
    <div>
      <Box width="250px">
        <TextField
          label="Select Country"
          select
          value={country}  
          onChange={handleChange}
          fullWidth
        >
          <MenuItem value="IN">India</MenuItem>
          <MenuItem value="US">USA</MenuItem>
          <MenuItem value="AU">AUSTRALIA</MenuItem>
          <MenuItem value="EN">ENGLAND</MenuItem>
          <MenuItem value="EN">ENGLAND</MenuItem>
          <MenuItem value="IR">IRELAND</MenuItem>
        </TextField>
      </Box>
      
    </div>
  );
};

export default MuiSelect;
