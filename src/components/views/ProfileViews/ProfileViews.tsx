import {
  IonSplitPane,
  IonContent,
  IonGrid,
  IonRow,
  IonCol,
  IonCard,
  IonAvatar,
  IonCardHeader,
  IonItem,
  IonCardTitle,
  IonCardContent,
  IonList,
  IonLabel,
  IonButton,
} from "@ionic/react";

import "./ProfileViews.css";
import Navbar from "../../navbar";
import Menu from "../../menu";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { firestore } from "../../../firebase/firebase";
import { doc, getDoc } from "firebase/firestore";
import Cookies from "js-cookie";

const ProfileViews: React.FC = () => {
  const profileEditUrl = "/profile/profile-edit";
  const Halaman = "Account";
  const [userData, setUserData] = useState<any>({
    nama: "username",
    tanggal_Lahir: "-",
    // alamat: "-",
    // no_Handphone: "-",
    email: "-",
    nip: "-",
    nidn: "-",
    prodi: "-",
  });

  useEffect(() => {
    const fetchData = async () => {
      try {
        const user = sessionStorage.getItem("user_id")

        if (user) {
          const userDocRef = doc(firestore, "users", user);
          const userDocSnap = await getDoc(userDocRef);

          if (userDocSnap.exists()) {
            const userDataFromDB = userDocSnap.data();
            setUserData(userDataFromDB);
          }
        }
      } catch (error) {
        console.error("Error fetching profile data:", error);
      }
    };

    fetchData();
  }, []);

  return (
    <>
      {/* memasukkan komponen navbar */}
      <Navbar />
      {/* 1. Memasukkan komponen Menu */}
      <IonSplitPane className="split-pane" when="md" contentId="main">
        <Menu />
        <div className="ion-page" id="main">
          <IonContent className="dashboard ion-padding">
            <h1>{Halaman}</h1>
            {/* Membuat Tata Letaknya */}
            <IonGrid>
              <IonRow>
                {/* 2. Memasukkan Profile Card ke tengah */}
                <IonCol className="profile" size="3">
                  {/* Membuat Profile Card */}
                  <IonCard className="profile__card">
                    <IonAvatar className="BMM-profile-card">
                      <img
                        alt="Silhouette of a person's head"
                        src="https://ionicframework.com/docs/img/demos/avatar.svg"
                      />
                    </IonAvatar>
                    <h3 className="Nama-Profile-Card">{userData.nama}</h3>
                    <h4 className="Prodi-Profile-Card">{userData.prodi}</h4>
                  </IonCard>
                </IonCol>

                {/* 3. Memasukkan Data Profile Ke bagian kanan */}
                <IonCol className="data">
                  <IonCard className="data__profile">
                    {/* Header Data Profile */}
                    <IonCardTitle className="dashboard-card__information">
                      Data Pribadi
                    </IonCardTitle>

                    {/* Isi Data Profile */}
                    <IonCardContent>
                      <IonList className="list-data" lines="inset">
                        {[
                          { label: "Nama", value: userData.nama },
                          {
                            label: "Tempat & Tanggal Lahir",
                            value: userData.tanggal_lahir,
                          },
                          // { label: "Alamat", value: userData.alamat },
                          // {
                          //   label: "No.Handphone",
                          //   value: userData.no_handphone,
                          // },
                          { label: "Email", value: userData.email },
                          { label: "NIP", value: userData.NIP },
                          { label: "NIDN", value: userData.NIDN },
                          { label: "Prodi", value: userData.prodi },
                          // {
                          //   label: "Jabatan Struktural",
                          //   value: userData.jabatan_struktural,
                          // },
                          // {
                          //   label: "Jabatan Fungsional",
                          //   value: userData.jabatan_fungsional,
                          // },
                        ].map((item, index) => (
                          <IonItem key={index}>
                            <IonLabel>{item.label}</IonLabel>
                            <p className="isi-data">{item.value}</p>
                          </IonItem>
                        ))}
                      </IonList>
                      <div className="button-account">
                        <Link to={profileEditUrl}>
                          <IonButton className="BTN-Edit-Profile">
                            Edit Profile
                          </IonButton>
                        </Link>
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

export default ProfileViews;
