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
} from "@mui/material";
import {
  IonContent,
  IonButton,
  IonIcon,
  IonSplitPane,
  IonCard,
  IonModal,
  IonText,
  useIonLoading,
} from "@ionic/react";

import Navbar from "../../navbar";
import Menu from "../../menu";
import "./ListCourseViews.css";
import { course } from "../../../mockData/CourseData";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import { peopleOutline } from "ionicons/icons";
import { Link } from "react-router-dom";
import { db } from "../../../firebase/firebase";
import { getDocs } from "firebase/firestore";
import { useEffect, useState } from "react";
import { doc, deleteDoc, updateDoc, collection } from "firebase/firestore";
import Cookies from "js-cookie";

const ListCourseViews = () => {
  const [courseData, setCourseData] = useState<any>([]);
  const [dataId, setDataId] = useState<any>([]);
  const [deleteId, setDeleteId] = useState<any>();
  const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);
  const [showIonLoading, dismissIonLoading] = useIonLoading();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const user = sessionStorage.getItem("user_id")

        if (user) {
          const userColRef = collection(db, "users", user, "Mata Kuliah");
          const userColSnap = await getDocs(userColRef);

          // untuk mengupdate data jumlah SKS dan jumlah Matkul
          const userDocRef = doc(db, "users", user);

          let dataArray: any = [];
          let idArray: any = [];
          let sks:  any = 0;
          userColSnap.forEach((doc) => {
            dataArray.push(doc.data());
            idArray.push(doc.id);
            sks += Number(doc.data().sks)
          });
          setCourseData(dataArray);
          setDataId(idArray);

          await updateDoc(userDocRef, {
            // Update nilai sesuai kebutuhan
            jumlahSKS: sks,
            jumlahMatkul: userColSnap.size,
          });
        }
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };
    fetchData();
  }, []);

  const handleDelete = async () => {
    showIonLoading('Loading')
    try {
      const user = sessionStorage.getItem("user_id")
      const id = dataId[deleteId];

      if (user) {
        const userDocRef = doc(db, "users", user, "Mata Kuliah", id);
        await deleteDoc(userDocRef);
      }
      setIsDeleteModalOpen(false);

      // Update the course data after deletion
      const updatedCourseData = courseData.filter(
        (course: any, index: any) => index !== deleteId
      );
      setCourseData(updatedCourseData);

      // Update the data ID array after deletion
      const updatedDataId = dataId.filter(
        (id: any, index: any) => index !== deleteId
      );

      setDataId(updatedDataId);
      dismissIonLoading();
    } catch (error) {
      dismissIonLoading();
      console.error("Error fetching data:", error);
    }
  };

  const columns: MRT_ColumnDef<course>[] = [
    {
      accessorKey: "no",
      header: "No",
      Cell: ({ row }) => {
        return <div>{row.index + 1}</div>;
      },
    },
    {
      accessorKey: "name",
      header: "Nama Matakuliah",
    },
    {
      accessorKey: "code",
      header: "Kode",
    },
    {
      accessorKey: "sarjana",
      header: "Jenjang",
    },
    {
      accessorKey: "sks",
      header: "SKS",
    },
    {
      accessorKey: "semester",
      header: "Semester",
    },
    {
      accessorKey: "isPermanent",
      header: "Status",
      Cell: ({ row }) => {
        const isFixed = row.original.isPermanent;

        return (
          <div>
            {isFixed ? (
              <p className="col-not-fixed__border">Terkunci</p>
            ) : (
              <p className="col-fixed__border">Terbuka</p>
            )}
          </div>
        );
      },
    },
    {
      accessorKey: "action",
      header: "Action",
      // Definisikan sel untuk kolom Action dengan menggunakan flexRender
      Cell: ({ row }) => {
        // const courseCode = row.index
        const id = dataId[row.index];

        return (
          <div>
            <IconButton
              component={Link}
              to={`/perkuliahan/edit-course/${id}`}
              color="primary"
            >
              <EditIcon />
            </IconButton>
            <IconButton
              color="error"
              onClick={() => {
                setIsDeleteModalOpen(true);
                setDeleteId(row.index);
              }}
            >
              <DeleteIcon />
            </IconButton>
            <IconButton
              component={Link}
              to={`/perkuliahan/list-mahasiswa/${id}`}
            >
              <IonIcon icon={peopleOutline}></IonIcon>
            </IconButton>
          </div>
        );
      },
    },
  ];

  const table = useMaterialReactTable({
    columns,
    data: courseData,
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
      <IonModal
        className="logout-modal"
        isOpen={isDeleteModalOpen}
        onDidDismiss={() => setIsDeleteModalOpen(false)}
      >
        <IonContent className="logout-modal-content">
          <IonText className="save-modal-text ion-margin-bottom">
            <h1>Apa kamu yakin untuk menghapus mata kuliah ini?</h1>
          </IonText>
          <div className="save-modal-button ion-margin-top">
            <IonButton
              color="danger"
              onClick={() => setIsDeleteModalOpen(false)}
            >
              Tidak
            </IonButton>
            <IonButton onClick={() => handleDelete()}>Ya</IonButton>
          </div>
        </IonContent>
      </IonModal>
      <Navbar />
      <IonSplitPane className="split-pane" when="md" contentId="main">
        <Menu />
        <div className="ion-page" id="main">
          <IonContent className="dashboard ion-padding">
            <h1>List Matakuliah</h1>
            <IonCard className="card-list-matakuliah">
              <Stack>
                <Box
                  sx={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                  }}
                >
                  {/**
                   * Use MRT components along side your own markup.
                   * They just need the `table` instance passed as a prop to work!
                   */}
                  <IonButton routerLink="/perkuliahan/add-course">
                    Add matakuliah
                  </IonButton>
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

export default ListCourseViews;
