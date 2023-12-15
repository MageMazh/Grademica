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

import { bookOutline, personOutline, schoolOutline } from "ionicons/icons";
import { useState, useEffect } from "react";

import Navbar from "../../navbar";
import "./AdminCreateUserViews.css";
import MenuAdmin from "../../menuAdmin";

import "./AdminCreateUserViews.css";
import { course } from "../../../mockData/CourseData";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import { peopleOutline } from "ionicons/icons";
import { Link } from "react-router-dom";
import { auth, db, firestore } from "../../../firebase/firebase";
import { getDocs } from "firebase/firestore";
import { doc, deleteDoc, updateDoc, collection } from "firebase/firestore";
import Cookies from "js-cookie";
import { sendPasswordResetEmail } from "firebase/auth";
import KeyIcon from '@mui/icons-material/Key';

type UsersProps = {
  name: string;
  email: string;
  role: string;
};

const AdminCreateUserViews: React.FC = () => {
  const [usersData, setUsersData] = useState<any>([]);
  const [dataId, setDataId] = useState<any>([]);
  const [deleteId, setDeleteId] = useState<any>();
  const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);
  const [showIonLoading, dismissIonLoading] = useIonLoading();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const user = sessionStorage.getItem("user_id");

        if (user) {
          const userColRef = collection(db, "users");
          const userColSnap = await getDocs(userColRef);

          let idArray: any = [];
          let usersArray: any = [];
          userColSnap.forEach((doc) => {
            usersArray.push(doc.data());
            idArray.push(doc.id);
          });
          setUsersData(usersArray);
          setDataId(idArray);
        }
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  const ResetPassword = (email: string) => {
    sendPasswordResetEmail(auth, email)
      .then((data) => {
        alert("Check your gmail");
      })
      .catch((err) => {
        alert(err.code);
      });
  };

  const handleDeleteUsers = async () => {
    showIonLoading('Loading')
    try {
      const user = sessionStorage.getItem("user_id");
      const id = dataId[deleteId];

      if (user) {
        const userDocRef = doc(db, "users", id);
        await deleteDoc(userDocRef);
        
      }
      dismissIonLoading();
      setIsDeleteModalOpen(false);

      // Update the course data after deletion
      const updatedUsersData = usersData.filter(
        (course: any, index: any) => index !== deleteId
      );
      setUsersData(updatedUsersData);

      // Update the data ID array after deletion
      const updatedDataId = dataId.filter(
        (id: any, index: any) => index !== deleteId
      );

      setDataId(updatedDataId);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  const columns: MRT_ColumnDef<UsersProps>[] = [
    {
      accessorKey: "no",
      header: "No",
      Cell: ({ row }) => {
        return <div>{row.index + 1}</div>;
      },
    },
    {
      accessorKey: "nama",
      header: "Nama",
    },
    {
      accessorKey: "email",
      header: "Email",
    },
    {
      accessorKey: "role",
      header: "Role",
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
              onClick={() => ResetPassword(row.original.email)}
              color="primary"
            >
              <KeyIcon />
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
          </div>
        );
      },
    },
  ];

  const table = useMaterialReactTable({
    columns,
    data: usersData,
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
            <h1>Apa kamu yakin untuk menghapus akun ini?</h1>
          </IonText>
          <div className="save-modal-button ion-margin-top">
            <IonButton
              color="danger"
              onClick={() => setIsDeleteModalOpen(false)}
            >
              Tidak
            </IonButton>
            <IonButton onClick={() => handleDeleteUsers()}>Ya</IonButton>
          </div>
        </IonContent>
      </IonModal>
      <Navbar />
      <IonSplitPane className="split-pane" when="md" contentId="main">
        <MenuAdmin />
        <div className="ion-page" id="main">
          <IonContent className="dashboard ion-padding">
            <h1>List Pengguna</h1>
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
                  <IonButton routerLink="/admin/create-user/add-user">
                    Tambah User
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

export default AdminCreateUserViews;
