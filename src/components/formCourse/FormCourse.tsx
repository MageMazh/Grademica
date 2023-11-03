import {
  IonContent,
  IonIcon,
  IonSplitPane,
  IonCard,
  IonCardTitle,
  IonCardContent,
  IonButton,
  IonItem,
  IonInput,
  IonList,
  IonGrid,
  IonCol,
  IonRow,
  IonAlert,
} from "@ionic/react";
import { useState } from "react";
import { useHistory } from 'react-router-dom';

import "./FormCourse.css";

const FormCourseViews: React.FC = () => {
  const history = useHistory();
  const ListCourseLink = '/perkuliahan';

  const [namaMataKuliah, setNamaMataKuliah] = useState("");
  const [sks, setSKS] = useState("");
  const [jenjang, setJenjang] = useState("");
  const [semester, setSemester] = useState("");
  const [kode, setKode] = useState("");
  const [kehadiranValue, setKehadiranValue] = useState(-1);
  const [keaktifanValue, setKeaktifanValue] = useState(-1);
  const [tugasValue, setTugasValue] = useState(-1);
  const [uasValue, setUASValue] = useState(-1);
  const [utsValue, setUTSValue] = useState(-1);

  const [alertPercent, setAlertPercent] = useState(false);
  const [alertAllValue, setAlertAllValue] = useState(false);

  const handleChangeKehadiranValue = (ev: Event) => {
    const value = (ev.target as HTMLInputElement).value;
    if (value === "") {
      setKehadiranValue(-1);
    } else {
      setKehadiranValue(Number(value));
    }
  };

  const handleChangeKeaktifanValue = (ev: Event) => {
    const value = (ev.target as HTMLInputElement).value;
    if (value === "") {
      setKeaktifanValue(-1);
    } else {
      setKeaktifanValue(Number(value));
    }
  };

  const handleChangeTugasValue = (ev: Event) => {
    const value = (ev.target as HTMLInputElement).value;
    if (value === "") {
      setTugasValue(-1);
    } else {
      setTugasValue(Number(value));
    }
  };

  const handleChangeUTSValue = (ev: Event) => {
    const value = (ev.target as HTMLInputElement).value;
    if (value === "") {
      setUTSValue(-1);
    } else {
      setUTSValue(Number(value));
    }
  };

  const handleChangeUASValue = (ev: Event) => {
    const value = (ev.target as HTMLInputElement).value;
    if (value === "") {
      setUASValue(-1);
    } else {
      setUASValue(Number(value));
    }
  };

  const submitValue = () => {
    if (
      !namaMataKuliah ||
      !sks ||
      !jenjang ||
      !semester ||
      kehadiranValue === -1 ||
      keaktifanValue === -1 ||
      tugasValue === -1 ||
      utsValue === -1 ||
      uasValue === -1
    ) {
      setAlertAllValue(true);  
    }
    else if (
      kehadiranValue + keaktifanValue + tugasValue + uasValue + utsValue != 100 ||
      kehadiranValue < 0 ||
      keaktifanValue < 0 ||
      tugasValue < 0 ||
      utsValue < 0 ||
      uasValue < 0
      ) {
      setAlertPercent(true);
    } else {
      history.push('/perkuliahan');
    }
  };

  return (
    <>
      <IonAlert
        isOpen={alertPercent}
        trigger="present-alert"
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
        trigger="present-alert"
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
                  value={sks}
                  onIonChange={(event) => setSKS(event.detail.value!)} //! = nilai tidak boleh null/undefined
                ></IonInput>
              </IonCol>
              <IonCol>
                <IonInput
                  label="Semester"
                  labelPlacement="stacked"
                  fill="outline"
                  placeholder="5"
                  value={semester}
                  onIonChange={(event) => setSemester(event.detail.value!)} //! = nilai tidak boleh null/undefined
                ></IonInput>
              </IonCol>
            </IonRow>
            <IonRow className="add-course__card-input">
              <IonCol>
                <IonInput
                  label="Kehadiran (%)"
                  className={`add-course__card-input-percent`}
                  labelPlacement="stacked"
                  fill="outline"
                  errorText="Invalid email"
                  onIonInput={(event) => {
                    handleChangeKehadiranValue(event);
                  }}
                  placeholder="0"
                ></IonInput>
              </IonCol>
              <IonCol>
                <IonInput
                  label="Keaktifan (%)"
                  className={`add-course__card-input-percent`}
                  labelPlacement="stacked"
                  fill="outline"
                  errorText="Invalid email"
                  onIonInput={(event) => {
                    handleChangeKeaktifanValue(event);
                  }}
                  placeholder="0"
                ></IonInput>
              </IonCol>
              <IonCol>
                <IonInput
                  label="Tugas (%)"
                  className={`add-course__card-input-percent`}
                  labelPlacement="stacked"
                  fill="outline"
                  errorText="Invalid email"
                  onIonInput={(event) => {
                    handleChangeTugasValue(event);
                  }}
                  placeholder="0"
                ></IonInput>
              </IonCol>
              <IonCol>
                <IonInput
                  label="UTS (%)"
                  className={`add-course__card-input-percent`}
                  labelPlacement="stacked"
                  fill="outline"
                  errorText="Invalid email"
                  onIonInput={(event) => {
                    handleChangeUTSValue(event);
                  }}
                  placeholder="0"
                ></IonInput>
              </IonCol>
              <IonCol>
                <IonInput
                  label="UAS (%)"
                  className={`add-course__card-input-percent`}
                  labelPlacement="stacked"
                  fill="outline"
                  errorText="Invalid email"
                  onIonInput={(event) => {
                    handleChangeUASValue(event);
                  }}
                  placeholder="0"
                ></IonInput>
              </IonCol>
            </IonRow>
          </IonGrid>
        </IonCardContent>
        <IonCardContent className="add-course__button">
          <IonButton className="add-course__button__cancel" routerLink={ListCourseLink}>
            Batal Perubahan
          </IonButton>
          <IonButton onClick={submitValue} >Simpan Perubahan</IonButton>
        </IonCardContent>
      </IonCard>
    </>
  );
};

export default FormCourseViews;
