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
} from "@ionic/react";
import { useState, useEffect } from "react";
import { firestore, auth } from "../../../firebase/firebase";
import { doc, getDoc, setDoc } from "firebase/firestore";

import "./ProfileEditViews.css";
import Navbar from "../../navbar";
import Menu from "../../menu";
import { useHistory } from "react-router";
import Cookies from "js-cookie";

const ProfileEditViews: React.FC = () => {
  const profileSaveUrl = "/profile";
  const history = useHistory();
  const [formData, setFormData] = useState<any>({
    nama: "",
    tanggal_lahir: "",
    // alamat: "",
    // no_Handphone: "",
    email: "",
    NIP: "",
    NIDN: "",
    prodi: "",
  });

  useEffect(() => {
    const fetchData = async () => {
      try {
        const user = auth.currentUser;

        if (user) {
          const userDocRef = doc(firestore, "users", user.email!);
          const userDocSnap = await getDoc(userDocRef);

          if (userDocSnap.exists()) {
            const userData = userDocSnap.data();

            // Set nilai awal formData dengan data dari database
            setFormData((prevData: typeof formData) => ({
              ...prevData,
              email: user.email || "",
              ...userData,
            }));
          }
        }
      } catch (error) {
        console.error("Error fetching profile data:", error);
      }
    };

    fetchData();
  }, []);

  const handleSaveChanges = async () => {
    try {
      const cleanFormData = Object.fromEntries(
        Object.entries(formData).filter(
          ([key, value]) => value !== "" && value !== null
        )
      );

      const user = sessionStorage.getItem("user_id")

      if (user) {
        const userDocRef = doc(firestore, "users", user);
        await setDoc(userDocRef, cleanFormData);

        history.push(profileSaveUrl);
      } else {
        console.error("User not found");
      }
    } catch (error) {
      console.error("Error saving profile data:", error);
    }
  };

  return (
    <>
      <Navbar />
      <IonSplitPane className="split-pane" when="xs" contentId="main">
        <Menu />
        <div className="ion-page" id="main">
          <IonContent className="dashboard ion-padding">
            <h1>Edit Profile</h1>
            <IonGrid>
              <IonRow>
                <IonCol className="profile" size="3">
                  <IonCard className="profile__card">
                    <IonAvatar className="BMM-profile-card">
                      <img
                        alt="Silhouette of a person's head"
                        src="https://ionicframework.com/docs/img/demos/avatar.svg"
                      />
                    </IonAvatar>
                    <h3 className="Nama-Profile-Card">{formData.nama}</h3>
                    <h4 className="Prodi-Profile-Card">{formData.prodi}</h4>
                  </IonCard>
                </IonCol>

                <IonCol className="data">
                  <IonCard className="data__profile">
                    <IonCardTitle className="dashboard-card__information">
                      Data Pribadi
                    </IonCardTitle>

                    <IonCardContent>
                      <IonList className="list-data" lines="inset">
                        {[
                          "nama",
                          "tanggal_lahir",
                          // "alamat",
                          // "no_handphone",
                          "email",
                          "NIP",
                          "NIDN",
                          "prodi",
                          // 'jabatan_struktural',
                          // 'jabatan_fungsional',
                        ].map((label, index) => (
                          <IonItem key={index}>
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
                              readonly={label === "email"}
                            />
                          </IonItem>
                        ))}
                      </IonList>
                      <div className="button-account-save">
                        <IonButton
                          className="BTN-Save-Profile"
                          onClick={handleSaveChanges}
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

export default ProfileEditViews;
