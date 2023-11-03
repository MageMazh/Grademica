import {
  MRT_GlobalFilterTextField,
  MRT_TableBodyCellValue,
  MRT_TablePagination,
  MRT_ToolbarAlertBanner,
  flexRender,
  type MRT_ColumnDef,
  useMaterialReactTable,
} from 'material-react-table';
import {
  Box,
  Stack,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Typography,
} from '@mui/material';
import { 
  IonContent,  
  IonItem, 
  IonList, 
  IonLabel, 
  IonAvatar,
  IonCardHeader,
  IonButton,
  IonIcon,
  IonSplitPane,
  IonCard,
  IonCardTitle,
  IonCardContent,
  IonGrid,
  IonCol,
  IonRow,
  IonButtons,
  IonRouterLink,
 } from '@ionic/react';
import Navbar from '../../navbar';
import Menu from '../../menu';
import { type CollegeStudent, data } from '../../../mockData/makeData';
import "./ListCollegeStudentViews.css"

const columns: MRT_ColumnDef<CollegeStudent>[] = [
  {
    accessorKey: 'nomor',
    header: 'No',
  },
  {
    accessorKey: 'namemahasiswa',
    header: 'Nama mahasiswa',
  },
  {
    accessorKey: 'nim',
    header: 'Nim',
  },
  {
    accessorKey: 'nilai',
    header: 'Nilai',
  },
  {
    accessorKey: 'status',
    header: 'Status',
  },
  {
    accessorKey: 'fixed',
    header: 'Fixed',
  },
];

const ListCollegeStudentViews = () => {
  const table = useMaterialReactTable({
    columns,
    data, 
    enableRowSelection: false,
    initialState: {
      pagination: { pageSize: 20, pageIndex: 0 },
      showGlobalFilter: true,
    },
    //customize the MRT components
    muiPaginationProps: {
      rowsPerPageOptions: [10, 15, 20, 25, 30, 35],
      variant: 'outlined',
    },
    paginationDisplayMode: 'pages',
  });

  

    return (
      <>
      <Navbar />
      <IonSplitPane className="split-pane" when="xs" contentId="main">
        <Menu />
        <div className="ion-page" id="main">
          <IonContent className="dashboard ion-padding">
          <h1>List Mahasiswa</h1>
                <IonCard className='card-list-matakuliah'>
              <Stack>
                <Box
                  sx={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                  }}
                >
                  {/**
                   * Use MRT components along side your own markup.
                   * They just need the `table` instance passed as a prop to work!
                   */}
                  <IonButton>Input nilai mahasiswa</IonButton>
                  <MRT_GlobalFilterTextField table={table} />
                </Box>
                {/* Using Vanilla Material-UI Table components here */}
                <TableContainer className='border-list-mahasiswa'>
                  <Table>
                    {/* Use your own markup, customize however you want using the power of TanStack Table */}
                    <TableHead className='border-botton'>
                      {table.getHeaderGroups().map((headerGroup) => (
                        <TableRow key={headerGroup.id}>
                          {headerGroup.headers.map((header) => (
                            <TableCell align="center" variant="head" key={header.id}>
                              {header.isPlaceholder
                                ? null
                                : (
                                  <span style={{ 
                                    fontWeight: 'bold', 
                                    fontSize:"15px",
                                    }}>
                                {flexRender(
                                    header.column.columnDef.Header ??
                                      header.column.columnDef.header,
                                    header.getContext(),
                                  )}
                                  </span>
                                )}
                            </TableCell>
                          ))}
                        </TableRow>
                      ))}
                    </TableHead>
                    <TableBody 
                    sx= {{
                  //stripe the rows, make odd rows a darker color
                  '& tr:nth-of-type(even) > td': {
                    backgroundColor: '#f5f5f5',
                  },
                  }}>
                      {table.getRowModel().rows.map((row) => (
                        <TableRow key={row.id} selected={row.getIsSelected()}>
                          {row.getVisibleCells().map((cell) => (
                            <TableCell align="center" variant="body" key={cell.id}>
                              {/* Use MRT's cell renderer that provides better logic than flexRender */}
                              <MRT_TableBodyCellValue cell={cell} table={table} />
                            </TableCell>
                          ))}
                        </TableRow>
                      ))}
                    </TableBody>
                  </Table>
                </TableContainer>
                <MRT_TablePagination table={table} />
                <MRT_ToolbarAlertBanner stackAlertBanner table={table} />
              </Stack>
              </IonCard>
          </IonContent>
          </div>
        </IonSplitPane>                                 
      </>
    );
};

export default ListCollegeStudentViews;