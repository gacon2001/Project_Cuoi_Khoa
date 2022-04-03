import React from "react";

import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import FormGroup from "@mui/material/FormGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import { Box, Button, TextField } from "@material-ui/core";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import IOSSwitch from "../_switch/IOSSwitch";

export default function Switch({state, setState}) {
  
  const handleOnClick = (event) => {
    const {name, checked} = event.target;
    setState({
      ...state,
      [name]: checked,
    })
  };

  return (
    <Box>
      <Box sx={{ mt: 2 }}>
        <FormControl sx={{ minWidth: 140 }}>
          <InputLabel id="demo-simple-select-label">Logo Options</InputLabel>
          <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            // onClick={age}
            label="Logo Options"
            // onClick={handleClick}
          >
            <MenuItem>Logo Style</MenuItem>
            <MenuItem>File Format</MenuItem>
            <MenuItem>Service Includes</MenuItem>
            <Button color="warning" variant="outlined">
              Clear All
            </Button>
            <Button color="success" variant="outlined">
              Apply
            </Button>
          </Select>
        </FormControl>
        <FormControl sx={{ minWidth: 140, ml: 6 }}>
          <InputLabel id="demo-simple-select-label">Seller Details</InputLabel>
          <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            // onClick={age}
            label="Seller Details"
            // onClick={handleClick}
          >
            <MenuItem>Seller Level</MenuItem>
            <MenuItem>Seller Speaks</MenuItem>
            <MenuItem>Seller Lives In</MenuItem>
            <Button color="warning" variant="outlined">
              Clear All
            </Button>
            <Button color="success" variant="outlined">
              Apply
            </Button>
          </Select>
        </FormControl>
        <FormControl sx={{ minWidth: 140 , ml: 6}}>
          <InputLabel id="demo-simple-select-label">Budget</InputLabel>
          <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            // onClick={age}
            label="Budget"
            // onClick={handleClick}
          >
            <Box>
              <TextField label="Min" type="number" />
              <TextField label="Max" type="number" />
            </Box>
            <Button color="warning" variant="outlined">
              Clear All
            </Button>
            <Button color="success" variant="outlined">
              Apply
            </Button>
          </Select>
        </FormControl>
        <FormControl sx={{ minWidth: 140 , ml: 5}}>
          <InputLabel id="demo-simple-select-label">Delivery Time</InputLabel>
          <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            // onClick={age}
            label="Seller Details"
            // onClick={handleClick}
          >
            <RadioGroup
              aria-labelledby="demo-radio-buttons-group-label"
              defaultonClick="Express 24H"
              name="radio-buttons-group"
            >
              <FormControlLabel control={<Radio />} label="Express 24H" />
              <FormControlLabel control={<Radio />} label="Up to 3 days" />
              <FormControlLabel control={<Radio />} label="Up to 7 days" />
              <FormControlLabel control={<Radio />} label="Anytime" />
            </RadioGroup>
            <Button color="warning" variant="outlined">
              Clear All
            </Button>
            <Button color="success" variant="outlined">
              Apply
            </Button>
          </Select>
        </FormControl>
      </Box>
      <Box>
        <FormGroup row>
          <FormControlLabel
            control={<IOSSwitch sx={{ m: 1 }} defaultChecked />}
            label="Pro services"
            name="proServices"
            onClick={handleOnClick}
            // value={state.proServices}
            // true false đều fetch lại list jobs, nên check thế nào???
          />
          <FormControlLabel
            control={<IOSSwitch sx={{ m: 1, ml: 4 }} defaultChecked />}
            label="Local sellers"
            name="localSellers"
            onClick={handleOnClick}
            // value={state.localSellers}
          />
          <FormControlLabel
            control={<IOSSwitch sx={{ m: 1 , ml: 4}} defaultChecked />}
            label="Online sellers"
            name="onlineSellers"
            onClick={handleOnClick}
            // value={state.onlineSellers}
          />
          <FormControlLabel
            control={<IOSSwitch sx={{ m: 1 , ml: 3}} defaultChecked />}
            label="Delivery time"
            name="deliveryTime"
            onClick={handleOnClick}
            // value={state.deliveryTime}
          />
        </FormGroup>

      </Box>
      <Box>{/* Count */}</Box>
    </Box>
  );
}
