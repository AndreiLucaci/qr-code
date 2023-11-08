import { Box, Button, Grid, Typography } from "@mui/material";
import TextField from "@mui/material/TextField";
import { useState } from "react";
import * as React from "react";
import QRCode from "react-qr-code";

export default function QrCodeGenerator() {
  const [value, setValue] = useState("https://qr.andreilucaci.ro/");

  const downloadQR = () => {
    const svg = document.getElementById("qr-code") as HTMLElement;
    const svgData = new XMLSerializer().serializeToString(svg);
    const canvas = document.createElement("canvas");
    canvas.width = 256;
    canvas.height = 256;
    const ctx = canvas.getContext("2d");
    const img = new Image();
    img.onload = () => {
      ctx?.drawImage(img, 0, 0);
      const pngFile = canvas.toDataURL("image/png");
      const downloadLink = document.createElement("a");
      downloadLink.href = pngFile;
      downloadLink.download = "qr-code.png";
      document.body.appendChild(downloadLink);
      downloadLink.click();
      document.body.removeChild(downloadLink);
    };
    img.src = "data:image/svg+xml;base64," + btoa(svgData);
  };

  return (
    <>
      <Box sx={{ flexGrow: 1 }}>
        <Grid container spacing={2}>
          <Grid item xs={12} style={{ textAlign: "center" }}>
            <TextField
              id="qr-code-value"
              label="Insert your value here:"
              variant="outlined"
              value={value}
              onChange={(e) => setValue(e.target.value)}
              style={{ width: "70%", margin: "2% auto 4%" }}
            />
          </Grid>
        </Grid>
        <QRCode
          id="qr-code"
          size={256}
          style={{ height: "auto", maxWidth: "50%", width: "25%" }}
          value={value}
          viewBox={`0 0 256 256`}
        />
        <Grid container spacing={2} style={{ marginTop: "20px" }}>
          <Grid item xs={12} style={{ textAlign: "center" }}>
            <Button
              variant="outlined"
              size="large"
              onClick={() => downloadQR()}
              style={{ color: "black" }}
            >
              Download QR Code
            </Button>
          </Grid>
        </Grid>
      </Box>
    </>
  );
}
