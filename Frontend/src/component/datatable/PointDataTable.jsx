import React from "react";
import { DataGrid } from "@mui/x-data-grid";

function PointDataTable({ data }) {
  const columns = [
    { field: "name", headerName: "Name", valueGetter: (params) => params },
    { field: "played", headerName: "P" },
    { field: "wins", headerName: "W" },
    { field: "losses", headerName: "L" },
    { field: "draws", headerName: "D" },
    { field: "goals_scored", headerName: "S" },
    { field: "goals_against", headerName: "A" },
    { field: "goals_diff", headerName: "G/D", valueGetter: (params) => params },
    { field: "points", headerName: "Pt" },
  ];

  return (
    <>
      <DataGrid
        className="pointDataTable"
        density="compact"
        columns={columns}
        disableColumnMenu={true}
        disableRowSelectionOnClick={true}
        hideFooter={true}
        hideFooterPagination={true}
        rows={data.map((row, index) => ({
          ...row,
          id: index,
          name: row.team[0]?.name,
          goals_diff: row.goals_scored - row.goals_against,
        }))}
        sx={{
          "& .MuiDataGrid-columnHeaders": {
            backgroundColor: "#1f1f1f",
            color: "dark",
          },
          "& .MuiDataGrid-cell": {
            // textAlign: "center",
            color: "white",
            whiteSpace: "nowrap",
            width: "100%",
            fontSize: "12px",
            fontWeight: "bold",
            textAlign: "center",
            paddingBottom: "0px",
            paddingTop: "0px",
          },
          "& .MuiDataGrid-cell--name": {
            textAlign: "left",
          },
        }}
      />
    </>
  );
}

export default PointDataTable;
