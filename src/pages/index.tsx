import * as React from "react";
import type { HeadFC } from "gatsby";
import { Box, Grid, Typography } from "@mui/material";
import QrCode from "./qr-code-generator";

const IndexPage: React.FC = () => {
  return (
    <>
      <Box sx={{ flexGrow: 1 }}>
        <Grid container spacing={2}>
          <Grid item xs={12} style={{ textAlign: "center" }}>
            <Typography variant="h3">QR Code Generator</Typography>
          </Grid>
          <Grid item xs={12} style={{ textAlign: "center" }}>
            <QrCode />
          </Grid>
        </Grid>
      </Box>
    </>
  );
};

export default IndexPage;

export const Head: HeadFC = () => <title>QR Code Generator</title>;
