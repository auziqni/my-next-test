"use client";
import { useEffect, useState } from "react";
import { Box } from "@mui/material";
import { DataGrid, GridToolbar } from "@mui/x-data-grid";
// import LinearProgress from "@mui/material/LinearProgress";
// import Link from "next/link";
// import axios from "axios";
import { DataOrang } from "@/lib/mockDataOrang";

const columns = [
  {
    field: "Id",
    headerName: "ID",
    flex: 0.5,
    headerClassName: "super-app-theme--header",
  },
  { field: "Nama", headerName: "Nama" },
  {
    field: "Ismale",
    headerName: "Gender",
    flex: 1,
    cellClassName: "name-column--cell",
    headerClassName: "super-app-theme--header",
    renderCell: (params: any) => (
      <h2>{params.row.Ismale ? "pria" : "wanita"}</h2>
    ),
  },
  {
    field: "Umur",
    headerName: "Umur",
    flex: 0.5,
    cellClassName: "name-column--cell",
    headerClassName: "super-app-theme--header",
    //   renderCell: (params) => (
    //     <Link href={`/detail/${params.row.Child}`}>{params.row.Child}</Link>
    //   ),
  },
  {
    field: "Alamat",
    headerName: "Alamat",
    flex: 1,
    cellClassName: "name-column--cell",
    headerClassName: "super-app-theme--header",
  },
  {
    field: "Berat",
    headerName: "Berat",
    flex: 1,
    cellClassName: "name-column--cell",
    headerClassName: "super-app-theme--header",
  },
];

function Table() {
  return (
    <Box
      sx={{
        height: "70vh",
        width: "100%",
      }}
    >
      <DataGrid
        //   checkboxSelection
        rows={DataOrang}
        columns={columns}
        // columns={[{headerAlign="center"}]}
        // components={{ Toolbar: GridToolbar }}
        initialState={{
          pagination: { paginationModel: { pageSize: 10 } },
        }}
        pageSizeOptions={[5, 10, 25]}
        sx={{
          boxShadow: 2,
          border: 1,
          borderColor: "green",
          "& .MuiDataGrid-cell:hover": {
            color: "green",
          },
        }}
        getRowId={(row) => row.Id}
      />
    </Box>
  );
}

export default Table;
