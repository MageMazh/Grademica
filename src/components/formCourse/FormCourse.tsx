import {
  IonCard,
  IonCardContent,
  IonButton,
  IonInput,
  IonGrid,
  IonCol,
  IonRow,
  IonAlert,
  useIonLoading,
} from "@ionic/react";
import { useState } from "react";
import { useHistory } from "react-router-dom";
import { db } from "../../firebase/firebase";
import {
  setDoc,
  collection,
  doc,
  addDoc,
} from "firebase/firestore";
import "./FormCourse.css";
import Cookies from "js-cookie";

interface FormCourseProps {
  handle: string;
  id: string;
  name: string;
  code: string;
  sarjana: string;
  sks: string;
  semester: string;
  percent_kehadiran: number;
  percent_keaktifan: number;
  percent_tugas: number;
  percent_uts: number;
  percent_uas: number;
}

const FormCourseViews: React.FC<FormCourseProps> = ({
  handle,
  id = "",
  name = "",
  code = "",
  sarjana = "",
  semester = "",
  sks = "",
  percent_kehadiran = 0,
  percent_keaktifan = 0,
  percent_uts = 0,
  percent_tugas = 0,
  percent_uas = 0,
}) => {
  const [showIonLoading, dismissIonLoading] = useIonLoading();
  const history = useHistory();
  const ListCourseLink = "/perkuliahan";

  const [namaMataKuliah, setNamaMataKuliah] = useState(name);
  const [SKS, setSKS] = useState(sks);
  const [jenjang, setJenjang] = useState(sarjana);
  const [semesterMataKuliah, setSemesterMataKuliah] = useState(semester);
  const [kode, setKode] = useState(code);
  const [kehadiranValue, setKehadiranValue] = useState(percent_kehadiran);
  const [keaktifanValue, setKeaktifanValue] = useState(percent_keaktifan);
  const [tugasValue, setTugasValue] = useState(percent_tugas);
  const [uasValue, setUASValue] = useState(percent_uas);
  const [utsValue, setUTSValue] = useState(percent_uts);

  const [alertPercent, setAlertPercent] = useState(false);
  const [alertAllValue, setAlertAllValue] = useState(false);

  const handleChangeKehadiranValue = (ev: Event) => {
    const value = (ev.target as HTMLInputElement).value;
    if (value === "") {
      setKehadiranValue(-1);
    } else {
      const numericValue = Number(value);
      setKehadiranValue(isNaN(numericValue) ? -1 : numericValue);
    }
  };

  const handleChangeKeaktifanValue = (ev: Event) => {
    const value = (ev.target as HTMLInputElement).value;
    if (value === "") {
      setKeaktifanValue(-1);
    } else {
      const numericValue = Number(value);
      setKeaktifanValue(isNaN(numericValue) ? -1 : numericValue);
    }
  };

  const handleChangeTugasValue = (ev: Event) => {
    const value = (ev.target as HTMLInputElement).value;
    if (value === "") {
      setTugasValue(-1);
    } else {
      const numericValue = Number(value);
      setTugasValue(isNaN(numericValue) ? -1 : numericValue);
    }
  };

  const handleChangeUTSValue = (ev: Event) => {
    const value = (ev.target as HTMLInputElement).value;
    if (value === "") {
      setUTSValue(-1);
    } else {
      const numericValue = Number(value);
      setUTSValue(isNaN(numericValue) ? -1 : numericValue);
    }
  };

  const handleChangeUASValue = (ev: Event) => {
    const value = (ev.target as HTMLInputElement).value;
    if (value === "") {
      setUASValue(-1);
    } else {
      const numericValue = Number(value);
      setUASValue(isNaN(numericValue) ? -1 : numericValue);
    }
  };

  const submitData = async () => {
    try {
      if (!namaMataKuliah || !SKS || !jenjang || !semesterMataKuliah) {
        setAlertAllValue(true);
      } else if (
        kehadiranValue + keaktifanValue + tugasValue + uasValue + utsValue !=
          100 ||
        kehadiranValue < 0 ||
        keaktifanValue < 0 ||
        tugasValue < 0 ||
        utsValue < 0 ||
        uasValue < 0
      ) {
        setAlertPercent(true);
      } else if (handle === "add") {
        showIonLoading('Loading')
        const user = sessionStorage.getItem("user_id")

        if (user) {
          const userDocRef = collection(db, "users", user, "Mata Kuliah");

          await addDoc(userDocRef, {
            name: namaMataKuliah,
            code: kode,
            sarjana: jenjang,
            sks: SKS,
            semester: semesterMataKuliah,
            isPermanent: false,
            percent_kehadiran: kehadiranValue,
            percent_keaktifan: keaktifanValue,
            percent_tugas: tugasValue,
            percent_uts: utsValue,
            percent_uas: uasValue,
          });
        }
        dismissIonLoading();
        history.push("/perkuliahan");
      } else if (handle === "edit") {
        showIonLoading('Loading')
        const user = sessionStorage.getItem("user_id")

        if (user) {
          const userDocRef = doc(db, "users", user, "Mata Kuliah", id);

          const data = {
            name: namaMataKuliah,
            code: kode,
            sarjana: jenjang,
            sks: SKS,
            semester: semesterMataKuliah,
            isPermanent: false,
            percent_kehadiran: kehadiranValue,
            percent_keaktifan: keaktifanValue,
            percent_tugas: tugasValue,
            percent_uts: utsValue,
            percent_uas: uasValue,
          };

          await setDoc(userDocRef, data);
        }
        dismissIonLoading();
        history.push("/perkuliahan");
      }
    } catch (error) {
      dismissIonLoading();
      console.error("Error create data:", error);
    }
  };

  return (
    <>
      <IonAlert
        isOpen={alertPercent}
        header="Pastikan jumlah seluruh nilai ketentuan mencakup 100%"
        buttons={[
          {
            text: "OK",
          },
        ]}
        onDidDismiss={() => setAlertPercent(false)}
      ></IonAlert>

      <IonAlert
        isOpen={alertAllValue}
        header="Pastikan seluruh form telah diisi dan rentang nilai ketentuan antara 0-100"
        buttons={[
          {
            text: "OK",
          },
        ]}
        onDidDismiss={() => setAlertAllValue(false)}
      ></IonAlert>

      <IonCard className="add-course__card">
        <IonCardContent>
          <IonInput
            label="Nama Mata Kuliah"
            labelPlacement="stacked"
            fill="outline"
            placeholder="Sistem Informasi"
            value={namaMataKuliah}
            required
            onIonChange={(event) => setNamaMataKuliah(event.detail.value!)} //! = nilai tidak boleh null/undefined
          ></IonInput>
          <IonGrid>
            <IonRow className="add-course__card-input">
              <IonCol>
                <IonInput
                  label="Kode"
                  labelPlacement="stacked"
                  fill="outline"
                  placeholder="001"
                  value={kode}
                  onIonChange={(event) => setKode(event.detail.value!)} //! = nilai tidak boleh null/undefined
                ></IonInput>
              </IonCol>
              <IonCol>
                <IonInput
                  label="Jenjang"
                  labelPlacement="stacked"
                  fill="outline"
                  placeholder="S1"
                  value={jenjang}
                  onIonChange={(event) => setJenjang(event.detail.value!)} //! = nilai tidak boleh null/undefined
                ></IonInput>
              </IonCol>
            </IonRow>
            <IonRow className="add-course__card-input">
              <IonCol>
                <IonInput
                  label="SKS"
                  labelPlacement="stacked"
                  fill="outline"
                  placeholder="3"
                  value={SKS}
                  onIonChange={(event) => setSKS(event.detail.value!)} //! = nilai tidak boleh null/undefined
                ></IonInput>
              </IonCol>
              <IonCol>
                <IonInput
                  label="Semester"
                  labelPlacement="stacked"
                  fill="outline"
                  placeholder="5"
                  value={semesterMataKuliah}
                  onIonChange={(event) =>
                    setSemesterMataKuliah(event.detail.value!)
                  } //! = nilai tidak boleh null/undefined
                ></IonInput>
              </IonCol>
            </IonRow>
            <IonRow className="add-course__card-input">
              <IonCol size-xs="12" size-md="">
                <IonInput
                  label="Kehadiran (%)"
                  className={`add-course__card-input-percent`}
                  labelPlacement="stacked"
                  fill="outline"
                  errorText="Invalid email"
                  value={kehadiranValue !== -1 ? kehadiranValue : ""}
                  onIonInput={(event) => {
                    const inputValue = event.target.value;
                    const isInvalidInput =
                      isNaN(Number(inputValue)) ||
                      Number(inputValue) > 100 ||
                      Number(inputValue) < 0;
                    if (isInvalidInput) {
                      event.target.classList.add("border-red");
                    } else {
                      event.target.classList.remove("border-red");
                    }
                    handleChangeKehadiranValue(event);
                  }}
                  placeholder="0"
                ></IonInput>
              </IonCol>
              <IonCol size-xs="12" size-md="">
                <IonInput
                  label="Keaktifan (%)"
                  className={`add-course__card-input-percent`}
                  labelPlacement="stacked"
                  fill="outline"
                  errorText="Invalid email"
                  value={keaktifanValue !== -1 ? keaktifanValue : ""}
                  onIonInput={(event) => {
                    const inputValue = event.target.value;
                    const isInvalidInput =
                      isNaN(Number(inputValue)) ||
                      Number(inputValue) > 100 ||
                      Number(inputValue) < 0;
                    if (isInvalidInput) {
                      event.target.classList.add("border-red");
                    } else {
                      event.target.classList.remove("border-red");
                    }
                    handleChangeKeaktifanValue(event);
                  }}
                  placeholder="0"
                ></IonInput>
              </IonCol>
              <IonCol size-xs="12" size-md="">
                <IonInput
                  label="Tugas (%)"
                  className={`add-course__card-input-percent`}
                  labelPlacement="stacked"
                  fill="outline"
                  errorText="Invalid email"
                  value={tugasValue !== -1 ? tugasValue : ""}
                  onIonInput={(event) => {
                    const inputValue = event.target.value;
                    const isInvalidInput =
                      isNaN(Number(inputValue)) ||
                      Number(inputValue) > 100 ||
                      Number(inputValue) < 0;
                    if (isInvalidInput) {
                      event.target.classList.add("border-red");
                    } else {
                      event.target.classList.remove("border-red");
                    }
                    handleChangeTugasValue(event);
                  }}
                  placeholder="0"
                ></IonInput>
              </IonCol>
              <IonCol size-xs="12" size-md="">
                <IonInput
                  label="UTS (%)"
                  className={`add-course__card-input-percent`}
                  labelPlacement="stacked"
                  fill="outline"
                  errorText="Invalid email"
                  value={utsValue !== -1 ? utsValue : ""}
                  onIonInput={(event) => {
                    const inputValue = event.target.value;
                    const isInvalidInput =
                      isNaN(Number(inputValue)) ||
                      Number(inputValue) > 100 ||
                      Number(inputValue) < 0;
                    if (isInvalidInput) {
                      event.target.classList.add("border-red");
                    } else {
                      event.target.classList.remove("border-red");
                    }
                    handleChangeUTSValue(event);
                  }}
                  placeholder="0"
                ></IonInput>
              </IonCol>
              <IonCol size-xs="12" size-md="">
                <IonInput
                  label="UAS (%)"
                  className={`add-course__card-input-percent`}
                  labelPlacement="stacked"
                  fill="outline"
                  errorText="Invalid email"
                  value={uasValue !== -1 ? uasValue : ""}
                  onIonInput={(event) => {
                    const inputValue = event.target.value;
                    const isInvalidInput =
                      isNaN(Number(inputValue)) ||
                      Number(inputValue) > 100 ||
                      Number(inputValue) < 0;
                    if (isInvalidInput) {
                      event.target.classList.add("border-red");
                    } else {
                      event.target.classList.remove("border-red");
                    }
                    handleChangeUASValue(event);
                  }}
                  placeholder="0"
                ></IonInput>
              </IonCol>
            </IonRow>
          </IonGrid>
        </IonCardContent>
        <IonCardContent className="add-course__button">
          <IonButton
            className="add-course__button__cancel"
            routerLink={ListCourseLink}
          >
            Batal Perubahan
          </IonButton>
          <IonButton className="add-course__button__save" onClick={submitData}>
            Simpan Perubahan
          </IonButton>
        </IonCardContent>
      </IonCard>
    </>
  );
};

export default FormCourseViews;
