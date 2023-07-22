import React, { useState, useEffect, useRef } from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  Box,
  Typography,
} from "@mui/material";
import { tableHeaders } from "../RequiredDocumentsTable/constants";
import StatusButton from "@/components/StatusButton";
import { IUserDocumentsData } from "../../types";

interface RequiredDocumentsTableProps {
  documentList: IUserDocumentsData[];
}

const RequiredDocumentsTableMobile: React.FC<RequiredDocumentsTableProps> = ({
  documentList,
}) => {
  // References
  const table1HeightRef = useRef<HTMLDivElement | null>(null);
  const table2HeightRef = useRef<HTMLDivElement | null>(null);

  // State to keep track of row heights
  const [table1RowHeights, setTable1RowHeights] = useState<number[]>([]);
  const [table2RowHeights, setTable2RowHeights] = useState<number[]>([]);

  // Function to calculate maximum height among all rows
  const calculateMaxHeight = (heights: number[]) => {
    return Math.max(...heights);
  };

  // Effect to calculate maximum heights and set them to all rows in both tables
  useEffect(() => {
    const table1MaxHeight = calculateMaxHeight(table1RowHeights);
    const table2MaxHeight = calculateMaxHeight(table2RowHeights);

    setTable1RowHeights(
      table1RowHeights.map(() => table1MaxHeight) // Set all heights to the maximum
    );

    setTable2RowHeights(
      table2RowHeights.map(() => table2MaxHeight) // Set all heights to the maximum
    );
  }, [table1RowHeights, table2RowHeights]);

  // Function to handle row height calculation
  const handleRowHeight = (index: number) => {
    if (table1HeightRef.current && table2HeightRef.current) {
      // Get individual row heights for both tables
      const table1RowHeight =
        table1HeightRef.current.children[index]?.clientHeight || 0;
      const table2RowHeight =
        table2HeightRef.current.children[index]?.clientHeight || 0;

      // Update the state with the new heights
      setTable1RowHeights((prevHeights) => {
        const newHeights = [...prevHeights];
        newHeights[index] = table1RowHeight;
        return newHeights;
      });

      setTable2RowHeights((prevHeights) => {
        const newHeights = [...prevHeights];
        newHeights[index] = table2RowHeight;
        return newHeights;
      });
    }
  };

  // Other existing code...

  return (
    <>
      {/* ... Existing code ... */}

      <Box
        sx={{ display: "flex", flexDirection: "row", backgroundColor: "red" }}
      >
        {/* Mobile Table 1 */}
        <TableContainer
          component={Paper}
          sx={{ height: "auto", display: "flex" }}
          ref={table1HeightRef} // Set the ref to the TableContainer
        >
          <Table aria-label="simple table">
            <TableHead sx={{ display: "flex" }}>
              {/* ... Existing code ... */}
            </TableHead>
            <TableBody
              sx={{ gap: "0.5rem", display: "flex", flexDirection: "column" }}
            >
              {documentList.length ? (
                documentList?.map((row, index) => {
                  return (
                    <TableRow
                      key={index}
                      sx={{
                        "&:last-child td, &:last-child th": { border: 0 },
                      }}
                      ref={(el) => handleRowHeight(index)} // Set the ref to each TableRow
                    >
                      {/* ... Existing code ... */}
                    </TableRow>
                  );
                })
              ) : (
                <TableRow>
                  <TableCell align="center" scope="row">
                    <Typography textAlign="center">No content here</Typography>
                  </TableCell>
                </TableRow>
              )}
            </TableBody>
          </Table>
        </TableContainer>

        {/* Table 2 */}
        <TableContainer
          component={Paper}
          sx={{
            height: "auto",
            display: "flex",
            maxWidth: "6rem",
            borderLeftColor: "#383838",
          }}
          ref={table2HeightRef} // Set the ref to the TableContainer
        >
          <Table aria-label="simple table">
            <TableHead sx={{ display: "flex" }}>
              {/* ... Existing code ... */}
            </TableHead>
            <TableBody
              sx={{ gap: "0.5rem", display: "flex", flexDirection: "column" }}
            >
              {documentList.length ? (
                documentList?.map((row, index) => {
                  return (
                    <TableRow
                      key={index}
                      sx={{
                        "&:last-child td, &:last-child th": { border: 0 },
                      }}
                    >
                      <TableCell
                        sx={{
                          backgroundColor: "#f4f4f4",
                          borderTopRightRadius: "10px",
                          borderBottomRightRadius: "10px",
                          minWidth: "6rem",
                          padding: 0,
                          height: table2RowHeights[index] || "auto", // Set the height dynamically from the state
                        }}
                      >
                        {/* ... Existing code ... */}
                      </TableCell>
                    </TableRow>
                  );
                })
              ) : (
                <TableRow>
                  <TableCell align="center" scope="row">
                    <Typography textAlign="center">No content here</Typography>
                  </TableCell>
                </TableRow>
              )}
            </TableBody>
          </Table>
        </TableContainer>
      </Box>
    </>
  );
};

export default RequiredDocumentsTableMobile;
