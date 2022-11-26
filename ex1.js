import * as React from "react";
import Box from "@mui/material/Box";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import './ex1.css';

export default function PickColorComponent() {
  const [pickColor, setPickColor] = React.useState("");

  const handleChange = (event) => {
    setPickColor(event.target.value);
  };
  const Lime=()=>{
    document.getElementById('box').style.background="lime";
  }
  const Lavender=()=>{
    document.getElementById('box').style.background="lavender";
  }
  const Crimson=()=>{
    document.getElementById('box').style.background="crimson";
  }
  const Darkblue=()=>{
    document.getElementById('box').style.background="darkblue";
  }
  const Teal=()=>{
    document.getElementById('box').style.background="teal";
  }
  const RebeccaPurple=()=>{
    document.getElementById('box').style.background="rebeccapurple";
  }
  const GhostWhite=()=>{
    document.getElementById('box').style.background="ghostwhite";
  }
  const AquaMarine=()=>{
    document.getElementById('box').style.background="aquamarine";
  }
  const AliceBlue=()=>{
    document.getElementById('box').style.background="aliceblue";
  }
  return (
    <div className="top"><h2><center>Color Changer UI</center></h2>
    <div className="Drop_down">
    <Box sx={{ minWidth: 120 }} >
      <FormControl size="medium">
        <InputLabel id="demo-simple-select-label">Pick a Color</InputLabel>
        <Select
          MenuProps={{
            PaperProps: {
              sx: {
                "& .MuiMenuItem-root": {
                  backgroundColor: "white"
                },
                "& .MuiMenuItem-root:hover": {
                  backgroundColor: "gray"
                },
                "& .MuiMenuItem-root.Mui-selected:hover": {
                  backgroundColor: "pink"
                }
              }
            }
          }}
          value={pickColor}
          label="Color"
          onChange={handleChange}
        >
          <MenuItem value={'lime'} onClick={Lime}>Lime</MenuItem>
          <MenuItem value={'lavender'} onClick={Lavender}>Lavender</MenuItem>
          <MenuItem value={'crimson'} onClick={Crimson}>Crimson</MenuItem>
          <MenuItem value={'darkblue'} onClick={Darkblue}>Darkblue</MenuItem>
          <MenuItem value={'teal'} onClick={Teal}>Teal</MenuItem>
          <MenuItem value={'rebeccapurple'} onClick={RebeccaPurple}>Rebecca Purple</MenuItem>
          <MenuItem value={'ghostwhite'} onClick={GhostWhite}>Ghost White</MenuItem>
          <MenuItem value={'aquamarine'} onClick={AquaMarine}>Aqua Marine</MenuItem>
          <MenuItem value={'aliceblue'} onClick={AliceBlue}>Alice Blue</MenuItem>
        </Select>
      </FormControl>
    </Box>
    <div className="box" id="box">

    </div>
    </div>
    </div>
  );
        }