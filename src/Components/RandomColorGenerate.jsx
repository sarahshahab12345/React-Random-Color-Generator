import React, { useState } from "react";
import Box from "@mui/material/Box";
import { Button, Typography } from "@mui/material";

function RandomColorGenerate() {
  const [currentColor, setcurrentColor] = useState("#DE345A");
  const [mode, setmode] = useState("hex");

  const generateHexColor = () => {
    let hexChars = ["A", "B", "C", "D", "E", "F", 0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
    let hexCode = `#`;
    for (let i = 1; i < 7; i++) {
      hexCode += hexChars[Math.abs(Math.floor(Math.random() * 15))];
    }
    console.log(hexCode);
    setcurrentColor(hexCode);
  };

  const generateRgbColor = () => {
    let rgb = `rgb(${Math.abs(Math.floor(Math.random() * 225))}, 
       ${Math.abs(Math.floor(Math.random() * 225))}, 
       ${Math.abs(Math.floor(Math.random() * 225))});`;
    console.log(rgb);
    setcurrentColor(rgb);
  };

  const handleOnClick = () => {
    if (mode == "hex") {
      generateHexColor();
    } else {
      generateRgbColor();
    }
  };

  return (
    <>
      <Box
        width={"100vw"}
        height={"100vh"}
        display={"flex"}
        flexDirection={"column"}
        alignItems={"center"}
        justifyContent={"center"}
        sx={{ backgroundColor: currentColor }}
      >
        <Typography variant="h3">{currentColor}</Typography>
        <Box marginTop={5} display={"flex"} gap={4}>
          <Button onClick={() => setmode("hex")} variant="contained">
            Hex Mode
          </Button>
          <Button onClick={handleOnClick} variant="contained">
            Generate Color
          </Button>
          <Button onClick={() => setmode("rgb")} variant="contained">
            Rgb Mode
          </Button>
        </Box>
      </Box>
    </>
  );
}

export default RandomColorGenerate;
