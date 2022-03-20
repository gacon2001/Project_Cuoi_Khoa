import React from "react";

import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import FormGroup from "@mui/material/FormGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import { Box, Button , TextField} from "@material-ui/core";
import IOSSwitch from "../_switch/IOSSwitch";

export default function Switch() {
  return (
    <Box>
      <Box sx={{ minWidth: 120 }}>
        <FormControl maxWidth={50}>
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
        <FormControl>
          <InputLabel id="demo-simple-select-label">Sellers Details</InputLabel>
          <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            // value={age}
            label="Logo Options"
            // onChange={handleChange}
          >
            <MenuItem>Seller Level</MenuItem>
            <MenuItem>Seller Speaks</MenuItem>
            <Button color="warning" variant="outlined">
              Clear All
            </Button>
            <Button color="success" variant="outlined">
              Apply
            </Button>
          </Select>
        </FormControl>
        <FormControl>
          <InputLabel id="demo-simple-select-label">Budget</InputLabel>
          <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            // value={age}
            label="Logo Options"
            // onChange={handleChange}
          >
            <MenuItem>
              Min
              <TextField
                label="Any"
                margin="normal"
                // name="name"
                // onChange={handleOnChange}
                variant="outlined"
                type="number"
              />
            </MenuItem>
            <MenuItem>
              Max
              <TextField
                fullWidth
                label="Any"
                margin="normal"
                // name="name"
                // onChange={handleOnChange}
                variant="outlined"
                type="number"
              />
            </MenuItem>
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
        <FormGroup>
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
