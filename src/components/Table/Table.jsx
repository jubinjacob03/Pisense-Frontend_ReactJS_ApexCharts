import * as React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import "./Table.css";

function createData(name, registerId, grade, result) {
  return { name, registerId, grade, result };
}

const rows = [
  createData("Jubin Jacob", 18908424, "8", "Passed"),
  createData("Ravi Prabhakar", 18908424, "4", " Failed !"),
  createData("Ayushmaan Das", 18908424, "9", "Passed"),
  createData("Antheneni Santhosh", 18908421, "5", "Pass !"),
  createData("Mohammed Zahan", 18908424, "8", "Passed"),
  createData("Partha Guntur", 18908424, "8", "Passed"),
  createData("Mahesh Bhoopati", 18908424, "2", " Failed !"),
];

const makeStyle = (result) => {
  if (result === "Passed") {
    return {
      background: "rgb(145 254 159 / 47%)",
      color: "green",
    };
  } else if (result === " Failed !") {
    return {
      background: "#ffadad8f",
      color: "red",
    };
  } else {
    return {
      background: "#59bfff",
      color: "white",
    };
  }
};

export default function BasicTable() {
  return (
    <div className="Table">
      <h3>Term 3 Results</h3>
      <TableContainer
        component={Paper}
        style={{ boxShadow: "0px 13px 20px 0px #80808029" }}
      >
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell>Student Name</TableCell>
              <TableCell align="left">Register ID</TableCell>
              <TableCell align="left">Grade</TableCell>
              <TableCell align="left">Result</TableCell>
              <TableCell align="left"></TableCell>
            </TableRow>
          </TableHead>
          <TableBody style={{ color: "white" }}>
            {rows.map((row) => (
              <TableRow
                key={row.name}
                sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
              >
                <TableCell component="th" scope="row">
                  {row.name}
                </TableCell>
                <TableCell align="left">{row.registerId}</TableCell>
                <TableCell align="left">{row.grade}</TableCell>
                <TableCell align="left">
                  <span className="status" style={makeStyle(row.result)}>
                    {row.result}
                  </span>
                </TableCell>
                <TableCell align="left" className="Details">
                  Details
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
}
