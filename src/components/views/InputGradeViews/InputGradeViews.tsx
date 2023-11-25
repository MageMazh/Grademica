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
} from "@ionic/react";
import { useState } from "react";
import { useParams } from "react-router";

import { chevronBackOutline } from "ionicons/icons";
import Navbar from "../../navbar";
import Menu from "../../menu";
import { type grade, dataGrade } from "../../../mockData/GradeCollegeStudentData";
import { dataCourse } from "../../../mockData/CourseData";
import "./InputGradeViews.css";

const columns: MRT_ColumnDef<grade>[] = [
  {
    accessorKey: "nomor",
    header: "No",
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
    header: "Nilai Kehadiran (10%)",
  },
  {
    accessorKey: "nilai_keaktifan",
    header: "Nilai Keaktifan (10%)",
  },
  {
    accessorKey: "nilai_tugas",
    header: "Nilai Tugas (20%)",
  },
  {
    accessorKey: "nilai_uas",
    header: "Nilai UAS (30%)",
  },
  {
    accessorKey: "nilai_uts",
    header: "Nilai UTS (30%)",
  },
  {
    accessorKey: "total",
    header: "Nilai Total",
  },
  {
    accessorKey: "huruf",
    header: "Nilai Huruf",
  },
];

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
    item.nilai_kehadiran * 0.1 +
    item.nilai_keaktifan * 0.1 +
    item.nilai_tugas * 0.2 +
    item.nilai_uas * 0.3 +
    item.nilai_uts * 0.3
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

const InputGradeViews : React.FC = () => {
  const { courseCode }: { courseCode: string } = useParams();
  const [listData, setListData] = useState(newData);

  const selectedCourse = dataCourse.find(course => {
    return course.code === courseCode;
  });

  if (!courseCode || !selectedCourse) {
    return null;
  }

  const handleUpdatePermanent = () => {
    dataCourse.map((item, index) => {
      if (item.code === courseCode) {
        dataCourse[index].isPermanent = true;
      }
    });
  }

  const table = useMaterialReactTable({
    columns,
    data: listData,
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
      <Navbar />
      <IonSplitPane className="split-pane" when="xs" contentId="main">
        <Menu />
        <div className="ion-page" id="main">
          <IonContent className="dashboard ion-padding">
            <IonItem className="input-grade__title">
              <IonRouterLink routerLink={`/perkuliahan/list-mahasiswa/${courseCode}`}>
                <IonIcon className="add-course__icon" icon={chevronBackOutline} />
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
                    <IonButton routerLink={`/perkuliahan/list-mahasiswa/${courseCode}`} className="ion-margin-end" color="success">
                      Simpan draf
                    </IonButton>
                    <IonButton onClick={handleUpdatePermanent} routerLink={`/perkuliahan/list-mahasiswa/${courseCode}`}>
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
                                  value={cell.row.original[cell.column.id]}
                                  onIonInput={(e) => {
                                    // Jika valuenya ada selain angka
                                    if (isNaN(Number(e.target.value))) return;

                                    const newValue = Number(e.target.value);

                                    // Kunci yang valid pada objek tersebut (grade).
                                    const str = cell.column.id as keyof grade;

                                    // Objek dengan kunci bertipe string dan nilai apa pun.
                                    (cell.row.original as Record<string, any>)[str] = newValue;

                                    const total = jumlahNilai(cell.row.original);

                                    cell.row.original.total = total;
                                    cell.row.original.huruf = konversiTotal(total);

                                    // Membuat salinan data
                                    const newData = [...table.options.data];

                                    // ganti index barisnya dengan baris original yang sudah diganti.
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

