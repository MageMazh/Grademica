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
import { useState } from "react";
import { useParams } from "react-router";

import { chevronBackOutline } from "ionicons/icons";
import Navbar from "../../navbar";
import Menu from "../../menu";
import { type grade, dataGrade } from "../../../mockData/GradeCollegeStudentData";
import { dataCourse } from "../../../mockData/CourseData";
import "./InputGradeViews.css";


const InputGradeViews : React.FC = () => {
  const { courseCode }: { courseCode: string } = useParams();
  const [isOpen, setIsOpen] = useState(false);

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
  
  const selectedCourse = dataCourse.find(course => {
    return course.code === courseCode;
  });
  
  if (!courseCode || !selectedCourse) {
    return null;
  }
  
  const jumlahNilai = (item: grade) => {
    return Math.round(
      item.nilai_kehadiran * selectedCourse.percent_kehadiran / 100 +
      item.nilai_keaktifan * selectedCourse.percent_keaktifan / 100 +
      item.nilai_tugas * selectedCourse.percent_tugas / 100 +
      item.nilai_uas * selectedCourse.percent_uas / 100 +
      item.nilai_uts * selectedCourse.percent_uts / 100
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
      header: `Nilai UTS (${selectedCourse.percent_kehadiran}%)`,
    },
    {
      accessorKey: "nilai_keaktifan",
      header: `Nilai Keaktifan (${selectedCourse.percent_keaktifan}%)`,
    },
    {
      accessorKey: "nilai_tugas",
      header: `Nilai Tugas (${selectedCourse.percent_tugas}%)`,
    },
    {
      accessorKey: "nilai_uts",
      header: `Nilai UTS (${selectedCourse.percent_uts}%)`,
    },
    {
      accessorKey: "nilai_uas",
      header: `Nilai UAS (${selectedCourse.percent_uas}%)`,
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
    <IonModal className="save-modal" isOpen={isOpen} onDidDismiss={() => setIsOpen(false)}>
          <IonContent className="save-modal-content">
            <IonText className="save-modal-text">
              <h1>
                Apa kamu yakin untuk simpan permanen?
              </h1>
            </IonText>
            <IonText className="save-modal-text">
              <p>
                Sekali kamu menekan simpan permanen maka nilai ini tidak akan bisa diubah. Jika masih ingin ada perubahan, disarankan untuk simpan draf terlebih dahulu
              </p>
            </IonText>
            <div className="save-modal-button">
              <IonButton color="danger" onClick={() => setIsOpen(false)}>
                Tidak
              </IonButton>
              <IonButton onClick={handleUpdatePermanent} routerLink={`/perkuliahan/list-mahasiswa/${courseCode}`}>
                Ya
              </IonButton>
            </div>
          </IonContent>
        </IonModal>
        
      <Navbar />
      <IonSplitPane className="split-pane" when="md" contentId="main">
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
                                  value={cell.row.original[cell.column.id] === 0 ? null : cell.row.original[cell.column.id]}
                                  onIonInput={(e) => {
                                    const inputValue = e.target.value;
                                    const str = cell.column.id as keyof grade;

                                    if (isNaN(Number(inputValue)) || Number(inputValue) > 100 || Number(inputValue) < 0) {
                                      // e.target.classList.add('border-red');
                                      // (cell.row.original as Record<string, any>)[str] = inputValue;
                                    } 
                                    else {
                                      // e.target.classList.remove('border-red');
                                      (cell.row.original as Record<string, any>)[cell.column.id] = Number(inputValue);
                                    }
                                    const total = jumlahNilai(cell.row.original);
                                    if (!isNaN(total) && Number((cell.row.original as Record<string, any>)[cell.column.id]) <= 100 && Number((cell.row.original as Record<string, any>)[cell.column.id]) >= 0)
                                    cell.row.original.total = total;
                                    cell.row.original.huruf = konversiTotal(total);
                                    
                                    
                                    const newData = [...table.options.data];
                                    newData[cell.row.index] = cell.row.original;
                                    setListData(newData);
                                    }
                                  }
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
