export type course = {
  no: string;
  name: string;
  code: string;
  level: string;
  sks: string;
  semester: string;
  isPermanent: boolean;
  percent_kehadiran: number;
  percent_keaktifan: number;
  percent_tugas: number;
  percent_uts: number;
  percent_uas: number;
};

export const dataCourse: course[] = [
  {
    no: "1",
    name: "Sistem Informasi",
    code: "001",
    level: "S1",
    sks: "2",
    semester: "5",
    isPermanent: false,
    percent_kehadiran: 10,
    percent_keaktifan: 10,
    percent_tugas: 20,
    percent_uts: 30,
    percent_uas: 30,
  },
  {
    no: "2",
    name: "Pemrograman Web",
    code: "002",
    level: "S1",
    sks: "3",
    semester: "5",
    isPermanent: false,
    percent_kehadiran: 15,
    percent_keaktifan: 5,
    percent_tugas: 30,
    percent_uts: 25,
    percent_uas: 25,
  },
  {
    no: "3",
    name: "Pemrograman Mobile",
    code: "003",
    level: "S1",
    sks: "3",
    semester: "5",
    isPermanent: true,
    percent_kehadiran: 5,
    percent_keaktifan: 5,
    percent_tugas: 30,
    percent_uts: 30,
    percent_uas: 30,
  },
  {
    no: "4",
    name: "Dasar Multimedia",
    code: "010",
    level: "S1",
    sks: "2",
    semester: "4",
    isPermanent: true,
    percent_kehadiran: 5,
    percent_keaktifan: 5,
    percent_tugas: 30,
    percent_uts: 30,
    percent_uas: 30,
  },
  {
    no: "5",
    name: "Topik khusus RPL",
    code: "020",
    level: "S1",
    sks: "2",
    semester: "6",
    isPermanent: true,
    percent_kehadiran: 10,
    percent_keaktifan: 10,
    percent_tugas: 20,
    percent_uts: 30,
    percent_uas: 30,
  },
  {
    no: "6",
    name: "Animasi dan pemodelan 3D",
    code: "021",
    level: "S1",
    sks: "2",
    semester: "6",
    isPermanent: false,
    percent_kehadiran: 15,
    percent_keaktifan: 5,
    percent_tugas: 20,
    percent_uts: 30,
    percent_uas: 30,
  },
];
