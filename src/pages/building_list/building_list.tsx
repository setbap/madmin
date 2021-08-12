import { ReactElement } from "react";
import { useQuery } from "react-query";
import { api } from "../../utils/utils";
import {
  DataGrid,
  GridColDef,
  GridValueGetterParams,
} from "@material-ui/data-grid";
import { CircularProgress, Grid } from "@material-ui/core";

const columns: GridColDef[] = [
  { field: "id", headerName: "ID", width: 90 },
  {
    field: "name",
    headerName: "نام ساختمان",
    width: 160,
  },
  {
    field: "postalCode",
    headerName: "کد پستی",
    width: 150,
  },
  {
    field: "plaque",
    headerName: "پلاک",
    width: 150,
  },
  {
    field: "cityName",
    headerName: "نام شهر",
    type: "string",
    width: 110,
    sortable: true,
  },
  {
    field: "weekDayPersian",
    headerName: "روز هفته",
    type: "string",
    width: 110,
    sortable: true,
  },
  {
    field: "timeOfDayPersian",
    headerName: "زمان",
    type: "string",
    width: 110,
    sortable: true,
  },
  {
    field: "name",
    headerName: "شماره تلفن",
    description: "This column has a value getter and is not sortable.",
    filterable: true,
    width: 160,
    valueGetter: (params: GridValueGetterParams) => params.row?.user?.phone,
  },
];

// interface Props {}

function BuildingList(): ReactElement {
  const { data, error, isLoading } = useQuery("builidngs", async () => {
    const data = await api.admin.buildingList();
    return data;
  });

  if (isLoading) {
    return (
      <Grid container alignContent="center" alignItems="center">
        <CircularProgress />
      </Grid>
    );
  }
  if (!!error) {
    return <div>isLoading... </div>;
  }
  const d = data?.data.value?.data ?? [];
  return (
    <div style={{ height: `calc(100vh - 150px)`, width: "100%" }}>
      <DataGrid
        rows={d}
        columns={columns}
        pageSize={10}
        checkboxSelection
        disableSelectionOnClick
      />
    </div>
  );
}

export default BuildingList;
