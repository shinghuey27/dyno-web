import * as React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { Typography } from "@mui/material";

function createData(index, name, value) {
  let src = require(`../../../Asset/Icon/Image${index}.png`);
  return {
    src,
    name,
    value
  };
}

const rows = [
  createData("1", "Yohan Narlis", "Checker"),
  createData("2", "Rani Veloo", "Checker"),
  createData("3", "David Yap", "Maker"),
  createData("4", "hr....my", "Viewer")
];

const cellTableStyle = {
  border: 0,
  flex: 1,
  fontFamily: "Rubik",
  fontSize: "16px",
  fontStyle: "normal",
  fontWeight: 400,
  color: "#6F7FAF"
};

export default function MUITable2() {
  return (
    <TableContainer component={Paper} style={{ padding: 20, width: "auto" }}>
      <Typography
        fontFamily="Rubik"
        fontSize={"20px"}
        color={"#171725"}
        style={{ marginBottom: 32 }}
      >
        Users
      </Typography>
      <Table sx={{}} aria-label="simple table">
        <TableHead style={{ backgroundColor: "#FFDD00" }}>
          <TableRow>
            <TableCell
              style={{ borderBottom: 0, borderRadius: "10px 0 0 10px" }}
              width={"7%"}
            ></TableCell>
            <TableCell style={{ borderBottom: 0 }} width={"70%"}>
              NAME
            </TableCell>
            <TableCell
              style={{ borderBottom: 0, borderRadius: "0 10px 10px 0px" }}
              align="center"
            >
              ROLE
            </TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row, index) => (
            <TableRow
              key={index}
              sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
            >
              <TableCell style={cellTableStyle}>
                <img src={row?.src} style={{ height: 40 }}></img>
              </TableCell>
              <TableCell
                component="th"
                style={{ ...cellTableStyle, color: "black" }}
                scope="row"
              >
                {row?.name}
              </TableCell>

              <TableCell style={cellTableStyle} align="center">
                {row?.value}
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
