import {
  MRT_GlobalFilterTextField,
  MRT_TableBodyCellValue,
  MRT_TablePagination,
  MRT_ToolbarAlertBanner,
  flexRender,
  type MRT_ColumnDef,
  useMaterialReactTable,
} from "material-react-table";
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
} from "@mui/material";
import {
  IonContent,
  IonItem,
  IonLabel,
  IonButton,
  IonIcon,
  IonSplitPane,
  IonCard,
  IonRouterLink,
} from "@ionic/react";
import Navbar from "../../navbar";
import Menu from "../../menu";
import { type CollegeStudent } from "../../../mockData/CollegeStudentData";
import "./ListCollegeStudentViews.css";
import { useParams } from "react-router";
import { chevronBackOutline } from "ionicons/icons";
import { db } from "../../../firebase/firebase";
import { useEffect, useState } from "react";
import { firestore } from "../../../firebase/firebase";
import { doc, getDoc, getDocs, collection } from "firebase/firestore";
import Cookies from "js-cookie";

const columns: MRT_ColumnDef<CollegeStudent>[] = [
  {
    accessorKey: "no",
    header: "No",
    Cell: ({ row }) => {
      return <div>{row.index + 1}</div>;
    },
  },
  {
    accessorKey: "namemahasiswa",
    header: "Nama mahasiswa",
  },
  {
    accessorKey: "nim",
    header: "Nim",
  },
  {
    accessorKey: "nilai",
    header: "Nilai",
  },
  {
    accessorKey: "status",
    header: "Status",
    Cell: ({ row }) => {
      const status = row.original.status;

      return (
        <div>
          {status === "-" ? (
            <p>{status}</p>
          ) : status === "tidak lulus" ? (
            <p className="col-tidak-lulus">{status}</p>
          ) : (
            <p className="col-lulus">{status}</p>
          )}
        </div>
      );
    },
  },
];

const ListCollegeStudentViews: React.FC = () => {
  const { id }: { id: string } = useParams();
  const [isPermanent, setIsPermanent] = useState<boolean>(true);
  const [studentData, setStudentData] = useState<any>([]);
  const [selectedCourse, setSelectedCourse] = useState<string>("");

  useEffect(() => {
    const fetchData = async () => {
      setTimeout(async () => {
        try {
          const user = Cookies.get('authToken')

          if (user) {
            const userColRef = collection(
              db,
              "users",
              user,
              "Mata Kuliah",
              id,
              "list_mahasiswa"
            );
            const userDocRef = doc(
              firestore,
              "users",
              user,
              "Mata Kuliah",
              id
            );
            const userColSnap = await getDocs(userColRef);
            const userDocSnap = await getDoc(userDocRef);

            if (userDocSnap.exists()) {
              const data = userDocSnap.data();

              // Set nilai awal formData dengan data dari database
              setIsPermanent(data.isPermanent);
              setSelectedCourse(data.name);
            }

            let studentArray: any = [];
            userColSnap.forEach((doc) => {
              studentArray.push(doc.data());
            });
            setStudentData(studentArray);
          }
        } catch (error) {
          console.error("Error fetching profile data:", error);
        }
      }, 2200);
    };

    fetchData();
  }, [id]);

  const table = useMaterialReactTable({
    columns,
    data: studentData,
    enableRowSelection: false,
    initialState: {
      pagination: { pageSize: 20, pageIndex: 0 },
      showGlobalFilter: true,
    },
    //customize the MRT components
    muiPaginationProps: {
      rowsPerPageOptions: [10, 15, 20, 25, 30, 35],
      variant: "outlined",
    },
    paginationDisplayMode: "pages",
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
                <IonIcon
                  className="add-course__icon"
                  icon={chevronBackOutline}
                />
              </IonRouterLink>
              <IonLabel className="ion-no-margin">
                <h1>Data Peserta Mahasiswa</h1>
                <h6>{selectedCourse}</h6>
              </IonLabel>
            </IonItem>
            <IonCard className="card-list-matakuliah">
              <Stack>
                <Box
                  sx={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                  }}
                >
                  <IonButton
                    disabled={isPermanent}
                    routerLink={`/perkuliahan/list-mahasiswa/${id}/input-nilai`}
                  >
                    Input nilai mahasiswa
                  </IonButton>
                  {/**
                   * Use MRT components along side your own markup.
                   * They just need the `table` instance passed as a prop to work!
                   */}
                  <MRT_GlobalFilterTextField table={table} />
                </Box>
                {/* Using Vanilla Material-UI Table components here */}
                <TableContainer className="border-list-mahasiswa">
                  <Table>
                    {/* Use your own markup, customize however you want using the power of TanStack Table */}
                    <TableHead className="border-botton">
                      {table.getHeaderGroups().map((headerGroup) => (
                        <TableRow key={headerGroup.id}>
                          {headerGroup.headers.map((header) => (
                            <TableCell
                              align="center"
                              variant="head"
                              key={header.id}
                            >
                              {header.isPlaceholder ? null : (
                                <span
                                  style={{
                                    fontWeight: "bold",
                                    fontSize: "15px",
                                  }}
                                >
                                  {flexRender(
                                    header.column.columnDef.Header ??
                                      header.column.columnDef.header,
                                    header.getContext()
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
                        "& tr:nth-of-type(even) > td": {
                          backgroundColor: "#f5f5f5",
                        },
                      }}
                    >
                      {table.getRowModel().rows.map((row) => (
                        <TableRow key={row.id} selected={row.getIsSelected()}>
                          {row.getVisibleCells().map((cell) => (
                            <TableCell
                              align="center"
                              variant="body"
                              key={cell.id}
                            >
                              {/* Use MRT's cell renderer that provides better logic than flexRender */}
                              <MRT_TableBodyCellValue
                                cell={cell}
                                table={table}
                              />
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
