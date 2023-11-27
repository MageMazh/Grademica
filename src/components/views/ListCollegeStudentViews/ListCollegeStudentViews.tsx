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
  IonRouterLink,
 } from '@ionic/react';
import Navbar from '../../navbar';
import Menu from '../../menu';
import { type CollegeStudent, dataCollege } from '../../../mockData/CollegeStudentData';
import { dataCourse } from '../../../mockData/CourseData';
import "./ListCollegeStudentViews.css"
import { useParams } from 'react-router';
import { chevronBackOutline } from 'ionicons/icons';

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
];

const ListCollegeStudentViews : React.FC = () => {
  // objek yang dikembalikan oleh useParams() diharapkan memiliki properti bernama courseCode, dan properti tersebut harus bertipe string.
  const { courseCode }: { courseCode: string } = useParams();
  
  const selectedCourse = dataCourse.find(course => {
    return course.code === courseCode;
  });
  
  if (!courseCode || !selectedCourse) {
    return null;
  }

  const isPermanent = selectedCourse.isPermanent;

  const table = useMaterialReactTable({
    columns,
    data: dataCollege, 
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
          <IonItem className="list-student__title">
              <IonRouterLink routerLink="/perkuliahan">
                <IonIcon className="add-course__icon" icon={chevronBackOutline} />
              </IonRouterLink>
              <IonLabel className="ion-no-margin">
                <h1>Data Peserta Mahasiswa</h1>
                <h6>{selectedCourse.name}</h6>
              </IonLabel>
            </IonItem>
                <IonCard className='card-list-matakuliah'>
              <Stack>
                <Box
                  sx={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                  }}
                >
                  <IonButton disabled={isPermanent} routerLink={`/perkuliahan/list-mahasiswa/${courseCode}/input-nilai`}>Input nilai mahasiswa</IonButton>
                  {/**
                   * Use MRT components along side your own markup.
                   * They just need the `table` instance passed as a prop to work!
                   */}
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
