import React from "react";

import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import FormGroup from "@mui/material/FormGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import { Box, Button, TextField } from "@material-ui/core";
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import IOSSwitch from "../_switch/IOSSwitch";

export default function Switch() {
  return (
    <Box>
      <Box sx={{mt: 2}}>
        <FormControl sx={{ minWidth: 140 }}>
          <InputLabel id="demo-simple-select-label">Logo Options</InputLabel>
          <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            // value={age}
            label="Logo Options"
            // onChange={handleChange}
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
        <FormControl sx={{ minWidth: 140 }}>
          <InputLabel id="demo-simple-select-label">Seller Details</InputLabel>
          <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            // value={age}
            label="Seller Details"
            // onChange={handleChange}
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
        <FormControl sx={{ minWidth: 140 }}>
          <InputLabel id="demo-simple-select-label">Budget</InputLabel>
          <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            // value={age}
            label="Budget"
            // onChange={handleChange}
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
        <FormControl sx={{ minWidth: 140 }}>
          <InputLabel id="demo-simple-select-label">Delivery Time</InputLabel>
          <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            // value={age}
            label="Seller Details"
            // onChange={handleChange}
          >
             <RadioGroup
        aria-labelledby="demo-radio-buttons-group-label"
        defaultValue="Express 24H"
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
            // value={handleOnChange}
          />
          <FormControlLabel
            control={<IOSSwitch sx={{ m: 1 }} defaultChecked />}
            label="Local sellers"
            // value={handleOnChange}
          />
          <FormControlLabel
            control={<IOSSwitch sx={{ m: 1 }} defaultChecked />}
            label="Online sellers"
            // value={handleOnChange}
          />
          <FormControlLabel
            control={<IOSSwitch sx={{ m: 1 }} defaultChecked />}
            label="Delivery time"
            // value={handleOnChange}
          />
        </FormGroup>
      </Box>
      <Box>{/* Count */}</Box>
    </Box>
  );
}
