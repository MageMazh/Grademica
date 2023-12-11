import {
  IonContent,
  IonItem,
  IonList,
  IonAvatar,
  IonCard,
  IonCardTitle,
  IonCardContent,
  IonGrid,
  IonRow,
  IonCol,
  IonSplitPane,
  IonButton,
  IonInput,
  IonLabel,
  IonSelectOption,
  IonSelect,
  IonAlert,
} from "@ionic/react";
import { useState, useEffect } from "react";
import { firestore, auth } from "../../../firebase/firebase";
import { addDoc, collection, doc, getDoc, setDoc } from "firebase/firestore";

import "./AdminAddUserViews.css";
import Navbar from "../../navbar";
import MenuAdmin from "../../menuAdmin";
import { useHistory } from "react-router";
import Cookies from "js-cookie";
import { createUserWithEmailAndPassword } from "firebase/auth"

const AdminAddUserViews: React.FC = () => {
  const profileSaveUrl = "/admin/create-user";
  const [alertAllValue, setAlertAllValue] = useState(false);
  const history = useHistory();
  const [formData, setFormData] = useState<any>({
    nama: "",
    tanggal_Lahir: "",
    email: "",
    password: "",
    NIP: "",
    NIDN: "",
    prodi: "",
    role: "",
  });
  

  const handleAddUser = async () => {
    
    try {
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (
        !formData.nama ||
        !formData.tanggal_lahir ||
        !formData.email ||
        !formData.password ||
        formData.password.length < 6 ||
        !formData.NIP ||
        !formData.NIDN ||
        !formData.prodi ||
        !formData.role ||
        !emailRegex.test(formData.email)
      ) {
        setAlertAllValue(true);
        return;
      }

      const cleanFormData = Object.fromEntries(
        Object.entries(formData).filter(([key, value]) => key !== "password")
      );
      const user = sessionStorage.getItem('user_id')

  
      const userCredential = await createUserWithEmailAndPassword(
        auth,
        formData.email,
        formData.password
      );
      
      if (userCredential.user) {
        const userDocRef = doc(firestore, "users", formData.email);
        const userData= {
          ...cleanFormData,
          jumlahSKS: 0,
          jumlahPelajar: 0,
          jumlahMatkul: 0,
        }
        await setDoc(userDocRef, userData);
        
  
        history.push(profileSaveUrl);
      } else {
        console.error("User not found");
      };

    } catch (error) {
      console.error("Error saving profile data:", error);
    }
  };

  return (
    <>

      <IonAlert
        isOpen={alertAllValue}
        header="Pastikan seluruh form telah terisi, jumlah password lebih dari enam karakter dan format email anda telah benar"
        buttons={[
          {
            text: "OK",
          },
        ]}
        onDidDismiss={() => setAlertAllValue(false)}
      ></IonAlert>

      <Navbar />
      <IonSplitPane className="split-pane" when="xs" contentId="main">
        <MenuAdmin />
        <div className="ion-page" id="main">
          <IonContent className="dashboard ion-padding">
            <h1>Tambah User</h1>
            <IonGrid>
              <IonRow>
                <IonCol className="data">
                  <IonCard className="data__profile">
                    <IonCardContent>
                    <IonList className="list-data" lines="inset">
                        {[
                          "nama",
                          "tanggal_lahir",
                          "email",
                          "password",
                          "NIP",
                          "NIDN",
                          "prodi",
                          "role",
                          // 'jabatan_struktural',
                          // 'jabatan_fungsional',
                        ].map((label, index) => (
                          <IonItem key={index}>
                            {label === "role" ? (
                              <>
                                <IonLabel position="floating">{label}</IonLabel>
                                <IonSelect
                                  interface="popover"
                                  toggleIcon="add"
                                  expandedIcon="remove"
                                  label=""
                                  placeholder={`Select ${label}`}
                                  value={formData[label as keyof typeof formData]}
                                  onIonChange={(e) =>
                                    setFormData({
                                      ...formData,
                                      [label]: e.detail.value,
                                    })
                                  }
                                >
                                  <IonSelectOption value="admin">Admin</IonSelectOption>
                                  <IonSelectOption value="user">User</IonSelectOption>
                                  {/* Add more options as needed */}
                                </IonSelect>
                              </>
                            ) : (
                              <IonInput
                                className="input-data"
                                label={label}
                                labelPlacement="floating"
                                placeholder={`Enter ${label}`}
                                value={formData[label as keyof typeof formData]}
                                onIonChange={(e) =>
                                  setFormData({
                                    ...formData,
                                    [label]: e.detail.value || "",
                                  })
                                }
                              />
                            )}
                          </IonItem>
                        ))}
                      </IonList>

                      <div className="button-account-save">
                        <IonButton
                          className="BTN-Save-Profile"
                          onClick={handleAddUser}
                        >
                          Simpan Perubahan
                        </IonButton>
                      </div>
                    </IonCardContent>
                  </IonCard>
                </IonCol>
              </IonRow>
            </IonGrid>
          </IonContent>
        </div>
      </IonSplitPane>
    </>
  );
};

export default AdminAddUserViews;
