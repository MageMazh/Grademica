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

const ProfileViews: React.FC = () => {
  const profileEditUrl = "/profile/profile-edit";
  const changePasswordUrl = "/profile/change-password"
  const UserName = "User Name";
  const Halaman = "Profile"

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
                    <h3 className="Nama-Profile-Card">{UserName}</h3>
                    <h4 className="Prodi-Profile-Card">Teknik Informatika</h4>
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
                          { label: "Nama", value: UserName },
                          {
                            label: "Tempat & Tanggal Lahir",
                            value: "Makassar, 99 Jun 9999",
                          },
                          {
                            label: "Alamat",
                            value:
                              "123 Jalan Kebun Raya, Kecamatan Taman Indah, Kota Sejahtera",
                          },
                          { label: "No.HandPhone", value: "+62 999 9999 9999" },
                          {
                            label: "Email",
                            value: "username@student.unhas.ac.id",
                          },
                          { label: "NIP", value: "NIP User" },
                          { label: "NIDN", value: "NIDN User" },
                          {
                            label: "Jabatan Struktural",
                            value: "Jabatan Struktural User",
                          },
                          {
                            label: "Jabatan Fungsional",
                            value: "Jabatan Fungsional User",
                          },
                        ].map((item, index) => (
                          <IonItem key={index}>
                            <IonLabel>{item.label}</IonLabel>
                            <p className="isi-data">{item.value}</p>
                          </IonItem>
                        ))}
                      </IonList>
                      <div className="button-account">
                        <Link to={changePasswordUrl}>
                          <IonButton className="BTN-Change-Pass">Ubah Sandi</IonButton>
                        </Link>
                        
                        <Link to={profileEditUrl}>
                          <IonButton className="BTN-Edit-Profile">Edit Profile</IonButton>
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
