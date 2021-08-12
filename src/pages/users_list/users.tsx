import { ReactElement, useState } from "react";
import { useQuery } from "react-query";
import { api, TableLocale } from "../../utils/utils";
import {
  DataGrid,
  GridColDef,
  GridToolbar,
  GridRowId,
  GridPagination,
} from "@material-ui/data-grid";
import { Box, Button, CircularProgress, Grid } from "@material-ui/core";
import { useSnackbar } from "notistack";

const columns: GridColDef[] = [
  { field: "id", headerName: "ID", width: 90 },
  {
    field: "phone",
    headerName: "شماره تلفن",
    width: 160,
    editable: true,
  },
  {
    field: "typePersian",
    headerName: "نوع کاربر",

    // sortComparator: ({z}) => {
    //   console.log(v1, v2, c1, c2, m);
    //   return 1 > 2;
    // },
    type: "string",
    width: 110,
    sortable: true,
  },
  {
    field: "name",
    headerName: "نام ثبت شده",
    width: 150,
    editable: true,
  },
  {
    field: "email",
    headerName: "ایمیل",
    width: 150,
    editable: true,
  },
  {
    field: "credit",
    headerName: "امتیاز",
    type: "number",
    width: 110,
    sortable: true,
  },
];

// interface Props {}

function BuildingList(): ReactElement {
  const { enqueueSnackbar } = useSnackbar();
  const [selectedRow, setSelectedRow] = useState<GridRowId[]>();

  const { data, error, isLoading } = useQuery("users", async () => {
    const data = await api.admin.userAllUsersList();
    return data;
  });

  if (!!error) {
    return (
      <Grid container alignContent="center" alignItems="center">
        <CircularProgress />
      </Grid>
    );
  }

  const d = data?.data.value ?? [];
  return (
    <div style={{ height: `calc(100vh - 120px)`, width: "100%" }}>
      <DataGrid
        rows={d}
        disableMultipleSelection
        autoPageSize
        columns={columns}
        loading={isLoading}
        localeText={TableLocale}
        components={{
          Toolbar: GridToolbar,
          Footer: (x) => {
            return (
              <Box
                display="flex"
                alignItems="center"
                paddingX="16px"
                justifyContent="space-between"
                flexDirection="row"
              >
                <div>
                  {selectedRow?.length ? (
                    <>
                      <Button color="secondary" variant="outlined">
                        ارتقا به راننده
                      </Button>
                      <Box display="inline" px="8px" />
                      <Button color="default" variant="outlined">
                        حدف کاربر
                      </Button>
                    </>
                  ) : (
                    <> کاربری انتخاب نشده</>
                  )}
                </div>
                <GridPagination />
              </Box>
            );
          },
        }}
        onSelectionModelChange={(a) => {
          setSelectedRow(a);
        }}
        selectionModel={selectedRow}
        checkboxSelection
        disableSelectionOnClick
        onCellEditCommit={(p, e) => {
          api.admin
            .userUpdateUserPartialUpdate({
              UserId: p.id + "",
              [p.field]: p.value || "",
            })
            .then(() => {
              enqueueSnackbar(`کاربر با موفقیت به روز رسانی شد`, {
                variant: "success",
              });
            })
            .catch(() => {
              enqueueSnackbar(`خطا در روز رسانی `, {
                variant: "error",
              });
            });
        }}
      />
    </div>
  );
}

export default BuildingList;
