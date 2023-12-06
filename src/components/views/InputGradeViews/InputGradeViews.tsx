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
  IonList,
  IonLabel,
  IonAvatar,
  IonCardHeader,
  IonButton,
  IonIcon,
  IonSplitPane,
  IonCard,
  IonRouterLink,
  IonInput,
  IonModal,
  IonText,
} from "@ionic/react";
import { useRef, useState } from "react";
import { useParams } from "react-router";
import { useHistory } from "react-router-dom";
import { chevronBackOutline } from "ionicons/icons";
import Navbar from "../../navbar";
import Menu from "../../menu";
import {
  type grade,
  dataGrade,
} from "../../../mockData/GradeCollegeStudentData";
import "./InputGradeViews.css";
import { db } from "../../../firebase/firebase";
import { getDocs } from "firebase/firestore";
import { useEffect } from "react";
import { firestore } from "../../../firebase/firebase";
import {
  doc,
  getDoc,
  updateDoc,
  collection,
} from "firebase/firestore";
import Cookies from "js-cookie";

const InputGradeViews: React.FC = () => {
  const history = useHistory();
  const { id }: { id: string } = useParams();
  const [isOpen, setIsOpen] = useState(false);
  const [valueData, setValueData] = useState<any>([]);
  const [selectedCourse, setSelectedCourse] = useState<any>({});

  const valueDataRef = useRef(valueData);
  useEffect(() => {
    valueDataRef.current = valueData;
    const user = Cookies.get('authToken');

    const cekStatus = (total: number) => {
      if (total < 50) {
        return "tidak lulus";
      } else if (total >= 50) {
        return "lulus";
      } else {
        return "-";
      }
    };

    const fetchData = async () => {
      try {
        if (user) {
          const userColRef = collection(
            db,
            "users",
            user,
            "Mata Kuliah",
            id,
            "list_mahasiswa"
          );
          const userColSnap = await getDocs(userColRef);
          const userDocRef = doc(
            firestore,
            "users",
            user,
            "Mata Kuliah",
            id
          );
          const userDocSnap = await getDoc(userDocRef);

          if (userDocSnap.exists()) {
            const data = userDocSnap.data();

            setSelectedCourse(data);
          }

          let valueArray: any = [];
          userColSnap.forEach((doc) => {
            valueArray.push(doc.data());
          });

          setValueData(valueArray);
          valueDataRef.current = valueArray;
        }
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    const updateData = async () => {
      if (user) {
        valueDataRef.current.map(async (data: any) => {
          console.log("ppp");
          try {
            const docRef = doc(
              firestore,
              "users",
              user,
              "Mata Kuliah",
              id,
              "list_mahasiswa",
              data.nim
            );

            if (data.huruf) {
              await updateDoc(docRef, {
                // Update nilai sesuai kebutuhan
                nilai_keaktifan: data.nilai_keaktifan,
                nilai_kehadiran: data.nilai_kehadiran,
                nilai_tugas: data.nilai_tugas,
                nilai_uts: data.nilai_uts,
                nilai_uas: data.nilai_uas,
                nilai: data.huruf,
                status: cekStatus(data.total),
              });
            }
          } catch (error) {
            console.error("Error fetching data:", error);
          }
        });
      }
    };

    fetchData();

    return () => {
      updateData();
    };
  }, [valueDataRef]);

  const konversiTotal = (total: number) => {
    if (total >= 85) {
      return "A";
    } else if (total >= 80) {
      return "A-";
    } else if (total >= 75) {
      return "B+";
    } else if (total >= 70) {
      return "B";
    } else if (total >= 65) {
      return "B-";
    } else if (total >= 60) {
      return "C+";
    } else if (total >= 50) {
      return "C";
    } else if (total >= 40) {
      return "D";
    } else {
      return "E";
    }
  };

  const jumlahNilai = (item: grade) => {
    return Math.round(
      (item.nilai_kehadiran * selectedCourse.percent_kehadiran) / 100 +
        (item.nilai_keaktifan * selectedCourse.percent_keaktifan) / 100 +
        (item.nilai_tugas * selectedCourse.percent_tugas) / 100 +
        (item.nilai_uas * selectedCourse.percent_uas) / 100 +
        (item.nilai_uts * selectedCourse.percent_uts) / 100
    );
  };

  // Hitung nilai total dan perbarui dataGrade Anda
  const newData = dataGrade.map((item) => {
    const total = jumlahNilai(item);

    return {
      ...item,
      total: total,
      huruf: konversiTotal(total),
    };
  });

  const [listData, setListData] = useState(newData);

  const columns: MRT_ColumnDef<grade>[] = [
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
      accessorKey: "nilai_kehadiran",
      header: `Nilai Kehadiran (${selectedCourse.percent_kehadiran || 0}%)`,
    },
    {
      accessorKey: "nilai_keaktifan",
      header: `Nilai Keaktifan (${selectedCourse.percent_keaktifan || 0}%)`,
    },
    {
      accessorKey: "nilai_tugas",
      header: `Nilai Tugas (${selectedCourse.percent_tugas || 0}%)`,
    },
    {
      accessorKey: "nilai_uts",
      header: `Nilai UTS (${selectedCourse.percent_uts || 0}%)`,
    },
    {
      accessorKey: "nilai_uas",
      header: `Nilai UAS (${selectedCourse.percent_uas || 0}%)`,
    },
    {
      accessorKey: "total",
      header: "Nilai Total",
      Cell: ({ row }) => {
        const total = jumlahNilai(row.original); // Hitung total berdasarkan data pada baris tertentu
        return <div>{total}</div>;
      },
    },
    {
      accessorKey: "nilai",
      header: "Nilai Huruf",
      Cell: ({ row }) => {
        const total = jumlahNilai(row.original); // Hitung total berdasarkan data pada baris tertentu
        const huruf = konversiTotal(total); // Konversi total ke huruf
        return <div>{huruf}</div>;
      },
    },
  ];

  const handleUpdate = async () => {
    try {
      const user = Cookies.get('authToken')

      if (user) {
        const userDocRef = doc(db, "users", user, "Mata Kuliah", id);

          await updateDoc(userDocRef, {
            ...selectedCourse,
            isPermanent: true,
          });
        }

        history.push(`/perkuliahan/list-mahasiswa/${id}`);
    } catch (error) {
      console.error("Error fetching profile data:", error);
    }
  };

  const table = useMaterialReactTable({
    columns,
    data: valueData,
    enableRowSelection: false,
    initialState: {
      pagination: { pageSize: 20, pageIndex: 0 },
      showGlobalFilter: true,
    },
    muiPaginationProps: {
      rowsPerPageOptions: [10, 15, 20, 25, 30, 35],
      variant: "outlined",
    },
    paginationDisplayMode: "pages",
  });

  return (
    <>
      <IonModal
        className="save-modal"
        isOpen={isOpen}
        onDidDismiss={() => setIsOpen(false)}
      >
        <IonContent className="save-modal-content">
          <IonText className="save-modal-text">
            <h1>Apa kamu yakin untuk simpan permanen?</h1>
          </IonText>
          <IonText className="save-modal-text">
            <p>
              Sekali kamu menekan simpan permanen maka nilai ini tidak akan bisa
              diubah. Jika masih ingin ada perubahan, disarankan untuk simpan
              draf terlebih dahulu
            </p>
          </IonText>
          <div className="save-modal-button">
            <IonButton color="danger" onClick={() => setIsOpen(false)}>
              Tidak
            </IonButton>
            <IonButton onClick={() => handleUpdate()}>Ya</IonButton>
          </div>
        </IonContent>
      </IonModal>

      <Navbar />
      <IonSplitPane className="split-pane" when="md" contentId="main">
        <Menu />
        <div className="ion-page" id="main">
          <IonContent className="dashboard ion-padding">
            <IonItem className="input-grade__title">
              <IonRouterLink routerLink={`/perkuliahan/list-mahasiswa/${id}`}>
                <IonIcon
                  className="add-course__icon"
                  icon={chevronBackOutline}
                />
              </IonRouterLink>
              <IonLabel className="ion-no-margin">
                <h1>Input Nilai Peserta Pelajar</h1>
                <h6>{selectedCourse.name}</h6>
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
                  <div>
                    {/* <IonButton routerLink={`/perkuliahan/list-mahasiswa/${id}`} className="ion-margin-end" color="success"> */}
                    {/* <IonButton
                      onClick={() => handleUpdate(false)}
                      className="ion-margin-end"
                      color="success"
                    >
                      Simpan draf
                    </IonButton> */}
                    <IonButton onClick={() => setIsOpen(true)}>
                      Simpan permanen
                    </IonButton>
                  </div>
                  <MRT_GlobalFilterTextField table={table} />
                </Box>
                <TableContainer className="border-list-mahasiswa">
                  <Table>
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
                              {cell.column.id === "nilai_kehadiran" ||
                              cell.column.id === "nilai_keaktifan" ||
                              cell.column.id === "nilai_uas" ||
                              cell.column.id === "nilai_uts" ||
                              cell.column.id === "nilai_tugas" ? (
                                <IonInput
                                  fill="outline"
                                  placeholder="0"
                                  counter={true}
                                  maxlength={3}
                                  className="ion-no-margin cell__table-input"
                                  value={
                                    cell.row.original[cell.column.id] === 0
                                      ? null
                                      : cell.row.original[cell.column.id]
                                  }
                                  onIonInput={(e) => {
                                    const inputValue = e.target.value;
                                    const str = cell.column.id as keyof grade;

                                    if (
                                      isNaN(Number(inputValue)) ||
                                      Number(inputValue) > 100 ||
                                      Number(inputValue) < 0
                                    ) {
                                      // e.target.classList.add('border-red');
                                      // (cell.row.original as Record<string, any>)[str] = inputValue;
                                    } else {
                                      // e.target.classList.remove('border-red');
                                      (
                                        cell.row.original as Record<string, any>
                                      )[cell.column.id] = Number(inputValue);
                                    }
                                    const total = jumlahNilai(
                                      cell.row.original
                                    );
                                    if (
                                      !isNaN(total) &&
                                      Number(
                                        (
                                          cell.row.original as Record<
                                            string,
                                            any
                                          >
                                        )[cell.column.id]
                                      ) <= 100 &&
                                      Number(
                                        (
                                          cell.row.original as Record<
                                            string,
                                            any
                                          >
                                        )[cell.column.id]
                                      ) >= 0
                                    )
                                      cell.row.original.total = total;
                                    cell.row.original.huruf =
                                      konversiTotal(total);

                                    const newData = [...table.options.data];
                                    newData[cell.row.index] = cell.row.original;
                                    setListData(newData);
                                  }}
                                ></IonInput>
                              ) : (
                                <>
                                  <MRT_TableBodyCellValue
                                    cell={cell}
                                    table={table}
                                  />
                                </>
                              )}
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

export default InputGradeViews;
