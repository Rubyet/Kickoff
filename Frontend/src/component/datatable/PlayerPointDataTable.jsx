import React from "react";
import { DataGrid } from '@mui/x-data-grid';

function PlayerPointDataTable({ data }) {

  const columns = [
    { field: "name", headerName: "Name", valueGetter: (params) => params,  width: 180},
    { field: "played", headerName: "P" ,  width: 50, textAlign: "center"},
    { field: "wins", headerName: "W" ,  width: 50},
    { field: "losses", headerName: "L" ,  width: 50},
    { field: "draws", headerName: "D" ,  width: 50},
    { field: "goals_scored", headerName: "S" ,  width: 50},
    { field: "goals_against", headerName: "A" ,  width: 50},
    { field: "goals_diff", headerName: "G/D", valueGetter: (params) => params ,  width: 50},
    { field: "points", headerName: "Pt" ,  width: 50},
  ];

  return (
    <>
      <DataGrid
        className="pointDataTable"
        density="compact"
        columns={columns}
        autosizeOnMount={true}
        hideFooter={true}
        hideFooterPagination={true}
        disableColumnMenu={true}
        disableRowSelectionOnClick={true}
        disableColumnResize={true}
        disableColumnSelector={true}
        disableDensitySelector={true}
        rows={data.map((row, index) => ({
          ...row,
          id: index,
          name: row.player[0]?.name,
          goals_diff: row.goals_scored - row.goals_against,
        }))}
        sx={{
          "& .MuiDataGrid-root": {
            borderColor : "unset",
          },
          "& .MuiIconButton-root": {
            color : "unset",
          },
          "& .MuiDataGrid-columnHeaders": {
            color: "white",
            fontWeight: "bold",
            fontSize: "12px",
            textAlign: "center",
            minWidth: "unset",
          },
          "& .MuiDataGrid-cell": {
            // textAlign: "center",
            color: "white",
            fontSize: "12px",
            fontWeight: "bold",
            textAlign: "left",
            paddingBottom: "0px",
            paddingTop: "0px",
            borderTop:"none",
            "&:nth-of-type(2)": {
              textAlign: "left",
              whiteSpace: "nowrap",
            },
          },
        }}
      />
    </>
  );
}

export default PlayerPointDataTable;
