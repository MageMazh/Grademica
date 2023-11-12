export type course = {
  no: string;
  name: string;
  code: string;
  level: string;
  sks: string;
  semester: string;
  isPermanent: boolean;
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
  },
  {
    no: "2",
    name: "Pemrograman Web",
    code: "002",
    level: "S1",
    sks: "3",
    semester: "5",
    isPermanent: false,
  },
  {
    no: "3",
    name: "Pemrograman Mobile",
    code: "003",
    level: "S1",
    sks: "3",
    semester: "5",
    isPermanent: true,
  },
  {
    no: "4",
    name: "Dasar Multimedia",
    code: "010",
    level: "S1",
    sks: "2",
    semester: "4",
    isPermanent: true,
  },
  {
    no: "5",
    name: "Topik khusus RPL",
    code: "020",
    level: "S1",
    sks: "2",
    semester: "6",
    isPermanent: true,
  },
  {
    no: "6",
    name: "Animasi dan pemodelan 3D",
    code: "021",
    level: "S1",
    sks: "2",
    semester: "6",
    isPermanent: false,
  },
];
