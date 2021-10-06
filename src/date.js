import * as React from "react";
import TextField from "@mui/material/TextField";
import Stack from "@mui/material/Stack";
import { useState } from "react";

export default function Date() {
  const [lahir, setLahir] = useState("");
  const [tanggal, setTanggal] = useState("");

  return (
    <Stack component="form" noValidate spacing={1}>
      <label>Tempat Lahir</label>
      <input
        id="outlined-basic"
        label="Tempat Lahir"
        variant="outlined"
        value={lahir}
        onChange={(e) => setLahir(e.target.value)}
      />
      <br/>
      <TextField
        spacing={3}
        value={tanggal}
        onChange={(e) => setTanggal(e.target.value)}
        id="date"
        label="Tanggal Lahir"  
        type="date"
        defaultValue="2017-05-24"
        sx={{ width: 220 }}
        InputLabelProps={{
          shrink: true,
        }}
      />
    </Stack>
  );
}
