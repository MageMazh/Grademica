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
  IconButton,
  Stack,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Tooltip,
  Typography,
} from '@mui/material';
import {
  IonContent,
  IonButton,
  IonIcon,
  IonSplitPane,
  IonCard,
} from '@ionic/react';

import Navbar from '../../navbar';
import Menu from '../../menu';
import "./ListCourseViews.css"
import { course, dataCourse } from '../../../mockData/CourseData';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import { peopleOutline } from "ionicons/icons";
import { Link } from 'react-router-dom';

const columns: MRT_ColumnDef<course>[] = [
  {
    accessorKey: 'no',
    header: 'No',
  },
  {
    accessorKey: 'name',
    header: 'Nama Matakuliah',
  },
  {
    accessorKey: 'code',
    header: 'Kode',
  },
  {
    accessorKey: 'level',
    header: 'Jenjang',
  },
  {
    accessorKey: 'sks',
    header: 'SKS',
  },
  {
    accessorKey: 'semester',
    header: 'Semester',
  },
  {
    accessorKey: 'isPermanent',
    header: 'Fixed',
    Cell: ({ row }) => {
      const isFixed = row.original.isPermanent

      return (
        <div>
          {isFixed ? 
            <p className="col-fixed__border">Fixed</p>
            :
            <p className="col-not-fixed__border">Not Fixed</p>
          }
        </div>
      );
    },
  },
  {
    accessorKey: 'action',
    header: 'Action',
    // Definisikan sel untuk kolom Action dengan menggunakan flexRender
    Cell: ({ row }) => {
      const courseCode = row.original.code

      return (
        <div>
          <IconButton component={Link} to={`/perkuliahan/edit-course/${courseCode}`}
            color="primary"
          >
            <EditIcon />
          </IconButton>
          <IconButton
            color="error"
          >
            <DeleteIcon />
          </IconButton>
          <IconButton component={Link} to={`/perkuliahan/list-mahasiswa/${courseCode}`}
          >
            <IonIcon icon={peopleOutline}></IonIcon>
          </IconButton>
        </div>
      );
    },
  },
];

const ListCourseViews = () => {
  const table = useMaterialReactTable({
    columns,
    data: dataCourse,
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
      <IonSplitPane className="split-pane" when="md" contentId="main">
        <Menu />
        <div className="ion-page" id="main">
          <IonContent className="dashboard ion-padding">
            <h1>List Matakuliah</h1>
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
                  <IonButton routerLink="/perkuliahan/add-course">Add matakuliah</IonButton>
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
                                    fontSize: "15px",
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
                      sx={{
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

export default ListCourseViews;

